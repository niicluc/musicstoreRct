import "./ItemListContainer.css" ;

const discosCatalogo = [
    {
        id: 1,
        name: "Amo", 
        cd: "Bring Me The Horizon", 
        cantidad: "1",
        price: "5629", 
        image: "https://i.ibb.co/R7KLXFL/im16.jpg",
    },
    
    {
        id: 2, 
        name: "Death Of A Bachelor",
        cd: "Panic At The Disco", 
        cantidad: "1", "price": "3880",
        image: "https://i.ibb.co/sKvSTch/im17.jpg"
    },
    
    {
        id: 3, 
        name: "Demon Days",
        cd: "Gorillaz", 
        cantidad: "1", 
        price: "5800",
        image: "https://i.ibb.co/QYvyLpJ/im18.jpg"
    },
    
    {
        id: 4, 
        name: "Happier Than Ever", 
        cd: "Billie Elish", 
        cantidad: "1", 
        price: "2200", 
        image: "https://i.ibb.co/0Kn5sqH/im19.jpg"},
    
    {
        id: 5, 
        name: "Im With You", 
        cd: "Red Hot Chili Peppers",
        cantidad: "1", 
        price: "1500", 
        image: "https://i.ibb.co/v10TjBC/im20.jpg"
    },
    
    {
        id: 6, 
        name: "Manic", 
        cd: "Halsey", 
        cantidad: "1", 
        price: "1695", 
        image: "https://i.ibb.co/wKY8qM4/im21.jpg"
    },
    
    {
        id: 7, 
        name: "Plastic Hearts", 
        cd: "Miley Cyrus", 
        cantidad: "1", 
        price: "3990", 
        image: "https://i.ibb.co/f9GWLH2/im22.jpg"
    },
    
    {
        id: 8,
        name: "Scaled and Icy", 
        cd: "Twenty One Pilots", 
        cantidad: "1", 
        price: "2100", 
        image: "https://i.ibb.co/zFk5qfK/im23.jpg"
    },
    
    {
        id: 9, 
        name: "Stoney", 
        cd: "Post Malone", 
        cantidad: "1", 
        price: "4959", 
        image: "https://i.ibb.co/C0YKyJL/im24.jpg"
    },
    
    {
        id: 10, 
        name: "The New Abnormal", 
        cd: "The Strokes", 
        cantidad: "1", 
        price: "4700", 
        image: "https://i.ibb.co/8PzqPqM/im25.jpg"
    },
    
    {
        id: 11,
        name: "Tickets To My Downfall", 
        cd: "Machine Gun Kelly", 
        cantidad: "1", 
        price: "5007", 
        image: "https://i.ibb.co/ZV47TZK/im26.jpg"
    },
    
    {
        id: 12, 
        name: "Underclass Hero", 
        cd: "Sum 41", 
        cantidad: "1", 
        price: "6500", 
        image: "https://i.ibb.co/wyncnPK/im27.jpg"
    }
]

const getDiscos= () => {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(
                () => {
                    resolve(discosCatalogo);
                }, 2000
            )
        }
    )
};

async function fetchDiscos(){
    const discoPromise = await getDiscos();
    console.log(discoPromise);
}

fetchDiscos();


const ItemListContainer = () => {
    return ( 
        <div className="Container-General">
            {discosCatalogo.map((disco, i) => (
                <div className="sectionCds">
            <div key={i} className="card">
                <h3>{disco.name}</h3>
                <h5>{disco.cd} </h5>
                <img alt={`Disco ${disco.name}`} src={disco.image}/>
                <h4> Precio: ${disco.price} </h4>
                <button type="button" class="btn btn-outline-dark">Compar</button>
                </div>
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;