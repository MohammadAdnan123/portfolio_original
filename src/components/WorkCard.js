export default function WorkCard(props){
    return(
        <div className="work-box">
            <a id="work-img-area" href={props.item.url} target="_blank" rel="noopener noreferrer" data-aos="fade-right"><img id="work-img"  style={{height:'22rem'}} src={props.item.thumbnail} alt="" /></a>
            <div id="work-detail" data-aos="fade-left">
                <h3 id="work-heading"><a id="work-heading-area" href={props.item.url} target="_blank" rel="noopener noreferrer">{props.item.title}</a></h3>
                <p id="work-desc">{props.item.desc}</p>
            </div>
        </div>
    )
}