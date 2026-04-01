"use client"; 
import { useState } from "react";

// ─── Components ───
const B = ({children,c="#6366f1"})=><strong style={{color:c}}>{children}</strong>;
const Box = ({bg="#f8fafc",border,children,s={}})=><div style={{background:bg,borderRadius:12,padding:14,marginBottom:10,border:border||"none",...s}}>{children}</div>;
const Tt = ({children,c="#1a1a2e"})=><div style={{fontSize:16,fontWeight:700,color:c,marginBottom:8}}>{children}</div>;
const Sm = ({children})=><div style={{fontSize:13,color:"#333",lineHeight:1.8}}>{children}</div>;
const Fm = ({children,label})=><div style={{background:"linear-gradient(135deg,#eef2ff,#fce7f3)",borderRadius:10,padding:"12px 16px",marginBottom:10,textAlign:"center",border:"2px solid #c7d2fe"}}>{label&&<div style={{fontSize:11,fontWeight:700,color:"#6366f1",textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>{label}</div>}<div style={{fontSize:17,fontFamily:"Georgia,serif",color:"#1a1a2e",fontWeight:700}}>{children}</div></div>;
const Ex = ({children})=><div style={{background:"#fffbeb",borderLeft:"4px solid #f59e0b",padding:"8px 12px",borderRadius:"0 8px 8px 0",marginBottom:8}}>{children}</div>;
const W = ({children})=><div style={{background:"#fef3c7",borderLeft:"4px solid #f59e0b",padding:"8px 12px",borderRadius:"0 8px 8px 0",marginBottom:8,fontSize:13}}><B c="#92400e">⚠️ </B><span style={{color:"#78350f"}}>{children}</span></div>;
const Tp = ({children})=><div style={{background:"#ecfdf5",borderLeft:"4px solid #22c55e",padding:"8px 12px",borderRadius:"0 8px 8px 0",marginBottom:8,fontSize:13}}><B c="#166534">💡 </B><span style={{color:"#14532d"}}>{children}</span></div>;
const Wh = ({children})=><div style={{background:"#eff6ff",borderLeft:"4px solid #3b82f6",padding:"8px 12px",borderRadius:"0 8px 8px 0",marginBottom:8,fontSize:13}}><B c="#1e40af">🧠 </B><span style={{color:"#1e3a5f"}}>{children}</span></div>;
const Q = ({children})=><div style={{background:"#f0f0ff",border:"2px solid #6366f1",borderRadius:10,padding:12,marginBottom:10}}><div style={{fontSize:12,fontWeight:700,color:"#6366f1",marginBottom:4}}>📝 QUESTION</div><Sm>{children}</Sm></div>;
const Tb = ({h,r})=>(<table style={{width:"100%",borderCollapse:"collapse",fontSize:12,marginBottom:6}}><thead><tr>{h.map((x,i)=><th key={i} style={{background:"#e0e7ff",padding:"4px 6px",border:"1px solid #c7d2fe",color:"#4338ca",fontWeight:700,textAlign:"center"}}>{x}</th>)}</tr></thead><tbody>{r.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j} style={{padding:"4px 6px",border:"1px solid #e2e8f0",textAlign:"center",background:i%2===0?"#fff":"#f8fafc"}}>{cell}</td>)}</tr>)}</tbody></table>);
const G = ({l,r})=><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{l}{r}</div>;
const PQ = ({n,q})=><div style={{background:"#fff",border:"2px solid #e2e8f0",borderRadius:10,padding:12,marginBottom:8}}><div style={{display:"flex",gap:8,alignItems:"flex-start"}}><div style={{width:24,height:24,borderRadius:"50%",background:"#6366f1",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:12,flexShrink:0}}>{n}</div><div style={{fontSize:14,color:"#333",lineHeight:1.7}}>{q}</div></div></div>;

// ─── WHITEBOARD: The visual math component ───
const WB = ({children})=><div style={{background:"#fafaf8",border:"2px solid #d4d0c8",borderRadius:12,padding:16,marginBottom:10,fontFamily:"'Georgia','Times New Roman',serif",position:"relative",boxShadow:"inset 0 2px 8px rgba(0,0,0,0.04)"}}><div style={{position:"absolute",top:6,right:10,fontSize:10,color:"#b8b4a8",fontFamily:"sans-serif",fontWeight:600}}>📋 WORK</div>{children}</div>;
const MathLine = ({children,color="#1a1a2e",indent=0,size=16})=><div style={{fontSize:size,color,paddingLeft:indent,lineHeight:2,fontFamily:"'Georgia','Times New Roman',serif"}}>{children}</div>;
const Annotate = ({children,color="#6366f1"})=><span style={{fontSize:11,color,fontFamily:"'Segoe UI',sans-serif",fontWeight:600,marginLeft:8}}>← {children}</span>;
const MathBox = ({children,color="#ef4444"})=><span style={{border:`2px solid ${color}`,borderRadius:6,padding:"2px 8px",color,fontWeight:700}}>{children}</span>;
const Arrow = ({text,color="#6366f1"})=><div style={{textAlign:"center",color,fontSize:12,fontFamily:"sans-serif",fontWeight:600,margin:"4px 0"}}>{text} ↓</div>;
const Ans = ({children})=><div style={{background:"#fef2f2",border:"2px solid #ef4444",borderRadius:8,padding:"8px 14px",fontSize:16,color:"#b91c1c",fontWeight:700,fontFamily:"Georgia,serif",textAlign:"center",marginTop:8}}>{children}</div>;
const FmUsed = ({children})=><div style={{background:"#eef2ff",border:"1px solid #a5b4fc",borderRadius:8,padding:"6px 12px",fontSize:13,color:"#4338ca",fontWeight:600,marginBottom:8,fontFamily:"Georgia,serif",textAlign:"center"}}><span style={{fontSize:10,fontFamily:"sans-serif",fontWeight:700,color:"#6366f1"}}>FORMULA: </span>{children}</div>;

