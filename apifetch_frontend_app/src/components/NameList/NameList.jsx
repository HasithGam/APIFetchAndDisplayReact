import React from "react";
import logo from '../../logo.svg';
import NameProps from "../NamesProps/NameProps";

function NameList(){

    const nameList = [{
        id: 1,
        name: {
                title: "Miss",
                first: "Jennie",
                last: "Nichols"
            },
        location: "Billings",
        email: "jennie.nichols@example.com",
        dob:   {
                date: "1992-03-08T15:13:16.688Z",
                age: 30
            },
        picture: { medium: "https://randomuser.me/api/portraits/med/women/34.jpg"},
        },
        {
            id: 2,
         name: {
                title: "Mr",
                first: "Isaac",
                last: "Roberts"
            },
        location: "Billings",
        email: "Isaac@example.com",
        dob:   {
                date: "1950-09-11T06:31:45.003Z",
                age: 30
            },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/45.jpg"},
        },{
            id: 3,
         name: {
                title: "Mr",
                first: "Rémi",
                last: "Lefevre"
            },
        location: "Billings",
        email: "Lefevre@example.com",
        dob:   {
                date: "1995-07-30T12:28:34.411Z",
                age: 30
            },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/32.jpg"},
            
    }];

    const NameListComponent = () => {
        return (
            nameList.map(aName => {
                return(
                    <NameProps 
                        key={aName.id}
                        name={`${aName.name.title}   ${aName.name.first}   ${aName.name.last}`} 
                        location={aName.location}
                        email={aName.email}
                        birthday={aName.dob.date}
                        avatar={aName.picture.medium}

                    />
                )

            })
            
        );
    };

    return(
    <>
      <div className="App">
        <header className="App-header">
          <h2>REACT API Fetch <img src={logo} className="App-logo" alt="logo" /></h2>
        </header>
      </div>
      <ul>
        {NameListComponent()}
      </ul>
    </>
    )
}

export default NameList;


//Array one by one shows.. this is fixed not dynamic

// function NameList(){

//     const nameList = [{
//         name: {
//                 title: "Miss",
//                 first: "Jennie",
//                 last: "Nichols"
//             },
//         location: "Billings",
//         email: "jennie.nichols@example.com",
//         dob:   {
//                 date: "1992-03-08T15:13:16.688Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/med/women/34.jpg"},
//         },
//         {
//          name: {
//                 title: "Mr",
//                 first: "Isaac",
//                 last: "Roberts"
//             },
//         location: "Billings",
//         email: "Isaac@example.com",
//         dob:   {
//                 date: "1950-09-11T06:31:45.003Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/med/men/45.jpg"},
//         },{
//          name: {
//                 title: "Mr",
//                 first: "Rémi",
//                 last: "Lefevre"
//             },
//         location: "Billings",
//         email: "Lefevre@example.com",
//         dob:   {
//                 date: "1995-07-30T12:28:34.411Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/med/men/32.jpg"},
            
//     }];

//     return(
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h2>REACT API Fetch <img src={logo} className="App-logo" alt="logo" /></h2>
//         </header>
//       </div>
//       <ul>
//         <NameProps 
//             name={`${nameList[0].name.title}   ${nameList[0].name.first}   ${nameList[0].name.last}`} 
//             location={nameList[0].location}
//             email={nameList[0].email}
//             birthday={nameList[0].dob.date}
//             avatar={nameList[0].picture.medium}

//         />
//         <NameProps 
//             name={`${nameList[1].name.title}   ${nameList[1].name.first}   ${nameList[1].name.last}`} 
//             location={nameList[1].location}
//             email={nameList[1].email}
//             birthday={nameList[1].dob.date}
//             avatar={nameList[1].picture.medium}

//         />
//         <NameProps 
//             name={`${nameList[2].name.title}   ${nameList[2].name.first}   ${nameList[2].name.last}`} 
//             location={nameList[2].location}
//             email={nameList[2].email}
//             birthday={nameList[2].dob.date}
//             avatar={nameList[2].picture.medium}

//         />
//       </ul>
//     </>
//     )
// }

// export default NameList;




//Array First Item

// function NameList(){

//     const nameList = [{
//         name: {
//                 title: "Miss",
//                 first: "Jennie",
//                 last: "Nichols"
//             },
//         location: "Billings",
//         email: "jennie.nichols@example.com",
//         dob:   {
//                 date: "1992-03-08T15:13:16.688Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/women/34.jpg"},

//          name: {
//                 title: "Mr",
//                 first: "Isaac",
//                 last: "Roberts"
//             },
//         location: "Billings",
//         email: "Isaac@example.com",
//         dob:   {
//                 date: "1950-09-11T06:31:45.003Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/med/men/45.jpg"},

//          name: {
//                 title: "Mr",
//                 first: "Rémi",
//                 last: "Lefevre"
//             },
//         location: "Billings",
//         email: "Lefevre@example.com",
//         dob:   {
//                 date: "1995-07-30T12:28:34.411Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/med/men/32.jpg"},

//     }];

//     return(
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h2>REACT API Fetch <img src={logo} className="App-logo" alt="logo" /></h2>
//         </header>
//       </div>
//       <ul>
//         <NameProps 
//             name={`${nameList[0].name.title}   ${nameList[0].name.first}   ${nameList[0].name.last}`} 
//             location={nameList[0].location}
//             email={nameList[0].email}
//             birthday={nameList[0].dob.date}
//             avatar={nameList[0].picture.medium}

//         />
//       </ul>
//     </>
//     )
// }

// export default NameList;


//Single object add to list

// function NameList(){

//     const nameList = {
//         name: {
//                 title: "Miss",
//                 first: "Jennie",
//                 last: "Nichols"
//             },
//         location: "Billings",
//         email: "jennie.nichols@example.com",
//         dob:   {
//                 date: "1992-03-08T15:13:16.688Z",
//                 age: 30
//             },
//         picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg"},

//     };

//     return(
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h2>REACT API Fetch <img src={logo} className="App-logo" alt="logo" /></h2>
//         </header>
//       </div>
//       <ul>
//         <NameProps 
//             name={`${nameList.name.title}   ${nameList.name.first}   ${nameList.name.last}`} 
//             location={nameList.location}
//             email={nameList.email}
//             birthday={nameList.dob.date}
//             avatar={nameList.picture.medium}

//         />
//       </ul>
//     </>
//     )
// }

// export default NameList;