import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../Redux/Actions/CategoryAction";
import notify from "./../../Hook/UseNotifaction";
import { createSubCategory } from "../../Redux/Actions/SubCategoryAction";

const addSubcategoryhook = () => {


  const dispatch = useDispatch();
  useEffect(() => {
        // make sure ur online not offline
        if(!navigator.onLine){
          notify("هناك مشكله في الاتصال ب الانترنت", "warn");
          return;
        }
    dispatch(getAllCategory());
  }, []);

  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);

  // get last Sub category state from redux
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  // on chang drop dawn menu
  const handelChange = (e) => {
    console.log(e.target.value);
    setID(e.target.value);
  };

  //  to save name
  const onChangeName=(e)=>{
    e.persist();
    setName(e.target.value);
  }




  // on save data
  const handelSubmit = async (e) => {
    e.preventDefault();
    // make sure ur online not offline
    if(!navigator.onLine){
      notify("هناك مشكله في الاتصال ب الانترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختر تصنيف رائيسي", "warn");
      return;
    }

    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف ", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createSubCategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");
      if (subcategory) console.log(subcategory);

      if (subcategory.status === 201) {
        notify("تمت الاضافه بنجاح", "success")
      }
       else if(subcategory === 'Error AxiosError: Request failed with status code 400'){
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");

       }
      else {
        notify("هناك مشكلة في عملية الاضافة", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  return [id , name , loading , category , subcategory , handelChange , handelSubmit , onChangeName]

}

export default addSubcategoryhook;