const topics = [
  { id:"1.1", name:"Change in Tandem", slides:[
    { title:"Concept — What is a Function?", content:<div>
      <Fm label="Definition">A function maps each input to EXACTLY ONE output</Fm>
      <Wh>Think of a vending machine: press 1 button → get 1 specific snack. Every time. If one button randomly gave different snacks, that's NOT a function.</Wh>
      <Box bg="#eef2ff"><Tt c="#4338ca">Vocabulary</Tt><Sm>
        • <B>Domain</B> = all possible inputs (x-values)<br/>
        • <B>Range</B> = all possible outputs (y-values)<br/>
        • <B>Independent variable</B> = input · <B>Dependent variable</B> = output
      </Sm></Box>
      <Box bg="#f0fdf4"><Tt c="#166534">Four Representations</Tt><Sm>
        <B c="#166534">Analytical</B> (equation) · <B c="#166534">Graphical</B> (picture) · <B c="#166534">Numerical</B> (table) · <B c="#166534">Verbal</B> (words)
      </Sm></Box>
    </div>},
    { title:"Concept — Increasing, Decreasing & Concavity", content:<div>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Increasing</Tt><Sm>As x goes right, y goes UP. If a{"<"}b then f(a){"<"}f(b).</Sm></Box>
      <Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#991b1b">Decreasing</Tt><Sm>As x goes right, y goes DOWN. If a{"<"}b then f(a){">"}f(b).</Sm></Box>
      <G l={<Box bg="#fffbeb" border="2px solid #fcd34d" s={{textAlign:"center"}}><Tt c="#92400e">☕ Concave Up</Tt>
        <svg width="100" height="50" viewBox="0 0 100 50"><path d="M 5 5 Q 50 48, 95 5" stroke="#f59e0b" strokeWidth="3" fill="none"/></svg>
        <Sm>ROC <B c="#92400e">increasing</B> · "like a cup"</Sm></Box>}
        r={<Box bg="#fdf4ff" border="2px solid #e879f9" s={{textAlign:"center"}}><Tt c="#86198f">☹️ Concave Down</Tt>
        <svg width="100" height="50" viewBox="0 0 100 50"><path d="M 5 45 Q 50 2, 95 45" stroke="#d946ef" strokeWidth="3" fill="none"/></svg>
        <Sm>ROC <B c="#86198f">decreasing</B> · "like a frown"</Sm></Box>}/>
    </div>},
    { title:"Example — Evaluating f(x) = 200 + 10x", content:<div>
      <Q>Given f(x) = 200 + 10x. If the input value is 5, what is the output value?</Q>
      <FmUsed>f(x) = 200 + 10x → plug in x = 5</FmUsed>
      <WB>
        <MathLine>f(x) = 200 + 10x</MathLine>
        <Arrow text="Replace every x with 5"/>
        <MathLine>f(<MathBox color="#6366f1">5</MathBox>) = 200 + 10(<MathBox color="#6366f1">5</MathBox>)<Annotate>substituted x = 5</Annotate></MathLine>
        <Arrow text="Multiply first (order of operations)"/>
        <MathLine indent={24}>= 200 + <MathBox color="#22c55e">50</MathBox><Annotate color="#22c55e">10 × 5 = 50</Annotate></MathLine>
        <Arrow text="Then add"/>
        <MathLine indent={24}>= <MathBox>250</MathBox></MathLine>
        <Ans>f(5) = 250</Ans>
      </WB>
      <Wh>"f(5)" means "what comes OUT of the function when 5 goes IN." You replace x with 5 everywhere in the equation, then simplify.</Wh>
    </div>},
    { title:"Example — Completing a Table", content:<div>
      <Q>Complete the table of values for f(x) = 200 + 10x.</Q>
      <FmUsed>f(x) = 200 + 10x → plug in each x value</FmUsed>
      <WB>
        <MathLine size={14}>f(<MathBox color="#6366f1">0</MathBox>) = 200 + 10(0) = 200 + 0 = <MathBox>200</MathBox></MathLine>
        <MathLine size={14}>f(<MathBox color="#6366f1">1</MathBox>) = 200 + 10(1) = 200 + 10 = <MathBox>210</MathBox></MathLine>
        <MathLine size={14}>f(<MathBox color="#6366f1">2</MathBox>) = 200 + 10(2) = 200 + 20 = <MathBox>220</MathBox></MathLine>
        <MathLine size={14}>f(<MathBox color="#6366f1">3</MathBox>) = 200 + 10(3) = 200 + 30 = <MathBox>230</MathBox></MathLine>
        <MathLine size={14}>f(<MathBox color="#6366f1">4</MathBox>) = 200 + 10(4) = 200 + 40 = <MathBox>240</MathBox></MathLine>
      </WB>
      <Tb h={["x","0","1","2","3","4"]} r={[["f(x)","200","210","220","230","240"]]}/>
      <Tp>Pattern: every time x goes up by 1, f(x) goes up by 10. The 10 is the slope/rate of change. The 200 is the starting value (y-intercept when x = 0).</Tp>
    </div>},
    { title:"Example — Verbal → Equation", content:<div>
      <Q>200 people are in a concert venue. The gate allows 10 people to enter every minute. Write C(t) for people at time t minutes.</Q>
      <WB>
        <MathLine size={14} color="#6366f1">Starting amount: <MathBox color="#6366f1">200</MathBox> people<Annotate>already inside at t = 0</Annotate></MathLine>
        <MathLine size={14} color="#22c55e">Rate: <MathBox color="#22c55e">10</MathBox> people per minute<Annotate color="#22c55e">this multiplies by time</Annotate></MathLine>
        <MathLine size={14} color="#f59e0b">After t minutes: <MathBox color="#f59e0b">10t</MathBox> more people entered<Annotate color="#f59e0b">rate × time</Annotate></MathLine>
        <Arrow text="Combine: total = starting + added"/>
        <Ans>C(t) = 200 + 10t</Ans>
      </WB>
      <Wh>The structure is always: <B>starting value + (rate × time)</B>. This shows up everywhere on the AP exam.</Wh>
    </div>},
    { title:"Example — True/False (Increasing, Decreasing, Concavity)", content:<div>
      <Q>Determine True or False for each statement about the graphs of f(x) and g(x).</Q>
      <Ex><Tt c="#92400e">Graph of f(x):</Tt>
        <Sm><B c="#ef4444">F</B> — f increases on −5{"<"}x{"<"}−2 <Annotate color="#ef4444">f decreases on part of this interval</Annotate></Sm>
        <Sm><B c="#22c55e">T</B> — f increases on 0{"<"}x{"<"}2 <Annotate color="#22c55e">uphill the whole time</Annotate></Sm>
        <Sm><B c="#22c55e">T</B> — f increases on 0{"<"}x{"<"}5 <Annotate color="#22c55e">still going up</Annotate></Sm>
        <Sm><B c="#ef4444">F</B> — f decreases on −2{"<"}x{"<"}2 <Annotate color="#ef4444">it goes down THEN up</Annotate></Sm>
        <Sm><B c="#22c55e">T</B> — f has zeros at x = ±2 <Annotate color="#22c55e">graph crosses x-axis there</Annotate></Sm>
      </Ex>
      <Ex><Tt c="#92400e">Graph of g(x):</Tt>
        <Sm><B c="#ef4444">F</B>—g↑ on 2{"<"}x{"<"}6 · <B c="#ef4444">F</B>—concave down on 0{"<"}x{"<"}2 · <B c="#22c55e">T</B>—concave up on −6{"<"}x{"<"}−2</Sm>
        <Sm><B c="#22c55e">T</B>—g↓ & concave up on −2{"<"}x{"<"}0 · <B c="#22c55e">T</B>—zeros at ±2,±6 · <B c="#ef4444">F</B>—g↓ at ↓ rate on −6{"<"}x{"<"}−4</Sm>
      </Ex>
    </div>},
  ]},
  { id:"1.2", name:"Rates of Change", slides:[
    { title:"Concept — Average Rate of Change", content:<div>
      <Fm label="Formula">AROC = [ f(b) − f(a) ] / ( b − a )</Fm>
      <Wh>This IS the slope formula. You're finding the slope of the line connecting two points on the curve (called a "secant line"). Rise over run.</Wh>
      <svg width="100%" height="100" viewBox="0 0 300 100"><line x1="25" y1="85" x2="280" y2="85" stroke="#ddd"/><line x1="25" y1="85" x2="25" y2="5" stroke="#ddd"/><path d="M 35 72 Q 95 10, 160 55 Q 220 90, 275 18" stroke="#6366f1" strokeWidth="2.5" fill="none"/><circle cx="75" cy="30" r="4" fill="#ec4899"/><circle cx="230" cy="42" r="4" fill="#ec4899"/><line x1="75" y1="30" x2="230" y2="42" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,3"/><text x="152" y="22" textAnchor="middle" fontSize="10" fill="#ec4899" fontWeight="600">secant line = AROC</text></svg>
      <Box bg="#f0fdf4"><Sm><B c="#22c55e">+ AROC</B> → same direction · <B c="#ef4444">− AROC</B> → opposite directions · Rate at a point ≈ AROC over tiny intervals</Sm></Box>
    </div>},
    { title:"Example — AROC from a Table", content:<div>
      <Q>Find the average rate of change of f from x = 0 to x = 4.</Q>
      <Tb h={["x","−2","0","2","4"]} r={[["f(x)","−7","−2","0","5"]]}/>
      <FmUsed>AROC = [ f(b) − f(a) ] / ( b − a )</FmUsed>
      <WB>
        <MathLine size={14}>a = 0, b = 4<Annotate>our interval is [0, 4]</Annotate></MathLine>
        <MathLine size={14}>f(0) = −2, f(4) = 5<Annotate>read from the table</Annotate></MathLine>
        <Arrow text="Plug into the AROC formula"/>
        <MathLine>AROC = <span style={{borderBottom:"2px solid #333"}}>f(4) − f(0)</span></MathLine>
        <MathLine indent={65}>4 − 0</MathLine>
        <Arrow text="Substitute the values"/>
        <MathLine indent={42}>= <span style={{borderBottom:"2px solid #333"}}><MathBox color="#6366f1">5</MathBox> − (<MathBox color="#6366f1">−2</MathBox>)</span><Annotate color="#ef4444">careful! subtracting a negative!</Annotate></MathLine>
        <MathLine indent={65}>4 − 0</MathLine>
        <Arrow text="5 − (−2) = 5 + 2 = 7 (double negative = add!)"/>
        <MathLine indent={42}>= <span style={{borderBottom:"2px solid #333"}}><MathBox color="#22c55e">7</MathBox></span></MathLine>
        <MathLine indent={65}>4</MathLine>
        <Ans>AROC = 7/4 = 1.75</Ans>
      </WB>
      <Wh>This means on average, for every 1 unit x increases, f(x) increases by 1.75.</Wh>
      <W>5 − (−2) is NOT 5 − 2! The double negative becomes addition: 5 + 2 = 7.</W>
    </div>},
    { title:"Example — AROC of a Height Function", content:<div>
      <Q>h(t) = −16t² − 12t + 25 (height in feet, time in seconds). Find the AROC from t = 2 to t = 4. Include units.</Q>
      <FmUsed>AROC = [ h(b) − h(a) ] / ( b − a )</FmUsed>
      <WB>
        <MathLine size={14} color="#6366f1"><b>Step 1: Find h(2)</b></MathLine>
        <MathLine size={14}>h(<MathBox color="#6366f1">2</MathBox>) = −16(<MathBox color="#6366f1">2</MathBox>)² − 12(<MathBox color="#6366f1">2</MathBox>) + 25</MathLine>
        <MathLine size={14} indent={30}>= −16(<MathBox color="#22c55e">4</MathBox>) − <MathBox color="#22c55e">24</MathBox> + 25<Annotate color="#22c55e">2² = 4, 12×2 = 24</Annotate></MathLine>
        <MathLine size={14} indent={30}>= −64 − 24 + 25 = <MathBox>−63</MathBox></MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 2: Find h(4)</b></MathLine>
        <MathLine size={14}>h(<MathBox color="#6366f1">4</MathBox>) = −16(<MathBox color="#6366f1">4</MathBox>)² − 12(<MathBox color="#6366f1">4</MathBox>) + 25</MathLine>
        <MathLine size={14} indent={30}>= −16(<MathBox color="#22c55e">16</MathBox>) − <MathBox color="#22c55e">48</MathBox> + 25<Annotate color="#22c55e">4² = 16, 12×4 = 48</Annotate></MathLine>
        <MathLine size={14} indent={30}>= −256 − 48 + 25 = <MathBox>−279</MathBox></MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 3: Apply AROC formula</b></MathLine>
        <MathLine size={14}>AROC = [<MathBox>−279</MathBox> − (<MathBox>−63</MathBox>)] / (4 − 2)</MathLine>
        <MathLine size={14} indent={42}>= [−279 + 63] / 2<Annotate color="#ef4444">double negative → add!</Annotate></MathLine>
        <MathLine size={14} indent={42}>= −216 / 2</MathLine>
        <Ans>AROC = −108 ft/sec</Ans>
      </WB>
      <Wh>The answer is <B c="#ef4444">negative</B> because the object is FALLING. It loses 108 feet per second on average.</Wh>
      <W>UNITS: height (ft) ÷ time (sec) = ft/sec. Always include units on the AP exam!</W>
    </div>},
    { title:"Example — Approximating Rate at a Point", content:<div>
      <Q>Approximate the instantaneous rate of change of h at t = 2 using shrinking intervals.</Q>
      <FmUsed>AROC = [ h(b) − h(a) ] / ( b − a ) over smaller and smaller intervals</FmUsed>
      <WB>
        <MathLine size={14}>[h(2.5)−h(2)] / (0.5) = <MathBox color="#ef4444">−84</MathBox><Annotate>rough estimate</Annotate></MathLine>
        <MathLine size={14}>[h(2.1)−h(2)] / (0.1) = <MathBox color="#f59e0b">−77.6</MathBox><Annotate color="#f59e0b">getting closer...</Annotate></MathLine>
        <MathLine size={14}>[h(2.01)−h(2)] / (0.01) = <MathBox color="#22c55e">−76.16</MathBox><Annotate color="#22c55e">closer still...</Annotate></MathLine>
        <MathLine size={14}>[h(2.001)−h(2)] / (0.001) = <MathBox color="#3b82f6">−76.016</MathBox><Annotate color="#3b82f6">almost there!</Annotate></MathLine>
        <div style={{textAlign:"center",margin:"8px 0",fontSize:13,fontFamily:"sans-serif"}}>
          −84 → −77.6 → −76.16 → −76.016 → converging to <b>−76</b>
        </div>
        <Ans>Rate of change at t = 2 ≈ −76 ft/sec</Ans>
      </WB>
      <Wh>As the interval shrinks, the values converge. That limit is the instantaneous rate of change (the derivative in calculus!).</Wh>
    </div>},
  ]},
  { id:"1.3", name:"Linear & Quadratic ROC", slides:[
    { title:"Concept — Linear vs Quadratic", content:<div>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">📏 LINEAR</Tt><Sm>AROC is <B>constant</B><br/>Change in AROC = <B>0</B></Sm></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">📐 QUADRATIC</Tt><Sm>AROC changes at <B c="#dc2626">constant rate</B><br/>2nd differences = constant</Sm></Box>}/>
      <G l={<Box bg="#f0fdf4"><Tt c="#166534">☕ Concave Up</Tt><Sm>AROCs <B c="#166534">increasing</B></Sm></Box>}
        r={<Box bg="#fef2f2"><Tt c="#991b1b">☹️ Concave Down</Tt><Sm>AROCs <B c="#991b1b">decreasing</B></Sm></Box>}/>
    </div>},
    { title:"Example — Proving a Function is Linear", content:<div>
      <Q>Find the AROC over each interval. Is f linear or quadratic?</Q>
      <Tb h={["x","−2","−1","0","1","2"]} r={[["f(x)","5","3","1","−1","−3"]]}/>
      <FmUsed>AROC = [ f(b) − f(a) ] / ( b − a ) for each consecutive pair</FmUsed>
      <WB>
        <MathLine size={14}>[−2,−1]: (<MathBox color="#6366f1">3</MathBox> − <MathBox color="#6366f1">5</MathBox>) / (−1−(−2)) = −2/1 = <MathBox>−2</MathBox></MathLine>
        <MathLine size={14}>[−1, 0]: (<MathBox color="#6366f1">1</MathBox> − <MathBox color="#6366f1">3</MathBox>) / (0−(−1)) = −2/1 = <MathBox>−2</MathBox></MathLine>
        <MathLine size={14}>[ 0, 1]: (<MathBox color="#6366f1">−1</MathBox> − <MathBox color="#6366f1">1</MathBox>) / (1−0) = −2/1 = <MathBox>−2</MathBox></MathLine>
        <MathLine size={14}>[ 1, 2]: (<MathBox color="#6366f1">−3</MathBox> − <MathBox color="#6366f1">(−1)</MathBox>) / (2−1) = −2/1 = <MathBox>−2</MathBox></MathLine>
        <div style={{margin:"8px 0",padding:8,background:"#eef2ff",borderRadius:8,textAlign:"center",fontFamily:"sans-serif",fontSize:13}}>
          All AROCs = <b>−2</b> → Change in AROC = <b>0</b>
        </div>
        <Ans>f is LINEAR (constant AROC, zero change)</Ans>
      </WB>
    </div>},
    { title:"Example — Proving a Function is Quadratic", content:<div>
      <Q>Find the AROC over each interval for g. What is the change in the AROC?</Q>
      <Tb h={["x","−2","−1","0","1","2"]} r={[["g(x)","−13","−3","1","−1","−9"]]}/>
      <FmUsed>AROC for each interval, then find differences between consecutive AROCs</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>AROCs:</b></MathLine>
        <MathLine size={14}>[−2,−1]: (−3−(−13))/1 = <MathBox color="#22c55e">10</MathBox><Annotate color="#22c55e">−3+13 = 10</Annotate></MathLine>
        <MathLine size={14}>[−1,0]: (1−(−3))/1 = <MathBox color="#22c55e">4</MathBox><Annotate color="#22c55e">1+3 = 4</Annotate></MathLine>
        <MathLine size={14}>[0,1]: (−1−1)/1 = <MathBox color="#22c55e">−2</MathBox></MathLine>
        <MathLine size={14}>[1,2]: (−9−(−1))/1 = <MathBox color="#22c55e">−8</MathBox><Annotate color="#22c55e">−9+1 = −8</Annotate></MathLine>
        <MathLine size={14} color="#dc2626"><b>Changes in AROC:</b></MathLine>
        <MathLine size={14}>4 − 10 = <MathBox color="#ef4444">−6</MathBox></MathLine>
        <MathLine size={14}>−2 − 4 = <MathBox color="#ef4444">−6</MathBox></MathLine>
        <MathLine size={14}>−8 − (−2) = −8 + 2 = <MathBox color="#ef4444">−6</MathBox></MathLine>
        <Ans>AROC changes at constant rate of −6 → QUADRATIC</Ans>
      </WB>
      <Wh>The AROCs aren't constant (10,4,−2,−8), but the CHANGE between them is always −6. That constant "second difference" = quadratic. And since AROCs are <B c="#ef4444">decreasing</B> → g is <B c="#ef4444">concave DOWN</B>.</Wh>
    </div>},
    { title:"Example — Concavity from AROC (Example 3)", content:<div>
      <Q>Find AROCs for h. Are they increasing or decreasing? Concave up or down?</Q>
      <Tb h={["x","−4","−2","0","2","4"]} r={[["h(x)","33","9","1","9","33"]]}/>
      <FmUsed>AROC = Δy / Δx for each interval (note: interval width = 2)</FmUsed>
      <WB>
        <MathLine size={14}>[−4,−2]: (9−33)/(−2−(−4)) = −24/2 = <MathBox color="#22c55e">−12</MathBox></MathLine>
        <MathLine size={14}>[−2, 0]: (1−9)/(0−(−2)) = −8/2 = <MathBox color="#22c55e">−4</MathBox></MathLine>
        <MathLine size={14}>[ 0, 2]: (9−1)/(2−0) = 8/2 = <MathBox color="#22c55e">4</MathBox></MathLine>
        <MathLine size={14}>[ 2, 4]: (33−9)/(4−2) = 24/2 = <MathBox color="#22c55e">12</MathBox></MathLine>
        <div style={{margin:"8px 0",padding:8,background:"#f0fdf4",borderRadius:8,textAlign:"center",fontFamily:"sans-serif",fontSize:13}}>
          −12 → −4 → 4 → 12 → <b style={{color:"#166534"}}>INCREASING</b> (each is bigger than the last)
        </div>
        <Ans>AROCs are increasing → h is concave UP ☕</Ans>
      </WB>
    </div>},
  ]},
  { id:"1.4", name:"Polynomials & ROC", slides:[
    { title:"Concept — Polynomials, Extrema, Inflection", content:<div>
      <Fm label="Form">p(x) = aₙxⁿ + ... + a₁x + a₀ · Leading term: aₙxⁿ · Degree: n</Fm>
      <Box bg="#eef2ff"><Sm><B>Local max:</B> ↑→↓ · <B>Local min:</B> ↓→↑ · <B>Global max:</B> greatest local max · <B>Global min:</B> least local min</Sm></Box>
      <Box bg="#fef3c7"><Sm><B>Point of inflection:</B> where concavity changes (concave up ↔ concave down)</Sm></Box>
      <W>Terms may NOT be in order! Always find the highest power first.</W>
    </div>},
    { title:"Example — Degree & Leading Coefficient", content:<div>
      <Q>Name the degree and leading coefficient of each polynomial.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1.</b> p(x) = 3x⁴ + 2x³ + 7</MathLine>
        <MathLine size={14} indent={20}>Highest power: x⁴ → Degree = <MathBox color="#6366f1">4</MathBox></MathLine>
        <MathLine size={14} indent={20}>Coefficient of x⁴: → LC = <MathBox color="#ec4899">3</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>2.</b> q(x) = 5 − 3x + x² − 2x³</MathLine>
        <Arrow text="Rewrite in descending order!"/>
        <MathLine size={14} indent={20}>q(x) = <MathBox color="#ef4444">−2x³</MathBox> + x² − 3x + 5</MathLine>
        <MathLine size={14} indent={20}>Highest power: x³ → Degree = <MathBox color="#6366f1">3</MathBox></MathLine>
        <MathLine size={14} indent={20}>Coefficient of x³: → LC = <MathBox color="#ec4899">−2</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Extrema & Inflection", content:<div>
      <Q>Identify local/global extrema from the graph. Find absolute extrema for p(x) = x⁴ − 5x² + 1.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Restricted domain graph:</b></MathLine>
        <MathLine size={14}>Local minima at x = <MathBox color="#3b82f6">−3, 1</MathBox></MathLine>
        <MathLine size={14}>Local maxima at x = <MathBox color="#ec4899">−2, 2</MathBox></MathLine>
        <MathLine size={14}>Global min at x = <MathBox color="#3b82f6">1</MathBox><Annotate>lowest valley</Annotate></MathLine>
        <MathLine size={14}>Global max at x = <MathBox color="#ec4899">−2</MathBox><Annotate color="#ec4899">highest peak</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>p(x) = x⁴ − 5x² + 1 (graph on calculator):</b></MathLine>
        <MathLine size={14}>Absolute Maximum = <MathBox>N/A</MathBox><Annotate>both ends → +∞</Annotate></MathLine>
        <MathLine size={14}>Absolute Minimum = <MathBox>−5.25</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Inflection points (A,B,C,D,E graph):</b></MathLine>
        <MathLine size={14}>Points of inflection at <MathBox color="#f59e0b">B & D</MathBox><Annotate color="#f59e0b">concavity changes here</Annotate></MathLine>
      </WB>
    </div>},
  ]},
  { id:"1.5", name:"Complex Zeros", slides:[
    { title:"Concept — Zeros, Multiplicity, Complex, Even/Odd", content:<div>
      <Fm>p(a) = 0 ↔ a is a ZERO ↔ (x−a) is a FACTOR ↔ (a,0) is x-INTERCEPT</Fm>
      <Fm label="Multiplicity">Factor (x−a) repeats n times → multiplicity n</Fm>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
        <Box bg="#dbeafe" s={{textAlign:"center",padding:10}}><Tt c="#1e40af">Mult 1</Tt><svg width="60" height="30" viewBox="0 0 60 30"><line x1="3" y1="15" x2="57" y2="15" stroke="#ddd"/><path d="M 8 26 L 30 15 L 52 4" stroke="#3b82f6" strokeWidth="3" fill="none"/></svg><Sm><B c="#1e40af">Crosses</B></Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center",padding:10}}><Tt c="#be185d">Even</Tt><svg width="60" height="30" viewBox="0 0 60 30"><line x1="3" y1="15" x2="57" y2="15" stroke="#ddd"/><path d="M 8 4 Q 30 20, 30 15 Q 30 20, 52 4" stroke="#ec4899" strokeWidth="3" fill="none"/></svg><Sm><B c="#be185d">Bounces</B></Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center",padding:10}}><Tt c="#92400e">Odd≥3</Tt><svg width="60" height="30" viewBox="0 0 60 30"><line x1="3" y1="15" x2="57" y2="15" stroke="#ddd"/><path d="M 8 28 Q 20 20, 30 15 Q 40 10, 52 2" stroke="#f59e0b" strokeWidth="3" fill="none"/></svg><Sm><B c="#92400e">Wiggles</B></Sm></Box>
      </div>
      <Fm>Complex zeros come in conjugate pairs: a+bi and a−bi</Fm>
      <Box bg="#ecfdf5"><Sm><B c="#059669">Even:</B> f(−x)=f(x), all even exponents · <B c="#059669">Odd:</B> f(−x)=−f(x), all odd exponents</Sm></Box>
      <Box bg="#fffbeb"><Sm><B c="#92400e">Successive Differences:</B> 1st const→deg 1 · 2nd const→deg 2 · 3rd const→deg 3</Sm></Box>
    </div>},
    { title:"Example — Factoring, Multiplicity & Complex Zeros", content:<div>
      <Q>Write p(x) = −x⁴+x³+4x²−4x as linear factors. For f(x) = x(x+3)⁴(x−2)⁵, state multiplicities.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Factor p(x):</b> x-intercepts at (−2,0),(0,0),(1,0),(2,0)</MathLine>
        <MathLine size={14}>p(x) = <MathBox>−x(x+2)(x−1)(x−2)</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>f(x) = x(x+3)⁴(x−2)⁵</b></MathLine>
        <MathLine size={14}>Degree: 1+4+5 = <MathBox color="#6366f1">10</MathBox></MathLine>
        <MathLine size={14}>x=0: mult <MathBox color="#3b82f6">1</MathBox> → crosses<Annotate color="#3b82f6">odd, just 1</Annotate></MathLine>
        <MathLine size={14}>x=−3: mult <MathBox color="#ec4899">4</MathBox> → bounces<Annotate color="#ec4899">even</Annotate></MathLine>
        <MathLine size={14}>x=2: mult <MathBox color="#f59e0b">5</MathBox> → wiggles through<Annotate color="#f59e0b">odd ≥ 3</Annotate></MathLine>
      </WB>
      <Q>p(x) = ax³+bx²+cx+d. X-intercept (1.7,0), zero 2.3−1.5i. Third zero?</Q>
      <WB><MathLine>Third zero = <MathBox>2.3 + 1.5i</MathBox><Annotate>conjugate pair!</Annotate></MathLine></WB>
      <Q>Even or Odd?</Q>
      <WB>
        <MathLine size={14}>5x³ → <MathBox color="#6366f1">O</MathBox> · 5x⁴+2x²−6 → <MathBox color="#ec4899">E</MathBox> · 4x³+x → <MathBox color="#6366f1">O</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Successive Differences", content:<div>
      <Q>Use successive differences to find the degree of each polynomial.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Example 1:</b></MathLine>
        <Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","5","2","1","2","5"]]}/>
        <MathLine size={14}>1st diff: −3, −1, 1, 3<Annotate>not constant</Annotate></MathLine>
        <MathLine size={14}>2nd diff: 2, 2, 2<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
        <MathLine size={14}>→ <MathBox color="#22c55e">Degree 2</MathBox> (Quadratic)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Example 2:</b></MathLine>
        <Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","5","2","−1","−4","−7"]]}/>
        <MathLine size={14}>1st diff: −3, −3, −3, −3<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
        <MathLine size={14}>→ <MathBox color="#22c55e">Degree 1</MathBox> (Linear)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Example 3:</b></MathLine>
        <Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","26","7","0","−1","−2"]]}/>
        <MathLine size={14}>1st: −19, −7, −1, −1<Annotate>not constant</Annotate></MathLine>
        <MathLine size={14}>2nd: 12, 6, 0<Annotate>not constant</Annotate></MathLine>
        <MathLine size={14}>3rd: −6, −6<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
        <MathLine size={14}>→ <MathBox color="#22c55e">Degree 3</MathBox> (Cubic)</MathLine>
      </WB>
    </div>},
  ]},
  { id:"1.6", name:"Polynomial End Behavior", slides:[
    { title:"Concept & Examples — End Behavior", content:<div>
      <Fm>Leading term controls end behavior. Even = same both sides. Odd = opposite.</Fm>
      <Tb h={["Degree","Coeff","x→−∞","x→+∞"]} r={[["Even","+","+∞","+∞"],["Even","−","−∞","−∞"],["Odd","+","−∞","+∞"],["Odd","−","+∞","−∞"]]}/>
      <Q>Identify leading term, degree, and end behavior of p(x) = −2x³−4x²+5x−3.</Q>
      <WB>
        <MathLine size={14}>Leading term: <MathBox color="#6366f1">−2x³</MathBox> · Degree: <MathBox color="#6366f1">3</MathBox> (odd) · Coeff: <MathBox color="#ef4444">negative</MathBox></MathLine>
        <MathLine size={14}>Odd + negative → left UP, right DOWN</MathLine>
        <Ans>lim(x→−∞) p(x) = +∞ · lim(x→∞) p(x) = −∞</Ans>
      </WB>
      <Q>From graphs: identify degree, sign, write limits.</Q>
      <WB>
        <MathLine size={14}>Graph 1: rises left to right → <MathBox color="#22c55e">odd, + coeff</MathBox> → lim(x→−∞)=−∞, lim(x→∞)=+∞</MathLine>
        <MathLine size={14}>Graph 2: both sides down → <MathBox color="#ef4444">even, − coeff</MathBox> → lim(x→−∞)=−∞, lim(x→∞)=−∞</MathLine>
      </WB>
    </div>},
  ]},
  { id:"1.7", name:"Rational End Behavior", slides:[
    { title:"Concept — Three Cases", content:<div>
      <Fm>r(x) = p(x)/q(x) · Compare n (num degree) vs d (den degree) · Divide leading terms</Fm>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
        <Box bg="#dbeafe" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#1e40af"}}>n{"<"}d</div><Sm>HA: y=0</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#be185d"}}>n=d</div><Sm>HA: y=aₙ/bₘ</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#92400e"}}>n{">"}d</div><Sm>No HA</Sm></Box>
      </div>
    </div>},
    { title:"Example — HA & End Behavior Limits", content:<div>
      <Q>Find HA and/or end behavior for each rational function.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>HA Examples:</b></MathLine>
        <MathLine size={14}>(x−2)/(x²−9): n=1{"<"}d=2 → <MathBox color="#3b82f6">HA: y=0</MathBox></MathLine>
        <MathLine size={14}>(5x²−2)/(7x²−9): n=d=2 → <MathBox color="#ec4899">HA: y=5/7</MathBox></MathLine>
        <MathLine size={14}>(5x²−2x+3)/(x−9): n=2{">"}d=1 → <MathBox color="#f59e0b">No HA</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Leading Term Ratios:</b></MathLine>
        <MathLine size={14}>(4x³−3x+1)/(2x³+5x+1): 4x³/2x³ = <MathBox>2</MathBox> → HA: y=2</MathLine>
        <MathLine size={14}>(4x⁵−3x+1)/(2x³+5x+1): 4x⁵/2x³ = <MathBox>2x²</MathBox> → No HA, behaves like 2x²</MathLine>
        <MathLine size={14} color="#4338ca"><b>End Behavior Limits:</b></MathLine>
        <MathLine size={14}>(x⁶−3x³+1)/(x³+5x+1): ratio=x³ → lim(x→∞)=∞, lim(x→−∞)=−∞</MathLine>
        <MathLine size={14}>(−2x³−3x²+6x+1)/(x²+5x+1): ratio=−2x → slant ∥ y=−2x</MathLine>
        <MathLine size={14} indent={20}>→ lim(x→∞)=−∞, lim(x→−∞)=+∞</MathLine>
      </WB>
    </div>},
  ]},
  { id:"1.8", name:"Rational Zeros", slides:[
    { title:"Concept & Example — Zeros & Inequalities", content:<div>
      <Fm>Zeros: set NUM=0, check DEN≠0. If both=0 → hole!</Fm>
      <Q>Find zeros of r(x) = (x³−5x²+6x)/(x²−2x−3). Solve r(x)≥0.</Q>
      <WB>
        <MathLine size={14}>Num: x(x−3)(x−2) · Den: (x−3)(x+1)</MathLine>
        <MathLine size={14}>x=3 in BOTH → <MathBox color="#f59e0b">hole</MathBox>, not zero!</MathLine>
        <MathLine size={14}>Real zeros: <MathBox>x=0</MathBox> and <MathBox>x=2</MathBox></MathLine>
      </WB>
      <svg width="100%" height="48" viewBox="0 0 380 48"><line x1="15" y1="24" x2="365" y2="24" stroke="#333" strokeWidth="2"/>
        {[{x:70,v:"-1",o:true},{x:145,v:"0",o:false},{x:220,v:"2",o:false},{x:295,v:"3",o:true}].map((p,i)=><g key={i}><circle cx={p.x} cy={24} r={6} fill={p.o?"#fff":"#ef4444"} stroke="#ef4444" strokeWidth="2"/><text x={p.x} y={42} textAnchor="middle" fontSize="10" fill="#333" fontWeight="600">{p.v}</text></g>)}
        {[{x:40,t:"−"},{x:108,t:"+"},{x:183,t:"−"},{x:258,t:"+"},{x:335,t:"+"}].map((s,i)=><text key={i} x={s.x} y={16} textAnchor="middle" fontSize="14" fontWeight="800" fill={s.t==="+"?"#22c55e":"#ef4444"}>{s.t}</text>)}
      </svg>
      <WB>
        <MathLine size={13}>r(x)≥0: <MathBox>(−1,0] ∪ [2,3) ∪ (3,∞)</MathBox></MathLine>
        <MathLine size={13}>r(x){">"}0: <MathBox>(−1,0) ∪ (2,3) ∪ (3,∞)</MathBox></MathLine>
        <MathLine size={13}>r(x)≤0: <MathBox>(−∞,−1) ∪ [0,2]</MathBox></MathLine>
        <MathLine size={13}>r(x){"<"}0: <MathBox>(−∞,−1) ∪ (0,2)</MathBox></MathLine>
      </WB>
    </div>},
  ]},
  { id:"1.9", name:"Vertical Asymptotes", slides:[
    { title:"Concept & Example — VAs & Limits", content:<div>
      <Fm>VA at x=a when den=0 AND num≠0</Fm>
      <Q>Find VAs of (x²−8x+7)/(x²+x−6). Find one-sided limits from graphs.</Q>
      <WB>
        <MathLine size={14}>Factor: (x−7)(x−1)/[(x+3)(x−2)]</MathLine>
        <MathLine size={14}>Den zeros: x=−3, x=2. Neither makes num=0.</MathLine>
        <Ans>VAs: x = −3 and x = 2</Ans>
        <MathLine size={14} color="#4338ca"><b>Limits from graph:</b></MathLine>
        <MathLine size={14}>lim(x→−2⁺)=−∞ · lim(x→−2⁻)=+∞ · lim(x→4⁺)=+∞ · lim(x→4⁻)=−∞</MathLine>
        <MathLine size={14} color="#4338ca"><b>v(x)=(x²−5x+4)/(x²+4x−12):</b></MathLine>
        <MathLine size={14}>lim(x→−6⁺)=−∞ · lim(x→−6⁻)=+∞ · lim(x→2⁺)=−∞ · lim(x→2⁻)=+∞</MathLine>
      </WB>
    </div>},
  ]},
  { id:"1.10", name:"Holes", slides:[
    { title:"Concept & Example — Holes", content:<div>
      <Fm>Hole = same factor cancels from num & den</Fm>
      <Q>Find the hole in r(x) = (x²−8x+7)/(x²+x−2). Write the limit.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Factor numerator:</b></MathLine>
        <MathLine size={14}>x²−8x+7<Annotate>need: ×7, +(-8)</Annotate></MathLine>
        <MathLine size={14}>= (x−7)(x−1)<Annotate color="#22c55e">−7 × −1 = 7, −7+(−1)=−8 ✓</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Factor denominator:</b></MathLine>
        <MathLine size={14}>x²+x−2<Annotate>need: ×(−2), +(1)</Annotate></MathLine>
        <MathLine size={14}>= (x+2)(x−1)<Annotate color="#22c55e">2×(−1)=−2, 2+(−1)=1 ✓</Annotate></MathLine>
        <MathLine size={14} color="#dc2626"><b>Common factor: (x−1)</b></MathLine>
        <Arrow text="Cancel (x−1) from top and bottom"/>
        <MathLine size={14}>Simplified: f(x) = (x−7)/(x+2), x≠1</MathLine>
        <MathLine size={14} color="#4338ca"><b>Hole coordinates:</b></MathLine>
        <MathLine size={14}>x = 1 (from x−1=0)</MathLine>
        <MathLine size={14}>y = f(1) = (1−7)/(1+2) = −6/3 = <MathBox>−2</MathBox></MathLine>
        <Ans>Hole at (1, −2) · lim(x→1) r(x) = −2</Ans>
      </WB>
    </div>},
  ]},
  { id:"1.11", name:"Equivalent Representations", slides:[
    { title:"Concept — Forms & Tools", content:<div>
      <G l={<Box bg="#eef2ff"><Tt c="#4338ca">Factored →</Tt><Sm>Zeros, VAs, Holes, Domain</Sm></Box>}
        r={<Box bg="#fef2f2"><Tt c="#dc2626">Standard →</Tt><Sm>End behavior, y-intercept</Sm></Box>}/>
      <Fm>Long Division: f(x)=g(x)·q(x)+r(x) · Slant asymptote: y=q(x)</Fm>
      <Fm>Binomial Theorem: (a+b)ⁿ via Pascal's Triangle</Fm>
    </div>},
    { title:"Example — Full Rational Analysis", content:<div>
      <Q>For r(x) = (2x²−x−15)/(x²−2x−3): find HA, zeros, VA, hole.</Q>
      <WB>
        <MathLine size={14}>Factor num: (2x+5)(x−3)</MathLine>
        <MathLine size={14}>Factor den: (x−3)(x+1)</MathLine>
        <MathLine size={14}>(x−3) cancels → <MathBox color="#f59e0b">Hole</MathBox> at x=3</MathLine>
        <MathLine size={14}>Simplified: (2x+5)/(x+1)</MathLine>
        <MathLine size={14}>HA: n=d=2, ratio=2/1 → <MathBox color="#3b82f6">y=2</MathBox></MathLine>
        <MathLine size={14}>Zero: 2x+5=0 → x=−5/2 → <MathBox color="#22c55e">x=−5/2</MathBox></MathLine>
        <MathLine size={14}>VA: x+1=0 → <MathBox color="#ef4444">x=−1</MathBox></MathLine>
        <MathLine size={14}>Hole y: f(3)=(2(3)+5)/(3+1)=11/4 → <MathBox color="#f59e0b">Hole (3, 11/4)</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Long Division (Whiteboard)", content:<div>
      <Q>Divide (x²−5x+7) by (x−3). Find the slant asymptote.</Q>
      <FmUsed>Divide → Multiply → Subtract → Repeat</FmUsed>
      <WB>
        <div style={{fontFamily:"'Courier New',monospace",fontSize:14,lineHeight:2,whiteSpace:"pre"}}>
{`         x − 2
       ┌────────────
x − 3  │ x² − 5x + 7`}
        </div>
        <MathLine size={14} color="#6366f1">① x² ÷ x = <MathBox color="#6366f1">x</MathBox><Annotate>write on top</Annotate></MathLine>
        <MathLine size={14} color="#ec4899">② x · (x−3) = <MathBox color="#ec4899">x²−3x</MathBox><Annotate color="#ec4899">multiply</Annotate></MathLine>
        <MathLine size={14} color="#f59e0b">③ (x²−5x) − (x²−3x) = <MathBox color="#f59e0b">−2x</MathBox><Annotate color="#f59e0b">subtract, bring down +7</Annotate></MathLine>
        <MathLine size={14} color="#6366f1">④ −2x ÷ x = <MathBox color="#6366f1">−2</MathBox><Annotate>write on top</Annotate></MathLine>
        <MathLine size={14} color="#ec4899">⑤ −2 · (x−3) = <MathBox color="#ec4899">−2x+6</MathBox><Annotate color="#ec4899">multiply</Annotate></MathLine>
        <MathLine size={14} color="#f59e0b">⑥ (−2x+7) − (−2x+6) = <MathBox color="#f59e0b">1</MathBox><Annotate color="#f59e0b">remainder!</Annotate></MathLine>
        <Ans>Quotient: x−2 · Remainder: 1 · Slant asymptote: y = x−2</Ans>
      </WB>
    </div>},
    { title:"Example — Binomial Expansion", content:<div>
      <Q>Expand (x+2)⁴ and (x−3)³ using Pascal's Triangle.</Q>
      <WB>
        <div style={{textAlign:"center",fontFamily:"monospace",fontSize:14,lineHeight:1.8}}>1<br/>1 &nbsp;1<br/>1 &nbsp;2 &nbsp;1<br/><b>1 &nbsp;3 &nbsp;3 &nbsp;1</b><br/><b style={{color:"#166534"}}>1 &nbsp;4 &nbsp;6 &nbsp;4 &nbsp;1</b></div>
        <MathLine size={14} color="#4338ca"><b>(x+2)⁴ — row 4: 1, 4, 6, 4, 1</b></MathLine>
        <MathLine size={13}>= 1·x⁴ + 4·x³·<MathBox color="#6366f1">2</MathBox> + 6·x²·<MathBox color="#6366f1">4</MathBox> + 4·x·<MathBox color="#6366f1">8</MathBox> + 1·<MathBox color="#6366f1">16</MathBox></MathLine>
        <Ans>= x⁴ + 8x³ + 24x² + 32x + 16</Ans>
        <MathLine size={14} color="#4338ca"><b>(x−3)³ — row 3: 1, 3, 3, 1 — use (−3)</b></MathLine>
        <MathLine size={13}>= 1·x³ + 3·x²·<MathBox color="#ef4444">(−3)</MathBox> + 3·x·<MathBox color="#ef4444">9</MathBox> + 1·<MathBox color="#ef4444">(−27)</MathBox></MathLine>
        <Ans>= x³ − 9x² + 27x − 27</Ans>
      </WB>
      <Tp>With subtraction like (x−3)³, the signs alternate: +, −, +, − because (−3)¹=−3, (−3)²=+9, (−3)³=−27.</Tp>
    </div>},
  ]},
  { id:"1.12", name:"Transformations", slides:[
    { title:"Concept — All Transformation Rules", content:<div>
      <Fm label="General Form">g(x) = a · f( b(x − h) ) + k</Fm>
      <Box bg="#eef2ff"><Sm>f(x)+k → UP · f(x)−k → DOWN · f(x+h) → LEFT ⚠️ · f(x−h) → RIGHT ⚠️</Sm></Box>
      <Box bg="#fce7f3"><Sm>a·f(x) → vert stretch |a| · f(bx) → horiz compress |1/b| · −f(x) → flip over x-axis</Sm></Box>
      <W>Horizontal shifts go OPPOSITE the sign! f(x+3)→LEFT. f(x−3)→RIGHT.</W>
      <Box bg="#faf5ff"><Sm><B c="#7c3aed">Order:</B> ①Horiz dilation ②Horiz shift ③Vert dilation ④Vert shift</Sm></Box>
    </div>},
    { title:"Example — Transformations with a Table", content:<div>
      <Q>g(x) = 4f(x−1)−5 (shift right 1, vert ×4, down 5). Given the table, find g(2).</Q>
      <Tb h={["x","−1","0","1","2"]} r={[["f(x)","−2","2","5","2"]]}/>
      <FmUsed>g(x) = 4·f(x − 1) − 5</FmUsed>
      <WB>
        <MathLine>g(<MathBox color="#6366f1">2</MathBox>) = 4 · f(<MathBox color="#6366f1">2</MathBox> − 1) − 5</MathLine>
        <Arrow text="Simplify inside first"/>
        <MathLine indent={30}>= 4 · f(<MathBox color="#22c55e">1</MathBox>) − 5<Annotate color="#22c55e">2−1=1, so we look up f(1)!</Annotate></MathLine>
        <Arrow text="Look up f(1) in the table → f(1) = 5"/>
        <MathLine indent={30}>= 4 · (<MathBox color="#f59e0b">5</MathBox>) − 5<Annotate color="#f59e0b">from table: f(1)=5</Annotate></MathLine>
        <Arrow text="Multiply, then subtract"/>
        <MathLine indent={30}>= <MathBox color="#22c55e">20</MathBox> − 5</MathLine>
        <Ans>g(2) = 15</Ans>
      </WB>
      <W>g(2) uses f(<B>1</B>), NOT f(2)! The horizontal shift changes which table value you use. Always simplify the inside first!</W>
    </div>},
  ]},
  { id:"1.13", name:"Model Selection", slides:[
    { title:"Concept & Examples — Data Types & Geometry", content:<div>
      <Tb h={["Type","Clue","Check"]} r={[["Linear","Always ↑ or ↓","1st diff constant"],["Quadratic","Symmetry","2nd diff constant"],["Piecewise","Slope changes","Different rates"]]}/>
      <Fm>Area → Quadratic · Volume → Cubic</Fm>
      <Q>Pool: l=3w, deck 2ft sides, 3ft ends. Fish tank: w, h=2w, l=4w.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Pool:</b></MathLine>
        <MathLine size={14}>Total length = 3w + 2(3) = <MathBox color="#6366f1">3w+6</MathBox><Annotate>3ft on each end</Annotate></MathLine>
        <MathLine size={14}>Total width = w + 2(2) = <MathBox color="#6366f1">w+4</MathBox><Annotate>2ft on each side</Annotate></MathLine>
        <MathLine size={14}>A = (3w+6)(w+4) = 3w²+12w+6w+24</MathLine>
        <Ans>A(w) = 3w²+18w+24 ft² · D: (0,20] · R: (24,1584]</Ans>
        <MathLine size={14} color="#4338ca"><b>Fish Tank:</b></MathLine>
        <MathLine size={14}>V = <MathBox color="#6366f1">4w</MathBox> · <MathBox color="#ec4899">w</MathBox> · <MathBox color="#f59e0b">2w</MathBox> = 8w³</MathLine>
        <Ans>V(w) = 8w³ in³ · h≤24→w≤12 · D: (0,12] · R: (0,13824]</Ans>
      </WB>
    </div>},
  ]},
  { id:"1.14", name:"Model Construction", slides:[
    { title:"Concept & Examples — Regression & Inverse Variation", content:<div>
      <Fm>Regression: Enter data → STAT CALC → Predict</Fm>
      <Fm label="Inverse Variation">y = k/x · k = x·y</Fm>
      <Q>Roller coaster cubic regression. Soap company inverse variation. Oyster population.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Roller Coaster:</b></MathLine>
        <Tb h={["t","0","2","4","6","8","10"]} r={[["h","0","22","23","6","2","17"]]}/>
        <MathLine size={14}>Cubic reg: h(t) = 0.339t³ − 5.332t² + 21.153t − 0.317</MathLine>
        <MathLine size={14}>h(7) = <MathBox>2.790 feet</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Soap Company:</b></MathLine>
        <MathLine size={14}>k = 8 × 100 = <MathBox color="#6366f1">800</MathBox> → b(x) = 800/x</MathLine>
        <MathLine size={14}>At $6: 800/6 ≈ <MathBox>133 bars</MathBox></MathLine>
        <MathLine size={14}>If 125 sold: 800/125 = <MathBox>$6.40</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Oysters:</b> P(t) = 200t/(0.002t+1)+300</MathLine>
        <MathLine size={14}>P(1) ≈ <MathBox>499 oysters</MathBox></MathLine>
        <MathLine size={14}>AROC t=2→4: ≈ <MathBox>−197 oysters/month</MathBox></MathLine>
      </WB>
    </div>},
  ]},
];

