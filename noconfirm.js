var delayNotify;
cj( document ).ready(function() {
  cj("#crm-container form#Participant #status_id").change(function() {
    clearTimeout(delayNotify);
    delayNotify = setTimeout(function() {
      cj("#is_notify").attr("checked",false);
    }, 100);
  });
});
