import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'
import doctor_img from '../assets/Doc.png'
import shoe from '../assets/shoe.png'
import user from '../assets/usermanagemnt.png'
import chatapp from '../assets/Chatapp.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"Medicare: Doctor Booking Web-App",
        w_img:doctor_img,
        w_url:'https://www.medicare.clintogeorge.live/',
        w_details:'Medicare is a doctor booking platform with secure appointment management, private messaging,real-time communication and an intuitive interface.Integrated the STRIPE payment gateway for booking slots.Integrated real-time chat functionality using Socket.IO to enhance user communication. Utilized Tailwind CSS for efficient and scalable styling.'
    },
    {
        w_no:2,
        w_name:"StrideSpot: Ecommerce store for shoes",
        w_img:shoe,
        w_url:'https://www.stridespot.clintogeorge.live/',
        w_details:'An innovative e-commerce application dedicated to shoes. This platform boasts an intuitive UI,dynamic card system and seamless Razorpay integration for secure transactions, ensuring a delightful shopping journey for fashion enthusiasts.Integrated twilio for registration Otp purpose. Implemented cart management functionality to allow users to add.Added coupon offers to the customers to redeem and use'
    },
    {
        w_no:3,
        w_name:"Usermanagement system",
        w_img:user,
        w_url:'https://github.com/CLINTO-hub/UserManagement',
        w_details:'JWT token-based authentication.Ability to block/unblock users.User registration with OTP verification.Secure login and intuitive dashboard.Advanced form validation for adding and editing data'
    },
    {
        w_no:4,
        w_name:"ChatApp: Real time chat web-app",
        w_img:chatapp,
        w_url:'https://chat-app-f97i.onrender.com/login',
        w_details:'Built a real-time chat application using react and Nodejs. Implemented JWT for the user authentication purpose. Used daisy UI for design part. Implemented Contest API and Zustand for global state management. Implemented Socket.IO for the getting the real time chat data. MVC is architecture used to build the project'
    },
    {
        w_no:5,
        w_name:"Wheater web-app",
        w_img:project5_img,
        w_url:'https://weather-app-cyan-eta.vercel.app',
        w_details:'Integrated open wheather rest api for the fetching the details. By giving the location name it identifies the exact location using latitude and longitude and give the exact wheather status.'
    },
    {
        w_no:6,
        w_name:"Ipl realtime subscription web-app",
        w_img:project6_img,
        w_url:'https://github.com/CLINTO-hub/Ipl-app',
        w_details:'Jwt is used for the User athenication. It is an application that gives the real time updates about the ipl team. Users can subscribe to there favourite team. And implemented feild wise subscription if that specifice feild get updates only the user will get the real time notification.Implemented using the Socket.IO    '
    },
]
 
export default mywork_data;