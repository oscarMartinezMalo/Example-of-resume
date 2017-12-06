<section class="contactme container-fluid pb-5" id="contactMe">
	<div class="container">
		<h1>Contact Me</h1>
		<hr class="hr">
		<div class="row pb-4">
			<div class="col-md-4">
				<div class="row mb-1">
					<div class="col-5">
						<div class="square rounded float-right"><span class="fa fa-envelope-open center-icons"></span></div>
					</div>
					<div class="col-7"><p class="mb-0"><strong>E-mail</strong></p>
						<p class="mb-0">walter@gmail.com </p> 
						<p class="mb-0">walter@fiu.com</p>
					</div>
				</div>			
			</div>
			<div class="col-md-4">
				<div class="row mb-1">
					<div class="col-5">
						<div class="square rounded float-right"><span class="fa fa-phone center-icons"></span></div>
					</div>
					<div class="col-7"><p class="mb-0"><strong>Phone</strong></p>
						<p class="mb-0">Mr 305 </p> 
						<p class="mb-0">305-786-7846</p>
					</div>
				</div>			
			</div>
			<div class="col-md-4">
				<div class="row mb-1">
					<div class="col-5">
						<div class="square rounded float-right"><span class="fa fa-map-marker center-icons"></span></div>
					</div>
					<div class="col-7"><p class="mb-0"><strong>Address</strong></p>
						<p class="mb-0">Mr 305 </p> 
						<p class="mb-0">305-786-7846</p>
					</div>
				</div>			
			</div>
		</div>
	    <form id="myForm" action="" >
			<div class="row mb-2">
				<div class="col-sm-6 form-group">
				  <input class="form-control" id="name" name="name" placeholder="Your Name" type="text" pattern="[A-Za-z]{3,40}" required>
				</div>
				<div class="col-sm-6 form-group input-group">
					<div class="input-group-addon">@</div>
				  	<input class="form-control " id="email" name="email" placeholder="Your Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
				</div>
			</div>
	      	<textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
			<div class="row mt-3">
				<div class="col-sm-12 form-group text-center m-0">
				  <button  class="btn btn-outline-primary btn-block" type="submit" id="submit">Send</button>
				</div>
			</div> 
	    </form>
     <!-- Modal -->
    	<div class="modal fade" id="myModal" role="dialog">
    		<div class="modal-dialog modal-sm">
    		  <div class="modal-content">
    		    <div class="modal-header bg-2">
    		      <button type="button" class="close" data-dismiss="modal">&times;</button>
    		      <h4 class="modal-title"></h4>
    		    </div>
    		    <div class="modal-body text-center bg-1">
    		      <p id="modalText"></p>
    		    </div>
    		    <div class="modal-footer bg-2">
    		      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    		    </div>
    		  </div>
    		</div>
    	</div>	  
	</div>
</section>