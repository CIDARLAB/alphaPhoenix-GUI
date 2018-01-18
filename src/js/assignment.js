/**
 * Created by frascog on 12/12/17.
 */
const abstract = {
    "circuit": [
        [
            {
                "Transcriptional Unit 1": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            }
        ],
        [
            {
                "Transcriptional Unit 1": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            },
            {
                "Transcriptional Unit 2": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            }
        ],
        [
            {
                "Transcriptional Unit 1": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            },
            {
                "Transcriptional Unit 2": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            },
            {
                "Transcriptional Unit 3": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            }
        ]
    ],
    "assignments": {
        "Promoter": [
            "pA1LacO",
            "pBM3R1",
            "pBetI",
            "pLmrA",
            "pLtetO_1",
            "pPhlF",
            "pSrpR"
        ],
        "RBS": [
            "BCD1",
            "BCD12",
            "BCD13",
            "BCD16",
            "BCD2",
            "BCD8"
        ],
        "CDS": [
            "BM3R1",
            "betI",
            "lacIm",
            "lmrA",
            "phlF",
            "srpR",
            "tetR",
            "EYFP",
            "mOrange",
            "T_Sapphire"
        ],
        "Terminator": [
            "B0015",
            "ECK120015170",
            "IR1_IR2_Term2",
            "L3S1P00",
            "L3S1P13",
            "L3S1P22",
            "L3S2P21",
            "T1"
        ]
    }
};

$().ready(function() {

    var menu = $('#abstractMenu');
    let fullMenu = '';
    for(let i = 0; i < abstract.circuit.length; i++) {
        let menuItem = '<ul class="menu-list">';
        menuItem += "<li><a onclick=\"toggleCircuitVisibility('Circuit"+i+"')\">Circuit " + (i + 1) + "</a>";
        for(let items of abstract.circuit[i]) {

            menuItem += '<ul class="Circuit'+i+'" style="display: none">'
            for (let unit in items) {
                menuItem += '<li><a onclick=\"toggleUnitVisibility(\'Circuit'+i+'Unit'+ unit.replace(/ /g,'') +'\')">' + unit + '</a>';
                menuItem += '<ul class="Circuit'+i+'Unit'+unit.replace(/ /g,'')+'" style="display: none">';
                for (let part of items[unit]) {
                    menuItem += '<li><div class="columns"><div class="column is-5"><label> '+part + "</label></div><div class='column is-7'><select class='form-control select2 select"+ part+"' >";
                    for(let assignment of abstract.assignments[part]) {
                        menuItem += '<option value="'+assignment+'">'+assignment+'</option>'
                    }
                    menuItem += "</select></div></div></li>";
                }
                menuItem += "</ul>";
                menuItem += "</li>";
            }
            menuItem += '</ul>'
        }
        menuItem += "</li>";
        menuItem += "</ul>";
        fullMenu += menuItem;
    }
    menu.append(fullMenu);
    $('.select2').select2();
});

function select2Init() {
    $('.selectPromoter').select2({
        placeholder: 'Select a Promoter'
    });
}

function changeEditor(language) {
    switch(language) {
        case 'xml':
            editor.getSession().setMode('ace/mode/xml');
            editor.setValue(XML());
            $('#XML').addClass('is-active');
            $('#XHTML').removeClass('is-active');
            break;
        case 'xhtml':
            editor.getSession().setMode('ace/mode/xml');
            editor.setValue(XHTML());
            $('#XML').removeClass('is-active');
            $('#XHTML').addClass('is-active');
            break;
    }

}

function toggleCircuitVisibility(id) {
    var item = $('.' + id);
    if(item.is(':visible')) {
        item.hide()
    } else {
        item.show()
    }
}

function toggleUnitVisibility(id) {
    var item = $('.' + id);
    if(item.is(':visible')) {
        item.hide()
    } else {
        item.show()
    }
}

