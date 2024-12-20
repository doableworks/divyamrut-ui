import LoginModal from "../login/loginModal";
import RegisterModal from "../login/RegisterModal";
// import UploadDocumentModal from "../../components/modals/UploadDocument"
// import MessageModal from "../../components/modals/MessageModal"
// import PhoneVerificationModal from "../../components/modals/PhoneVerificationModal"
// import CongratulationsModal from "@/components/modals/CongratulationsModal";
// import SubscriptionSidebar from "@/components/common/SubscriptionSidebar";
// import MobileDrawerAuth from "@/components/common/MobileDrawerAuth";
// import CommonGetProModal from "@/components/common/CommonGetProModal";
// import VideoPlayingModal from "@/components/modals/VideoPlayingModal";


export function LayoutWrapper({children}) {

    return (
        <>
            {children}
            <LoginModal/>
            <RegisterModal />
            {/* <SubscriptionSidebar/>
            <UploadDocumentModal/>
            <MessageModal/>
            <PhoneVerificationModal />
            <CongratulationsModal/>
            <MobileDrawerAuth/>
            <CommonGetProModal />
            <VideoPlayingModal/> */}
        </>
    );
}

export default LayoutWrapper
