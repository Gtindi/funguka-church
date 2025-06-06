import React from 'react';
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';


const Blog = () => {
    return(
        <div className='Blog'>
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center pb-5 mb-3">
                        <div class="col-md-7 heading-section text-center">
                            <span class="subheading">Our Blog</span>
                            <h2>Latest news from our blog</h2>
                        </div>
                    </div>
                    <div class="row d-flex">
                        <div class="col-md-6 col-lg-4 d-flex">
                            <div class="blog-entry align-self-stretch">
                                <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${image1})`}}>
                                </a>
                                <div class="text p-4">
                                    <div class="meta mb-2">
                                        <div><a href="#">July 20, 2020</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
                                    </div>
                                    <h3 class="heading"><a href="#">Building Holy &amp; Healthy Lives God’s</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                    <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 d-flex">
                            <div class="blog-entry align-self-stretch">
                                <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${image2})`}}>
                                </a>
                                <div class="text p-4">
                                    <div class="meta mb-2">
                                        <div><a href="#">July 20, 2020</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
                                    </div>
                                    <h3 class="heading"><a href="#">Building Holy &amp; Healthy Lives God’s</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                    <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 d-flex">
                            <div class="blog-entry align-self-stretch">
                                <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${image2})`}}>
                                </a>
                                <div class="text p-4">
                                    <div class="meta mb-2">
                                        <div><a href="#">July 20, 2020</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
                                    </div>
                                    <h3 class="heading"><a href="#">Building Holy &amp; Healthy Lives God’s</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                    <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Blog;