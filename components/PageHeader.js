
export default function PageHeader({pagename,heading,imagepath}){
    return <>
        <section class="hero-wrap hero-wrap-2 p-0 m-0" style={headerStyle(imagepath)} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container" >
                <div class="row no-gutters slider-text align-items-end justify-content-center">
                <div class="col-md-9 ftco-animatee mb-5 text-center">
                    <p class="breadcrumbs mb-0"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span>{pagename} <span><i class="fa fa-chevron-right"></i></span></p>
                    <h1 class="mb-0 bread">{heading}</h1>
                </div>
                </div>
            </div>
            </section>

            
    </>
}

const headerStyle = (imagepath) => ({

    backgroundImage: imagepath ? 'url(' + `${imagepath}` + ')' : 'url(' + 'http://localhost:1337/uploads/image_2_bc89942dc6.png' + ')',
    paddingTop: '0 px !important',
    margin: '0 px'

})