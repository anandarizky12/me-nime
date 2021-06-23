import {SearchIcon,CollectionIcon, HomeIcon, ClockIcon, StarIcon, HeartIcon} from  '@heroicons/react/solid'
const content=[
    {
        id:0,
        title:"Home",
        icon:<HomeIcon className="HomeIcon"/>,
        link:'',
    },
    {
        id:1,
        title:"Popular",
        icon:<HeartIcon className="HomeIcon"/>,
        link:'MostPopular',
    },
    {
        id:2,
        title:"Top",
        icon:<StarIcon className="HomeIcon"/>,
        link:"TopRating"
    },
    {
        id:3,
        title:"Recomended",
        icon:<CollectionIcon className="HomeIcon"/>,
        link:'Recomended'
    },
    {
        id:4,
        title:"Upcoming",
        icon:<ClockIcon className="HomeIcon"/>,
        link:'Upcoming',
    }
]
export default content;