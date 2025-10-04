
const Card = ({revie}) => {
    const {userName,user_photoURL,date,review}=revie
    console.log(revie)
    return (
        <div>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={user_photoURL}
      />
    </div>
  </div>
  <div className="chat-header">
    {userName}
    <time className="text-xs opacity-50">{date}</time>
  </div>
  <div className="chat-bubble">{review}</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>

        </div>
    );
};

export default Card;