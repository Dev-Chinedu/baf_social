import React from "react";
import cover from "../assets/cover.jpg";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="min-h-[100vh] flex justify-center flex-col">
      <div className="h-[35vh]  border relative">
        <div className="h-full flex items-center justify-center">
          <img className="h-[70%] w-[70%] rounded-lg" src={cover} alt="" />
        </div>
        <div className=" w-full flex flex-col lg:flex-row  h-full">
          <div className="h-36 -mt-24 bg-transparent backdrop-blur-lg z-50 w-36 flex items-center justify-center rounded-full shadow-2xl">
            <img
              src={cover}
              className="h-32 w-32 rounded-full hover:scale-105 transition cursor-pointer "
              alt=""
            />
          </div>
          <div className=" w-[35%] p-8 flex justify-between gap-8">
            <p>
              <span className="font-bold">100k</span> followers
            </p>
            <p>
              <span className="font-bold">100k</span> followers
            </p>
            <p>
              <span className="font-bold">{user?.posts?.length}</span> Posts
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-60 lg:pt-32 items-center h-[20vh]">
        <div className="w-[90%]">
          <p className="font-bold text-xl">{user.userName}</p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            dicta soluta illum consequuntur delectus ratione vero doloribus
            labore, quae nemo ut perspiciatis eos id repudiandae ad excepturi
            rerum non libero?
          </p>
        </div>
      </div>
      <div className="h-[45vh] mt-32 md:mt-24 lg:mt-16 pl-12">
        <Tabs>
          <TabList>
            <Tab>Saved Posts</Tab>
            <Tab>Liked Posts</Tab>
          </TabList>

          <TabPanel>
            <div className="">
              <div>
                {user?.savedPosts.length < 1 ? (
                  <p>No saved post to show</p>
                ) : (
                  <p>Post building on the way</p>
                )}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="">
              <div>
                {user?.likedPosts.length < 1 ? (
                  <p>No Liked post to show</p>
                ) : (
                  <p>Post building on the way</p>
                )}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