function XML() {
    return `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
<sbml xmlns="http://www.sbml.org/sbml/level3/version1/core" arrays:required="true" comp:required="true" fbc:required="false" layout:required="false" level="3" version="1" xmlns:arrays="http://www.sbml.org/sbml/level3/version1/arrays/version1" xmlns:comp="http://www.sbml.org/sbml/level3/version1/comp/version1" xmlns:fbc="http://www.sbml.org/sbml/level3/version1/fbc/version2" xmlns:layout="http://www.sbml.org/sbml/level3/version1/layout/version1">
  <model fbc:strict="false" id="circuit1" metaid="iBioSim2">
    <comp:listOfPorts xmlns:comp="http://www.sbml.org/sbml/level3/version1/comp/version1">
      <comp:port comp:id="compartment__Cell" comp:idRef="Cell" sboTerm="SBO:0000601"/>
    </comp:listOfPorts>
    <layout:listOfLayouts xmlns:layout="http://www.sbml.org/sbml/level3/version1/layout/version1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <layout:layout layout:id="iBioSim">
        <layout:dimensions layout:depth="0" layout:height="425" layout:width="1070"/>
        <layout:listOfCompartmentGlyphs>
          <layout:compartmentGlyph layout:compartment="Cell" layout:id="Glyph__Cell">
            <layout:boundingBox>
              <layout:position layout:x="0" layout:y="0"/>
              <layout:dimensions layout:height="425" layout:width="1070"/>
            </layout:boundingBox>
          </layout:compartmentGlyph>
        </layout:listOfCompartmentGlyphs>
        <layout:listOfSpeciesGlyphs>
          <layout:speciesGlyph layout:id="Glyph__S0" layout:species="S0">
            <layout:boundingBox>
              <layout:position layout:x="155" layout:y="110"/>
              <layout:dimensions layout:height="30" layout:width="100"/>
            </layout:boundingBox>
          </layout:speciesGlyph>
          <layout:speciesGlyph layout:id="Glyph__S1" layout:species="S1">
            <layout:boundingBox>
              <layout:position layout:x="437" layout:y="109"/>
              <layout:dimensions layout:height="30" layout:width="100"/>
            </layout:boundingBox>
          </layout:speciesGlyph>
        </layout:listOfSpeciesGlyphs>
        <layout:listOfReactionGlyphs>
          <layout:reactionGlyph layout:id="Glyph__S0__repression__S1">
            <layout:boundingBox>
              <layout:position layout:x="487" layout:y="124"/>
              <layout:dimensions layout:height="0" layout:width="0"/>
            </layout:boundingBox>
            <layout:listOfSpeciesReferenceGlyphs>
              <layout:speciesReferenceGlyph layout:id="ReferenceGlyph__S0__repression__S1" layout:role="product" layout:speciesGlyph="Glyph__S1">
                <layout:curve>
                  <layout:listOfCurveSegments>
                    <layout:curveSegment xsi:type="LineSegment">
                      <layout:start layout:x="205" layout:y="125"/>
                      <layout:end layout:x="487" layout:y="124"/>
                    </layout:curveSegment>
                  </layout:listOfCurveSegments>
                </layout:curve>
              </layout:speciesReferenceGlyph>
            </layout:listOfSpeciesReferenceGlyphs>
          </layout:reactionGlyph>
        </layout:listOfReactionGlyphs>
        <layout:listOfTextGlyphs>
          <layout:textGlyph layout:graphicalObject="Glyph__Cell" layout:id="TextGlyph__Cell" layout:text="Cell">
            <layout:boundingBox>
              <layout:position layout:x="0" layout:y="0"/>
              <layout:dimensions layout:height="425" layout:width="1070"/>
            </layout:boundingBox>
          </layout:textGlyph>
          <layout:textGlyph layout:graphicalObject="Glyph__S0" layout:id="TextGlyph__S0" layout:text="S0">
            <layout:boundingBox>
              <layout:position layout:x="155" layout:y="110"/>
              <layout:dimensions layout:height="30" layout:width="100"/>
            </layout:boundingBox>
          </layout:textGlyph>
          <layout:textGlyph layout:graphicalObject="Glyph__S1" layout:id="TextGlyph__S1" layout:text="S1">
            <layout:boundingBox>
              <layout:position layout:x="437" layout:y="109"/>
              <layout:dimensions layout:height="30" layout:width="100"/>
            </layout:boundingBox>
          </layout:textGlyph>
        </layout:listOfTextGlyphs>
      </layout:layout>
    </layout:listOfLayouts>
            <listOfCompartments>
      <compartment constant="true" id="Cell" size="1" spatialDimensions="3"/>
    </listOfCompartments>
    <listOfSpecies>
      <species boundaryCondition="false" compartment="Cell" constant="false" hasOnlySubstanceUnits="true" id="S0" initialAmount="0" metaid="iBioSim1"/>
      <species boundaryCondition="false" compartment="Cell" constant="false" hasOnlySubstanceUnits="true" id="S1" initialAmount="0" metaid="iBioSim3"/>
      <species boundaryCondition="false" compartment="Cell" constant="false" hasOnlySubstanceUnits="true" id="P0" initialAmount="2" metaid="iBioSim4" sboTerm="SBO:0000590"/>
    </listOfSpecies>
    <listOfParameters>
      <parameter constant="true" id="kr_f" name="Forward repression binding rate" value="0.5"/>
      <parameter constant="true" id="kr_r" name="Reverse repression binding rate" value="1"/>
      <parameter constant="true" id="ka_f" name="Forward activation binding rate" value="0.0033"/>
      <parameter constant="true" id="ka_r" name="Reverse activation binding rate" value="1"/>
      <parameter constant="true" id="ko_f" name="Forward RNAP binding rate" value="0.033"/>
      <parameter constant="true" id="ko_r" name="Reverse RNAP binding rate" value="1"/>
      <parameter constant="true" id="kao_f" name="Forward activated RNAP binding rate" value="1"/>
      <parameter constant="true" id="kao_r" name="Reverse activated RNAP binding rate" value="1"/>
      <parameter constant="true" id="nc" name="Stoichiometry of binding" value="2"/>
      <parameter constant="true" id="nr" name="Initial RNAP count" value="30"/>
      <parameter constant="true" id="ko" name="Open complex production rate" value="0.05"/>
      <parameter constant="true" id="kb" name="Basal production rate" value="0.0001"/>
      <parameter constant="true" id="ng" name="Initial promoter count" value="2"/>
      <parameter constant="true" id="np" name="Stoichiometry of production" value="10"/>
      <parameter constant="true" id="ka" name="Activated production rate" value="0.25"/>
    </listOfParameters>
        <listOfReactions>
      <reaction compartment="Cell" fast="false" id="Production_P0" metaid="iBioSim6" reversible="false" sboTerm="SBO:0000589">
        <listOfProducts>
          <speciesReference constant="true" species="S1" stoichiometry="10"/>
        </listOfProducts>
        <listOfModifiers>
          <modifierSpeciesReference sboTerm="SBO:0000598" species="P0"/>
          <modifierSpeciesReference sboTerm="SBO:0000020" species="S0"/>
        </listOfModifiers>
        <kineticLaw>
          <math xmlns="http://www.w3.org/1998/Math/MathML">          
            <apply>
              <divide/>
              <apply>
                <times/>
                <apply>
                  <times/>
                  <apply>
                    <times/>
                    <ci> P0 </ci>
                    <ci> ko </ci>
                  </apply>
                  <apply>
                    <divide/>
                    <ci> ko_f </ci>
                    <ci> ko_r </ci>
                  </apply>
                </apply>
                <ci> nr </ci>
              </apply>
              <apply>
                <plus/>
                <apply>
                  <plus/>
                  <cn type="integer"> 1 </cn>
                  <apply>
                    <times/>
                    <apply>
                      <divide/>
                      <ci> ko_f </ci>
                      <ci> ko_r </ci>
                    </apply>
                    <ci> nr </ci>
                  </apply>
                </apply>
                <apply>
                  <power/>
                  <apply>
                    <times/>
                    <apply>
                      <divide/>
                      <ci> kr_f </ci>
                      <ci> kr_r </ci>
                    </apply>
                    <ci> S0 </ci>
                  </apply>
                  <ci> nc </ci>
                </apply>
              </apply>
            </apply>
          </math>
                </kineticLaw>
      </reaction>
    </listOfReactions>
      </model>
</sbml>`;
}

