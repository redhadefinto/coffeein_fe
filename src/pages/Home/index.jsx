import React, { useEffect } from 'react'
import Footer from '../../components/Footer';
// import HeaderHome from '../../components/HeaderHome';
import teamWork from '../../assets/Home/team-work-bg.webp'
import iconCeklis from '../../assets/Home/icon/Ceklis.svg'
import CardHome from '../../components/CardHome';
import hueGlobal from '../../assets/Home/Huge Global.svg'
import netflix from '../../assets/Home/partner/netflix.webp'
import reddit from '../../assets/Home/partner/Reddit.webp'
import amazon from '../../assets/Home/partner/amazon.webp'
import discord from '../../assets/Home/partner/Discord.webp'
import spotify from '../../assets/Home/partner/Spotify.webp'
import leftIcon from '../../assets/Home/icon/left.svg'
import rightIcon from '../../assets/Home/icon/Right.svg'
import iconStar from '../../assets/Home/icon/star.svg'
// import { get } from '../../utils/localStorage'
import user1 from "../../assets/Home/Profile/Profile-left.svg";
import user2 from "../../assets/Home/Profile/Profile-middle.svg";
import user3 from "../../assets/Home/Profile/Profile-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../redux/slices/profile";
// import css from '../../styles/Home.css'
import ayambakar from '../../assets/Products/ayambakar.png'
import coffelatte from '../../assets/Products/Coffelatte.webp'
import veg from '../../assets/Products/veg.png'
// import HeaderHomeAfterLogin from '../../components/HeaderHomeAfterLogin'
import HeaderBase from '../../components/HeaderBase';

