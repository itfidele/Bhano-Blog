(function($){
    if ($.adblockDetector) {
        alert('AdBlock Detector instance exists already');
        return;
    }

    $.adblockDetector = {
        detect: function() {
            var dfd = new $.Deferred();
            var adsEnabled = false;
            var $dummy = $('<div class="adsbox">&nbsp;</div>').appendTo('body');

            setTimeout(function () {
                if ($dummy.height() > 0) {
                    adsEnabled = true;
                }
                $dummy.remove();

                dfd.resolve(adsEnabled);
            }, 100);

            return dfd;
        }
    };
})(jQuery);

$.adblockDetector.detect().done(function(adsEnabled){
	if (!adsEnabled) {
	  // do something
      $('html').html("<center><h1>Please Disable ADBLOCKER First <br/> <center><a href='https://byosehano.com'>Go Back And Retry</a></center></h1></center>");
	}
});
