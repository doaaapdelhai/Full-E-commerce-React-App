import avatar from "../../images/avatar.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../Redux/Actions/CategoryAction";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../Hook/UseNotifaction";

const AddCategoryHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  // to change name state
  const onChangeName = (event) => {
    event.persist();

    setName(event.target.value);
  };

  // when img change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allCategory.category);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || selectedFile === null) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);

    // Dispatch the action
    await dispatch(createCategory(formData));

    // Reset the form after submission
    setImg(avatar);
    setName("");
    setSelectedFile(null);
  };

  // Effect to handle response and set loading state
  useEffect(() => {
    if (!loading) {
      setIsPress(false);

      if (res?.status === 201) {
        notify("تمت إضافة التصنيف بنجاح", "success");
      } else if (res?.status !== 201 && res?.status !== undefined) {
        notify("حدث خطأ أثناء إضافة التصنيف", "error");
      }
    }
  }, [loading, res]);

  // Update loading state after submission is complete
  useEffect(() => {
    if (res?.status === 201) {
      setLoading(false);
    }
  }, [res]);

  return [
    img,
    name,
    loading,
    isPress,
    onImageChange,
    handleSubmit,
    onChangeName,
  ];
};

export default AddCategoryHook;