function Home() {
    // const tokenFromLS = get('coffeshop-token');
    const controller = React.useMemo(() => new AbortController(), []);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.data.token);
    useEffect(() => {
      // const controller = new AbortController();
      document.title = "Home";
      if(token) {
        dispatch(profileAction.getProfileThunk({ controller, token }));
      }
      return () => {
        controller.abort();
      };
    });
    return (
      <>
        <HeaderBase title="home" />
        <main className="font-rubik">
          <section className="bg-home bg-center bg-cover bg-no-repeat min-h-[90vh] bg-fixed">
            <div className="text-white bg-[rgba(0,0,0,.5)] min-h-[90vh]">
              <div className="font-bold flex flex-col justify-center pt-16 px-16 lg:h-[80vh] lg:pt-0 lg:pl-[10%]">
                <h1 className="text-3xl mb-4 md:text-4xl">
                  Start Your Day with <br /> Coffee and Good Meals
                </h1>
                <p className="text-base mb-12">
                  We provide high quality beans, good taste, and healthy <br />{" "}
                  meals made by love just for you. Start your day with us <br />{" "}
                  for a bigger smile!
                </p>
                <button className="pointer py-4 px-8 bg-btn-yellow w-[60%] self-center rounded-lg text-brown-cs text-xl md:w-[40%] lg:w-[30%] lg:self-start">
                  Get Started
                </button>
              </div>
            </div>
          </section>
          <section className="branding">
            <div className="container-branding">
              <div className="box-info relative min-h-[150px] flex justify-center">
                <div
                  className="flex bg-white w-[80%] absolute top-[-30%] px-8 py-4 rounded-xl lg:w-[70%] lg:top-[-50%]"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}>
                  <div className="container-staf flex-1 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:py-8 ">
                    <div className="bg-btn-yellow w-[50px] h-[50px] rounded-full bg-icon-contact bg-center bg-no-repeat flex"></div>
                    <div className="text-center">
                      <h3 className="font-bold mt-1">90+</h3>
                      <p className="text-grey-custom text-base">Staff</p>
                    </div>
                  </div>
                  <div className="container-staf flex-1 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:py-8 ">
                    <div className="bg-btn-yellow w-[50px] h-[50px] rounded-full bg-icon-location bg-center bg-no-repeat flex"></div>
                    <div className="text-center">
                      <h3 className="font-bold mt-1">30+</h3>
                      <p className="text-grey-custom text-base">Stores</p>
                    </div>
                  </div>
                  <div className="container-staf flex-1 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:py-8 ">
                    <div className="bg-btn-yellow w-[50px] h-[50px] rounded-full bg-icon-heart bg-center bg-no-repeat flex"></div>
                    <div className="text-center">
                      <h3 className="font-bold mt-1">800+</h3>
                      <p className="text-grey-custom text-base">Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-branding">
                <div className="flex flex-col px-6 text-grey-custom mb-20 md:flex-row md:gap-4 md:px-8 lg:px-20 xl:gap-12">
                  <div className="logo-branding flex items-center justify-center">
                    <img
                      src={teamWork}
                      alt="logo-branding"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                      <h2 className="text-2xl font-bold text-dark-blue-cs mb-4">
                        We Provide Good Coffee <br /> and Healthy Meals
                      </h2>
                      <p className="mb-4 lg:mb-0">
                        You can explore the menu that we provide with fun and{" "}
                        <br /> have their own taste and make your day better.
                      </p>
                      <div>
                        <div className="flex flex-col gap-4 mb-12">
                          <div className="flex gap-4">
                            <img
                              src={iconCeklis}
                              alt="icon-ceklis"
                              width="20"
                              height="auto"
                            />
                            <p>High quality beans</p>
                          </div>
                          <div className="flex gap-4">
                            <img
                              src={iconCeklis}
                              alt="icon-ceklis"
                              width="20"
                              height="auto"
                            />
                            <p>
                              Healthy meals, you can request the ingredients
                            </p>
                          </div>
                          <div className="flex gap-4">
                            <img
                              src={iconCeklis}
                              alt="icon-ceklis"
                              width="20"
                              height="auto"
                            />
                            <p>
                              Chat with our staff to get better experience for
                              ordering
                            </p>
                          </div>
                          <div className="flex gap-4">
                            <img
                              src={iconCeklis}
                              alt="icon-ceklis"
                              width="20"
                              height="auto"
                            />
                            <p>
                              Free member card with a minimum purchase of IDR
                              200.000.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="product mb-20">
            <div className="container-product px-6 text-grey-custom md:px-8 lg:px-20">
              <div className="product-header">
                <h2 className="text-2xl font-bold mb-4 text-dark-blue-cs text-center">
                  Here is People s Favorite
                </h2>
                <p className="text-base mb-28 text-center">
                  Lets choose and have a bit taste of poeples favorite. It might
                  be yours too!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CardHome img={ayambakar} title="Chicken Fire Wings" />
                <CardHome img={coffelatte} title="Hazelnut Latte" />
                <CardHome img={veg} title="Veggie tomato mix" />
              </div>
            </div>
          </section>
          <section className="map mb-20 px-6 md:px-8 lg:px-20">
            <div className="container-map">
              <div className="text-center">
                <h2 className="font-bold text-2xl text-dark-blue-cs mb-3">
                  Visit Our Store in the <br /> Spot on the Map Below
                </h2>
                <p className="text-grey-custom mb-20">
                  See our store in every city on the spot and spen your good day
                  there. See <br className="hidden" /> you soon!
                </p>
              </div>
              <div className="px-6">
                <img src={hueGlobal} alt="maps" width="100%" height="auto" />
              </div>
            </div>
          </section>
          <section className="partner mb-20 px-6 md:px-8 lg:PX-20">
            <div className="">
              <div className="header-partner">
                <h2 className="text-center text-dark-blue-cs text-2xl font-bold mb-16">
                  Our Partner
                </h2>
              </div>
              <div className="body-partner">
                <div className="grid grid-cols-2 justify-center items-center gap-8 md:grid-cols-3">
                  <div className="flex justify-center">
                    <div className="image-partner">
                      <img
                        src={netflix}
                        alt="Netflix"
                        width="150"
                        height="auto"
                        className="grayscale hover:grayscale-0 hover:cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="image-partner">
                      <img
                        src={reddit}
                        alt="Reddit"
                        width="150"
                        height="auto"
                        className="grayscale hover:grayscale-0 hover:cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="image-partner">
                      <img
                        src={amazon}
                        alt="Amazon"
                        width="150"
                        height="auto"
                        className="grayscale hover:grayscale-0 hover:cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="image-partner md:col-start-1 md:col-end-3">
                      <img
                        src={discord}
                        alt="Discord"
                        width="150"
                        height="auto"
                        className="grayscale hover:grayscale-0 hover:cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center spotify col-start-1 col-end-3 md:col-auto">
                    <div className="image-partner">
                      <img
                        src={spotify}
                        alt="spotify"
                        width="150"
                        height="auto"
                        className="grayscale hover:grayscale-0 hover:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="customer text-grey-custom px-6 md:px-8 lg:px-20">
            <div className="container-customer">
              <div className="header-customer">
                <h2 className="text-center text-2xl font-bold text-dark-blue-cs mb-2">
                  Loved by Thousands of <br /> Happy Customer
                </h2>
                <p className="text-center text-base mb-12">
                  These are the stories of our customers who have visited us
                  with great <br className="hidden" /> pleasure.
                </p>
              </div>
              {/* <!-- COMMENTARY CONTAINER --> */}
              <div className="w-full flex flex-col md:flex-row gap-3 2xl:gap-14 pb-4 overflow-x-scroll xl:overflow-hidden">
                {/* <!-- CARD COMMENT-1 --> */}
                <div className="card-comment flex flex-col p-4 sm:p-7 w-full sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
                  <div className="flex w-full gap-3 mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                      <img src={user1} alt="" />
                    </div>
                    <div className="">
                      <h4 className="font-medium md:text-lg">Viezh Robert</h4>
                      <h5 className="text-xs md:text-sm text-grey">
                        Warsaw, Poland
                      </h5>
                    </div>
                    <div className="ml-auto flex gap-2 items-center">
                      <p className="font-medium">4.5</p>
                      <div className="image-star">
                        <img
                          src={iconStar}
                          alt="icon-star"
                          width="20"
                          height="auto"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-base">
                    “Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!
                  </p>
                </div>
                {/* <!-- CARD COMMENT-2 --> */}
                <div className="card-comment flex flex-col p-4 sm:p-7 w-full sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
                  <div className="flex w-full gap-3 mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                      <img src={user2} alt="" />
                    </div>
                    <div className="">
                      <h4 className="font-medium md:text-lg">
                        Yessica Christy
                      </h4>
                      <h5 className="text-xs md:text-sm text-grey">
                        Shanxi, China
                      </h5>
                    </div>
                    <div className="ml-auto flex gap-2 items-center">
                      <p className="font-medium">4.5</p>
                      <div className="image-star">
                        <img
                          src={iconStar}
                          alt="icon-star"
                          width="20"
                          height="auto"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-base">
                    “I like it because I like to travel far and still can make
                    my day better just by drinking their Hazelnut Latte
                  </p>
                </div>
                {/* <!-- CARD COMMENT-3 --> */}
                <div className="card-comment flex flex-col p-4 sm:p-7 w-full sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
                  <div className="flex w-full gap-3 mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                      <img src={user3} alt="" />
                    </div>
                    <div className="">
                      <h4 className="font-medium md:text-lg">Kim Young Jou</h4>
                      <h5 className="text-xs md:text-sm text-grey">
                        Seoul, South Korea
                      </h5>
                    </div>
                    <div className="ml-auto flex gap-2 items-center">
                      <p className="font-medium">4.5</p>
                      <div className="image-star">
                        <img
                          src={iconStar}
                          alt="icon-star"
                          width="20"
                          height="auto"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-base">
                    “This is very unusual for my taste, I haven’t liked coffee
                    before but their coffee is the best! and yup, you have to
                    order the chicken wings, the best in town!
                  </p>
                </div>
              </div>
              {/* <!-- [END] COMENTARY CUSTOMER CONTENT --> */}
            </div>
            <div className="footer-customer px-4 mb-14">
              <div className="flex">
                <div className="flex justify-start mt-12 gap-4 w-full">
                  <div className="flex gap-4 flex-1">
                    <div className="w-[20px] h-[20px] bg-brown-cs rounded-full border-2 border-solid border-black"></div>
                    <div className="w-[20px] h-[20px] rounded-full border-2 border-solid border-black bg-[#DDE0E4]"></div>
                    <div className="w-[20px] h-[20px] rounded-full border-2 border-solid border-black bg-[#DDE0E4]"></div>
                    <div className="w-[20px] h-[20px] rounded-full border-2 border-solid border-black bg-[#DDE0E4]"></div>
                  </div>
                  <div className="flex-1 flex justify-end gap-8">
                    <button className="w-[40px] h-[40px] bg-white border-2 border-solid border-brown-cs flex justify-center items-center rounded-full">
                      <img src={leftIcon} alt="" />
                    </button>
                    <button className="w-[40px] h-[40px] bg-brown-cs flex justify-center items-center rounded-full">
                      <img src={rightIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <section className="h-[15rem] lg:flex-[1]">
              <section
                className="relative flex flex-col justify-center items-center py-8 px-4 w-[90%] m-auto bg-white rounded-2xl gap-2 md:flex-row md:py-8 md:px-12 lg:py-12 lg:px-16 lg:w-[90%]"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                }}>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="title card-title lg:text-2xl lg:font-bold lg:text-dark-blue-cs">
                    Check our promo <br className="hidden lg:block" /> today!
                  </h2>
                  <p className="description card-description lg:text-grey-custom lg:font-semibold">
                    lets join with our member and enjoy the deals.
                  </p>
                </div>
                <button className="py-3 px-8 bg-btn-yellow rounded-lg text-brown-cs font-bold hover:bg-[#a18818] hover:text-white">
                  Create Now
                </button>
              </section>
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }

export default Home