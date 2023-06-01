<?php
$page ='sanitaryware';
?>

<?php include '../inc/head.php'; ?>
<?php include '../database.php';?>

<title>Ivas -  Sanitaryware</title>
<meta name="description" content="" />
<link rel="canonical" href="" />

<?php include '../inc/header.php'; ?>
 
<div class="bg-body-white">

<div class="modular-kitchen-banner py-5" id="sanitaryware-list-page-banner">
        <div class="container">
		<div class="row align-items-center">
		<div class="col-sm-8 px-5 py-5">
          <div class="text-start">
            <h2 class="m-0 py-4">Sanitaryware</h2>
          </div>
		  
		   </div>
		  


      </div>
		  
		  
        </div>
      </div>


<div class="container py-5">




         <div class="row search-filter-dd">
         <div class="col"> 
         <div class="hide-desktop"><span onclick="openFilter()"><i class="fa fa-filter" aria-hidden="true"></i> Filter</span></div>
         </div>
         <div class="col"> 
            <div class="serach-bar">
            <form method="POST" class="form-inline">
                <input type="text" id="txt_search" class="form-control" placeholder="Search Products...">
                
                </form>
            </div></div>
  </div>



        <div class="row">
			
            <div class="col-md-3 product-filter">                				
				<!--<div class="list-group">
					<h3>Price</h3>
					<input type="hidden" id="hidden_minimum_price" value="0" />
                    <input type="hidden" id="hidden_maximum_price" value="65000" />
                    <p id="price_show">1000 - 65000</p>
                    <div id="price_range"></div>
                </div>-->			


                <div id="filterMob" class="filter-nav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeFilter()">&times;</a>
  <div class="filter-nav-content">
  <?php include 'sanitaryware_filter.php' ?>
  </div>
</div>



<div class="hide-mobile">
<?php include 'sanitaryware_filter.php' ?>
</div>
            </div>

            <div class="col-md-9 product_data">

                <div class="row filter_data" id="content" >
                
                
                </div>
            </div>
        </div>

    </div>



 
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

                     
                     <button type="button" class="btn btn-secondary close-btn-pop" data-bs-dismiss="modal">&times;</button>  
                     

                <div class="modal-body p-0" id="product_detail">
                </div>  
               
           </div>  
      </div>  
 </div>

  
<?php include '../inc/footer-js.php'; ?>
<script type="text/javascript" src="./js/jquery-1.10.2.min.js"></script>

<script src="./js/swiper-bundle.min.js"></script>
<!-- <script src="../js/search.js"></script> -->
<script type="text/javascript" src="./js/sanitaryware/sanitaryware.js"></script>
<script type="text/javascript" src="./js/sanitaryware/sanitaryware_search.js"></script>

<script>
function openFilter() {
  document.getElementById("filterMob").style.width = "70%";
}

function closeFilter() {
  document.getElementById("filterMob").style.width = "0%";
}
</script>


<?php include '../inc/footer.php'; ?>
