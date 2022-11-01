var url = 'https://crm.biocoiff.com';
var Vtiger_WSClient = new Vtiger_WSClient(url);

var username = 'j9h6RgQGh0';
var accesskey = 'booking';

$(document).on('keypress', function (e) {
  if (e.which == 13) {

    var url = window.location.href;
    var split_url = url.split("#");
    if (split_url[1] == 'email-id') {
      if (jQuery("#email_otp").is(":visible")) {
        jQuery('#email_otp_check').trigger('click');
      }
      else {
        jQuery('#email_to_check').trigger('click');
      }

    }
    if (split_url[1] == 'fiche-confirmation') jQuery('#contact_create1').trigger('click');
    if (split_url[1] == 'choix') jQuery('#create_booking').trigger('click');
    if (split_url[1] == 'confirmation_sms') jQuery('#twilio_check').trigger('click');
    if (split_url[1] == 'find-contact') jQuery('#firstname_phone_to_check').trigger('click');
    if (split_url[1] == 'create') jQuery('#contact_create').trigger('click');
    if (split_url[1] == 'update-phone') jQuery('#btn_phone_num_updation').trigger('click');
  }
});


jQuery(document).ready(function () {

  var url = window.location.href;
  var split_url = url.split("#");
  var new_url = split_url[0] + '#home';
  window.history.pushState("object or string", "Title", new_url);




  function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  }





  var new_refcode = getUrlParameter('refcode');
  // var new_refcode = 'BIODEVTES7';

  if (new_refcode != undefined && new_refcode.length > 0) {
    jQuery('#get_referal_code').val(new_refcode);

  }


  jQuery('.more_info').on('click', function (e) {

    window.open(
      "https://www.biocoiff.com/parrainage-dans-les-salons-biocoiff/",
      '_blank'
    );

  })


  jQuery('.gmail').on('click', function (e) {
    e.preventDefault();
    var ref_code1 = jQuery('#referal_code').val();

    var ref_link = "https://www.biocoiff.com/booking_module/index.html?refcode=" + ref_code1;

    jQuery('#booking_link').val(ref_link);

    var subject = 'Je te parraine chez Biocoiff’ !';

    // var content = "Mon code parrain : "+ref_code1+"%0D%0A%0D%0A"+ref_link;
    var content = "Coucou, je viens de prendre rendez-vous chez Biocoiff’ et en te parrainant tu gagnes une réduction sur ta première séance.%0D%0A%0D%0ATu peux utiliser le code parrain " + ref_code1 + " à la caisse ou utiliser ce lien pour prendre rdv: " + ref_link + "%0D%0A%0D%0ABisous";


    if (window.matchMedia("(max-width: 700px)").matches) {

      window.open(
        "mailto:?subject=" + subject + "&body=" + content + "&ui=1",
        '_blank'
      );

    } else {

      window.open(
        "http://mail.google.com/mail/?view=cm&fs=1&to=&su=" + subject + "&body=" + content + "&ui=1",
        '_blank'
      );
    }



  })

  jQuery('.pinterest').on('click', function (e) {
    e.preventDefault();
    var ref_code1 = jQuery('#referal_code').val();

    var ref_link = "https://www.biocoiff.com/booking_module/index.html?refcode=" + ref_code1;

    jQuery('#booking_link').html(ref_link);

    var content = "Mon code parrain : " + ref_code1 + "%0D%0A%0D%0A" + ref_link;

    window.open(
      "https://www.pinterest.com/pin/create/button/?media=https://www.biocoiff.com/wp-content/uploads/2021/05/thumbnail-facebook-parrainage.jpg&amp;url=biocoiff.com&amp;description=" + content,
      '_blank'
    );

  })

  jQuery('.whatsapp').on('click', function (e) {
    e.preventDefault();

    var ref_code1 = jQuery('#referal_code').val();

    var ref_link = "https://www.biocoiff.com/booking_module/index.html?refcode=" + ref_code1;

    jQuery('#booking_link').html(ref_link);

    // var content = "Mon code parrain : "+ref_code1+"%0D%0A%0D%0A"+ref_link;
    var content = "Je te parraine chez Biocoiff' ! Utilise mon code parrain en caisse : " + ref_code1 + " ou prends RDV directement via cette adresse : " + ref_link;

    if (window.matchMedia("(max-width: 700px)").matches) {

      window.open(
        "whatsapp://send?text=" + content,
        '_blank'
      );


    } else {

      window.open(
        "https://web.whatsapp.com/send?text=" + content,
        '_blank'
      );
    }



  })


  jQuery('.facebook_messenger').on('click', function (e) {
    e.preventDefault();

    var ref_code1 = jQuery('#referal_code').val();

    var ref_link = "https://www.biocoiff.com/booking_module/index.html?refcode=" + ref_code1;

    jQuery('#booking_link').html(ref_link);

    var content = "Mon code parrain : " + ref_code1 + "%0D%0A%0D%0A" + ref_link;

    if (window.matchMedia("(max-width: 700px)").matches) {

      window.open(
        "https://m.me/",
        '_blank'
      );

    } else {

      window.open(
        "https://m.me/",
        '_blank'
      );
    }

  })


  jQuery('.twitter').on('click', function (e) {
    e.preventDefault();

    var ref_code1 = jQuery('#referal_code').val();

    var ref_link = "https://www.biocoiff.com/booking_module/index.html?refcode=" + ref_code1;

    jQuery('#booking_link').html(ref_link);

    // var content = "Mon code parrain : "+ref_code1+"%0D%0A%0D%0A"+ref_link;
    var content = "Je vous parraine chez @biocoiff (reduction à la clé)! Utilisez mon code parrain : " + ref_code1 + " en caisse ou cette adresse pour prendre rdv: " + ref_link;


    window.open(
      "https://twitter.com/intent/tweet?text=" + content,
      '_blank'
    );

  })


  jQuery('.facebook').on('click', function (e) {
    e.preventDefault();

    var ref_code1 = jQuery('#referal_code').val();

    var ref_link = "https://www.biocoiff.com/booking_module/index.html?refcode=" + ref_code1;

    jQuery('#booking_link').html(ref_link);

    var content = "Mon code parrain : " + ref_code1 + "%0D%0A%0D%0A" + ref_link;
    var title = "Faîtes comme moi : passez chez Biocoiff’ !";
    var summary = "Aujourd’hui, je vous parraine chez Biocoiff’! En prenant RDV, vous gagnez une réduction et moi aussi. Passez au BIO, passez chez Biocoiff’!";

    /*window.open(
        "http://www.facebook.com/sharer.php?s=100&p[title]="+title+"&p[summary]="+summary+"&p[url]="+ref_link+"&p[images][0]=https://www.biocoiff.com/wp-content/uploads/2021/05/thumbnail-facebook-parrainage.jpg",
            '_blank' 
        );*/

    window.open(
      "https://www.facebook.com/sharer.php?quote=Faîtes comme moi : passez chez Biocoiff’ !%0D%0A%0D%0A Aujourd’hui, je vous parraine chez Biocoiff’! En prenant RDV, vous gagnez une réduction et moi aussi. Passez au BIO, passez chez Biocoiff’ !%0D%0A%0D%0A" + content + "&u=https%3A%2F%2Fwww.biocoiff.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fthumbnail-facebook-parrainage.jpg",
      '_blank'
    );

  })






  var maxLen = 75;
  var maxLen = 75;
  $('#note').on('keyup', function (event) {
    $('.text_dt').show();
    var Length = $("#note").val().length;
    var AmountLeft = maxLen - Length;
    if (AmountLeft == 0) {
      $(".text_dt").css({ 'color': 'red' });
    }

    else {
      $(".text_dt").css({ 'color': '#808080' });
    }
    $('#txt-length-left').html(AmountLeft);
    if (Length >= maxLen) {
      if (event.which != 48) {
        return false;
      }
    }
  });


  $('#note-mobile').on('keyup touchend', function (event) {
    $('.text_dt1').show();
    var Length = $("#note-mobile").val().length;
    var AmountLeft = maxLen - Length;
    if (AmountLeft == 0) {
      $(".text_dt1").css({ 'color': 'red' });
    }
    else if (AmountLeft < 0) {
      AmountLeft = 0;
    }
    else {
      $(".text_dt1").css({ 'color': '#808080' });
    }
    $('#txt-length-left-mobile').html(AmountLeft);
    if (Length >= maxLen) {
      if (event.which != 48) {
        return false;
      }
    }
  });


  Vtiger_WSClient.doLogin(username, accesskey, postLogin);
  function postLogin(result, args) {
    if (!result) console.log('Login failed');
    else invokeMethod();
  }

  function invokeMethod() {

    var valuesmap = { 'mode': 'get_services', 'data': 'Saloon', 'lflag': 'fr' };
    Vtiger_WSClient.doInvoke(postInvoke, 'bio_works', { 'element': JSON.stringify(valuesmap) });
    // postInvoke gets a call once request is completed 
  }

  function postInvoke(result, args) {
    // console.log(result);   
    if (result == false) {
      alert(Vtiger_WSClient.lastError()['message']);
    }
    else {
      jQuery('#Service').html(result);
    }

    var valuesmap = { 'mode': 'get_saloon1', 'data': window.location.href, 'lflag': 'fr' };
    Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works', { 'element': JSON.stringify(valuesmap) });
  }

  function postInvoke1(result, args) {
    // console.log(result);   
    if (result == false) {
      alert(Vtiger_WSClient.lastError()['message']);
    }
    else {
      var res1 = result['result'];
      var iframe_flag = result['exists'];
      jQuery('#Saloon').html(res1);
      if (iframe_flag == 'exists') {
        jQuery('#Saloon').prop('disabled', true);
      }
      // jQuery('#Saloon').html(result); 
    }
  }

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  function formatDate_new(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  }


  function format_date_and_time(input) {
    if (input < 10) {
      var output = '0' + input;
    }
    else {
      var output = input;
    }

    return output;
  }

  jQuery('#create_booking').on('click', function () {
    var date_time = $('#demo').datetimepicker('getValue');

    var date_date = jQuery('.xdsoft_date.xdsoft_current').data('date');
    var date_month = jQuery('.xdsoft_date.xdsoft_current').data('month');
    var date_year = jQuery('.xdsoft_date.xdsoft_current').data('year');
    var time_hour = jQuery('.xdsoft_time.xdsoft_current').data('hour');
    var time_minute = jQuery('.xdsoft_time.xdsoft_current').data('minute');

    var date_date1 = format_date_and_time(date_date);
    var date_month1 = format_date_and_time(date_month + 1);
    var time_hour1 = format_date_and_time(time_hour);

    if (time_hour == undefined) {
      var ns = jQuery('.slot_ns').length;
      if (ns < 1) {
        jQuery('.xdsoft_timepicker').after('<p class="slot_ns" style="text-align: center;"><span style="text-align: center; color: red; background-color: #ffe6e6; border: 1 px solid #ff1a1a;">Choisissez un créneau</span></p>');
      }
    }
    else {
      var ns_de = jQuery('.slot_ns').length;
      if (ns_de > 0) {
        jQuery('.xdsoft_timepicker').find('.slot_ns').remove();
      }

      if (time_minute == 30) {
        var start_time = time_hour + ':' + time_minute;
        // var end_time = time_now2+':'+minutes_now;
      }
      else {
        var start_time = time_hour + ':00';
        // var end_time = time_now2+':00';
      }

      var selected_date = date_year + '-' + date_month1 + '-' + date_date1;
      var date_time1 = formatDate(date_time);

      var date_time1_new = formatDate_new(date_time);


      var d1 = new Date(date_time)
      var time_now = d1.getHours();
      var minutes_now = d1.getMinutes();
      // console.log(minutes_now)
      var time_now2 = time_now + 1;

      var weekday = new Array(7);
      weekday[0] = "Dimanche";
      weekday[1] = "Lundi";
      weekday[2] = "Mardi";
      weekday[3] = "Mercredi";
      weekday[4] = "Jeudi";
      weekday[5] = "Vendredi";
      weekday[6] = "Samedi";

      var day = weekday[d1.getDay()];

      d2 = new Date(d1);
      d2.setMinutes(d1.getMinutes() + 30);
      var time_now_2 = d2.getHours();
      var minutes_now_2 = d2.getMinutes();


      if (time_now < 10) {
        time_now = '0' + time_now;
      }
      if (time_now_2 < 10) {
        time_now2 = '0' + time_now_2;
      }
      if (minutes_now == 30) {
        var start_time11 = time_now + ':' + minutes_now;
        // var end_time = time_now2+':'+minutes_now;
      }
      else {
        var start_time11 = time_now + ':00';
        // var end_time = time_now2+':00';
      }

      if (minutes_now_2 == 30) {
        // var start_time = time_now+':'+minutes_now;
        var end_time = time_now_2 + ':' + minutes_now_2;
      }
      else {
        // var start_time = time_now+':00';
        var end_time = time_now2 + ':00';
      }

      jQuery('.start_time_final').text(start_time);

      jQuery('#end_time_final').text(end_time);



      Vtiger_WSClient.doLogin(username, accesskey, postLogin);
      function postLogin(result, args) {
        if (!result) console.log('Login failed');
        else createModuleRecord();
      }
      function createModuleRecord() {
        var module = 'Calendar';
        var Saloon = jQuery('#Saloon option:selected').val();
        var Service = jQuery('#Service option:selected').val();
        var Option = jQuery('#Option option:selected').val();


        if (Saloon.length < 1) {
          jQuery('#Saloon').focus();
          jQuery('#Saloon').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
          jQuery('.Saloon').text('Please select a Saloon');
          jQuery('.Saloon').css({ "color": "red" });

        }

        if (Service.length < 1) {
          jQuery('#Service').focus();
          jQuery('#Service').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
          jQuery('.Service').text('Please select a Service');
          jQuery('.Service').css({ "color": "red" });

        }

        if (Option.length < 1) {
          jQuery('#Option').focus();
          jQuery('#Option').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
          jQuery('.Option').text('Please select an Option');
          jQuery('.Option').css({ "color": "red" });

        }

        var message = $('textarea#note').val();
        if (message == '') {
          var message = $('textarea#note-mobile').val();
        }


        var contact_id = jQuery('#contact_record_new').val();



        var Saloon_new = jQuery('#Saloon option:selected').text();


        /*jQuery('#new_saloon').text(Saloon_new);
        jQuery('#new_service').text(Service);
        jQuery('#new_option').text(Option);
        jQuery('#new_date').text(date_time1_new);
        jQuery('#new_day').text(day);*/

        if (Service == 'Mèches') {
          var DisplayService = 'Balayage mineral';
        }
        else {
          var DisplayService = Service;
        }

        jQuery('.new_saloon').text(Saloon_new);
        jQuery('.new_service').text(DisplayService);
        jQuery('.new_option').text(Option);
        jQuery('.new_date').text(date_time1_new);
        jQuery('.new_day').text(day);


        jQuery('#new_service1').text(DisplayService);
        jQuery('#new_option1').text(Option);
        jQuery('#new_date1').text(date_time1_new);
        jQuery('#day1').text(day);
        jQuery('#start_time_final1').text(start_time);
        jQuery('#end_time_final1').text(end_time);

        // var display_txt = Saloon +"\n" + Service +"\n" + Option +"\n" + message;
        var display_txt = Service + ' , ' + Option;

        // var email = jQuery('#email').val();  

        var ref_cnt_id_1 = jQuery('#contact_record_id').val();

        console.log(selected_date);
        console.log(date_time1);


        if (contact_id != '') {
          var mode_data = jQuery('#mode_data').val();
          var temp_id = jQuery('#temp_id').val();
          var valuesmap = { 'subject': 'Appointment1', 'selected_date': selected_date, 'date_start': date_time1, 'due_date': date_time1, 'time_start': start_time, 'duration_hours': 0, 'duration_minutes': 30, 'time_end': end_time, 'activitytype': 'Task', 'eventstatus': 'Planned', 'visibility': 'all', 'contact_id': contact_id, 'taskstatus': 'Planned', 'cf_993': display_txt, 'eventclass': 'r51', 'mode': 'Appointment', 'Saloon': Saloon, 'Option': Option, 'mode_data': mode_data, 'temp_id': temp_id, 'remarque': message, 'saloon_name': Saloon_new, 'Service_label': Service, 'cf_1391': 1, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id_1 };
        }
        else {
          var valuesmap = { 'subject': 'Appointment1', 'selected_date': selected_date, 'date_start': date_time1, 'due_date': date_time1, 'time_start': start_time, 'duration_hours': 0, 'duration_minutes': 30, 'time_end': end_time, 'activitytype': 'Task', 'eventstatus': 'Planned', 'visibility': 'all', 'contact_id': contact_id, 'taskstatus': 'Planned', 'cf_993': display_txt, 'eventclass': 'r51', 'mode': 'Appointment', 'Saloon': Saloon, 'Option': Option, 'remarque': message, 'saloon_name': Saloon_new, 'Service_label': Service, 'cf_1391': 1, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id_1 };
        }

        var HairDresser = jQuery('#HairDresser option:selected').val();

        var reset_slot1 = jQuery('#reset_flag').val();
        if (reset_slot1 == 'reset_slot') {
          valuesmap.otp_resend = 'no';
        }


        // Vtiger_WSClient.doCreate(module, valuesmap, afterCreateRecord);  

        if (Saloon.length > 0 && Service.length > 0 && Option.length > 0) {
          if (HairDresser != '') {
            valuesmap.saloon_staff_name = HairDresser;
            console.log(valuesmap)
            Vtiger_WSClient.doInvoke(afterCreateRecord2, 'bio_works8', { 'element': JSON.stringify(valuesmap) });
          }
          else {
            Vtiger_WSClient.doInvoke(afterCreateRecord2, 'bio_works8', { 'element': JSON.stringify(valuesmap) });

          }
        }
        // 

        // afterCreateRecord gets a call once request is completed 
      }


      function afterCreateRecord2(result, args) {
        if (result) {

          if (result.data_msg == 'added') {

            jQuery('.new_lastname').text(result.lastname);
            jQuery('.new_firstname').text(result.firstname);
            jQuery('.new_email').text(result.email);
            jQuery('.new_mobile').text(result.mobile);
            jQuery('.fifth').hide();
            // jQuery('.sixthdiv').show();

            var url = window.location.href;
            var split_url = url.split("#");
            var new_url = split_url[0] + '#confirmation_sms';
            console.log(new_url)
            window.history.pushState("object or string", "Title", new_url);
          }
          else {
            var Appointment_id = result;
            jQuery('#vt_appt_id').val(Appointment_id);
            jQuery('.fifth').hide();

            jQuery('#twilio_check').show();
            jQuery('#twilio_check').prop('disabled', false);
            jQuery('.fifth_twilio').show()[0].scrollIntoView();

            var url = window.location.href;
            var split_url = url.split("#");
            var new_url = split_url[0] + '#confirmation_sms';
            window.history.pushState("object or string", "Title", new_url);

          }


          /*var Saloon = jQuery('#Saloon option:selected').val();
          Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works2', { 'id' : Appointment_id, 'data': Saloon} );
          var contact_id = jQuery('#contact_record_new').val(); */
        }


      }
    }

  });


  jQuery('#twilio_check').on('click', function () {

    var twilio_otp_1 = jQuery('#twilio_otp').val();
    if (twilio_otp_1.length > 0) {
      $('#twilio_check').prop('disabled', true);
      jQuery('#loading1').show();
    }

    Vtiger_WSClient.doLogin(username, accesskey, postLogin);
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      else createModuleRecord();
    }
    function createModuleRecord() {
      var module = 'Calendar';
      var vt_id = jQuery('#vt_id').val();
      if (vt_id == '') {
        vt_id = jQuery('#temp_id').val();

      }
      var vt_appt_id = jQuery('#vt_appt_id').val();
      var twilio_otp = jQuery('#twilio_otp').val();

      var ref_cnt_id2 = jQuery('#contact_record_id').val();
      var saloon_id = jQuery('#saloon_id').val();

      // var email = jQuery('#email').val();  
      // var valuesmap = {'contact_id' : vt_id, 'vt_appt_id': vt_appt_id, 'twilio_otp': twilio_otp, 'mode': 'twilio_verify1', 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id2, 'saloon_id': saloon_id};    

      var reset_flag1 = jQuery('#reset_flag').val();
      if (reset_flag1 == 'reset_slot') {
        twilio_otp = '123456';
        var valuesmap = { 'reset_slot': reset_flag1, 'contact_id': vt_id, 'vt_appt_id': vt_appt_id, 'twilio_otp': twilio_otp, 'mode': 'twilio_verify1', 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id2, 'saloon_id': saloon_id, 't_f': 'test' };

      }
      else {
        var valuesmap = { 'contact_id': vt_id, 'vt_appt_id': vt_appt_id, 'twilio_otp': twilio_otp, 'mode': 'twilio_verify1', 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id2, 'saloon_id': saloon_id, 't_f': 'test' };

      }

      // Vtiger_WSClient.doCreate(module, valuesmap, afterCreateRecord);  

      if (twilio_otp.length > 0) {
        Vtiger_WSClient.doInvoke(afterCreateRecord_2, 'bio_works8', { 'element': JSON.stringify(valuesmap) });
      }


      // afterCreateRecord gets a call once request is completed 
    }



    function afterCreateRecord_2(result, args) {
      if (result) {

        // console.log(result)

        var message = result.msg;
        var stripe = result.stripe;
        if (message == 'verified') {

          if (stripe == 'yes') {

            jQuery('#stripe_btn').trigger('click');

            var capture_amount = result.stripe_amount;
            jQuery('#loading1').hide();
            jQuery('.stripe_payment').show();
            jQuery('.stripe_head').show();
            jQuery('.local_head').hide();
            jQuery('#twilio_check').hide();
            jQuery('#otp_sms').hide();
            jQuery('#otp_sms1').hide();
            jQuery('.link_up_phone').hide();
            jQuery('.summ_1').hide();
            jQuery('#stripe_flag').val(1);
            jQuery('#capture_amount').text(capture_amount);
          }
          else {
            jQuery('#stripe_flag').val(0);
            jQuery('#booking_btn').trigger('click');
          }

        }
        else {
          jQuery('#loading1').hide();
          $('#twilio_check').prop('disabled', false);
          // jQuery('.fifth_twilio').hide();
          // jQuery('.seven').show();  
          jQuery('.inv_otp').text('Code invalide');
          jQuery('#twilio_otp').focus();
          jQuery('#twilio_otp').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" })
        }

      }

    }


  });


  jQuery('#booking_btn').on('click', function () {
    jQuery('#loading1').show();
    jQuery('.stripe_payment').hide();

    Vtiger_WSClient.doLogin(username, accesskey, postLogin);
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      else createModuleRecord();
    }
    function createModuleRecord() {
      var module = 'Calendar';
      var vt_id = jQuery('#vt_id').val();
      if (vt_id == '') {
        vt_id = jQuery('#temp_id').val();

      }
      var vt_appt_id = jQuery('#vt_appt_id').val();
      var twilio_otp = jQuery('#twilio_otp').val();

      var ref_cnt_id2 = jQuery('#contact_record_id').val();

      var payment_id = jQuery('#payment_id').val();
      var paymentid = jQuery('#paymentid').val();
      var customer_id = jQuery('#customer_id').val();

      var stripe_flag = jQuery('#stripe_flag').val();

      var reset_flag = jQuery('#reset_flag').val();

      // var email = jQuery('#email').val();  
      var valuesmap = { 'reset_flag': reset_flag, 'contact_id': vt_id, 'vt_appt_id': vt_appt_id, 'twilio_otp': twilio_otp, 'mode': 'twilio_verify', 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id2, 'payment_id': payment_id, 'paymentid': paymentid, 'customer_id': customer_id, 'stripe_flag': stripe_flag };

      // Vtiger_WSClient.doCreate(module, valuesmap, afterCreateRecord);  
      Vtiger_WSClient.doInvoke(afterCreateRecord2, 'bio_works8', { 'element': JSON.stringify(valuesmap) });

      // afterCreateRecord gets a call once request is completed 
    }


    function afterCreateRecord2(result, args) {
      if (result) {

        // console.log(result)

        jQuery('#twilio_otp').val('');
        if (result.reset_field == 'newcontact' || result.reset_field == 'existingcontact') {
          $('#twilio_check').hide();
          jQuery('#resetModal').modal('show');

        }

        var message = result.msg;
        if (message == 'verified') {

          (function (w, d, t, r, u) { var f, n, i; w[u] = w[u] || [], f = function () { var o = { ti: "27016464" }; o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad") }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { var s = this.readyState; s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null) }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i) })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
          jQuery('.fifth_twilio').hide();
          // jQuery('.sixthdiv').show();  

          var ref_feature = result.ref_feature;



          jQuery('.sixthdiv-mobile-class').show();
          if (ref_feature == 'apply') {
            jQuery('.sixthdiv-summary').hide();
            jQuery('.sixthdiv').show();
            jQuery('.sixthdiv-referral').show();

            // jQuery('.ref_enabled').show();
            jQuery('.sixthdiv-referral-mobile').show();
          }
          else {
            console.log('ref_feature')
            jQuery('.sixthdiv-summary').show();
            jQuery('.sixthdiv').hide();
            jQuery('.sixthdiv-referral').hide();
            jQuery('.sixthdiv-referral-mobile').hide();

            // jQuery('.ref_enabled').hide();

          }


          var referal_code = result.ref_code;
          jQuery('#referal_code').val(referal_code);
          jQuery('.my_referal_code').html(referal_code);

          var ref_link = "www.biocoiff.com/booking_module/index.html?refcode=" + referal_code;

          jQuery('#booking_link').val(ref_link);

          var content = "Mon code parrain : " + referal_code + "%0D%0A%0D%0A" + ref_link;

          var url = window.location.href;
          var split_url = url.split("#");
          var new_url = split_url[0] + '#rdv_ok';
          window.history.pushState("object or string", "Title", new_url);

          var contact_id = result.contact_id;
          Vtiger_WSClient.doRetrieve(contact_id, processModuleRecord3);


        }
        else if (message == 'appointment not created') {
          location.reload(true);
        }

        /*var Appointment_id = result;
        jQuery('#vt_appt_id').val(Appointment_id);
        jQuery('.fifth_twilio').show();*/

        /*var Saloon = jQuery('#Saloon option:selected').val();
        Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works2', { 'id' : Appointment_id, 'data': Saloon} );
        var contact_id = jQuery('#contact_record_new').val(); */
      }


    }

    function processModuleRecord3(result, args) {
      if (result) {

        jQuery('.fifth').hide();
        // jQuery('.sixthdiv').show();

        jQuery('.new_lastname').text(result.lastname);
        jQuery('.new_firstname').text(result.firstname);
        jQuery('.new_email').text(result.email);
        jQuery('.new_mobile').text(result.mobile);


      }

    }







    /* function afterCreateRecord(result, args) {    
         if(result)
         {
             var Appointment_id = result.id;
             var Saloon = jQuery('#Saloon option:selected').val();
             Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works2', { 'id' : Appointment_id, 'data': Saloon} );
             var contact_id = jQuery('#contact_record_new').val(); 
         } 
          
         
     }

     function postInvoke1(result, args) {    
         if(result)
         {

             
             var contact_id = jQuery('#contact_record_new').val(); 
             Vtiger_WSClient.doRetrieve(contact_id, processModuleRecord);
         } 
          
         
     }

     function processModuleRecord(result, args) {    
         if(result)
         {
             
             jQuery('.fifth').hide();
             jQuery('.sixthdiv').show();

             jQuery('#new_lastname').text(result.lastname);
             jQuery('#new_firstname').text(result.firstname);
             jQuery('#new_email').text(result.email);
             jQuery('#new_mobile').text(result.mobile);

            
         }

     }*/

  });

  jQuery('#yes').on('click', function () {
    jQuery('.firstdiv').hide();
    jQuery('.seconddiv').show();

    var url = window.location.href;
    var split_url = url.split("#");
    var new_url = split_url[0] + '#email-id';
    window.history.pushState("object or string", "Title", new_url);
    // window.history.pushState("object or string", "Title", new_url);

  })

  jQuery('#no').on('click', function () {
    jQuery('.firstdiv').hide();
    jQuery('.fourthdiv').show();

    var url = window.location.href;
    var split_url = url.split("#");
    var new_url = split_url[0] + '#create';
    window.history.pushState("object or string", "Title", new_url);

  })


  jQuery('#firstname').blur(function () {
    var firstname = jQuery('#firstname').val();
    if (firstname.length == 0) {
      jQuery('#firstname').focus();
      jQuery('#firstname').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.firstname').text('Merci de remplir Prénom');
      jQuery('.firstname').css({ "color": "red" });

    }
    else {
      jQuery('.firstname').text('');
    }
  })

  jQuery('#lastname').blur(function () {
    var lastname = jQuery('#lastname').val();
    if (lastname.length == 0) {
      jQuery('#lastname').focus();
      jQuery('#lastname').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.lastname').text('Merci de remplir Nom');
      jQuery('.lastname').css({ "color": "red" });

    }
    else {
      jQuery('.lastname').text('');
    }
  })

  jQuery('#mobile').blur(function () {
    var mobile = jQuery('#mobile').val();
    if (mobile.length == 0) {
      jQuery('#mobile').focus();
      jQuery('#mobile').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.mobile').text('Merci de remplir téléphone portable');
      jQuery('.mobile').css({ "color": "red" });

    }
    else {

      reg = /^\D*(\d\D*){9,14}$/;

      if (reg.test(mobile) == false) {
        jQuery('#mobile').focus();
        jQuery('#mobile').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.mobile').text('numéro de téléphone mobile invalide');
        jQuery('.mobile').css({ "color": "red" });
        return false;
      }
      else {
        jQuery('.mobile').text('');

      }

    }
  })


  jQuery('#mobile1').blur(function () {
    var mobile1 = jQuery('#mobile1').val();
    if (mobile1.length == 0) {
      jQuery('#mobile1').focus();
      jQuery('#mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.mobile1').text('Merci de remplir Téléphone mobile');
      jQuery('.mobile1').css({ "color": "red" });

    }
    else {

      reg = /^\D*(\d\D*){9,14}$/;

      if (reg.test(mobile1) == false) {
        jQuery('#mobile1').focus();
        jQuery('#mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.mobile1').text('numéro de téléphone mobile invalide');
        jQuery('.mobile1').css({ "color": "red" });
        return false;
      }
      else {
        jQuery('.mobile1').text('');

      }

    }
  })

  jQuery('#email').blur(function () {
    var email = jQuery('#email').val();
    if (email.length == 0) {
      jQuery('#email').focus();
      jQuery('#email').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.email').text('Merci de remplir adresse mail');
      jQuery('.email').css({ "color": "red" });

    }
    else {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

      if (reg.test(email) == false) {
        jQuery('#email').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.email').text('adresse mail invalide');
        jQuery('.email').css({ "color": "red" });
        return false;
      }
      else {
        jQuery('.email').text('');
      }
    }
  })


  jQuery('#email1').blur(function () {
    var email1 = jQuery('#email1').val();
    if (email1.length == 0) {
      jQuery('#email1').focus();
      jQuery('#email1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.email1').text('Merci de remplir adresse mail');
      jQuery('.email1').css({ "color": "red" });

    }
    else {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

      if (reg.test(email1) == false) {
        jQuery('#email1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        // jQuery('.email1').text('Invalid Email Address');
        // jQuery('.email1').css({"color": "red"});
        // return false;
      }
      else {
        jQuery('.email1').text('');
      }
    }
  })

  jQuery('#contact_create').on('click', function () {

    var lastname = jQuery('#lastname').val();
    var firstname = jQuery('#firstname').val();
    var mobile = jQuery('#mobile').val();
    var email = jQuery('#email').val();




    if (lastname.length == 0) {
      jQuery('#lastname').focus();
      jQuery('#lastname').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.lastname').text('Merci de remplir Prénom');
      jQuery('.lastname').css({ "color": "red" });

    }

    if (firstname.length == 0) {
      jQuery('#firstname').focus();
      jQuery('#firstname').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.firstname').text('Merci de remplir Nom');
      jQuery('.firstname').css({ "color": "red" });

    }

    if (mobile.length == 0) {
      jQuery('#mobile').focus();
      jQuery('#mobile').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.mobile').text('Merci de remplir Téléphone mobile');
      jQuery('.mobile').css({ "color": "red" });

    }
    else {
      reg = /^\D*(\d\D*){9,14}$/;

      if (reg.test(mobile) == false) {
        jQuery('#mobile').focus();
        jQuery('.mobile').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.mobile').text('numéro de téléphone mobile invalide');
        jQuery('.mobile').css({ "color": "red" });
      }
    }

    if (email.length == 0) {
      jQuery('#email').focus();
      jQuery('#email').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.email').text('Merci de remplir adresse mail');
      jQuery('.email').css({ "color": "red" });

    }
    else {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

      if (reg.test(email) == false) {
        // jQuery('#email').css({"background-color": "#ffe6e6", "border": "1 px solid #ff1a1a"});
        jQuery('.email').text('adresse mail invalide');
        jQuery('.email').css({ "color": "red" });
        return false;
      }
    }

    Vtiger_WSClient.doLogin(username, accesskey, postLogin);
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      else execQuery1();
    }

    function execQuery1() {

      var mobile_lst = mobile.slice(-9);
      var query = "SELECT * FROM Contacts WHERE email LIKE '" + email + "' OR mobile LIKE '%" + mobile_lst + "' ORDER BY id DESC LIMIT 1";
      Vtiger_WSClient.doQuery(query, createModuleRecord);
      // postExecQuery gets a call once request is completed 
    }


    function createModuleRecord(result, args) {

      if (result.length > 0) {

        jQuery('.fourthdiv').hide();
        jQuery('.fourthdiv_contact_prefill').show();

        var url = window.location.href;
        var split_url = url.split("#");
        var new_url = split_url[0] + '#fiche-confirmation';
        window.history.pushState("object or string", "Title", new_url);


        jQuery('#firstname1').val(result[0].firstname);
        jQuery('#lastname1').val(result[0].lastname);
        jQuery('#mobile1').val(result[0].mobile);
        jQuery('#email1').val(result[0].email);
        jQuery('#contact_record_id').val(result[0].id);
        jQuery('.first_name1').text(result[0].firstname);
        if (result[0].email.length > 0) {
          jQuery("#email1").prop("readonly", true);
        }

        var contact_id_check = result[0].id;

        if (contact_id_check.length > 0) {
          var valuesmap = { "contact_id": contact_id_check, "flag": 'contact_check', 'lflag': 'fr' };
          Vtiger_WSClient.doInvoke(afterCreateRecord_5, 'bio_works9', { 'element': JSON.stringify(valuesmap) });
          function afterCreateRecord_5(result, args) {
            console.log(result)
            if (result == 'existing contact') {

              jQuery("#Service option[value^='1ère Coloration']").hide();
              jQuery("#Service").val('Coloration');
            }
          }
        }



        /*jQuery('#email').focus();
        jQuery('#email').css({"background-color": "#ffe6e6", "border": "1 px solid #ff1a1a"});
        jQuery('.email').text('Email Already Existing!!');
        jQuery('.email').css({"color": "red"});*/
      }
      else {
        var module = 'Contacts';
        var lastname = jQuery('#lastname').val();
        var firstname = jQuery('#firstname').val();
        var mobile = jQuery('#mobile').val();
        var email = jQuery('#email').val();

        // var valuesmap = {"lastname" : lastname, "firstname": firstname, "email": email, "mobile": mobile, "mode": 'new', 'lflag': 'fr'};    

        var get_referal_code = jQuery('#get_referal_code').val();
        if (get_referal_code.length > 0) {
          var valuesmap = { "lastname": lastname, "firstname": firstname, "email": email, "mobile": mobile, 'referral_code': get_referal_code, "mode": 'new', 'lflag': 'fr' };
        }
        else {
          var valuesmap = { "lastname": lastname, "firstname": firstname, "email": email, "mobile": mobile, "mode": 'new', 'lflag': 'fr' };
        }

        // Vtiger_WSClient.doCreate(module, valuesmap, afterCreateRecord); 
        if (firstname.length > 0 && lastname.length > 0 && mobile.length > 0 && email.length > 0) {
          Vtiger_WSClient.doInvoke(afterCreateRecord, 'bio_works8', { 'element': JSON.stringify(valuesmap) });
        }
        else {
          jQuery('#email').focus();
          jQuery('#email').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        }
      }


      // afterCreateRecord gets a call once request is completed 
    }
    function afterCreateRecord(result, args) {
      if (result) {

        jQuery('#contact_record_new').val(result);
        // invokeMethod();

        jQuery('#customer_flag_first').val('first');
        jQuery('#customer_flag_old').val('');

        jQuery('.fourthdiv').hide();
        jQuery('.fifth').show();

        var saloon_val = jQuery('#Saloon option:selected').val();
        if (saloon_val == '') {
          jQuery("#Saloon").focus();
          jQuery("#Saloon").css('background', '#ffe6e6');
        }

        var url = window.location.href;
        var split_url = url.split("#");
        var new_url = split_url[0] + '#choix';
        window.history.pushState("object or string", "Title", new_url);

        jQuery('#Service').trigger('change');
        jQuery('#vt_id').val(result);
      }

    }
    /*function invokeMethod() {    

        Vtiger_WSClient.doInvoke(postInvoke, 'bio_works', { 'mode' : 'get_saloon', 'data': 'all'} );    
        // postInvoke gets a call once request is completed 
    } 

    function postInvoke(result, args) {   
        if(result == false) {        
        alert(Vtiger_WSClient.lastError()['message']);    
        } 
        else {     
             
            jQuery('#Saloon').html(result); 
        } 
    } */

  })






  jQuery('#contact_create1').on('click', function () {
    // jQuery('.fourthdiv_contact_prefill').hide();
    // jQuery('.fifth').show();

    Vtiger_WSClient.doLogin(username, accesskey, postLogin);
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      else createModuleRecord();
    }
    function createModuleRecord() {
      var module = 'Contacts';
      var lastname = jQuery('#lastname1').val();
      var firstname = jQuery('#firstname1').val();
      var mobile = jQuery('#mobile1').val();
      var email = jQuery('#email1').val();

      var id = jQuery('#contact_record_id').val();
      jQuery('#contact_record_new').val(id);

      if (mobile.length == 0) {
        jQuery('#mobile1').focus();
        jQuery('#mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.mobile1').text('Merci de remplir Téléphone');
        jQuery('.mobile1').css({ "color": "red" });

      }
      else {

        reg = /^\D*(\d\D*){9,14}$/;

        if (reg.test(mobile) == false) {
          jQuery('#mobile1').focus();
          jQuery('.mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
          jQuery('.mobile1').text('numéro de téléphone mobile invalide');
          jQuery('.mobile1').css({ "color": "red" });
          return false;
        }
        else {
          jQuery('.mobile1').text('');

        }

      }

      if (email.length == 0) {
        jQuery('#email1').focus();
        jQuery('#email1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.email1').text('Merci de remplir adresse mail');
        jQuery('.email1').css({ "color": "red" });

      }
      else {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

        if (reg.test(email) == false) {
          // jQuery('#email').css({"background-color": "#ffe6e6", "border": "1 px solid #ff1a1a"});
          jQuery('.email1').text('adresse mail invalide');
          jQuery('.email1').css({ "color": "red" });
          return false;
        }
      }


      var valuesmap = { 'lastname': lastname, 'firstname': firstname, 'id': id, 'mobile': mobile, 'email': email };
      // console.log(valuesmap);  
      // Vtiger_WSClient.doCreate(module, valuesmap, afterCreateRecord); 
      if (mobile.length > 0 && email.length > 0 && firstname.length > 0 && lastname.length > 0) {
        var valuesmap = { 'lastname': lastname, 'firstname': firstname, 'mobile': mobile, 'email': email, 'id': id, 'lflag': 'fr', 'mode': 'restricted' };

        Vtiger_WSClient.doInvoke(postInvoke, 'bio_works1', { 'element': JSON.stringify(valuesmap) });
      }
      // afterCreateRecord gets a call once request is completed 
    }

    function postInvoke(result, args) {
      // console.log(result);   
      if (result == false) {
        alert(Vtiger_WSClient.lastError()['message']);
      }
      else {

        if (result == 'Cancelled appointment') {
          jQuery('#contact_create1').hide();
          jQuery('.cancell_msg').show();
        }

        else if (result == 'Pending appointment') {
          jQuery('#contact_create1').hide();
          jQuery('.pending_msg').show();
        }

        else {

          jQuery('#mode_data').val(result.mode_data);
          jQuery('#temp_id').val(result.temp_id);
          jQuery('#vt_id').val(result.temp_id);
          var id = result.id;
          jQuery('#contact_record_new').val(id);
          jQuery('#customer_flag_first').val('');
          jQuery('#customer_flag_old').val('old');

          jQuery('.fourthdiv_contact_prefill').hide();
          jQuery('.fifth_twilio').hide();
          jQuery('.fifth').show();

          var saloon_val = jQuery('#Saloon option:selected').val();
          if (saloon_val == '') {
            jQuery("#Saloon").focus();
            jQuery("#Saloon").css('background', '#ffe6e6');
          }

          var url = window.location.href;
          var split_url = url.split("#");
          var new_url = split_url[0] + '#choix';
          window.history.pushState("object or string", "Title", new_url);

          jQuery('#Service').trigger('change');
        }
        // Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works', { 'mode' : 'get_saloon', 'data': 'all'} );        
        // Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works', { 'mode' : 'get_services', 'data': Saloon} );        
      }
    }

    function postInvoke1(result, args) {
      // console.log(result);   
      if (result == false) {
        alert(Vtiger_WSClient.lastError()['message']);
      }
      else {
        jQuery('#Saloon').html(result);
      }
    }

  })



  jQuery('#email_to_check').on('click', function () {
    var email_to_check = jQuery('#emailtocheck').val();

    if (email_to_check.length < 1) {
      jQuery('#emailtocheck').focus();
      jQuery('#emailtocheck').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.emailtocheck').text('Oups, veuillez entrer votre adresse mail !');
      jQuery('.emailtocheck').css({ "color": "red" });

    }
    else {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

      if (reg.test(email_to_check) == false) {
        // jQuery('#emailtocheck').css({"background-color": "#ffe6e6", "border": "1 px solid #ff1a1a"});
        jQuery('.emailtocheck').text('adresse mail invalide');
        jQuery('.emailtocheck').css({ "color": "red" });
        return false;
      }
    }



    var login = Vtiger_WSClient.doLogin(username, accesskey, postLogin);
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      var valuesmap = { 'email': email_to_check, 'flag': 'mail', 'lflag': 'fr' };
      Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works9', { 'element': JSON.stringify(valuesmap) });
    }

    function postInvoke1(result, args) {

      if (result == false) {
        // alert(Vtiger_WSClient.lastError()['message']);    
      }
      else {

        if (result == 'not_exist') {
          jQuery('.seconddiv').hide();
          jQuery('.seconddiv2').show();

          var url = window.location.href;
          var split_url = url.split("#");
          var new_url = split_url[0] + '#find-contact';
          window.history.pushState("object or string", "Title", new_url);
        }
        else {
          jQuery('.emailsendcodenot').show();
          jQuery('#email_otp_check').show();
          jQuery('.emailtocheck').hide();
          jQuery('#email_otp').show();
          jQuery('#email_to_check').hide();
          // jQuery('#emailtocheck').hide(); 
          jQuery('#otp_record').val(result);

        }


      }
    }
  })



  jQuery('#email_otp_check').on('click', function () {
    var inv_otp_email = jQuery('#email_otp').val();
    var otp_record = jQuery('#otp_record').val();

    var login = Vtiger_WSClient.doLogin(username, accesskey, postLogin1);

    function postLogin1(result, args) {
      if (!result) console.log('Login failed');
      var valuesmap = { 'otp': inv_otp_email, 'record': otp_record, 'flag': 'otp_check' };

      Vtiger_WSClient.doInvoke(postInvoke2, 'bio_works9', { 'element': JSON.stringify(valuesmap) });
    }

    function postInvoke2(result, args) {

      if (result == false) {
        // alert(Vtiger_WSClient.lastError()['message']);    
      }
      else {

        if (result == 'not_exist') {
          jQuery('.inv_otp_email').text('Code invalide');
          jQuery('#email_otp').focus();
          jQuery('#email_otp').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" })
          // jQuery('.seconddiv2').show();
        }
        else {
          jQuery('.seconddiv').hide();
          // jQuery('.thirddiv').show();
          jQuery('.first_name').text(result.firstname);
          jQuery('.last_name').text(result.lastname);
          // jQuery('#btn_user_data').on('click', function(){
          // jQuery('.thirddiv').hide();
          jQuery('.fourthdiv_contact_prefill').show();


          var url = window.location.href;
          var split_url = url.split("#");
          var new_url = split_url[0] + '#fiche-confirmation';
          window.history.pushState("object or string", "Title", new_url);

          if (result.email.length > 0) {
            jQuery("#email1").prop("readonly", true);
          }
          else {
            jQuery("#email1").prop("readonly", false);
            jQuery('#email1').focus();
            jQuery('#email1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
            jQuery('.email1').text('Merci de remplir adresse mail');
            jQuery('.email1').css({ "color": "red" });
          }
          jQuery('#firstname1').val(result.firstname);
          jQuery('#lastname1').val(result.lastname);
          jQuery('#mobile1').val(result.mobile);
          jQuery('#email1').val(result.email);
          jQuery('#contact_record_id').val(result.id);
        }


      }
    }

  })


  jQuery('#firstname_phone_to_check').on('click', function () {
    var firstname_to_check = jQuery('#firstname_to_check').val();
    var phone_number = jQuery('#phone_number').val();
    if (firstname_to_check.length < 1) {
      jQuery('#firstname_to_check').focus();
      jQuery('.firstname_to_check').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.firstname_to_check').text('Merci de remplir Prénom');
      jQuery('.firstname_to_check').css({ "color": "red" });

    }

    if (phone_number.length < 1) {
      jQuery('#phone_number').focus();
      jQuery('.phone_number').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.phone_number').text('Merci de remplir Téléphone');
      jQuery('.phone_number').css({ "color": "red" });

    }
    else {
      reg = /^\D*(\d\D*){9,14}$/;

      if (reg.test(phone_number) == false) {
        jQuery('#phone_number').focus();
        // jQuery('.phone_number').css({"background-color": "#ffe6e6", "border": "1 px solid #ff1a1a"});
        jQuery('.phone_number').text('numéro de téléphone mobile invalide');
        jQuery('.phone_number').css({ "color": "red" });
        return false;
      }
    }




    var login = Vtiger_WSClient.doLogin(username, accesskey, postLogin);

    // postLogin function gets a call once request is completed
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      else invokeFun();
    }
    function invokeFun() {
      // var query = "SELECT * FROM Contacts WHERE mobile = '"+phone_number+"' AND firstname LIKE '"+firstname_to_check+"' ";  
      // Vtiger_WSClient.doQuery(query, postExecQuery); 

      if (firstname_to_check.length > 0 && phone_number.length > 9) {
        Vtiger_WSClient.doInvoke(postInvoke2, 'bio_works4', { 'element1': firstname_to_check, 'element2': phone_number });
      }

      // postExecQuery gets a call once request is completed 
    }

    function postInvoke2(result, args) {

      if (result) {
        // var columns = Vtiger_WSClient.getResultColumns(result);        
        if (result.id) {


          jQuery('.seconddiv2').hide();
          jQuery('.fourthdiv_contact_prefill').show();

          var url = window.location.href;
          var split_url = url.split("#");
          var new_url = split_url[0] + '#fiche-confirmation';
          window.history.pushState("object or string", "Title", new_url);

          if (result.email.length > 0) {
            jQuery("#email1").prop("readonly", true);
          }
          else {
            jQuery("#email1").prop("readonly", false);
            jQuery('#email1').focus();
            jQuery('#email1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
            jQuery('.email1').text('Merci de remplir adresse mail');
            jQuery('.email1').css({ "color": "red" });
          }

          jQuery('#firstname1').val(result.firstname);
          jQuery('.first_name1').text(result.firstname);
          jQuery('#lastname1').val(result.lastname);
          jQuery('#mobile1').val(result.mobile);
          jQuery('#email1').val(result.email);
          jQuery('#contact_record_id').val(result.id);



        }

        else {
          jQuery('.seconddiv2').hide();
          jQuery('.fourthdiv').show();

          var url = window.location.href;
          var split_url = url.split("#");
          var new_url = split_url[0] + '#create';
          window.history.pushState("object or string", "Title", new_url);

          jQuery('.phn_fname_ch').show();
          jQuery('#firstname').val(firstname_to_check);
          jQuery('#mobile').val(phone_number);


        }

      }


    }

  })


  $.datetimepicker.setLocale('fr');


  jQuery('#Service').on('change', function (e) {

    jQuery('#description').hide();

    $('#demo').datetimepicker('reset');
    $('#demo').datetimepicker('destroy');

    var Saloon = jQuery('#Saloon option:selected').val();
    var Service = jQuery('#Service option:selected').val();

    var HairDresser = jQuery('#HairDresser option:selected').val();


    jQuery('#saloon_id').val(Saloon);

    if (Service == '1ère Coloration' || Service == 'Coloration' || Service == 'Soin' || Service == 'Mèches') {
      jQuery('.option_list').show();
    }
    else {
      jQuery('.option_list').hide();
      jQuery('.option_sum').hide();
    }

    if (Saloon.length > 0 && Service.length > 0) {
      jQuery('#loading').show();
      var first_flag = jQuery('#customer_flag_first').val();
      var old_flag = jQuery('#customer_flag_old').val();

      if (first_flag == '') {
        flag = old_flag;
      }
      else {
        flag = first_flag;
      }

      Vtiger_WSClient.doLogin(username, accesskey, postLogin);
      function postLogin(result, args) {
        if (!result) console.log('Login failed');
        else invokeMethod();
      }

      function invokeMethod() {

        var ref_cnt_id = jQuery('#contact_record_id').val();

        var valuesmap = { 'Saloon': Saloon, 'Service': Service, 'flag': flag, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id };
        if (HairDresser != '') {
          valuesmap.saloon_staff_name = HairDresser;
          console.log(valuesmap)
          Vtiger_WSClient.doInvoke(postInvoke, 'bio_works6', { 'element': JSON.stringify(valuesmap) });
        }
        else {
          Vtiger_WSClient.doInvoke(postInvoke, 'bio_works6', { 'element': JSON.stringify(valuesmap) });
        }
        // postInvoke gets a call once request is completed 
      }
      function postInvoke(result, args) {
        jQuery('#loading').hide();

        if (result == false) {
          alert(Vtiger_WSClient.lastError()['message']);
        }
        else {

          var saloon_open_time = result.sa_open;
          var saloon_close_time = result.sa_close;
          var minDate = result.minDate;
          var maxDate = result.maxDate;
          var saloon_Not_available_time = result.time_array;

          var description_to_Send = result.description_to_Send;
          // jQuery('#description').val(description_to_Send);
          jQuery('#description').text(description_to_Send);

          if (description_to_Send != '') {
            jQuery('#description').show();
          }


          //params scroll
          let firstElement = null;
          let singleWidth = 0;
          let line = 0;
          let allWidth = 0;
          let positionScroll = 0;
          let elScroll = null;

          let tempscroll = 0;

          // console.log(saloon_close_time);

          $('#demo').datetimepicker({
            inline: true,
            format: 'Y/m/d H:i',
            formatTime: 'H:i',
            formatDate: 'Y/m/d',
            minDate: minDate,
            maxDate: maxDate,
            // startDate: '2020/10/27',
            lang: 'fr',
            minTime: saloon_open_time,
            maxTime: saloon_close_time,
            step: 30,

            // onSelectDate:myfunction,
            allowTimes: saloon_Not_available_time,

            onGenerate: function (ct) {

              let firstElement = null;
              let singleWidth = 0;
              let line = 0;
              let allWidth = 0;
              let positionScroll = 0;
              let elScroll = null;

              $('.xdsoft_time_variant div:nth-child(1)').css('margin-left', tempscroll + 'px');

              jQuery(this).find('.xdsoft_date.xdsoft_day_of_week0').addClass('xdsoft_disabled');


              window.addEventListener("resize", function () {
                let listWidth = $('.xdsoft_time_box.xdsoft_scroller_box').innerWidth();
                let elementVision = 3;
                let visionWidth = listWidth / elementVision;
                // $('.xdsoft_time').css('min-width', visionWidth + 'px');
                $('.xdsoft_time').css('min-width', visionWidth + 5 + 'px');

              })
              let listWidth = $('.xdsoft_time_box.xdsoft_scroller_box').innerWidth();
              let elementVision = 3;
              let visionWidth = listWidth / elementVision;
              // $('.xdsoft_time').css('min-width', visionWidth + 'px');
              $('.xdsoft_time').css('min-width', visionWidth + 5 + 'px');


              //custom scroll
              firstElement = $('.xdsoft_time_variant div:nth-child(1)');
              singleWidth = $('.xdsoft_time_variant div:nth-child(2)').innerWidth();
              line = $('.xdsoft_time_box').innerWidth() + (singleWidth);
              allWidth = $('.xdsoft_time_variant div').length * singleWidth;
              elScroll = $('.xdsoft_time_variant');

              // $('.xdsoft_prev, .xdsoft_next').click( function() {
              $('.xdsoft_prev, .xdsoft_next').on('click touchstart', function () {
                if ($(this).hasClass('xdsoft_prev')) {
                  if (positionScroll < 0) {
                    let timeScroll = Number(positionScroll) + Number(singleWidth);
                    firstElement.css('margin-left', timeScroll);
                    tempscroll = positionScroll = timeScroll.toFixed(2);
                    $('.xdsoft_time_variant').css('margin-left', positionScroll)
                  }
                } else {

                  // console.log('next')
                  if (positionScroll > (-allWidth + line)) {
                    let timeScroll = Number(positionScroll) - Number(singleWidth);
                    firstElement.css('margin-left', timeScroll)
                    tempscroll = positionScroll = timeScroll.toFixed(2);
                    $('.xdsoft_time_variant').css('margin-left', positionScroll)
                  }
                }
              })
            },

            onSelectDate: function (ct, $i) {
              jQuery('.not_av').remove();
              jQuery('.xdsoft_time_box').hide();
              jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
              jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();
              jQuery('.xdsoft_timepicker').after('<span class="ajax-loading-big" style="text-align: center; font-style: italic; font-size: smaller; font-family: MontserratRegular; font-style: italic;">Loading...</span>');

              tempscroll = 0;
              jQuery('#custom_time_flag').val('date_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
              myfunction(ct)

            },

            onSelectTime: function (ct, $i) {
              jQuery('#custom_time_flag').val('time_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
            },

            onChangeMonth: function (ct, $i) {
              tempscroll = 0;
              jQuery('#custom_time_flag').val('date_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
              myfunction(ct)

            },

          });


          if (saloon_Not_available_time.length > 0) {

            jQuery('.xdsoft_time_box').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').show();
            jQuery('.not_av').remove();
          }
          else {
            jQuery('.ajax-loading-big').remove();
            jQuery('.xdsoft_time_box').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();
            jQuery('.xdsoft_timepicker').after('<p class="not_av" style="padding-left: 30px;">Pas de créneaux disponibles</p>');
          }

        }
      }
    }
  });




  function myfunction(currentDateTime) {
    var Saloon = jQuery('#Saloon option:selected').val();
    var Service = jQuery('#Service option:selected').val();
    var HairDresser = jQuery('#HairDresser option:selected').val();
    var date_2 = currentDateTime.getDate();
    if (date_2 < 10) {
      date_2 = '0' + date_2;
    }
    var month_2 = currentDateTime.getMonth();
    month_2 = month_2 + 1;
    if (month_2 < 10) {
      month_2 = '0' + month_2;
    }
    var year_2 = currentDateTime.getFullYear();
    var date_f = year_2 + '-' + month_2 + '-' + date_2;

    var ref_cnt_id = jQuery('#contact_record_id').val();


    var valuesmap = { 'currentDateTime': currentDateTime, 'Saloon': Saloon, 'Service': Service, 'flag': flag, 'Today': date_f, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id };
    if (HairDresser != '') {
      var valuesmap = { 'currentDateTime': currentDateTime, 'Saloon': Saloon, 'Service': Service, 'flag': flag, 'Today': date_f, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id, 'saloon_staff_name': HairDresser };
    }

    Vtiger_WSClient.doLogin(username, accesskey, postLogin);
    function postLogin(result, args) {
      if (!result) console.log('Login failed');
      else invokeMethod();
    }

    function invokeMethod() {
      jQuery('.xdsoft_timepicker').hide();
      // Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works6', {'element' : JSON.stringify(valuesmap)});
      if (HairDresser != '') {
        Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works6', { 'element': JSON.stringify(valuesmap) });
      }
      else {
        Vtiger_WSClient.doInvoke(postInvoke1, 'bio_works6', { 'element': JSON.stringify(valuesmap) });
      }
    }





    function postInvoke1(result, args) {
      // $('#demo').datetimepicker('destroy');
      jQuery('.ajax-loading-big').remove();
      jQuery('.xdsoft_timepicker').show();

      if (result == false) {
        alert(Vtiger_WSClient.lastError()['message']);
      }
      else {

        var saloon_open_time = result.sa_open;
        var saloon_close_time = result.sa_close;
        var minDate = result.minDate;
        var maxDate = result.maxDate;
        var saloon_Not_available_time = result.time_array;

        //params scroll
        /*let firstElement = null;
        let singleWidth = 0;
        let line = 0;
        let allWidth = 0;
        let positionScroll = 0;
        let elScroll = null;*/

        if (saloon_Not_available_time) {

          // var max_time = saloon_Not_available_time['sa_close'];
          $('#demo').datetimepicker('setOptions', { maxTime: saloon_close_time });
          if (saloon_Not_available_time.length > 0) {
            $('#demo').datetimepicker('setOptions', { minTime: saloon_open_time });
            $('#demo').datetimepicker('setOptions', { allowTimes: saloon_Not_available_time });
            jQuery('.xdsoft_time_box').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').show();
            jQuery('.not_av').remove();
          }
          else {
            // console.log(saloon_Not_available_time.length)
            $('#demo').datetimepicker('setOptions', { timepicker: false });
            jQuery('.xdsoft_time_box').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();


            var kk = jQuery('.not_av').length;
            if (kk < 1) {
              jQuery('.ajax-loading-big').remove();
              jQuery('.xdsoft_timepicker').after('<p class="not_av" style="padding-left: 30px;">Pas de créneaux disponibles</p>');
            }
            // jQuery('.xdsoft_timepicker').after('<p class="not_av" style="padding-left: 30px;">Slots not available</a>');
          }


        }

        /*positionScroll = 0;
         firstElement = $('.xdsoft_time_variant div:nth-child(1)');
         singleWidth = $('.xdsoft_time_variant div:nth-child(2)').innerWidth();
         line = $('.xdsoft_time_box').innerWidth() + singleWidth;
         allWidth = $('.xdsoft_time_variant div').length * singleWidth;
         elScroll = $('.xdsoft_time_variant');
         $('.xdsoft_time_variant').css('margin-left', positionScroll)*/

      }
    }



  }




  jQuery('#Saloon').on('change', function (e) {

    var Saloon = jQuery('#Saloon option:selected').val();
    jQuery('#saloon_id').val(Saloon);

    if (Saloon.length > 0) {
      jQuery("#Saloon").css('background', '#ffffff');
      jQuery("#Saloon option[value='']").remove();
    }
    else {
      jQuery("#Saloon").css('background', '#ffe6e6');
    }

    jQuery('#description').hide();

    $('#demo').datetimepicker('reset');
    $('#demo').datetimepicker('destroy');
    // var Saloon = jQuery('#Saloon option:selected').val();
    var Service = jQuery('#Service option:selected').val();

    if (Saloon.length > 0 && Service.length > 0) {

      jQuery('#loading').show();

      var first_flag = jQuery('#customer_flag_first').val();
      var old_flag = jQuery('#customer_flag_old').val();

      if (first_flag == '') {
        flag = old_flag;
      }
      else {
        flag = first_flag;
      }


      Vtiger_WSClient.doLogin(username, accesskey, postLogin);
      function postLogin(result, args) {
        if (!result) console.log('Login failed');
        else invokeMethod();
      }

      function invokeMethod() {

        var ref_cnt_id = jQuery('#contact_record_id').val();

        var valuesmap = { 'Saloon': Saloon, 'Service': Service, 'flag': flag, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id, 'saloon_staff': 'yes' };
        // console.log(valuesmap)
        Vtiger_WSClient.doInvoke(postInvoke, 'bio_works6', { 'element': JSON.stringify(valuesmap) });
        // postInvoke gets a call once request is completed 
      }

      function postInvoke(result, args) {
        jQuery('#loading').hide();
        // console.log(result);   
        if (result == false) {
          alert(Vtiger_WSClient.lastError()['message']);
        }
        else {
          // jQuery('#Service').html(result); 

          var saloon_open_time = result.sa_open;
          var saloon_close_time = result.sa_close;
          var minDate = result.minDate;
          var maxDate = result.maxDate;
          var saloon_Not_available_time = result.time_array;

          var HairdresserName = result.HairdresserName;
          var HairdresserNamestatus = result.HairdresserNamestatus;
          if (HairdresserName != '') {
            jQuery('#HairDresser').html(HairdresserName);
          }
          if (HairdresserNamestatus == 'yes') {
            jQuery('.hairdresser').show();
          }
          else {
            jQuery('.hairdresser').hide();
          }

          var description_to_Send = result.description_to_Send;
          // jQuery('#description').val(description_to_Send);
          jQuery('#description').text(description_to_Send);

          if (description_to_Send != '') {
            jQuery('#description').show();
          }


          //params scroll
          let firstElement = null;
          let singleWidth = 0;
          let line = 0;
          let allWidth = 0;
          let positionScroll = 0;
          let elScroll = null;

          let tempscroll = 0;

          // console.log(saloon_close_time);

          $('#demo').datetimepicker({
            inline: true,
            format: 'Y/m/d H:i',
            formatTime: 'H:i',
            formatDate: 'Y/m/d',
            minDate: minDate,
            maxDate: maxDate,
            lang: 'fr',
            minTime: saloon_open_time,
            maxTime: saloon_close_time,
            step: 30,
            // onSelectDate:myfunction,
            allowTimes: saloon_Not_available_time,
            onGenerate: function (ct) {

              jQuery(this).find('.xdsoft_date.xdsoft_day_of_week0').addClass('xdsoft_disabled');
              $('.xdsoft_time_variant div:nth-child(1)').css('margin-left', tempscroll + 'px');


              let firstElement = null;
              let singleWidth = 0;
              let line = 0;
              let allWidth = 0;
              let positionScroll = 0;
              let elScroll = null;

              window.addEventListener("resize", function () {
                let listWidth = $('.xdsoft_time_box.xdsoft_scroller_box').innerWidth();
                let elementVision = 3;
                let visionWidth = listWidth / elementVision;
                // $('.xdsoft_time').css('min-width', visionWidth + 'px');
                $('.xdsoft_time').css('min-width', visionWidth + 5 + 'px');

              })
              let listWidth = $('.xdsoft_time_box.xdsoft_scroller_box').innerWidth();
              let elementVision = 3;
              let visionWidth = listWidth / elementVision;
              // $('.xdsoft_time').css('min-width', visionWidth + 'px');
              $('.xdsoft_time').css('min-width', visionWidth + 5 + 'px');


              //custom scroll
              firstElement = $('.xdsoft_time_variant div:nth-child(1)');
              singleWidth = $('.xdsoft_time_variant div:nth-child(2)').innerWidth();
              line = $('.xdsoft_time_box').innerWidth() + (singleWidth);
              allWidth = $('.xdsoft_time_variant div').length * singleWidth;
              elScroll = $('.xdsoft_time_variant');

              // $('.xdsoft_prev, .xdsoft_next').click( function() {
              $('.xdsoft_prev, .xdsoft_next').on('click touchstart', function () {
                if ($(this).hasClass('xdsoft_prev')) {
                  if (positionScroll < 0) {
                    let timeScroll = Number(positionScroll) + Number(singleWidth);
                    firstElement.css('margin-left', timeScroll);
                    tempscroll = positionScroll = timeScroll.toFixed(2);
                    $('.xdsoft_time_variant').css('margin-left', positionScroll)
                  }
                } else {
                  if (positionScroll > (-allWidth + line)) {
                    let timeScroll = Number(positionScroll) - Number(singleWidth);
                    firstElement.css('margin-left', timeScroll)
                    tempscroll = positionScroll = timeScroll.toFixed(2);
                    $('.xdsoft_time_variant').css('margin-left', positionScroll)
                  }
                }
              })
            },

            onSelectDate: function (ct, $i) {
              jQuery('.not_av').remove();
              jQuery('.xdsoft_time_box').hide();
              jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
              jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();
              jQuery('.xdsoft_timepicker').after('<span class="ajax-loading-big" style="text-align: center; font-style: italic; font-size: smaller; font-family: MontserratRegular; font-style: italic;">Loading...</span>');

              tempscroll = 0;
              jQuery('#custom_time_flag').val('date_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
              myfunction(ct)

            },

            onSelectTime: function (ct, $i) {
              jQuery('#custom_time_flag').val('time_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
            },


            onChangeMonth: function (ct, $i) {
              tempscroll = 0;
              jQuery('#custom_time_flag').val('date_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
              myfunction(ct)

            },

          });


          if (saloon_Not_available_time.length > 0) {

            jQuery('.xdsoft_time_box').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').show();
            jQuery('.not_av').remove();
          }
          else {
            jQuery('.ajax-loading-big').remove();
            jQuery('.xdsoft_time_box').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();
            jQuery('.xdsoft_timepicker').after('<p class="not_av" style="padding-left: 30px;">Pas de créneaux disponibles</p>');
          }







        }
      }


    }


  });


  jQuery('#HairDresser').on('change', function (e) {

    var Saloon = jQuery('#Saloon option:selected').val();
    jQuery('#saloon_id').val(Saloon);

    if (Saloon.length > 0) {
      jQuery("#Saloon").css('background', '#ffffff');
      jQuery("#Saloon option[value='']").remove();
    }
    else {
      jQuery("#Saloon").css('background', '#ffe6e6');
    }

    jQuery('#description').hide();

    $('#demo').datetimepicker('reset');
    $('#demo').datetimepicker('destroy');
    // var Saloon = jQuery('#Saloon option:selected').val();
    var Service = jQuery('#Service option:selected').val();
    var HairDresser = jQuery('#HairDresser option:selected').val();

    if (Saloon.length > 0 && Service.length > 0) {

      jQuery('#loading').show();

      var first_flag = jQuery('#customer_flag_first').val();
      var old_flag = jQuery('#customer_flag_old').val();

      if (first_flag == '') {
        flag = old_flag;
      }
      else {
        flag = first_flag;
      }


      Vtiger_WSClient.doLogin(username, accesskey, postLogin);
      function postLogin(result, args) {
        if (!result) console.log('Login failed');
        else invokeMethod();
      }

      function invokeMethod() {

        var ref_cnt_id = jQuery('#contact_record_id').val();

        var valuesmap = { 'Saloon': Saloon, 'Service': Service, 'flag': flag, 'lflag': 'fr', 'ref_cnt_id': ref_cnt_id, 'saloon_staff_name': HairDresser };
        // console.log(valuesmap)
        Vtiger_WSClient.doInvoke(postInvoke, 'bio_works6', { 'element': JSON.stringify(valuesmap) });
        // postInvoke gets a call once request is completed 
      }

      function postInvoke(result, args) {
        jQuery('#loading').hide();
        console.log(result);
        if (result == false) {
          alert(Vtiger_WSClient.lastError()['message']);
        }
        else {
          // jQuery('#Service').html(result); 

          var saloon_open_time = result.sa_open;
          var saloon_close_time = result.sa_close;
          var minDate = result.minDate;
          var maxDate = result.maxDate;
          var saloon_Not_available_time = result.time_array;
          var HairdresserName = result.HairdresserName;
          if (HairdresserName != '') {
            jQuery('#HairDresser').html(HairdresserName);
          }

          var description_to_Send = result.description_to_Send;
          // jQuery('#description').val(description_to_Send);
          jQuery('#description').text(description_to_Send);

          if (description_to_Send != '') {
            jQuery('#description').show();
          }


          //params scroll
          let firstElement = null;
          let singleWidth = 0;
          let line = 0;
          let allWidth = 0;
          let positionScroll = 0;
          let elScroll = null;

          let tempscroll = 0;

          // console.log(saloon_close_time);

          $('#demo').datetimepicker({
            inline: true,
            format: 'Y/m/d H:i',
            formatTime: 'H:i',
            formatDate: 'Y/m/d',
            minDate: minDate,
            maxDate: maxDate,
            lang: 'fr',
            minTime: saloon_open_time,
            maxTime: saloon_close_time,
            step: 30,
            // onSelectDate:myfunction,
            allowTimes: saloon_Not_available_time,
            onGenerate: function (ct) {

              jQuery(this).find('.xdsoft_date.xdsoft_day_of_week0').addClass('xdsoft_disabled');
              $('.xdsoft_time_variant div:nth-child(1)').css('margin-left', tempscroll + 'px');


              let firstElement = null;
              let singleWidth = 0;
              let line = 0;
              let allWidth = 0;
              let positionScroll = 0;
              let elScroll = null;

              window.addEventListener("resize", function () {
                let listWidth = $('.xdsoft_time_box.xdsoft_scroller_box').innerWidth();
                let elementVision = 3;
                let visionWidth = listWidth / elementVision;
                // $('.xdsoft_time').css('min-width', visionWidth + 'px');
                $('.xdsoft_time').css('min-width', visionWidth + 5 + 'px');

              })
              let listWidth = $('.xdsoft_time_box.xdsoft_scroller_box').innerWidth();
              let elementVision = 3;
              let visionWidth = listWidth / elementVision;
              // $('.xdsoft_time').css('min-width', visionWidth + 'px');
              $('.xdsoft_time').css('min-width', visionWidth + 5 + 'px');


              //custom scroll
              firstElement = $('.xdsoft_time_variant div:nth-child(1)');
              singleWidth = $('.xdsoft_time_variant div:nth-child(2)').innerWidth();
              line = $('.xdsoft_time_box').innerWidth() + (singleWidth);
              allWidth = $('.xdsoft_time_variant div').length * singleWidth;
              elScroll = $('.xdsoft_time_variant');

              // $('.xdsoft_prev, .xdsoft_next').click( function() {
              $('.xdsoft_prev, .xdsoft_next').on('click touchstart', function () {
                if ($(this).hasClass('xdsoft_prev')) {
                  if (positionScroll < 0) {
                    let timeScroll = Number(positionScroll) + Number(singleWidth);
                    firstElement.css('margin-left', timeScroll);
                    tempscroll = positionScroll = timeScroll.toFixed(2);
                    $('.xdsoft_time_variant').css('margin-left', positionScroll)
                  }
                } else {
                  if (positionScroll > (-allWidth + line)) {
                    let timeScroll = Number(positionScroll) - Number(singleWidth);
                    firstElement.css('margin-left', timeScroll)
                    tempscroll = positionScroll = timeScroll.toFixed(2);
                    $('.xdsoft_time_variant').css('margin-left', positionScroll)
                  }
                }
              })
            },

            onSelectDate: function (ct, $i) {
              jQuery('.not_av').remove();
              jQuery('.xdsoft_time_box').hide();
              jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
              jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();
              jQuery('.xdsoft_timepicker').after('<span class="ajax-loading-big" style="text-align: center; font-style: italic; font-size: smaller; font-family: MontserratRegular; font-style: italic;">Loading...</span>');

              tempscroll = 0;
              jQuery('#custom_time_flag').val('date_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
              myfunction(ct)

            },

            onSelectTime: function (ct, $i) {
              jQuery('#custom_time_flag').val('time_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
            },


            onChangeMonth: function (ct, $i) {
              tempscroll = 0;
              jQuery('#custom_time_flag').val('date_triggered');
              var ns_de = jQuery('.slot_ns').length;
              if (ns_de > 0) {
                jQuery('.slot_ns').remove();
              }
              myfunction(ct)

            },

          });


          if (saloon_Not_available_time.length > 0) {

            jQuery('.xdsoft_time_box').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').show();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').show();
            jQuery('.not_av').remove();
          }
          else {
            jQuery('.ajax-loading-big').remove();
            jQuery('.xdsoft_time_box').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_prev').hide();
            jQuery('.xdsoft_timepicker').find('.xdsoft_next').hide();
            jQuery('.xdsoft_timepicker').after('<p class="not_av" style="padding-left: 30px;">Pas de créneaux disponibles</p>');
          }







        }
      }


    }


  });



  jQuery('#update_phone_number').on('click', function () {
    jQuery('#loading1').hide();
    $('#twilio_check').prop('disabled', false);
    jQuery('.phone_num_updation').show();

    var url = window.location.href;
    var split_url = url.split("#");
    var new_url = split_url[0] + '#update-phone';
    window.history.pushState("object or string", "Title", new_url);

    jQuery('.otp_sms').hide();
    jQuery('#twilio_check').hide();
  });


  jQuery('#new_mobile1').blur(function () {
    var mobile = jQuery('#new_mobile1').val();
    if (mobile.length == 0) {
      jQuery('#new_mobile1').focus();
      jQuery('#new_mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
      jQuery('.new_mobile1').text('Merci de remplir téléphone portable');
      jQuery('.new_mobile1').css({ "color": "red" });

    }
    else {

      reg = /^\D*(\d\D*){9,14}$/;

      if (reg.test(mobile) == false) {
        jQuery('#new_mobile1').focus();
        jQuery('#new_mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.new_mobile1').text('numéro de téléphone mobile invalide');
        jQuery('.new_mobile1').css({ "color": "red" });
        return false;
      }
      else {
        jQuery('.new_mobile1').text('');

      }

    }
  })


  jQuery('#btn_phone_num_updation').on('click', function () {

    Vtiger_WSClient.doLogin(username, accesskey, postLogin_1);
    function postLogin_1(result, args) {
      if (!result) console.log('Login failed');
      else createModuleRecord_1();
    }
    function createModuleRecord_1() {
      var module = 'Contacts';
      var mobile = jQuery('#new_mobile1').val();


      var id1 = jQuery('#temp_id').val();
      if (id1 == '') {
        var id1 = jQuery('#contact_record_new').val();
      }



      console.log(id1);

      if (mobile.length == 0) {
        jQuery('#new_mobile1').focus();
        jQuery('#new_mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
        jQuery('.new_mobile1').text('Merci de remplir Téléphone');
        jQuery('.new_mobile1').css({ "color": "red" });

      }
      else {

        reg = /^\D*(\d\D*){9,14}$/;

        if (reg.test(mobile) == false) {
          jQuery('#new_mobile1').focus();
          jQuery('.new_mobile1').css({ "background-color": "#ffe6e6", "border": "1 px solid #ff1a1a" });
          jQuery('.new_mobile1').text('numéro de téléphone mobile invalide');
          jQuery('.new_mobile1').css({ "color": "red" });
          return false;
        }
        else {
          jQuery('.new_mobile1').text('');

        }

      }


      if (mobile.length > 0) {
        var valuesmap = { 'mobile': mobile, 'id': id1, 'lflag': 'fr', 'mode': 'phone_update' };

        Vtiger_WSClient.doInvoke(postInvoke_1, 'bio_works1', { 'element': JSON.stringify(valuesmap) });
      }
      // afterCreateRecord gets a call once request is completed 
    }

    function postInvoke_1(result, args) {

      if (result == false) {
        alert(Vtiger_WSClient.lastError()['message']);
      }
      else {

        jQuery('.otp_sms').show();

        jQuery('#twilio_check').show();
        jQuery('.phone_num_updation').hide();
        jQuery('.link_up_phone').hide();

      }
    }

  });


  jQuery('.ref_enabled').on('click', function () {
    jQuery('.sixthdiv-referral-mobile').show();
    jQuery('.ref_enabled').hide();


  })


  jQuery('.reset_msg').on('click', function () {

    jQuery('#loading1').hide();
    // jQuery('#twilio_check').prop('disabled', false);
    jQuery('#resetModal').modal('toggle');
    // jQuery('#twilio_check').hide();
    jQuery('#reset_flag').val('reset_slot');
    jQuery('#otp_sms').hide();
    jQuery('#otp_sms1').hide();
    jQuery('#contact_create1').trigger('click');


  })
















});