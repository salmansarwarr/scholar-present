const AvatarStack = () => {
  const avatars = [
    { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-fmoGetp6VX_BcpKVw4GtJO2bvLR-fOA0Q&s', alt: 'User 1' },
    { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyC91bTmuYe9x4XpV7Qu88Zt7XqY4vJVBsQ&s', alt: 'User 2' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuTxJEqjdtTzfzqFFSgP6TI9Jjwe9WqeOWQ&s', alt: 'User 3' },
    { id: 4, src: 'https://img.freepik.com/premium-photo/girl-student-with-blackboard_53876-75474.jpg?semt=ais_hybrid&w=740&q=80', alt: 'User 4' },
  ];

  return (
    <div className="flex items-center justify-center lg:justify-start">
      <div className="relative flex items-center">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className="relative"
            style={{
              marginLeft: index === 0 ? '0' : '-16px',
              zIndex: avatars.length - index,
            }}
          >
            {/* White ring border for contrast */}
            <div className="rounded-full p-[2px] bg-white shadow-md">
              {/* Avatar image */}
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarStack;