import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'

const about = () => {
  return (
    <div>
      <Meta title='OG - About' />
      <PageHeader pagename="About" heading="About Me" />

      <section class="ftco-section">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-3 ftco-animatee">
						<div class="staff">
							<div class="img-wrap d-flex align-items-stretch">
								<div class="img align-self-stretch" style={{backgroundImage: "url(images/staff-1.jpg);"}}></div>
							</div>
							<div class="text pt-3 text-center">
								<h3>Atty. Lloyd Wilson</h3>
								<span class="position mb-2">Civil Lawyer</span>
								<div class="faded">
									<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
									<ul class="ftco-social text-center">
		                <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
		                <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
		                <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
		                <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
          </div>
			</div>
		</section>
    </div>

  )
}

export default about
