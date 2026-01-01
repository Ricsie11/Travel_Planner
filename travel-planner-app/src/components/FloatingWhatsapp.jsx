import { FloatingWhatsApp } from "react-floating-whatsapp";

function FloatingWhatsapp() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+2347025293112"
        accountName="Atlas"
        avatar="http://i.pravatar.cc/300"
        statusMessage="Reach out to us for any guide"
        chatMessage="Hi there! How can we assist you today?"
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
