$(()=>{
    var txt = $(".product-layout-grid__detail .product-detail__title-area h1").text();
    const myInterval = setInterval(() => {
        $(".multivariants_block_label .mkmid_m").each(function(){
            $(this).parent().find(".mkmid_t").text(txt)
        })
    }, 300);
    
    // setTimeout(()=>{
    //     $(".multivariants_block_label .mkmid_m").each(function(){
    //         $(this).parent().find(".mkmid_t").text(txt)
    //     })
    // },300)

    $(".add_multi").click(function(){
        $("button#multivariants_add_to_cart_button").click();
    })
})