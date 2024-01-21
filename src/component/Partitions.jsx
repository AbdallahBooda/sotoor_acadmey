import React from 'react';
import'../style/Homestyle.css'
import { Link } from 'react-router-dom';


const Partitions = () => {
    return ( 
        <>
            <div className='h-page-80'>
            <section className="section-margin home-tabs bg-light p-t-100 p-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <h2 className="  "> أقسام أكاديمية سطور  : </h2> <hr className="m-b-30" />
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link className="nav-link m-b-20 active bold p-t-20" id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">  دروس مكتوبة
                                
                            </Link>
                            <Link className="nav-link m-b-20 bold p-t-20" id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">  &#x202B;فيديوهات&#x202C; &#x202B;شرح </Link>
                            <Link className="nav-link m-b-20 bold p-t-20" id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">  أسئلة محلولة
                            </Link>
                            <Link className="nav-link m-b-20 bold p-t-20" id="v-last-tab" data-toggle="pill" to="#v-pills-last" role="tab" aria-controls="v-pills-last" aria-selected="false">  اختبارات متعددة
                            </Link>

                        </div>
                        </div> 
                        <div className="col-md-8">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active p-20 bg-white shadow b-r-30 " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <img src="https://sotooracademy.com/website/img/banner/1.png" className=" w-100  b-r-30 img-thumbnail" alt="" />
                                </div>
                                <div className="tab-pane fade p-30 shadow b-r-20 bg-white " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <img src="https://sotooracademy.com/website/img/banner/2.png" className=" w-100  b-r-30 img-thumbnail" alt="" />
                                </div>
                                <div className="tab-pane fade p-30 shadow b-r-20 bg-white " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <img src="https://sotooracademy.com/website/img/banner/3.png" className=" w-100  b-r-30 img-thumbnail" alt="" />
                                </div>
                                <div className="tab-pane fade p-30 shadow b-r-20 bg-white " id="v-pills-last" role="tabpanel" aria-labelledby="v-pills-last-tab">
                                    <img src="https://sotooracademy.com/website/img/banner/4.png" className=" w-100  b-r-30 img-thumbnail" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
     );
}
 
export default Partitions;