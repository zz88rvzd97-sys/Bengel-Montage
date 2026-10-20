/*
 * PLZ-Punkte aus GeoNames (CC BY 3.0), geprüft gegen den Umriss des
 * Einsatzgebiets aus dem Taskrabbit-Profil. Der PLZ-Mittelpunkt ist eine
 * Näherung; die Eingabe bleibt im Browser und wird nicht gespeichert.
 */
(() => {
  const regularArea = new Set(`
    10102 10103 10104 10105 10106 10107 10108 10109 10112 10115 10117 10119
    10150 10169 10173 10178 10179 10243 10249 10400 10405 10407 10409 10431
    10435 10437 10439 10546 10547 10548 10551 10553 10555 10557 10559 10585
    10587 10589 10617 10623 10625 10627 10629 10702 10703 10704 10705 10707
    10709 10711 10713 10715 10717 10719 10768 10772 10773 10774 10777 10779
    10781 10783 10785 10787 10789 10819 10820 10823 10825 10827 10829 10859
    10860 10861 10862 10863 10864 10865 10867 10868 10872 10873 10874 10876
    10877 10878 10880 10881 10882 10883 10885 10886 10887 10888 10889 10890
    10891 10892 10893 10896 10901 10902 10903 10905 10907 10908 10909 10912
    10913 10914 10916 10917 10918 10919 10934 10956 10958 10959 10961 10963
    10965 10967 10969 10997 10999 12032 12101 12103 12154 12157 12159 12161
    12163 12165 12167 12169 12200 12203 12205 13047 13051 13086 13088 13089
    13122 13125 13127 13129 13156 13158 13159 13187 13189 13340 13341 13342
    13343 13344 13347 13349 13351 13353 13355 13357 13359 13400 13403 13405
    13407 13409 13435 13437 13439 13465 13467 13469 13496 13497 13498 13499
    13500 13503 13505 13507 13509 13565 13578 13581 13583 13585 13587 13589
    13591 13593 13595 13597 13599 13619 13622 13623 13624 13625 13627 13629
    13660 14045 14046 14047 14050 14052 14053 14055 14057 14059 14089 14107
    14109 14129 14131 14160 14163 14165 14167 14169 14191 14193 14195 14197
    14199 14424 14425 14456 14457 14458 14459 14461 14462 14463 14465 14467
    14469 14471 14473 14476 14478 14480 14482 14510 14513 14532 14542 14548
    14550 14557 14558 14612 14621 14624 14627 14641 14655 14656 14669 16352
    16515 16540 16547 16548 16552 16556 16562 16565 16567 16727 16759 16761
    16766 16767 16814 16816 16818 16827 16833 16835
  `.trim().split(/\s+/));

  const byAgreement = new Set(`
    10245 10247 10306 10313 10315 10317 10318 10319 10356 10358 10360 10361
    10362 10365 10367 10369 10842 10850 10858 10871 10884 10899 10904 12028
    12037 12038 12039 12040 12043 12045 12047 12049 12051 12053 12055 12057
    12059 12095 12096 12099 12105 12107 12109 12207 12209 12247 12249 12274
    12277 12279 12305 12307 12309 12345 12347 12349 12351 12353 12355 12357
    12359 12435 12437 12439 12459 12485 12487 12489 12521 12524 12526 12527
    12529 12552 12555 12557 12559 12587 12589 12616 12619 12621 12623 12627
    12629 12670 12671 12677 12679 12681 12683 12685 12687 12689 12712 13048
    13053 13055 13057 13059 14464 14547 14552 14554 14662 14715 14728 14765
    14767 14770 14772 14776 14778 14797 14798 14822 14943 14959 14974 14979
    14980 15366 15370 15566 15732 15827 15831 15834 16230 16321 16341 16348
    16356 16359 16559 16775 16792 16831 16837 16845 16868 17240
  `.trim().split(/\s+/));

  const form = document.querySelector("#postcode-checker");
  const input = document.querySelector("#postcode-input");
  const result = document.querySelector("#postcode-result");
  const actions = document.querySelector("#postcode-actions");
  const whatsapp = document.querySelector("#postcode-whatsapp");
  const email = document.querySelector("#postcode-email");

  if (!form || !input || !result || !actions || !whatsapp || !email) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const postalCode = input.value.trim();
    result.hidden = false;
    actions.hidden = true;
    result.className = "postcode-result";

    if (!/^\d{5}$/.test(postalCode)) {
      result.classList.add("is-invalid");
      result.textContent = "Bitte geben Sie eine fünfstellige Postleitzahl ein.";
      input.focus();
      return;
    }

    let message;
    if (regularArea.has(postalCode)) {
      result.classList.add("is-core");
      message = `Ja – die PLZ ${postalCode} liegt in meinem regulären Einsatzgebiet. Senden Sie mir gern eine Anfrage.`;
      actions.hidden = false;
    } else if (byAgreement.has(postalCode)) {
      result.classList.add("is-buffer");
      message = `Die PLZ ${postalCode} liegt in der Randzone. Ob ich Ihren Auftrag dort übernehmen kann, kläre ich gern auf Anfrage.`;
      actions.hidden = false;
    } else {
      result.classList.add("is-out");
      message = `Die PLZ ${postalCode} liegt außerhalb meines Einsatzgebiets. Dort kann ich derzeit leider keine Aufträge übernehmen.`;
    }

    result.textContent = message;
    const body = `Guten Tag,\n\nich möchte eine Montage anfragen.\n\nEinsatzort / PLZ: ${postalCode}\nWas soll montiert werden?\nWunschtermin:\n\nFreundliche Grüße`;
    whatsapp.href = `https://wa.me/4915167969682?text=${encodeURIComponent(body)}`;
    email.href = `mailto:kontakt@bengel-montage.de?subject=${encodeURIComponent(`Montageanfrage PLZ ${postalCode}`)}&body=${encodeURIComponent(body)}`;
  });
})();