function XHTML() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/TR/MathML2/dtd/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>


<table border="2"><tr><th>Model ID</th><td>(null)</td></tr><tr><th>Model Name</th><td>Created by iBioSim flatten routine</td></tr></table>

<br />
<br />
<table border="2"><tr><th>Compartment ID</th><th>Dimensions</th><th>Initial Size</th><th>Units</th><th>Constant</th></tr>
<tr><td>cell</td><td><center>nan</center></td><td><center>1</center></td><td>none</td><td>False</td></tr>

</table>

<br />
<br />
<table border="2"><tr><th>Species ID</th><th>Compartment</th><th>Initial Value</th><th>Units</th><th>Conversion Factor</th><th>Boundary</th><th>Constant</th><th>HasOnlySubstanceUnits</th></tr>
<tr><td>S1</td><td>cell</td><td><center>0 (amount)</center></td><td>none</td><td>none</td><td>False</td><td>False</td><td>True</td></tr>

<tr><td>S2</td><td>cell</td><td><center>0 (amount)</center></td><td>none</td><td>none</td><td>False</td><td>False</td><td>True</td></tr>

</table>

<br />
<br />
<table border="2"><tr><th>Parameter ID</th><th>Initial Value</th><th>Units</th><th>Constant</th></tr>
<tr><td>S2_expression_n</td><td><center>2</center></td><td>none</td><td>True</td></tr>

