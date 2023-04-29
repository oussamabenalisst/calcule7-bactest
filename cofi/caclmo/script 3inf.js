s = 0;
a = 0;
function cleartou() {
  s = 0;
  a = 0;
  getdoi("var1").value = "";
  getdoi("var3").value = "";
  getdoi("vfr1").value = "";
  getdoi("vfr3").value = "";
  getdoi("vang1").value = "";
  getdoi("vang3").value = "";
  getdoi("vmath1").value = "";
  getdoi("vmath3").value = "";
  getdoi("vph1").value = "";
  getdoi("vph3").value = "";
  getdoi("vh1").value = "";
  getdoi("vh2").value = "";
  getdoi("vg1").value = "";
  getdoi("vg2").value = "";
  getdoi("vsp1").value = "";
  getdoi("vsp2").value = "";
  getdoi("vmad1").value = "";
  getdoi("vmad2").value = "";
  getdoi("vis1").value = "";
  getdoi("vis3").value = "";
  getdoi("vis2").value = "";
  getdoi("vtech3").value = "";
  getdoi("vsvt1").value = "";
  getdoi("vsvt2").value = "";
  getdoi("vsvt3").value = "";
  getdoi("OPTION").checked = false;
  getdoi("vmad1").disabled = true;
  getdoi("resto").innerHTML = "";
  getdoi("res1").innerHTML = "";
  getdoi("res2").innerHTML = "";
  getdoi("res3").innerHTML = "";
  getdoi("res4").innerHTML = "";
  getdoi("res5").innerHTML = "";
  getdoi("res6").innerHTML = "";
  getdoi("res7").innerHTML = "";
  getdoi("res8").innerHTML = "";
  getdoi("res9").innerHTML = "";
  getdoi("res10").innerHTML = "";
  getdoi("res11").innerHTML = "";
  getdoi("res12").innerHTML = "";
}
function getdoi(x) {
  return document.getElementById(x);
}
function vrif(x, a) {
  if (x < 0 || x > 20 || x == "") {
    getdoi(a).value = "";
    getdoi(a).style.background = "rgb(255, 0, 0)";
    s = s + 1;
  } else {
    getdoi(a).style.background = "#fff";
  }
}
function ver2() {
  if (getdoi("OPTION").checked == true) {
    getdoi("vmad1").disabled = false;
    a = 1;
  } else {
    getdoi("vmad1").disabled = true;
    getdoi("vmad1").value = "";
    a = 0;
  }
}
function calcu() {
  ca = 1;
  cfr = 2;
  cang = 2;
  cmath = 3;
  cph = 3;
  //*svt mecaniqe
  csvt = 3;
  ch = 1;
  cg = 1;
  csp = 1;
  //? nmad= OPTION_________________
  cmada = 1;
  //* ci electriqe
  cis = 3;
  //? ntech= PHILO_________________
  cthc = 1;
  var1 = parseFloat(getdoi("var1").value);
  var3 = parseFloat(getdoi("var3").value);
  vfr1 = parseFloat(getdoi("vfr1").value);
  vfr3 = parseFloat(getdoi("vfr3").value);
  vang1 = parseFloat(getdoi("vang1").value);
  vang3 = parseFloat(getdoi("vang3").value);
  vmath1 = parseFloat(getdoi("vmath1").value);
  vmath3 = parseFloat(getdoi("vmath3").value);
  vph1 = parseFloat(getdoi("vph1").value);
  vph3 = parseFloat(getdoi("vph3").value);
  vsvt1 = parseFloat(getdoi("vsvt1").value);
  vsvt2 = parseFloat(getdoi("vsvt2").value);
  vsvt3 = parseFloat(getdoi("vsvt3").value);
  vh1 = parseFloat(getdoi("vh1").value);
  vh2 = parseFloat(getdoi("vh2").value);
  vg1 = parseFloat(getdoi("vg1").value);
  vg2 = parseFloat(getdoi("vg2").value);
  vsp1 = parseFloat(getdoi("vsp1").value);
  vsp2 = parseFloat(getdoi("vsp2").value);
  switch (a) {
    case 1:
      vmad1 = parseFloat(getdoi("vmad1").value);
      vmad2 = parseFloat(getdoi("vmad2").value);

      break;

    default:
      vmad2 = parseFloat(getdoi("vmad2").value);
      break;
  }
  //! is= electrique
  vis1 = parseFloat(getdoi("vis1").value);
  vis2 = parseFloat(getdoi("vis2").value);
  vis3 = parseFloat(getdoi("vis3").value);
  vtech3 = parseFloat(getdoi("vtech3").value);
  if (s > 0) {
    getdoi("resto").innerHTML = "none";
    s = 0;
  } else {
    let nar = ((var1 + var3 * 2) / 3) * ca;
    let nfr = ((vfr1 + vfr3 * 2) / 3) * cfr;
    let nang = ((vang1 + vang3 * 2) / 3) * cang;
    let nmath = ((vmath1 + vmath3 * 2) / 3) * cmath;
    let nph = ((vph1 + vph3 * 2) / 3) * cph;
    let nh = ((vh1 + vh2 * 2) / 3) * ch;
    let ng = ((vg1 + vg2 * 2) / 3) * cg;
    let nsp = ((vsp1 + vsp2 * 2) / 3) * csp;
    //? nmad= OPTION_________________
    switch (a) {
      case 1:
        nmad = ((vmad1 + vmad2 * 2) / 3) * cmada;
        break;
      default:
        nmad = ((vmad2 * 2) / 2) * cmada;
        break;
    }
    //? nmad= OPTION_________________
    let nis = ((vis1 + vis2 + vis3 * 2) / 3) * cis;
    //? ntech= PHILO_________________
    let ntech = ((vtech3 * 2) / 2) * cthc;
    //? ntech= PHILO_________________
    let nsvt = ((vsvt1 + vsvt2 + vsvt3 * 2) / 4) * csvt;
    //*__________________somme de coff_________
    scoff =
      ca + cfr + cang + cmath + cph + csvt + ch + cg + csp + cmada + cis + cthc;
    //*__________somme de note de mat_________
    not =
      nar +
      nfr +
      nang +
      nmath +
      nph +
      nh +
      ng +
      nsp +
      nmad +
      nis +
      ntech +
      nsvt;
    max = (not / scoff).toFixed(2);
    //*__________true()______
    getdoi("res1").innerHTML = "votre moyenne arabe: " + nar.toFixed(2);
    getdoi("res2").innerHTML = "votre moyenne français: " + nfr.toFixed(2);
    getdoi("res3").innerHTML = "votre moyenne anglais: " + nang.toFixed(2);
    getdoi("res4").innerHTML = "votre moyenne PHYSIQUES: " + nph.toFixed(2);
    getdoi("res6").innerHTML = "votre moyenne algo: " + nsvt.toFixed(2);
    getdoi("res7").innerHTML = "votre moyenne HISTOIRE: " + nh.toFixed(2);
    getdoi("res8").innerHTML = "votre moyenne GÉOGRAPHIE: " + ng.toFixed(2);
    getdoi("res9").innerHTML = "votre moyenne SPOR: " + nsp.toFixed(2);
    getdoi("res10").innerHTML = "votre moyenne OPTION: " + nmad.toFixed(2);
    getdoi("res11").innerHTML =
      "votre moyenne EDUCATION sti : " + nis.toFixed(2);
    getdoi("res12").innerHTML = "votre moyenne PHILO : " + ntech.toFixed(2);
    getdoi("resto").innerHTML = "votre moyenne: " + max;
    if (max > 14) {
      getdoi("resto").style.color = "#2bff00";
    } else if (max > 9) {
      getdoi("resto").style.color = "blue";
    } else {
      getdoi("resto").style.color = "red";
    }
  }
}
