import React from "react";

import ministry1 from "../assets/images/ministry-1.jpg";
import ministry2 from "../assets/images/ministry-2.jpg";
import ministry3 from "../assets/images/ministry-3.jpg";
import ministry4 from "../assets/images/ministry-4.jpg";
import ministry5 from "../assets/images/ministry-5.jpg";
import ministry6 from "../assets/images/ministry-6.jpg";


const MinistryDetails = () => {
    return(
        <div>
            <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 ministry">
                            <div class="img" style={{ backgroundImage : `url(${ministry1})` }}></div>
                            <div class="text p-4">
                                <h2 class="mb-4"><a href="sermons.html">Children's Ministry</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="sermons.html" class="btn btn-primary">More Details</a></p>
                            </div>
                        </div>
                        <div class="col-md-4 ministry">
                            <div class="img"style={{ backgroundImage : `url(${ministry2})` }}></div>
                            <div class="text p-4">
                                <h2 class="mb-4"><a href="sermons.html">Women's Ministry</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="sermons.html" class="btn btn-primary">More Details</a></p>
                            </div>
                        </div>
                        <div class="col-md-4 ministry">
                            <div class="img" style={{ backgroundImage : `url(${ministry3})` }}></div>
                            <div class="text p-4">
                                <h2 class="mb-4"><a href="sermons.html">Community Ministry</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="sermons.html" class="btn btn-primary">More Details</a></p>
                            </div>
                        </div>

                        <div class="col-md-4 ministry">
                            <div class="img" style={{ backgroundImage : `url(${ministry4})` }}></div>
                            <div class="text p-4">
                                <h2 class="mb-4"><a href="sermons.html">Prison Ministry</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="sermons.html" class="btn btn-primary">More Details</a></p>
                            </div>
                        </div>

                        <div class="col-md-4 ministry">
                            <div class="img" style={{ backgroundImage : `url(${ministry5})` }}></div>
                            <div class="text p-4">
                                <h2 class="mb-4"><a href="sermons.html">Family Ministry</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="sermons.html" class="btn btn-primary">More Details</a></p>
                            </div>
                        </div>

                        <div class="col-md-4 ministry">
                            <div class="img" style={{ backgroundImage : `url(${ministry6})` }}></div>
                            <div class="text p-4">
                                <h2 class="mb-4"><a href="sermons.html">Music Ministry</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="sermons.html" class="btn btn-primary">More Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default MinistryDetails;