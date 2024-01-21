import React from 'react';


const Features = () => {
    return (
        <>
            <section className="section-margin p-50">
                <div className="container">
                    <div className="row no-gutters ">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <div className="about__content ">
                        <h2 className=""> مميزات منهج سطور : </h2> <hr className="short-hr m-b-30" /> 
                            <ul className="list-unstyled">
                                <li className="d-block bold m-b-30 em1-3 features_style" > <i className="fa-regular fa-check-circle mainColor "> </i> &nbsp;التركيز على أفكار الاختبار المتكررة و التمرن عليها</li>
                                <li className="d-block bold m-b-30 em1-3 features_style" > <i className="fa-regular fa-check-circle mainColor "> </i> &nbsp;سهولة الشرح وإيصال المعلومة</li>
                                <li className="d-block bold m-b-30 em1-3 features_style" > <i className="fa-regular fa-check-circle mainColor "> </i> &nbsp;تتحدث أسئلة الموقع باستمرار </li>
                                <li className="d-block bold m-b-30 em1-3 features_style" > <i className="fa-regular fa-check-circle mainColor "> </i> &nbsp;تمارين متعددة من اختبارات وتجميعات سابقة </li>
                                <li className="d-block bold m-b-30 em1-3 features_style" > <i className="fa-regular fa-check-circle mainColor "> </i> اختبارات تجريبية  تحاكي اختبار القدرات الحقيقي من حيث أقسام الكمي واللفظي مع مراعاة الوقت </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7  d-sm-none   d-none  d-md-block">
                        <img src="https://sotooracademy.com/images/features.png" alt="Features " className="w-100 h-400" />
                    </div>
                    </div>
                </div>
            </section>
        </>
      );
}
 
export default Features;