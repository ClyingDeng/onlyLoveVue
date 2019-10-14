<template>
  <div class="container" style="margin-top: 100px">
    <div class="row">
      <div class="col-md-12 shop">
        <i class="fa fa-gift" aria-hidden="true" style="color:#eb3b5a"></i>商城
      </div>
      <!-- <div class="col-md-4">
        <div class="work-box">
          <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
            <div class="work-img">
              <img src="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" alt class="img-fluid" />
            </div>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-12">
                  <h2 class="w-title">rose</h2>
                  <p>
                    <span class="w-date">单价</span>
                    <span class="w-date">￥29</span>
                  </p>
                  <div class="w-more">
                    <span
                      class="w-ctegory"
                    >传说玫瑰花伴随着爱与美的女神阿佛洛狄忒诞生于爱琴海中，成为了美神的化身，而且又溶入了爱神的血液。让其赋予了深厚的情感寓意，随着时间的慢慢推移，这种情感寓意就被人们公认为是玫瑰花花语的初始</span>
                  </div>
                  <div>
                    <el-input-number
                      v-model="num"
                      @change="handleChange"
                      :min="1"
                      :max="10"
                      label="描述文字"
                    ></el-input-number>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div> -->
    </div>
<section class="bg-light">
<div class="container">

	<div class="row mb-4">
		<div class="col-md-4">
		    <div class="product border">
		        <div class="product-img">
		            <img src="http://www.ansonika.com/panagea/img/tour_1.jpg">
		        </div>
		        <div class="product-block">
		            <h5>Discover our Featured </h5>
		            <h5 class="text-danger">Rs. 7.95 Lakh</h5>
		            <ul class="list-inline ">
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i> 2010</li>
                    <li class="list-inline-item"><i class="fa fa-car"></i> Private</li>
                    <li class="list-inline-item"><i class="fa fa-tint"></i> Diesel</li>
                </ul>
		        </div>
		        <div class="product-footer">
		            <div class="row">
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		<div class="col-md-4">
		    <div class="product border">
		        <div class="product-img">
		            <img src="http://www.ansonika.com/panagea/img/tour_1.jpg">
		        </div>
		        <div class="product-block">
		            <h5>Discover our Featured </h5>
		            <h5 class="text-danger">Rs. 7.95 Lakh</h5>
		            <ul class="list-inline ">
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i> 2010</li>
                    <li class="list-inline-item"><i class="fa fa-car"></i> Private</li>
                    <li class="list-inline-item"><i class="fa fa-tint"></i> Diesel</li>
                </ul>
		        </div>
		        <div class="product-footer">
		            <div class="row">
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		<div class="col-md-4">
		    <div class="product border">
		        <div class="product-img">
		            <img src="http://www.ansonika.com/panagea/img/tour_1.jpg">
		        </div>
		        <div class="product-block">
		            <h5>Discover our Featured </h5>
		            <h5 class="text-danger">Rs. 7.95 Lakh</h5>
		            <ul class="list-inline ">
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i> 2010</li>
                    <li class="list-inline-item"><i class="fa fa-car"></i> Private</li>
                    <li class="list-inline-item"><i class="fa fa-tint"></i> Diesel</li>
                </ul>
		        </div>
		        <div class="product-footer">
		            <div class="row">
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	
		
	</div>
	<div class="row mb-4">
		<div class="col-md-4">
		    <div class="product border">
		        <div class="product-img">
		            <img src="http://www.ansonika.com/panagea/img/tour_1.jpg">
		        </div>
		        <div class="product-block">
		            <h5>Discover our Featured </h5>
		            <h5 class="text-danger">Rs. 7.95 Lakh</h5>
		            <ul class="list-inline ">
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i> 2010</li>
                    <li class="list-inline-item"><i class="fa fa-car"></i> Private</li>
                    <li class="list-inline-item"><i class="fa fa-tint"></i> Diesel</li>
                </ul>
		        </div>
		        <div class="product-footer">
		            <div class="row">
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		<div class="col-md-4">
		    <div class="product border">
		        <div class="product-img">
		            <img src="http://www.ansonika.com/panagea/img/tour_1.jpg">
		        </div>
		        <div class="product-block">
		            <h5>Discover our Featured </h5>
		            <h5 class="text-danger">Rs. 7.95 Lakh</h5>
		            <ul class="list-inline ">
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i> 2010</li>
                    <li class="list-inline-item"><i class="fa fa-car"></i> Private</li>
                    <li class="list-inline-item"><i class="fa fa-tint"></i> Diesel</li>
                </ul>
		        </div>
		        <div class="product-footer">
		            <div class="row">
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		<div class="col-md-4">
		    <div class="product border">
		        <div class="product-img">
		            <img src="http://www.ansonika.com/panagea/img/tour_1.jpg">
		        </div>
		        <div class="product-block">
		            <h5>Discover our Featured </h5>
		            <h5 class="text-danger">Rs. 7.95 Lakh</h5>
		            <ul class="list-inline ">
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i> 2010</li>
                    <li class="list-inline-item"><i class="fa fa-car"></i> Private</li>
                    <li class="list-inline-item"><i class="fa fa-tint"></i> Diesel</li>
                </ul>
		        </div>
		        <div class="product-footer">
		            <div class="row">
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		                <div class="col-md-6">
		                    <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	
		
	</div>
</div>
</section>


  </div>
</template>
<style scoped>
.shop {
  font-size: 30px;
  margin-bottom: 50px;
  padding-bottom: 10px;
  border-bottom: 2px solid #a5b1c2;
  color: #778ca3;
  font-weight: 545;
}
.work-img > img {
  height: 230px;
}
.w-title {
  font-size: 25px;
  color: #4b4b4b;
}
.w-date {
  font-size: 18px;
  color: #4b4b4b !important;
}
.w-ctegory {
  font-size: 13px;
  color: #4b4b4b !important;
}
.work-box:hover .w-ctegory {
  color: #ff9f1a !important;
}


img{width:100%;}
.product{background:#fff;}
.product:hover {background:#f2f2f2;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);}
.product-img {border-radius: 0px 0px 0 0;max-height:180px;overflow: hidden;}
.product-block{padding:15px;}
.product-footer {background:#f4f4f4;border-top:1px solid #ccc;padding:10px 15px 15px 10px}
.divider {border: 1px solid #ccc;}
.title-links ul {margin-bottom:10px; margin-top:10px;}

</style>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>