<tr><td>S1_degradation_K_d</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S1_degradation_K_d_001</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S2_degradation_K_d</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S2_degradation_K_d_001</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S2_expression_k_EXR</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S1_degradation_y</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S1_expression_k_EXE</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S2_degradation_y</td><td><center>1</center></td><td>none</td><td>True</td></tr>

<tr><td>S2_expression_K_r</td><td><center>1</center></td><td>none</td><td>True</td></tr>

</table>

<br />
<br />
<table border="2"><tr><th>Reaction ID</th><th>Compartment</th><th>Rev</th><th>Fast</th><th>Reactants</th><th>Products</th><th>Modifiers</th><th>Kinetic Law</th></tr>
<tr><td>S1_expression</td><td>(null)</td><td>False</td><td>False</td><td></td><td>S1</td><td></td><td>    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
            <mi>S1_expression_k_EXE</mi>
        </mrow>
    </math>
</td></tr>

<tr><td>S1_degradation</td><td>(null)</td><td>False</td><td>False</td><td>S1</td><td></td><td></td><td>    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
            <mfrac>
                <mrow>
                    <mfrac>
                        <mrow>
                            <mi>S1_degradation_y</mi>
                            <mo>*</mo>
                            <mi>S1</mi>
                        </mrow>
                        <mrow>
                            <mi>S1_degradation_K_d</mi>
                        </mrow>
                    </mfrac>
                </mrow>
                <mrow>
                    <mrow>
                        <mi>1</mi>
                    </mrow>
                    <mo>+</mo>
                    <mrow>
                        <mfrac>
                            <mrow>
                                <mi>S1</mi>
                            </mrow>
                            <mrow>
                                <mi>S1_degradation_K_d_001</mi>
                            </mrow>
                        </mfrac>
                    </mrow>
                </mrow>
            </mfrac>
        </mrow>
    </math>
</td></tr>

<tr><td>S2_expression</td><td>(null)</td><td>False</td><td>False</td><td></td><td>S2</td><td>S1</td><td>    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
            <mfrac>
                <mrow>
                    <mi>S2_expression_k_EXR</mi>
                </mrow>
                <mrow>
                    <mrow>
                        <mi>1</mi>
                    </mrow>
                    <mo>+</mo>
                    <mrow>
                        <mi>S2_expression_K_r</mi>
                        <mo>*</mo>
                        <msup>
                            <mrow>
                                <mi>S1</mi>
                            </mrow>
                            <mrow>
                                <mi>S2_expression_n</mi>
                            </mrow>
                        </msup>
                    </mrow>
                </mrow>
            </mfrac>
        </mrow>
    </math>
</td></tr>

<tr><td>S2_degradation</td><td>(null)</td><td>False</td><td>False</td><td>S2</td><td></td><td></td><td>    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
            <mfrac>
                <mrow>
                    <mfrac>
                        <mrow>
                            <mi>S2_degradation_y</mi>
                            <mo>*</mo>
                            <mi>S2</mi>
                        </mrow>
                        <mrow>
                            <mi>S2_degradation_K_d</mi>
                        </mrow>
                    </mfrac>
                </mrow>
                <mrow>
                    <mrow>
                        <mi>1</mi>
                    </mrow>
                    <mo>+</mo>
                    <mrow>
                        <mfrac>
                            <mrow>
                                <mi>S2</mi>
                            </mrow>
                            <mrow>
                                <mi>S2_degradation_K_d_001</mi>
                            </mrow>
                        </mfrac>
                    </mrow>
                </mrow>
            </mfrac>
        </mrow>
    </math>
</td></tr>

</table>

<br />
<br />

</body>
</html>`;
}