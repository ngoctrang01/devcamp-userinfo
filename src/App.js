const gUserInfo = {
  firstname: 'Hoang',
  lastname: 'Pham',
  avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
  age: 30,
  language: ['Vietnamese', 'Japanese', 'English']
}


function App() {
  return (
    <div >
     <h5>Họ và tên:{gUserInfo.lastname + gUserInfo.firstname}</h5>
     <img src={gUserInfo.avatar} width={300}/>
     <p>Tuổi:{gUserInfo.age}</p>
     <div>{gUserInfo.age<=35 ? "Anh ấy còn trẻ" : "Anh ấy đã già"}</div>
     <ul>
      {gUserInfo.language.map(function (pElement,pIndex) {
          return <li value={pIndex}>{pElement}</li>
      })}
     </ul>
    </div>
  );
}

export default App;
