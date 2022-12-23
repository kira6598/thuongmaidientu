function ProductItem (props){
    return(
  
    <div className="prod-i">
                  <div className="prod-i-top">
                      <a href="/#" className="prod-i-img"><img src={props.image} alt="Adipisci aperiam commodi"/></a>
                      
                      <button  className="prod-i-buy" id={props.id} >Thêm vào giỏ</button>
                      <p className="prod-i-properties-label"><i className="fa fa-info"></i></p>

                      <div className="prod-i-properties">
                          <dl>
                              <dt>Exterior</dt>
                              <dd>Silt Pocket<br/></dd>
                              <dt>Material</dt>
                              <dd>PU<br/></dd>
                              <dt>Occasion</dt>
                              <dd>Versatile<br/></dd>
                              <dt>Shape</dt>
                              <dd>Casual Tote<br/></dd>
                              <dt>Pattern Type</dt>
                              <dd>Solid<br/></dd>
                              <dt>Style</dt>
                              <dd>American Style<br/></dd>
                              <dt>Hardness</dt>
                              <dd>Soft<br/></dd>
                              <dt>Decoration</dt>
                              <dd>None<br/></dd>
                              <dt>Closure Type</dt>
                              <dd>Zipper<br/></dd>
                          </dl>
                      </div>
                  </div>
                  <h3>
                      <a href="/">Adipisci aperiam commodi</a>
                  </h3>
                  <p className='prod-i-price'>
                      <b>{props.gia_thanh}</b>
                  </p>
              </div>

)}
export default ProductItem