// ─── PRACTICE ───
const practice = [
  { id:"1.1", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Evaluating a function.</B><br/>Given g(x) = 150 + 8x. Find g(7). Show the substitution, multiplication, and addition on your own whiteboard.</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Completing a table.</B><br/>For g(x) = 150 + 8x, complete the table showing each computation:<br/><Tb h={["x","0","1","2","3","4"]} r={[["g(x)","___","___","___","___","___"]]}/></span>}/>,
    <PQ key="3" n="3" q={<span><B>Mirrors: Verbal → Equation.</B><br/>A pool has 500 gallons. A drain removes 12 gallons per minute. Identify: starting value, rate, and write W(t).</span>}/>,
    <PQ key="4" n="4" q={<span><B>Mirrors: True/False.</B> A graph has zeros at x=−3,1, peak at x=−1, valley at x=3.<br/>a) f increases on −3{"<"}x{"<"}−1?  b) f concave down on −1{"<"}x{"<"}3?  c) f zeros at x=−3,1?</span>}/>,
  ]},
  { id:"1.2", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: AROC from table.</B> Show the formula, substitution, and careful handling of negatives.<br/><Tb h={["x","−2","0","2","4"]} r={[["f(x)","3","−1","−3","5"]]}/><br/>Find AROC from x=−2 to x=4.</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: AROC of height function.</B><br/>g(t) = −16t²+48t+5. Find g(1), find g(3), then compute AROC from t=1 to t=3. Show all substitution work. Include units!</span>}/>,
    <PQ key="3" n="3" q={<span><B>Mirrors: Approximate rate at point.</B><br/>Using g(t) above, compute AROC over [1,1.5], [1,1.1], [1,1.01], [1,1.001]. What value do they converge to?</span>}/>,
  ]},
  { id:"1.3", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Linear test.</B> Compute all 4 AROCs. Are they all the same? Show each calculation.<br/><Tb h={["x","−2","−1","0","1","2"]} r={[["f","10","7","4","1","−2"]]}/></span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Quadratic test.</B> Compute all 4 AROCs, then find the 3 changes between them. Constant?<br/><Tb h={["x","−2","−1","0","1","2"]} r={[["g","5","0","−1","2","9"]]}/></span>}/>,
    <PQ key="3" n="3" q={<span><B>Mirrors: Concavity.</B> Compute AROCs. Increasing or decreasing? Concave up or down?<br/><Tb h={["x","−6","−4","−2","0","2"]} r={[["h","50","20","2","−4","2"]]}/></span>}/>,
  ]},
  { id:"1.4", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Degree & LC.</B> Reorder if needed, then identify.<br/>a) f(x) = −5x³+2x⁵−x+8<br/>b) g(x) = 12−7x²+x⁴</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Extrema.</B> Graph p(x) = −x⁴+3x²−1 on calculator. Find absolute max and min (or N/A).</span>}/>,
  ]},
  { id:"1.5", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Factor & multiplicity.</B> Factor p(x)=x³−4x. State zeros and multiplicities. What does graph do at each?</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Complex conjugate.</B> A cubic has x-int (−3,0) and zero 1+4i. Third zero?</span>}/>,
    <PQ key="3" n="3" q={<span><B>Mirrors: Successive differences.</B> Find the degree.<br/><Tb h={["x","−1","0","1","2","3"]} r={[["f","8","3","2","5","12"]]}/></span>}/>,
  ]},
  { id:"1.6", problems:[<PQ key="1" n="1" q={<span><B>Mirrors: End behavior.</B> For p(x)=4x⁵−x³+2: leading term, degree, end behavior in limit notation.</span>}/>]},
  { id:"1.7", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: HA.</B> Find HA: a) (2x−5)/(x²+1) b) (3x³+1)/(x³−4) c) (x⁴−2)/(x²+x)</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Limits.</B> r(x)=(2x⁵−x)/(4x³+3). Ratio of leading terms? End behavior as limits?</span>}/>,
  ]},
  { id:"1.8", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Zeros + inequality.</B> r(x)=(x²−x−6)/(x²−9). Find zeros. Solve r(x)≥0 with number line.</span>}/>,
  ]},
  { id:"1.9", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: VAs.</B> Find VAs of (x²−4)/(x²−x−2). Factor first! Show work.</span>}/>,
  ]},
  { id:"1.10", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Hole.</B> Find hole of r(x)=(x²−5x+6)/(x²−4x+4). Show factoring, canceling, and plugging in. Write the limit.</span>}/>,
  ]},
  { id:"1.11", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Long division.</B> Divide (2x²+3x−5) by (x−1). Show divide-multiply-subtract cycle. Slant asymptote?</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Binomial.</B> Expand (x+3)⁴ and (x−2)³. Show Pascal's row and each term.</span>}/>,
  ]},
  { id:"1.12", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Table computation.</B> f(−2)=1,f(−1)=4,f(0)=3,f(1)=0,f(2)=−1. g(x)=2f(x+1)−3. Find g(0) and g(1). Show the inside simplification first!</span>}/>,
    <PQ key="2" n="2" q={<span><B>Mirrors: Domain/Range.</B> f: D=[−3,4], R=[0,6]. g(x)=−3f(x+2)+1. Find D and R of g.</span>}/>,
  ]},
  { id:"1.13", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Geometric model.</B> Box: length=5w, width=w, height=3w. Write V(w). If w≤8, state domain/range.</span>}/>,
  ]},
  { id:"1.14", problems:[
    <PQ key="1" n="1" q={<span><B>Mirrors: Inverse variation.</B> 250 widgets at $5. Find k, write model, predict at $10, find price if 400 sold. Show all work.</span>}/>,
  ]},
];

