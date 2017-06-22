// content area update on hover
$('.teams-list .column').mouseover( function(){
    set_active_tab($(this))
});
set_active_tab($('.teams-list .column.active'))

function set_active_tab(e){
    e.siblings().removeClass('active');
    e.addClass('active');
    var name = e.data('name');
    var title = e.data('title');
    var bio = e.find('p.bio').text();
    // console.log(name+"<===>"+title);
    $('#name h2').text(name);
    $('#title p.f').text(title);
    $('#bio p').text(bio);
}








