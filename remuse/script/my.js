/**
 * Created by Administrator on 2017/10/24 0024.
 */
$(function(){
    $('#fullpage').fullpage({
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        anchors:['page1','page2','page3','page4','page5'],
        menu:'#menu',
        continuousVertical: true,
        afterLoad:function(anchorLink, index) {
            $('.section').removeClass('current');
            $('#menu li').eq(index - 1).addClass('active');
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100)
        }
})
})