// ─── APP ───
export default function App(){
  const [tab,setTab]=useState("learn");const [ti,setTi]=useState(0);const [si,setSi]=useState(0);const [mo,setMo]=useState(false);
  const t=topics[ti];const s=t.slides[si];const total=topics.reduce((a,x)=>a+x.slides.length,0);
  let cg=0;for(let i=0;i<ti;i++)cg+=topics[i].slides.length;cg+=si;
  const next=()=>{if(si<t.slides.length-1)setSi(si+1);else if(ti<topics.length-1){setTi(ti+1);setSi(0);}};
  const prev=()=>{if(si>0)setSi(si-1);else if(ti>0){setTi(ti-1);setSi(topics[ti-1].slides.length-1);}};
  const sel=(i)=>{setTi(i);setSi(0);setMo(false);};
  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(180deg,#f1f5f9,#e2e8f0)",fontFamily:"'Segoe UI','Helvetica Neue',sans-serif",padding:"6px",boxSizing:"border-box"}}>
      <div style={{maxWidth:880,margin:"0 auto"}}>
        <div style={{display:"flex",gap:0,marginBottom:6}}>
          {[["learn","📖 Learn"],["practice","✏️ Practice"]].map(([k,l])=>
            <button key={k} onClick={()=>setTab(k)} style={{flex:1,padding:"10px",border:"none",borderRadius:k==="learn"?"12px 0 0 12px":"0 12px 12px 0",background:tab===k?"#6366f1":"#c7d2fe",color:tab===k?"#fff":"#4338ca",fontWeight:700,fontSize:15,cursor:"pointer"}}>{l}</button>)}
        </div>
        {tab==="learn"&&<div style={{height:4,background:"#cbd5e1",borderRadius:3,overflow:"hidden",marginBottom:5}}>
          <div style={{width:`${(cg/(total-1))*100}%`,height:"100%",background:"linear-gradient(90deg,#6366f1,#ec4899)",borderRadius:3,transition:"width 0.3s"}}/></div>}
        <div style={{position:"relative",marginBottom:5}}>
          <button onClick={()=>setMo(!mo)} style={{width:"100%",padding:"9px 14px",background:"#1a1a2e",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span>📚 {t.id} — {t.name} ({t.slides.length} slides)</span><span>{mo?"▲":"▼"}</span>
          </button>
          {mo&&<div style={{position:"absolute",top:"100%",left:0,right:0,background:"#fff",borderRadius:10,boxShadow:"0 12px 40px rgba(0,0,0,0.18)",zIndex:10,maxHeight:350,overflowY:"auto",marginTop:3}}>
            {topics.map((x,i)=><div key={i} onClick={()=>sel(i)} style={{padding:"8px 14px",cursor:"pointer",borderBottom:"1px solid #f1f5f9",background:i===ti?"#eef2ff":"#fff",fontSize:13,display:"flex",justifyContent:"space-between"}}>
              <span style={{fontWeight:i===ti?700:400,color:i===ti?"#4338ca":"#333"}}>{x.id} — {x.name}</span>
              <span style={{fontSize:11,color:"#94a3b8"}}>{x.slides.length} slides</span>
            </div>)}
          </div>}
        </div>
        <div style={{background:"#fff",borderRadius:14,boxShadow:"0 5px 25px rgba(0,0,0,0.06)",overflow:"hidden"}}>
          <div style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)",padding:"9px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><span style={{color:"#818cf8",fontSize:11,fontWeight:600,letterSpacing:1}}>TOPIC {t.id}</span>
              <div style={{color:"#fff",fontSize:16,fontWeight:700,marginTop:1}}>{tab==="learn"?s.title:`Practice — ${t.name}`}</div></div>
            {tab==="learn"&&<div style={{color:"#94a3b8",fontSize:11,textAlign:"right"}}>{si+1}/{t.slides.length} · {cg+1}/{total}</div>}
          </div>
          <div style={{padding:"12px 14px",maxHeight:"62vh",overflowY:"auto"}}>
            {tab==="learn"?s.content:<div><div style={{fontSize:14,color:"#555",marginBottom:10}}>Work these on paper like the whiteboard examples in Learn. Same problem types, different numbers.</div>{(practice[ti]||practice[0]).problems}</div>}
          </div>
          {tab==="learn"&&<div style={{padding:"8px 14px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #f1f5f9"}}>
            <button onClick={prev} disabled={ti===0&&si===0} style={{padding:"7px 18px",borderRadius:8,border:"none",background:ti===0&&si===0?"#e2e8f0":"#6366f1",color:ti===0&&si===0?"#94a3b8":"#fff",fontWeight:700,fontSize:13,cursor:ti===0&&si===0?"default":"pointer"}}>← Back</button>
            <div style={{display:"flex",gap:3}}>{t.slides.map((_,i)=><div key={i} onClick={()=>setSi(i)} style={{width:i===si?18:7,height:7,borderRadius:4,background:i===si?"#6366f1":"#cbd5e1",cursor:"pointer",transition:"all 0.2s"}}/>)}</div>
            <button onClick={next} disabled={ti===topics.length-1&&si===t.slides.length-1} style={{padding:"7px 18px",borderRadius:8,border:"none",background:ti===topics.length-1&&si===t.slides.length-1?"#e2e8f0":"#6366f1",color:ti===topics.length-1&&si===t.slides.length-1?"#94a3b8":"#fff",fontWeight:700,fontSize:13,cursor:ti===topics.length-1&&si===t.slides.length-1?"default":"pointer"}}>Next →</button>
          </div>}
        </div>
      </div>
    </div>
  );
}
