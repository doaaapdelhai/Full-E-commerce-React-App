import { getOneCategory } from "../../Redux/Actions/SubCategoryAction";
import { createProduct } from "../../Redux/Actions/ProductsAction";
import notify from "../../Hook/UseNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { getAllBrand } from "../../Redux/Actions/BrandAction";
import { useEffect, useState } from "react";



const AdminAddProductHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory());
      dispatch(getAllBrand());
    }, []);
  
    // get last category state from redux
    const category = useSelector((state) => state.allCategory.category);
  
    // get last brand state from redux
    const brand = useSelector((state) => state.allBrand.brand);
  
    // get last sub cat state from redux
    const subCat = useSelector((state) => state.subCategory.subcategory);
  
    const [options, setOptions] = useState([]);
  
    const onSelect = (selectedList) => {
      // console.log(selectedSubID);
    setSelectedSubID(selectedList)
    };
  
    const onRemove = ( selectedList) => {
      // console.log(selectedSubID);
  
    setSelectedSubID(selectedList)
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
    const [subCatID, setSubCatID] = useState([]);
    const [selectedSubID, setSelectedSubID] = useState([]);
    const [loading, setLoading] = useState(true);

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
  
  
    // to show hide color picker
    const [showColor, setShowColor] = useState(false);
    // to store all pick color
    const [colors, setColors] = useState([]);
  
    // when change new color
    const handelChangeComplete = (color) => {
      setColors([...colors, color.hex]);
      setShowColor(!showColor);
    };
  
    const removeColor = (color) => {
      const newColor = colors.filter((e) => e !== color);
      setColors(newColor);
    };
  
  
  
    //  console.log(colors);
  
    const onSelectCategory = async (e) => {
      if (e.target.value != 0) {
  
        await dispatch(getOneCategory(e.target.value)); 
  
      }
      setCatID(e.target.value); 
    };
  
    useEffect(() => {
      if (catID != 0) {
        if (subCat.data) {
          setOptions(subCat.data); 
        }
      }
    }, [catID, subCat]); 
  
    // when select brand store id
    const onSelectBrand = (e) => {
    
      setBrandID(e.target.value);
    };
  // Function to convert Base64 to a file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length, 
        u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  
  
    // to save data
    const handelSubmit= async(e)=>{
      e.preventDefault();
      if( catID===0|| prodName==="" || prodDescription=== " " || images.length<=0||priceBefore<=0){
        notify("من فضلك اكمل البيانات" , "warn")
        return;
      }
      //  convert base 64 image to file 
      const imgCover=dataURLtoFile(images[0] , Math.random()+".png");
          //  convert array of base 64 image to file 
      const itemImages = Array.from(Array(Object.keys(images).length).keys()).map( 
        (item , index)=>{
          return dataURLtoFile(images[index] , Math.random()+".png");
        }
      )
  
      
      const formatData = new FormData();
      formatData.append("title" , prodName )
      formatData.append("description" , prodDescription )
      formatData.append("quantity" , qty )
      formatData.append("price" , priceBefore )
      formatData.append("imageCover" , imgCover )
      formatData.append("category" , catID )
      formatData.append("brand" , brandID )
  
      //  send color to datadbase
      itemImages.map((item)=> formatData.append("images" , item )  ) 
      colors.map((color)=> formatData.append("availableColors" , color )  ) 
      selectedSubID.map((item)=> formatData.append("subcategory" , item._id ))
      setLoading(true)
      await dispatch(createProduct(id , formatData))
      setLoading(false)
    }
  
  
      // get create ms
      const product = useSelector((state) => state.allproducts.products);
    useEffect(() => {
  
      if(loading===false){
        setCatID(0)
        setColors([])
        setImages([])
        setProdName('')
        setProdDescription('')
        setPriceBefore('السعر قبل الخصم')
        setPriceAfter('السعر بعد الخصم')
        setQty('الكميه المتاحه')
        setBrandID(0)
        setSelectedSubID([])
  
       setTimeout(()=>setLoading(true) , 1500)
  
       if(product){
  
        if(product.status === 201){
          notify("تم الاضافه بنجاح" , "success")
        }else{
          notify("هناك مشكله في عمليه الاضافه", "error")
  
        }
       }
      }
    }, [loading])

return [  onChangeDesName  ,onChangeQty, onChangeColor , onChangePriceAfter  ,onChangePriceBefore , onChangeProdName
  , showColor , category , brand , priceAfter , images , setImages , onselect , onRemove , options,
        handelChangeComplete , removeColor , onSelectCategory , handelSubmit , onSelectBrand , colors , 
        priceBefore , qty , prodDescription , prodName ,onSelect

]

}

export default AdminAddProductHook;
