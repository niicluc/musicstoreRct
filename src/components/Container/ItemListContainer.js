import "./ItemListContainer.css" ;
import ItemCount from "../CarWidget/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const discosCatalogo = [
    {
        id: 1,
        categoria: "cd",
        name: "Amo", 
        cd: "Bring Me The Horizon", 
        cantidad: "6",
        price: "5629", 
        image: "https://i.ibb.co/R7KLXFL/im16.jpg",
        fecha: "11/01/2019",
        canciones: [
            "1: I Apologise If You Feel Something",
            "2: Mantra" ,
            "3: Nihilist Blues",
            "4: In The Dark",
            "5: Wonderful Life",
            "6: Ouch",
            "7: Medicine",
            "8: Sugar Honey Ice y Tea",
            "9: Why You Gotta Kick Me When Im Down?",
            "10: Fresh Bruises",
            "11: Mothe Tongue",
            "12: Heavy Metal",
            "13: I Dont Know What To Say"
        ]
        
        
    },
    
    {
        id: 2, 
        categoria: "cd",
        name: "Death Of A Bachelor",
        cd: "Panic At The Disco", 
        cantidad: "3", "price": "3880",
        image: "https://i.ibb.co/sKvSTch/im17.jpg",
        fecha: "15/01/2016",
        canciones: [
            "1: Victorious",
            "2: Dont Threaten Me With A Good Time" ,
            "3: Hallelujah",
            "4: Emperor New Clothes",
            "5: Death Of A Bachelor",
            "6: Crazy Genius",
            "7: LA Devotee",
            "8: Golden Days",
            "9: The Good The Bad and the Dirty",
            "10: House of Memories",
            "11: Impossible Year"
        ]
    },
    
    {
        id: 3, 
        categoria: "cd",
        name: "Demon Days",
        cd: "Gorillaz", 
        cantidad: "4", 
        price: "5800",
        image: "https://i.ibb.co/QYvyLpJ/im18.jpg",
        fecha: "11/05/2005",
        canciones: [
            "1: Intro",
            "2: Last Living Souls" ,
            "3: Kids With Guns",
            "4: O Green World",
            "5: Dirty Harry",
            "6: Feel Good Inc",
            "7: El Mañana",
            "8: Every Planet We Reach Is Dead",
            "9: November Has Come",
            "10: All Alone",
            "11: White Light",
            "12: DARE",
            "13: Fire Coming Out of the Mokeys Head"
        ]
    },
    
    {
        id: 4, 
        categoria: "cd",
        name: "Happier Than Ever", 
        cd: "Billie Elish", 
        cantidad: "9", 
        price: "2200", 
        image: "https://i.ibb.co/0Kn5sqH/im19.jpg",
        fecha: "30/07/2021",
        canciones: [
            "1: Getting Older",
            "2: I Didint Change My Number" ,
            "3: Billie Bossa Nova",
            "4: My Future",
            "5: Oxytocin",
            "6: Goldwing",
            "7: Lost Cause",
            "8: Halley's Comet",
            "9: Not My Responsibility",
            "10: Overheated",
            "11: Your Power",
            "12: NDA",
            "13: Therefore I Am"
        ]
            },


    
    {
        id: 5, 
        categoria: "cd",
        name: "Im With You", 
        cd: "Red Hot Chili Peppers",
        cantidad: "2", 
        price: "1500", 
        image: "https://i.ibb.co/v10TjBC/im20.jpg",
        fecha: "26/08/2010",
        canciones: [
            "1: Monarchy Of Roses",
            "2: Factory of Faith" ,
            "3: Brenda Death Song",
            "4: Ethiopia",
            "5: Annie Wants a Baby",
            "6: Look Around",
            "7: The Adventures of Rain Dance Maggie",
            "8: Did I Let You Know",
            "9: Goodbye Hooray",
            "10: Happines Love Company",
            "11: Police Station",
            "12: Even Your Brutus?",
            "13: Meet me at the Corner"
        ]
    },
    
    {
        id: 6, 
        categoria: "cd",
        name: "Manic", 
        cd: "Halsey", 
        cantidad: "8", 
        price: "1695", 
        image: "https://i.ibb.co/wKY8qM4/im21.jpg",
        fecha: "17/01/2020",
        canciones: [
            "1: Ashley",
            "2: Clementine" ,
            "3: Graveyard",
            "4: You should be sad",
            "5: Forever Is a long time",
            "6: Dominics Interlude",
            "7: I Hate AEverybody",
            "8: 3 AM",
            "9: without Me",
            "10: Finally Beautiful Stranger",
            "11: Alain's Interlude",
            "12: Killing Boys",
            "13: More"
        ]
    },
    
    {
        id: 7, 
        categoria: "vinillo",
        name: "Plastic Hearts", 
        cd: "Miley Cyrus", 
        cantidad: "4", 
        price: "3990", 
        image: "https://i.ibb.co/f9GWLH2/im22.jpg",
        fecha: "27/11/2020",
        canciones: [
            "1: WTF Do I Know",
            "2: Plastic Hearts" ,
            "3: Angels like you",
            "4: Prisioner",
            "5: Gimme What I Want",
            "6: Night Crawling",
            "7: Midnight Sky",
            "8: High",
            "9: Hate Me",
            "10: Bad Karma",
            "11: Never Be Me",
            "12: Golden G String",
        ]
    },
    
    {
        id: 8,
        categoria: "vinillo",
        name: "Scaled and Icy", 
        cd: "Twenty One Pilots", 
        cantidad: "2", 
        price: "2100", 
        image: "https://i.ibb.co/zFk5qfK/im23.jpg",
        fecha: "07/04/2021",
        canciones: [
            "1: Good Day",
            "2: Choker" ,
            "3: Shy Away",
            "4: The Outside",
            "5: Saturday",
            "6: Never Take It",
            "7: Mulberry Street",
            "8: Formidable",
            "9: No Chances",
            "10: Redecorate",
        ]
    },
    
    {
        id: 9, 
        categoria: "vinillo",
        name: "Stoney", 
        cd: "Post Malone", 
        cantidad: "5", 
        price: "4959", 
        image: "https://i.ibb.co/C0YKyJL/im24.jpg",
        fecha: "09/12/2016",
        canciones: [
            "1: Broken Whiskey Glass",
            "2: Big Lie" ,
            "3: Deja Vu",
            "4: No Option",
            "5: Cold",
            "6: White Inversion",
            "7: I Fall Apart",
            "8: Patient",
            "9: Go Flex",
            "10: Feel",
            "11: Too Young",
            "12: Congratulations",
            "13: Up Here"
        ]
    },
    
    {
        id: 10, 
        categoria: "vinillo",
        name: "The New Abnormal", 
        cd: "The Strokes", 
        cantidad: "9", 
        price: "4700", 
        image: "https://i.ibb.co/8PzqPqM/im25.jpg",
        fecha: "10/04/2020",
        canciones: [
            "1: The Adults Are Talinkg",
            "2: Selfless" ,
            "3: Brooklyn Birdge to Chours",
            "4: Bad Decisions",
            "5: Eternal Summer",
            "6: At The Door",
            "7: Why Are Sundays So Depressing?",
            "8: No the Same Anymore",
            "9: Ode To The Mets",
        ]
    },
    
    {
        id: 11,
        categoria: "vinillo",
        name: "Tickets To My Downfall", 
        cd: "Machine Gun Kelly", 
        cantidad: "2", 
        price: "5007", 
        image: "https://i.ibb.co/ZV47TZK/im26.jpg",
        fecha: "25/09/2020",
        canciones: [
            "1: Title Track",
            "2: Kiss Kiss" ,
            "3: Drunk Face",
            "4: Bloody Valentine",
            "5: Forget Me Too",
            "6: All I Know",
            "7: Lonely",
            "8: WWIII",
            "9: Keving and Barracuda",
            "10: Concert for Aliens",
            "11: My Exs Best Friend",
            "12: Jawbreaker",
            "13: Nothing Inside"
        ]
    },
    
    {
        id: 12, 
        categoria: "vinillo",
        name: "Underclass Hero", 
        cd: "Sum 41", 
        cantidad: "1", 
        price: "6500", 
        image: "https://i.ibb.co/wyncnPK/im27.jpg",
        fecha: "24/07/2007",
        canciones: [
            "1: Underclass Hero",
            "2: Walking Disaster" ,
            "3: Speak of the Devil",
            "4: Dear Father",
            "5: Count Your Last Blessings",
            "6: Ma Poubelle",
            "7: March of the Dogs",
            "8: The Jester",
            "9: With Me",
            "10: Pull the Curtain",
            "11: King of Contradiction",
            "12: Best of Me",
            "13: So Long Goodbye"
        ]
    }
]



const discoId = (id) => {
    return discosCatalogo[id];
}

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

    const [products, setProducts] = useState([null])
    const {categoria} = useParams()
    useEffect (()=> {
        if (!categoria) return setProducts(discosCatalogo) /*si categoria no tiene nada/algn parametro que pase a la url trae todo los productos*/ 
        else {
        const productoEncontrado = discosCatalogo.filter(producto => producto.categoria === categoria)
        setProducts(productoEncontrado)
        } 
    },[categoria]) 
console.log(products)

    return ( 
        <div className="Container-General">
            {products.map((disco, i) => (
                <div className="sectionCds">
            <div key={i} className="card">
                <h3>{disco?.name}</h3>
                <h5>{disco?.cd} </h5>
                <img alt={`Disco ${disco?.name}`} src={disco?.image}/>
                <h4> Precio: ${disco?.price} </h4>
                <ItemCount stock={disco?.cantidad} initial={0}/>
                <button type="button" class="btn btn-outline-dark">Agregar al carrito</button>
                <Link to={`/item/${disco?.id}`} type="button" class="btn btn-outline-dark">Ver más detalle</Link>
                </div>
                </div>
            ))}
        </div>
    );
}




export default ItemListContainer;
