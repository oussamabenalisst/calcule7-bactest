s = 0;
function cleartou() {
  s = 0;
  getdoi("var1").value = "";
  getdoi("var2").value = "";
  getdoi("var3").value = "";
  getdoi("vfr1").value = "";
  getdoi("vfr2").value = "";
  getdoi("vfr3").value = "";
  getdoi("vang1").value = "";
  getdoi("vang2").value = "";
  getdoi("vang3").value = "";
  getdoi("vmath1").value = "";
  getdoi("vmath2").value = "";
  getdoi("vmath3").value = "";
  getdoi("vph1").value = "";
  getdoi("vph2").value = "";
  getdoi("vph3").value = "";
  getdoi("vinf1").value = "";
  getdoi("vinf2").value = "";
  getdoi("vinf3").value = "";
  getdoi("vh1").value = "";
  getdoi("vh2").value = "";
  getdoi("vg1").value = "";
  getdoi("vg2").value = "";
  getdoi("vsp1").value = "";
  getdoi("vsp2").value = "";
  getdoi("vmad1").value = "";
  getdoi("vmad2").value = "";
  getdoi("vis1").value = "";
  getdoi("vis2").value = "";
  getdoi("vsvt1").value = "";
  getdoi("vsvt2").value = "";
  getdoi("vsvt3").value = "";
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
function calcu() {
  ca = 2;
  cfr = 2;
  cang = 2;
  cmath = 2.5;
  cph = 4;
  cinf = 1;
  csvt = 4;
  ch = 1;
  cg = 2;
  csp = 1;
  cmada = 1;
  cis = 1;
  var1 = parseFloat(getdoi("var1").value);
  var2 = parseFloat(getdoi("var2").value);
  var3 = parseFloat(getdoi("var3").value);
  vfr1 = parseFloat(getdoi("vfr1").value);
  vfr2 = parseFloat(getdoi("vfr2").value);
  vfr3 = parseFloat(getdoi("vfr3").value);
  vang1 = parseFloat(getdoi("vang1").value);
  vang2 = parseFloat(getdoi("vang2").value);
  vang3 = parseFloat(getdoi("vang3").value);
  vmath1 = parseFloat(getdoi("vmath1").value);
  vmath2 = parseFloat(getdoi("vmath2").value);
  vmath3 = parseFloat(getdoi("vmath3").value);
  vph1 = parseFloat(getdoi("vph1").value);
  vph2 = parseFloat(getdoi("vph2").value);
  vph3 = parseFloat(getdoi("vph3").value);
  vinf1 = parseFloat(getdoi("vinf1").value);
  vinf2 = parseFloat(getdoi("vinf2").value);
  vinf3 = parseFloat(getdoi("vinf3").value);
  vsvt1 = parseFloat(getdoi("vsvt1").value);
  vsvt2 = parseFloat(getdoi("vsvt2").value);
  vsvt3 = parseFloat(getdoi("vsvt3").value);
  vh1 = parseFloat(getdoi("vh1").value);
  vh2 = parseFloat(getdoi("vh2").value);
  vg1 = parseFloat(getdoi("vg1").value);
  vg2 = parseFloat(getdoi("vg2").value);
  vsp1 = parseFloat(getdoi("vsp1").value);
  vsp2 = parseFloat(getdoi("vsp2").value);
  vmad1 = parseFloat(getdoi("vmad1").value);
  vmad2 = parseFloat(getdoi("vmad2").value);
  vis1 = parseFloat(getdoi("vis1").value);
  vis2 = parseFloat(getdoi("vis2").value);
  if (s > 0) {
    getdoi("resto").innerHTML = "none";
    s = 0;
  } else {
    let nar = ((var1 + var2 + var3 * 2) / 4) * ca;
    let nfr = ((vfr1 + vfr2 + vfr3 * 2) / 4) * cfr;
    let nang = ((vang1 + vang2 + vang3 * 2) / 4) * cang;
    let nmath = ((vmath1 + vmath2 + vmath3 * 2) / 4) * cmath;
    let nph = ((vph1 + vph2 + vph3 * 2) / 4) * cph;
    let ninf = ((vinf1 + vinf2 + vinf3 * 2) / 4) * cinf;
    let nh = ((vh1 + vh2 * 2) / 3) * ch;
    let ng = ((vg1 + vg2 * 2) / 3) * cg;
    let nsp = ((vsp1 + vsp2 * 2) / 3) * csp;
    let nmad = ((vmad1 + vmad2 * 2) / 3) * cmada;
    let nis = ((vis1 + vis2 * 2) / 3) * cis;
    let nsvt = ((vsvt1 + vsvt2 + vsvt3 * 2) / 4) * csvt;
    //*__________________somme de coff_________
    scoff =
      ca + cfr + cang + cmath + cph + cinf + csvt + ch + cg + csp + cmada + cis;
    //*__________somme de note de mat_________
    not =
      nar + nfr + nang + nmath + nph + ninf + nh + ng + nsp + nmad + nis + nsvt;
    max = (not / scoff).toFixed(2);
    //*__________true()______
    getdoi("res1").innerHTML = "votre moyenne arabe: " + nar.toFixed(2);
    getdoi("res2").innerHTML = "votre moyenne français: " + nfr.toFixed(2);
    getdoi("res3").innerHTML = "votre moyenne anglais: " + nang.toFixed(2);
    getdoi("res4").innerHTML = "votre moyenne GESTION: " + nph.toFixed(2);
    getdoi("res5").innerHTML = "votre moyenne INFORMATIQUE: " + ninf.toFixed(2);
    getdoi("res6").innerHTML = "votre moyenne ÉCONOMIE: " + nsvt.toFixed(2);
    getdoi("res7").innerHTML = "votre moyenne HISTOIRE: " + nh.toFixed(2);
    getdoi("res8").innerHTML = "votre moyenne GÉOGRAPHIE: " + ng.toFixed(2);
    getdoi("res9").innerHTML = "votre moyenne SPOR: " + nsp.toFixed(2);
    getdoi("res10").innerHTML =
      "votre moyenne EDUCATION CIVIQUE: " + nmad.toFixed(2);
    getdoi("res11").innerHTML =
      "votre moyenne EDUCATION ISLAMIQUE : " + nis.toFixed(2);
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
