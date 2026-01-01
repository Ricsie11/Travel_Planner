import { FloatingWhatsApp } from "react-floating-whatsapp";

function FloatingWhatsapp() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+2347025293112"
        accountName="Atlas Travel"
        avatar="https://cdn-icons-png.flaticon.com/512/201/201623.png"
        statusMessage="Your personal guide to unforgettable journeys"
        chatMessage="Hi 👋 Welcome to Atlas Travel! How can we help you plan your next trip?"
        placeholder="Type your message here..."
        messageDelay={3}
        darkMode={false}
        allowClickAway={true}
        allowesc={true}
        chatBoxHeight={400}
        notification={true}
        notificationDelay={10}
        notificationSound={true}
        notificationLoop={3}
        buttonStyle={{
          backgroundColor: "#25D366",
          color: "white",
        }}
        chatboxStyle={{
          backgroundColor: "#F0F0F0",
        }}
      />
    </div>
  );
}

export default FloatingWhatsapp;
