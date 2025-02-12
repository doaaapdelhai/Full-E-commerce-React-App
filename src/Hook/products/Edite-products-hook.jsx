import { getOneCategory } from "../../Redux/Actions/SubCategoryAction";
import {
  getOneProduct,
  updateProducts,
} from "../../Redux/Actions/ProductsAction";
import notify from "../../Hook/UseNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { getAllBrand } from "../../Redux/Actions/BrandAction";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";


const AdminEditeProductHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, []);

  // get one product detiles
  const item = useSelector((state) => state.allproducts.oneProduct);
  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);

  // get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  // get last sub cat state from redux
  const subCat = useSelector((state) => state.subCategory.subcategory);

  const [options, setOptions] = useState([]);
  const onSelect = (selectedList) => {
    // console.log(selectedSubID);
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    // console.log(selectedSubID);
    setSelectedSubID(selectedList);
  };
  // values imgs products
  const [images, setImages] = useState([]);

  // values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكميه المتاحه");
  const [catID, setCatID] = useState("");
  const [brandID, setBrandID] = useState("");
  // const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setImages(item.data.images);
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatID(item.data.category);
      setBrandID(item.data.brand);
      setColors(item.data.availableColors);
    }
  }, [item]);

  // to change name state
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };

  // to change name state
  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  // to change name state
  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  // to change name state
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };
  // to change name state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };

  // to change name state
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  //to show hide color picker
  const [showColor, setShowColor] = useState(false);
  //to store all pick color
  const [colors, setColors] = useState([]);
  //when choose new color
  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  //when selet category store id
  const onSelectCategory = async (e) => {
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (catID != 0) {
      const run = async () => {
        await dispatch(getOneCategory(catID));
      };
      run();
    }
  }, [catID]);

  useEffect(() => {
    if (subCat) {
      setOptions(subCat.data);
    }
  }, [subCat]);

  // when select brand store id
  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  //to save data
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      catID === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    // img cover
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    // imgs
    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    formData.append("category", catID);
    formData.append("brand", brandID);

    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);

    colors.map((color) => formData.append("availableColors", color));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProducts(id, formData));
      setLoading(false);
    }, 1000);
  };
  //get create meesage
  const product = useSelector((state) => state.allproducts.updateProducts);

  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1500);
  
      if (product) {
        if (product.status === 200) {
          notify("تم التعديل بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading]);

  return [
    catID,
    brandID,
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onselect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSelectCategory,
    handelSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
    onSelect,
  ];
};

export default AdminEditeProductHook;
