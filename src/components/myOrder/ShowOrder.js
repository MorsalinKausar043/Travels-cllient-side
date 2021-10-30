import "./myorder.css";

const ShowOrder = ({title , body , src , status}) => {
    return (
        <>
           <div class="card mb-3 mx-3" style={{maxWidth: "530px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={src} class="w-100 h-100" alt="oder_images"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text"><small class="text-muted">Status : {status}</small></p>
                        <div className="">
                            <button className="btn btn-danger me-3">Delete</button>
                            <input type="button" className="btn btn-outline-danger" value="Approved" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowOrder;