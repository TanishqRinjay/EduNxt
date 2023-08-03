import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
    createSubSection,
    updateSubSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../slices/courseSlice";
import { RxCross1 } from "react-icons/rx";

const SubSectionModal = ({
    modalData,
    setModalData,
    add = false,
    view = false,
    edit = false,
}) => {
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { course } = useSelector((state) => state.course);
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (view || edit) {
            setValue("lectureTitle", modalData.title);
            setValue("lectureDesc", modalData.description);
            setValue("lectureVideo", modalData.video);
        }
    }, []);
    const isFormUpdated = () => {
        const currentValues = getValues();
        if (
            currentValues.lectureTitle !== modalData.title ||
            currentValues.lectureDesc !== modalData.description ||
            currentValues.lectureVideo !== modalData.video
        ) {
            return true;
        }
        return false;
    };

    const handleEditSubSection = async () => {
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("sectiodId", modalData.sectionId);
        formData.append("subSectionId", modalData._id);
        if (currentValues.lectureTitle !== modalData.title) {
            formData.append("title", currentValues.lectureTitle);
        }
        if (currentValues.lectureDesc !== modalData.description) {
            formData.append("description", currentValues.lectureDesc);
        }
        if (currentValues.lectureVideo !== modalData.videoUrl) {
            formData.append("video", currentValues.lectureVideo);
        }
        setLoading(true);
        const result = await updateSubSection(formData, token);
        dispatch(setCourse(result));
        setModalData(null);
        setLoading(false);
    };

    const OnSubmit = async (data) => {
        if (view) {
            return;
        }
        if (edit) {
            if (!isFormUpdated) {
                toast.error("No changes were made");
            } else {
                handleEditSubSection();
            }
            return;
        }
        const formData = new FormData();
        formData.append("sectionId", modalData);
        formData.append("title", data.lectureTitle);
        formData.append("description", data.lectureDesc);
        formData.append("video", data.lectureVideo);
        setLoading(true);
        const result = await createSubSection(formData, token);
        if (result) {
            dispatch(setCourse(result));
        }
    };

    return (
        <div>
            <div>
                <div className=" flex justify-between">
                    <p>
                        {view && "Viewing"}
                        {edit && "Editing"}
                        {add && "Adding"} Lecture
                    </p>
                    <button onClick={!loading && setModalData(null)}>
                        <RxCross1 />
                    </button>
                </div>
                <form onSubmit={handleSubmit(OnSubmit)}></form>
            </div>
        </div>
    );
};

export default SubSectionModal;
