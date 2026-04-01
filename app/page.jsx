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
const PQ = ({n,q,a,e})=>{const [sa,setSa]=useState(false);const [se,setSe]=useState(false);return (<div style={{background:"#fff",border:"2px solid #e2e8f0",borderRadius:10,padding:12,marginBottom:10}}><div style={{display:"flex",gap:8,alignItems:"flex-start"}}><div style={{width:24,height:24,borderRadius:"50%",background:"#6366f1",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:12,flexShrink:0}}>{n}</div><div style={{fontSize:14,color:"#333",lineHeight:1.7,flex:1}}>{q}{a&&<div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}><button onClick={()=>{setSa(!sa);if(sa)setSe(false);}} style={{padding:"5px 14px",borderRadius:7,border:"none",background:sa?"#22c55e":"#6366f1",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer"}}>{sa?"Hide Answer":"Reveal Answer"}</button>{sa&&<button onClick={()=>setSe(!se)} style={{padding:"5px 14px",borderRadius:7,border:"none",background:se?"#f59e0b":"#e2e8f0",color:se?"#fff":"#555",fontWeight:700,fontSize:12,cursor:"pointer"}}>{se?"Hide Explanation":"Show Explanation"}</button>}</div>}{sa&&a&&<div style={{marginTop:8,background:"#f0fdf4",border:"2px solid #86efac",borderRadius:8,padding:"8px 12px",fontSize:14,color:"#166534",fontWeight:700,fontFamily:"Georgia,serif"}}>{a}</div>}{se&&e&&<div style={{marginTop:6}}>{e}</div>}</div></div></div>)};

// ─── WHITEBOARD: The visual math component ───
const WB = ({children})=><div style={{background:"#fafaf8",border:"2px solid #d4d0c8",borderRadius:12,padding:16,marginBottom:10,fontFamily:"'Georgia','Times New Roman',serif",position:"relative",boxShadow:"inset 0 2px 8px rgba(0,0,0,0.04)"}}><div style={{position:"absolute",top:6,right:10,fontSize:10,color:"#b8b4a8",fontFamily:"sans-serif",fontWeight:600}}>📋 WORK</div>{children}</div>;
const MathLine = ({children,color="#1a1a2e",indent=0,size=16})=><div style={{fontSize:size,color,paddingLeft:indent,lineHeight:2,fontFamily:"'Georgia','Times New Roman',serif"}}>{children}</div>;
const Annotate = ({children,color="#6366f1"})=><span style={{fontSize:11,color,fontFamily:"'Segoe UI',sans-serif",fontWeight:600,marginLeft:8}}>← {children}</span>;
const MathBox = ({children,color="#ef4444"})=><span style={{border:`2px solid ${color}`,borderRadius:6,padding:"2px 8px",color,fontWeight:700}}>{children}</span>;
const Arrow = ({text,color="#6366f1"})=><div style={{textAlign:"center",color,fontSize:12,fontFamily:"sans-serif",fontWeight:600,margin:"4px 0"}}>{text} ↓</div>;
const Ans = ({children})=><div style={{background:"#fef2f2",border:"2px solid #ef4444",borderRadius:8,padding:"8px 14px",fontSize:16,color:"#b91c1c",fontWeight:700,fontFamily:"Georgia,serif",textAlign:"center",marginTop:8}}>{children}</div>;
const FmUsed = ({children})=><div style={{background:"#eef2ff",border:"1px solid #a5b4fc",borderRadius:8,padding:"6px 12px",fontSize:13,color:"#4338ca",fontWeight:600,marginBottom:8,fontFamily:"Georgia,serif",textAlign:"center"}}><span style={{fontSize:10,fontFamily:"sans-serif",fontWeight:700,color:"#6366f1"}}>FORMULA: </span>{children}</div>;

// ══════════════════════════════════════════════════
//  UNIT 1 TOPICS
// ══════════════════════════════════════════════════
const unit1Topics = [
  { id:"1.1", name:"Change in Tandem", slides:[
    { title:"Concept — What is a Function?", content:<div>
      <Fm label="Definition">A function is a mathematical relation that maps a set of input values to a set of output values such that each input is mapped to EXACTLY ONE output value.</Fm>
      <Wh>Think of a vending machine: press 1 button → get 1 specific snack. Every time you press that button, you get the SAME snack. If one button randomly gave different snacks, that's NOT a function.</Wh>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Key Vocabulary — Know ALL of These</Tt><Sm>
        • <B>Domain</B> = the set of ALL possible input values (x-values, independent variable)<br/>
        • <B>Range</B> = the set of ALL possible output values (y-values, dependent variable)<br/>
        • <B>Independent variable</B> = the input (you choose it freely)<br/>
        • <B>Dependent variable</B> = the output (depends on what you chose for input)<br/>
        • Input and output values vary <B>in tandem</B> — they change together according to the function rule
      </Sm></Box>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Four Ways to Express a Function</Tt><Sm>
        <B c="#166534">1. Analytically</B> — an equation: f(x) = 200 + 10x<br/>
        <B c="#166534">2. Graphically</B> — a picture on the coordinate plane<br/>
        <B c="#166534">3. Numerically</B> — a table of input/output pairs<br/>
        <B c="#166534">4. Verbally</B> — a word description of the relationship
      </Sm></Box>
      <Fm label="Zeros">The graph intersects the x-axis when the output value is zero. The corresponding input values are the ZEROS of the function.</Fm>
      <Wh>Zeros are also called "roots" or "x-intercepts." On the AP exam, "for what values of x does f(x) = 0?" is asking for the zeros!</Wh>
      <svg width="100%" height="80" viewBox="0 0 280 80"><line x1="15" y1="40" x2="265" y2="40" stroke="#ccc" strokeWidth="1"/><line x1="140" y1="5" x2="140" y2="75" stroke="#ccc" strokeWidth="1"/><path d="M 30 60 Q 70 70, 90 40 Q 110 10, 140 8 Q 170 5, 190 40 Q 210 70, 250 75" stroke="#6366f1" strokeWidth="2.5" fill="none"/><circle cx="90" cy="40" r="4" fill="#ef4444"/><circle cx="190" cy="40" r="4" fill="#ef4444"/><text x="90" y="55" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="700">zero</text><text x="190" y="55" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="700">zero</text></svg>
      <Tp>On the AP exam you need to move between ALL four representations. If they give you an equation, you might need to make a table. If they give a graph, you might need to write an equation.</Tp>
    </div>},
    { title:"Concept — Increasing, Decreasing & Concavity", content:<div>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">📈 Increasing Function</Tt><Sm>
        A function is <B c="#166534">increasing</B> over an interval if, as the input values increase, the output values <B c="#166534">always increase</B>.<br/>
        Formally: for all a and b in the interval, if a {"<"} b, then <B c="#166534">f(a) {"<"} f(b)</B>.<br/>
        Think: "Walking <B c="#166534">UPHILL</B> from left to right."
      </Sm></Box>
      <Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#991b1b">📉 Decreasing Function</Tt><Sm>
        A function is <B c="#991b1b">decreasing</B> over an interval if, as the input values increase, the output values <B c="#991b1b">always decrease</B>.<br/>
        Formally: for all a and b in the interval, if a {"<"} b, then <B c="#991b1b">f(a) {">"} f(b)</B>.<br/>
        Think: "Walking <B c="#991b1b">DOWNHILL</B> from left to right."
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">What the Sign of ROC Tells You</Tt><Sm>
        • A <B c="#22c55e">positive</B> rate of change → as one quantity increases/decreases, the other does the same<br/>
        • A <B c="#ef4444">negative</B> rate of change → as one quantity increases, the other decreases
      </Sm></Box>
      <G l={<Box bg="#fffbeb" border="2px solid #fcd34d" s={{textAlign:"center"}}><Tt c="#92400e">☕ Concave Up</Tt>
        <svg width="100" height="50" viewBox="0 0 100 50"><path d="M 5 5 Q 50 48, 95 5" stroke="#f59e0b" strokeWidth="3" fill="none"/></svg>
        <Sm>Rate of change is <B c="#92400e">increasing</B><br/>"Concave up, like a <B c="#92400e">cup</B>" ☕<br/>Example: f(x) = x² − 3</Sm></Box>}
        r={<Box bg="#fdf4ff" border="2px solid #e879f9" s={{textAlign:"center"}}><Tt c="#86198f">☹️ Concave Down</Tt>
        <svg width="100" height="50" viewBox="0 0 100 50"><path d="M 5 45 Q 50 2, 95 45" stroke="#d946ef" strokeWidth="3" fill="none"/></svg>
        <Sm>Rate of change is <B c="#86198f">decreasing</B><br/>"Concave down, like a <B c="#86198f">frown</B>" ☹️<br/>Example: f(x) = −x² + 3</Sm></Box>}/>
      <W>"Decreasing at a decreasing rate" means the slope is negative AND getting more negative — that's concave DOWN. Don't confuse the direction of the function with the direction of bending!</W>
      <Tp>On AP exam True/False questions: check if the function is ENTIRELY increasing/decreasing on the given interval. If it goes up then down, it's NOT "increasing" on that whole interval.</Tp>
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
      <Fm label="Definition">The average rate of change is the ratio of the change in output values to the change in input values over an interval.</Fm>
      <Fm label="Formula">AROC = [ f(b) − f(a) ] / ( b − a )</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">What Each Part Means</Tt><Sm>
        • <B c="#4338ca">f(b)</B> = the output at the END of the interval<br/>
        • <B c="#4338ca">f(a)</B> = the output at the START of the interval<br/>
        • <B c="#4338ca">b − a</B> = the width of the interval (the "run")<br/>
        • The AROC is the <B>slope of the secant line</B> connecting (a, f(a)) and (b, f(b))
      </Sm></Box>
      <svg width="100%" height="100" viewBox="0 0 300 100"><line x1="25" y1="85" x2="280" y2="85" stroke="#ddd"/><line x1="25" y1="85" x2="25" y2="5" stroke="#ddd"/><path d="M 35 72 Q 95 10, 160 55 Q 220 90, 275 18" stroke="#6366f1" strokeWidth="2.5" fill="none"/><circle cx="75" cy="30" r="4" fill="#ec4899"/><circle cx="230" cy="42" r="4" fill="#ec4899"/><line x1="75" y1="30" x2="230" y2="42" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,3"/><text x="72" y="22" textAnchor="middle" fontSize="9" fill="#ec4899">(a, f(a))</text><text x="235" y="56" fontSize="9" fill="#ec4899">(b, f(b))</text><text x="152" y="22" textAnchor="middle" fontSize="10" fill="#ec4899" fontWeight="600">secant line = AROC</text></svg>
      <G l={<Box bg="#f0fdf4"><Tt c="#166534">Positive AROC</Tt><Sm>As one quantity increases or decreases, the other does the <B c="#166534">same</B>.</Sm></Box>}
        r={<Box bg="#fef2f2"><Tt c="#991b1b">Negative AROC</Tt><Sm>As one quantity increases, the other <B c="#991b1b">decreases</B>.</Sm></Box>}/>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Rate of Change at a Point (Instantaneous Rate)</Tt><Sm>
        The rate of change <B c="#7c3aed">at a point</B> can be approximated by computing the AROC over <B c="#7c3aed">very small intervals</B> containing that point. As the interval shrinks, the AROC values converge to the instantaneous rate.
      </Sm></Box>
      <W>Don't forget UNITS on the AP exam! If height is in feet and time in seconds, the AROC is in ft/sec. Units = (output units) / (input units).</W>
      <Tp>Store functions in your calculator! On a TI: Y1 = equation, then use Y1(value) to evaluate without manual arithmetic errors.</Tp>
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
  { id:"1.3", name:"Rates of Change in Linear & Quadratic Functions", slides:[
    { title:"Concept — Linear vs Quadratic", content:<div>
      <Fm label="Key Connection">The AROC of f over [a,b] = the slope of the secant line from (a, f(a)) to (b, f(b))</Fm>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">📏 LINEAR Functions</Tt><Sm>
        • The AROC over <B>any</B> equal-length interval is <B>constant</B><br/>
        • The AROC is changing at a rate of <B>zero</B><br/>
        • 1st differences are constant<br/>
        • Graph is a straight line
      </Sm></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">📐 QUADRATIC Functions</Tt><Sm>
        • The AROC over consecutive equal-length intervals is a <B c="#dc2626">linear function</B><br/>
        • The AROC is changing at a <B c="#dc2626">constant rate</B><br/>
        • 2nd differences are constant<br/>
        • Graph is a parabola
      </Sm></Box>}/>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">How to Test a Data Set</Tt><Sm>
        <B c="#7c3aed">Step 1:</B> Compute AROC for each consecutive pair of points<br/>
        <B c="#7c3aed">Step 2:</B> If all AROCs are the same → <B>LINEAR</B><br/>
        <B c="#7c3aed">Step 3:</B> If not, compute the <B>changes</B> between consecutive AROCs<br/>
        <B c="#7c3aed">Step 4:</B> If those changes are constant → <B>QUADRATIC</B>
      </Sm></Box>
      <G l={<Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">☕ Concave Up</Tt><Sm>AROCs are <B c="#166534">increasing</B> over equal-length intervals</Sm>
        <svg width="90" height="40" viewBox="0 0 90 40"><path d="M 5 5 Q 45 38, 85 5" stroke="#22c55e" strokeWidth="2.5" fill="none"/></svg></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#991b1b">☹️ Concave Down</Tt><Sm>AROCs are <B c="#991b1b">decreasing</B> over equal-length intervals</Sm>
        <svg width="90" height="40" viewBox="0 0 90 40"><path d="M 5 35 Q 45 2, 85 35" stroke="#ef4444" strokeWidth="2.5" fill="none"/></svg></Box>}/>
      <W>The data must have EQUAL-LENGTH input intervals for these tests to work! If x goes 1,2,3,4 that's equal. If x goes 1,3,7,10 it's NOT.</W>
    </div>},
    { title:"Example — Slope of a Secant Line (Points)", content:<div>
      <Q>Find the slope of the secant line from the point (−1, 4) to the point (1, −2).</Q>
      <FmUsed>Slope of secant = [f(b) − f(a)] / (b − a)</FmUsed>
      <WB>
        <MathLine size={14}>Point 1: (−1, 4) → a = −1, f(a) = 4</MathLine>
        <MathLine size={14}>Point 2: (1, −2) → b = 1, f(b) = −2</MathLine>
        <Arrow text="Plug into the slope formula"/>
        <MathLine>Slope = <span style={{borderBottom:"2px solid #333"}}>f(b) − f(a)</span></MathLine>
        <MathLine indent={55}>b − a</MathLine>
        <Arrow text="Substitute values"/>
        <MathLine indent={42}>= <span style={{borderBottom:"2px solid #333"}}><MathBox color="#6366f1">−2</MathBox> − <MathBox color="#6366f1">4</MathBox></span></MathLine>
        <MathLine indent={52}>1 − (−1)</MathLine>
        <Arrow text="Simplify: −2 − 4 = −6 and 1 − (−1) = 1 + 1 = 2"/>
        <MathLine indent={42}>= <span style={{borderBottom:"2px solid #333"}}>−6</span></MathLine>
        <MathLine indent={52}>2</MathLine>
        <Ans>Slope of secant line = −3</Ans>
      </WB>
      <Wh>The slope of the secant line IS the average rate of change of the function over the interval [−1, 1]. Same formula, same answer — different name!</Wh>
    </div>},
    { title:"Example — Slope of a Secant Line (Function)", content:<div>
      <Q>For f(x) = (3/2)x² − 3/(2x + 6), find the slope of the secant line from (−1, f(−1)) to (3, f(3)).</Q>
      <FmUsed>Slope = [f(b) − f(a)] / (b − a)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Find f(−1)</b></MathLine>
        <MathLine size={14}>f(−1) = (3/2)(−1)² − 3/(2(−1)+6)</MathLine>
        <MathLine size={14} indent={30}>= (3/2)(1) − 3/(−2+6)</MathLine>
        <MathLine size={14} indent={30}>= 3/2 − 3/4 = 6/4 − 3/4 = <MathBox>3/4</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Find f(3)</b></MathLine>
        <MathLine size={14}>f(3) = (3/2)(3)² − 3/(2(3)+6)</MathLine>
        <MathLine size={14} indent={30}>= (3/2)(9) − 3/(12)</MathLine>
        <MathLine size={14} indent={30}>= 27/2 − 1/4 = 54/4 − 1/4 = <MathBox>53/4</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: Compute slope</b></MathLine>
        <MathLine size={14}>Slope = (53/4 − 3/4) / (3 − (−1))</MathLine>
        <MathLine size={14} indent={30}>= (50/4) / 4 = 50/16</MathLine>
        <Ans>Slope = 50/16 = 25/8 = 3.125</Ans>
      </WB>
      <Tp>When the function has fractions, find a common denominator before subtracting. Store intermediate results in your calculator to avoid rounding errors!</Tp>
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
  { id:"1.4", name:"Polynomial Functions & Rates of Change", slides:[
    { title:"Concept — Polynomials, Extrema, Inflection", content:<div>
      <Fm label="Polynomial Function">p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ where n is a positive integer, aₙ ≠ 0</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Key Vocabulary</Tt><Sm>
        • <B c="#4338ca">Leading term:</B> aₙxⁿ (the term with the highest power of x)<br/>
        • <B c="#4338ca">Leading coefficient:</B> aₙ (the number in front of the highest power)<br/>
        • <B c="#4338ca">Degree:</B> n (the highest exponent on x)
      </Sm></Box>
      <W>Terms may NOT be written in descending order! Always reorder to find the highest power first before identifying degree and leading coefficient.</W>
      <G l={<Box bg="#dbeafe" s={{textAlign:"center",padding:10}}><Tt c="#1e40af">Local Min</Tt>
        <svg width="70" height="35" viewBox="0 0 70 35"><path d="M 5 8 Q 35 32, 65 8" stroke="#3b82f6" strokeWidth="3" fill="none"/><circle cx="35" cy="30" r="3" fill="#1e40af"/></svg>
        <Sm>Function switches <B c="#1e40af">↓ → ↑</B></Sm></Box>}
        r={<Box bg="#fce7f3" s={{textAlign:"center",padding:10}}><Tt c="#be185d">Local Max</Tt>
        <svg width="70" height="35" viewBox="0 0 70 35"><path d="M 5 27 Q 35 3, 65 27" stroke="#ec4899" strokeWidth="3" fill="none"/><circle cx="35" cy="5" r="3" fill="#be185d"/></svg>
        <Sm>Function switches <B c="#be185d">↑ → ↓</B></Sm></Box>}/>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Global (Absolute) Extrema</Tt><Sm>
        • <B c="#92400e">Global max:</B> the GREATEST of all local maxima (or N/A if ends → ∞)<br/>
        • <B c="#92400e">Global min:</B> the LEAST of all local minima (or N/A if ends → −∞)<br/>
        • Also occur at included endpoints of restricted domains
      </Sm></Box>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Points of Inflection</Tt><Sm>
        Where the rate of change switches from increasing to decreasing (or vice versa). The graph changes from <B c="#7c3aed">concave up ↔ concave down</B>.
      </Sm></Box>
      <svg width="100%" height="50" viewBox="0 0 200 50"><path d="M 10 42 Q 50 12, 100 25 Q 150 38, 190 8" stroke="#f59e0b" strokeWidth="2.5" fill="none"/><circle cx="100" cy="25" r="3" fill="#92400e"/><text x="115" y="20" fontSize="9" fill="#92400e" fontWeight="700">inflection</text><text x="35" y="48" fontSize="8" fill="#888">concave up</text><text x="140" y="48" fontSize="8" fill="#888">concave down</text></svg>
      <Tp>A point of inflection is NOT an extremum! Extrema are peaks/valleys. Inflection points are where the BENDING direction changes.</Tp>
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
    { title:"Example — Local & Global Extrema from a Graph", content:<div>
      <Q>From a graph of a polynomial with restricted domain, identify all local minima, local maxima, and the global (absolute) minimum and maximum.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Find Local Extrema</b></MathLine>
        <MathLine size={14}>Where does the function switch from ↓ to ↑? → <B>Local minimum</B></MathLine>
        <MathLine size={14}>Local minima at x = <MathBox color="#3b82f6">−3</MathBox> and x = <MathBox color="#3b82f6">1</MathBox></MathLine>
        <MathLine size={14}>Where does the function switch from ↑ to ↓? → <B>Local maximum</B></MathLine>
        <MathLine size={14}>Local maxima at x = <MathBox color="#ec4899">−2</MathBox> and x = <MathBox color="#ec4899">2</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Find Global Extrema</b></MathLine>
        <MathLine size={14}>Compare ALL local mins: the SMALLEST output → global min</MathLine>
        <MathLine size={14}>Global min at x = <MathBox color="#3b82f6">1</MathBox><Annotate>lowest valley of all</Annotate></MathLine>
        <MathLine size={14}>Compare ALL local maxes: the LARGEST output → global max</MathLine>
        <MathLine size={14}>Global max at x = <MathBox color="#ec4899">−2</MathBox><Annotate color="#ec4899">highest peak of all</Annotate></MathLine>
      </WB>
      <Tp>Restricted domains can have global extrema at endpoints too! Always check the endpoints in addition to the peaks and valleys.</Tp>
    </div>},
    { title:"Example — Absolute Extrema with Technology", content:<div>
      <Q>Use technology to graph p(x) = x⁴ − 5x² + 1. Find the absolute maximum value and the absolute minimum value. Write N/A if none exists.</Q>
      <FmUsed>Graph on calculator → use max/min features to find extreme values</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Determine end behavior</b></MathLine>
        <MathLine size={14}>Leading term: <MathBox color="#6366f1">x⁴</MathBox> (even degree, + coeff)</MathLine>
        <MathLine size={14}>Both ends → +∞ → no absolute maximum (keeps going up)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Use calculator to find minimum</b></MathLine>
        <MathLine size={14}>Graph p(x) and use the minimum feature</MathLine>
        <MathLine size={14}>Local minima at x ≈ ±√(5/2) ≈ ±1.581</MathLine>
        <MathLine size={14}>Minimum output value: p(±√(5/2)) = <MathBox>−5.25</MathBox></MathLine>
        <Ans>Absolute Maximum = N/A (ends → +∞) · Absolute Minimum = −5.25</Ans>
      </WB>
      <W>Even degree with positive leading coefficient: both ends go to +∞, so there is NO absolute max. But there IS an absolute min (the lowest valley).</W>
    </div>},
    { title:"Example — Points of Inflection", content:<div>
      <Q>Five key points are labeled A, B, C, D, and E on the graph of a polynomial. Identify which points are inflection points.</Q>
      <FmUsed>Inflection point = where concavity changes (concave up ↔ concave down)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Identify concavity in each region</b></MathLine>
        <MathLine size={14}>Before B: curve is concave <MathBox color="#22c55e">UP</MathBox> (cup shape ☕)</MathLine>
        <MathLine size={14}>Between B and D: curve is concave <MathBox color="#ef4444">DOWN</MathBox> (frown shape ☹️)</MathLine>
        <MathLine size={14}>After D: curve is concave <MathBox color="#22c55e">UP</MathBox> again</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Where does concavity change?</b></MathLine>
        <MathLine size={14}>At B: UP → DOWN → <MathBox color="#f59e0b">inflection point ✓</MathBox></MathLine>
        <MathLine size={14}>At D: DOWN → UP → <MathBox color="#f59e0b">inflection point ✓</MathBox></MathLine>
        <MathLine size={14}>A, C, E: no change in concavity → NOT inflection points</MathLine>
        <Ans>Points of inflection at B and D</Ans>
      </WB>
      <Wh>Points of inflection are NOT peaks or valleys — they're where the curve changes its BENDING direction. The rate of change switches from increasing to decreasing (or vice versa).</Wh>
    </div>},
  ]},
  { id:"1.5", name:"Polynomial Functions & Complex Zeros", slides:[
    { title:"Concept — Zeros, Multiplicity, Complex, Even/Odd", content:<div>
      <Fm label="The Big Connection">p(a) = 0 ↔ a is a ZERO ↔ (x−a) is a FACTOR ↔ (a,0) is an x-INTERCEPT</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Multiplicity</Tt><Sm>
        If a linear factor (x−a) is repeated <B c="#4338ca">n times</B> in the factored form, the zero has <B c="#4338ca">multiplicity n</B>. The degree of the polynomial = sum of all multiplicities.
      </Sm></Box>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
        <Box bg="#dbeafe" s={{textAlign:"center",padding:10}}><Tt c="#1e40af">Mult 1 (Odd)</Tt><svg width="60" height="30" viewBox="0 0 60 30"><line x1="3" y1="15" x2="57" y2="15" stroke="#ddd"/><path d="M 8 26 L 30 15 L 52 4" stroke="#3b82f6" strokeWidth="3" fill="none"/></svg><Sm><B c="#1e40af">Crosses</B> straight through</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center",padding:10}}><Tt c="#be185d">Even (2,4...)</Tt><svg width="60" height="30" viewBox="0 0 60 30"><line x1="3" y1="15" x2="57" y2="15" stroke="#ddd"/><path d="M 8 4 Q 30 20, 30 15 Q 30 20, 52 4" stroke="#ec4899" strokeWidth="3" fill="none"/></svg><Sm><B c="#be185d">Bounces</B> (tangent to axis)</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center",padding:10}}><Tt c="#92400e">Odd ≥3</Tt><svg width="60" height="30" viewBox="0 0 60 30"><line x1="3" y1="15" x2="57" y2="15" stroke="#ddd"/><path d="M 8 28 Q 20 20, 30 15 Q 40 10, 52 2" stroke="#f59e0b" strokeWidth="3" fill="none"/></svg><Sm><B c="#92400e">Wiggles</B> (inflection on axis)</Sm></Box>
      </div>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Non-Real (Complex) Zeros — Conjugate Pairs</Tt><Sm>
        If <B c="#7c3aed">a + bi</B> is a non-real zero, then its <B c="#7c3aed">conjugate a − bi</B> is ALSO a zero. Complex zeros always come in pairs — you can never have just one!
      </Sm></Box>
      <G l={<Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#059669">Even Functions</Tt><Sm>
        • <B c="#059669">f(−x) = f(x)</B><br/>
        • Symmetric over <B c="#059669">y-axis</B><br/>
        • ALL exponents are even (including x⁰ constants)
      </Sm></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">Odd Functions</Tt><Sm>
        • <B c="#dc2626">f(−x) = −f(x)</B><br/>
        • Symmetric about the <B c="#dc2626">origin (0,0)</B><br/>
        • ALL exponents are odd
      </Sm></Box>}/>
      <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Successive Differences — Finding Degree from a Table</Tt><Sm>
        Over <B>equal-interval</B> inputs: 1st diff constant → degree 1 (linear) · 2nd diff constant → degree 2 (quadratic) · 3rd diff constant → degree 3 (cubic) · Pattern continues for higher degrees
      </Sm></Box>
      <Tp>Mixed exponents (e.g., x³ + x²) = NEITHER even nor odd. You need ALL exponents to be the same parity.</Tp>
    </div>},
    { title:"Example — Writing a Polynomial as Linear Factors", content:<div>
      <Q>The graph of p(x) = −x⁴+x³+4x²−4x has x-intercepts at (−2,0), (0,0), (1,0), and (2,0). Write p(x) as a product of linear factors.</Q>
      <FmUsed>If x = a is a zero of p(x), then (x − a) is a factor of p(x)</FmUsed>
      <WB>
        <Arrow text="Step 1: Convert each x-intercept into a factor"/>
        <MathLine size={14}>x-intercept (−2, 0) means x = −2 is a zero → factor: (x − (−2)) = <MathBox color="#6366f1">(x + 2)</MathBox></MathLine>
        <MathLine size={14}>x-intercept (0, 0) means x = 0 is a zero → factor: (x − 0) = <MathBox color="#6366f1">(x)</MathBox></MathLine>
        <MathLine size={14}>x-intercept (1, 0) means x = 1 is a zero → factor: <MathBox color="#6366f1">(x − 1)</MathBox></MathLine>
        <MathLine size={14}>x-intercept (2, 0) means x = 2 is a zero → factor: <MathBox color="#6366f1">(x − 2)</MathBox></MathLine>
        <Arrow text="Step 2: Determine the leading coefficient"/>
        <MathLine size={14}>The original polynomial has leading term −x⁴<Annotate>the coefficient is −1</Annotate></MathLine>
        <MathLine size={14}>If we multiply our factors: x · (x+2) · (x−1) · (x−2), the leading term would be x⁴</MathLine>
        <MathLine size={14}>We need −x⁴, so we must include a factor of <MathBox color="#ef4444">−1</MathBox> out front</MathLine>
        <Arrow text="Step 3: Write the complete factored form"/>
        <Ans>p(x) = −x(x + 2)(x − 1)(x − 2)</Ans>
      </WB>
      <Tp>Always check the leading coefficient! Multiply the leading terms of each factor together and compare to the original. If they don't match, include a constant out front.</Tp>
    </div>},
    { title:"Example — Multiplicity and Graph Behavior at Zeros", content:<div>
      <Q>Given f(x) = x(x+3)⁴(x−2)⁵, find the degree and describe how the graph behaves at each zero (crosses, bounces, or wiggles).</Q>
      <FmUsed>Degree = sum of all exponents · Mult 1 → crosses · Mult even → bounces · Mult odd ≥ 3 → wiggles</FmUsed>
      <WB>
        <Arrow text="Step 1: Find the degree by adding all exponents"/>
        <MathLine size={14}>f(x) = x¹ · (x+3)⁴ · (x−2)⁵</MathLine>
        <MathLine size={14}>Degree = 1 + 4 + 5 = <MathBox color="#6366f1">10</MathBox><Annotate>add the exponents on each factor</Annotate></MathLine>
        <Arrow text="Step 2: Identify each zero and its multiplicity"/>
        <MathLine size={14}>From x¹: zero at x = <MathBox color="#3b82f6">0</MathBox>, multiplicity = <MathBox color="#3b82f6">1</MathBox><Annotate>exponent is 1</Annotate></MathLine>
        <MathLine size={14}>From (x+3)⁴: zero at x = <MathBox color="#ec4899">−3</MathBox>, multiplicity = <MathBox color="#ec4899">4</MathBox><Annotate>set x+3=0 → x=−3</Annotate></MathLine>
        <MathLine size={14}>From (x−2)⁵: zero at x = <MathBox color="#f59e0b">2</MathBox>, multiplicity = <MathBox color="#f59e0b">5</MathBox><Annotate>set x−2=0 → x=2</Annotate></MathLine>
        <Arrow text="Step 3: Determine graph behavior using the multiplicity rule"/>
        <MathLine size={14}>x = 0, mult 1 (odd, = 1): graph <MathBox color="#3b82f6">crosses straight through</MathBox><Annotate>like a line passing through</Annotate></MathLine>
        <MathLine size={14}>x = −3, mult 4 (even): graph <MathBox color="#ec4899">bounces off</MathBox> the x-axis<Annotate>touches, turns around</Annotate></MathLine>
        <MathLine size={14}>x = 2, mult 5 (odd, ≥ 3): graph <MathBox color="#f59e0b">wiggles through</MathBox><Annotate>flattens then passes through</Annotate></MathLine>
      </WB>
      <Wh>Even multiplicity means the graph does NOT change sign — it stays positive or stays negative. Odd multiplicity means the graph DOES change sign — it goes from + to − or vice versa. That's why even = bounce (comes back) and odd = cross (goes through).</Wh>
    </div>},
    { title:"Example — Finding a Missing Zero Using Conjugate Pairs", content:<div>
      <Q>A cubic polynomial p(x) = ax³+bx²+cx+d has real coefficients. It has an x-intercept at (1.7, 0) and one zero is 2.3 − 1.5i. What is the third zero?</Q>
      <FmUsed>Complex zeros of polynomials with real coefficients always come in conjugate pairs: if a + bi is a zero, then a − bi must also be a zero.</FmUsed>
      <WB>
        <Arrow text="Step 1: Count how many zeros we need"/>
        <MathLine size={14}>p(x) is degree 3 → there must be exactly <MathBox color="#6366f1">3 zeros</MathBox> total</MathLine>
        <Arrow text="Step 2: List what we already know"/>
        <MathLine size={14}>Zero #1: x = 1.7<Annotate>from the x-intercept (1.7, 0)</Annotate></MathLine>
        <MathLine size={14}>Zero #2: x = 2.3 − 1.5i<Annotate>given in the problem</Annotate></MathLine>
        <Arrow text="Step 3: Apply the Conjugate Pairs Rule"/>
        <MathLine size={14}>Since p(x) has <B>real coefficients</B>, complex zeros MUST come in pairs</MathLine>
        <MathLine size={14}>The conjugate of (2.3 − 1.5i) is found by flipping the sign of the imaginary part:</MathLine>
        <MathLine size={14}>2.3 − 1.5i → <MathBox color="#22c55e">2.3 + 1.5i</MathBox></MathLine>
        <Ans>Third zero = 2.3 + 1.5i</Ans>
      </WB>
      <W>This rule ONLY works when the polynomial has real coefficients (all the numbers a, b, c, d are real numbers). If the coefficients were complex, conjugate pairs aren't guaranteed.</W>
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
    { title:"Example — Even and Odd Functions", content:<div>
      <Q>Indicate whether each function is even (E) or odd (O). Remember: even = all even exponents, odd = all odd exponents.</Q>
      <FmUsed>Even: f(−x) = f(x) (y-axis symmetry) · Odd: f(−x) = −f(x) (origin symmetry)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1.</b> p(x) = x⁵</MathLine>
        <MathLine size={14} indent={20}>Only exponent: 5 (odd) → <MathBox color="#22c55e">ODD</MathBox></MathLine>
        <MathLine size={14} indent={20}>Check: p(−x) = (−x)⁵ = −x⁵ = −p(x) ✓</MathLine>
        <MathLine size={14} color="#4338ca"><b>2.</b> f(x) = x⁴ + 5x² − 6</MathLine>
        <MathLine size={14} indent={20}>Exponents: 4, 2, 0 (all even) → <MathBox color="#6366f1">EVEN</MathBox></MathLine>
        <MathLine size={14} indent={20}>Check: f(−x) = x⁴ + 5x² − 6 = f(x) ✓</MathLine>
        <MathLine size={14} color="#4338ca"><b>3.</b> g(x) = x³ + 4x</MathLine>
        <MathLine size={14} indent={20}>Exponents: 3, 1 (all odd) → <MathBox color="#22c55e">ODD</MathBox></MathLine>
        <MathLine size={14} indent={20}>Check: g(−x) = −x³ − 4x = −(x³ + 4x) = −g(x) ✓</MathLine>
      </WB>
      <W>If a polynomial has MIXED exponents (like x³ + x²), it is NEITHER even nor odd. All exponents must be the same parity (all even or all odd).</W>
    </div>},
  ]},
  { id:"1.6", name:"Polynomial Functions & End Behavior", slides:[
    { title:"Concept — End Behavior Rules", content:<div>
      <Fm label="Key Rule">For nonconstant polynomial functions, the values of the LEADING TERM dominate the values of all lower-degree terms as x → ±∞</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">What Determines End Behavior?</Tt><Sm>
        • The <B c="#4338ca">degree</B> (even or odd) tells you whether the two ends go the SAME direction or OPPOSITE directions<br/>
        • The <B c="#4338ca">sign of the leading coefficient</B> (+ or −) tells you which direction the RIGHT side goes
      </Sm></Box>
      <G l={<Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Even Degree</Tt><Sm><B c="#166534">Same</B> end behavior on both sides. Both up or both down.</Sm></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#991b1b">Odd Degree</Tt><Sm><B c="#991b1b">Opposite</B> end behavior. One up, one down.</Sm></Box>}/>
      <Tb h={["Degree","Lead Coeff","x→−∞","x→+∞","Visual"]} r={[["Even","+","+∞","+∞","↑ ↑"],["Even","−","−∞","−∞","↓ ↓"],["Odd","+","−∞","+∞","↓ ↑"],["Odd","−","+∞","−∞","↑ ↓"]]}/>
      <Tp>Quick trick: Look at the RIGHT side first. + coeff → right goes UP. − coeff → right goes DOWN. Then: even = left matches, odd = left is opposite.</Tp>
      <W>Write end behavior using LIMIT NOTATION on the AP exam: lim(x→∞) p(x) = ∞ and lim(x→−∞) p(x) = −∞, NOT just "up" or "down."</W>
    </div>},
    { title:"Example — End Behavior from an Equation", content:<div>
      <Q>Identify the leading term, degree, and end behavior of p(x) = −2x³ − 4x² + 5x − 3. Write end behavior using limit notation.</Q>
      <FmUsed>Leading term determines end behavior: degree (even/odd) + sign of LC (±)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Identify the leading term</b></MathLine>
        <MathLine size={14}>p(x) = <MathBox color="#6366f1">−2x³</MathBox> − 4x² + 5x − 3</MathLine>
        <MathLine size={14}>Leading term: −2x³</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Determine degree and sign</b></MathLine>
        <MathLine size={14}>Degree = <MathBox color="#6366f1">3</MathBox> (odd) · Leading coefficient = <MathBox color="#ef4444">−2</MathBox> (negative)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: Apply the rules</b></MathLine>
        <MathLine size={14}>Odd degree + negative coeff → left UP, right DOWN</MathLine>
        <Ans>lim(x→−∞) p(x) = +∞ · lim(x→∞) p(x) = −∞</Ans>
      </WB>
    </div>},
    { title:"Example — End Behavior from Graphs", content:<div>
      <Q>From each graph, determine a possible degree, the sign of the leading coefficient, and write the end behavior using limit notation.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Graph 1: Left end goes down, right end goes up</b></MathLine>
        <MathLine size={14}>Opposite directions → <MathBox color="#22c55e">odd degree</MathBox></MathLine>
        <MathLine size={14}>Right side goes UP → <MathBox color="#22c55e">positive leading coefficient</MathBox></MathLine>
        <MathLine size={14}>Possible degree: 3 (cubic)</MathLine>
        <Ans>lim(x→−∞) = −∞ · lim(x→∞) = +∞</Ans>
        <MathLine size={14} color="#4338ca"><b>Graph 2: Both ends go down</b></MathLine>
        <MathLine size={14}>Same direction → <MathBox color="#ef4444">even degree</MathBox></MathLine>
        <MathLine size={14}>Both sides go DOWN → <MathBox color="#ef4444">negative leading coefficient</MathBox></MathLine>
        <MathLine size={14}>Possible degree: 4 (quartic)</MathLine>
        <Ans>lim(x→−∞) = −∞ · lim(x→∞) = −∞</Ans>
      </WB>
    </div>},
    { title:"Example — End Behavior with SVG Graphs", content:<div>
      <Q>Match each graph to its leading term and write end behavior in limit notation.</Q>
      <G l={<Box bg="#eef2ff" s={{textAlign:"center"}}><Tt c="#4338ca">Odd Degree, + Coeff</Tt>
        <svg width="120" height="80" viewBox="0 0 120 80"><line x1="5" y1="40" x2="115" y2="40" stroke="#ddd"/><line x1="60" y1="2" x2="60" y2="78" stroke="#ddd"/><path d="M 5 72 C 30 65, 45 48, 60 40 C 75 32, 90 15, 115 8" stroke="#6366f1" strokeWidth="2.5" fill="none"/><text x="10" y="75" fontSize="7" fill="#ef4444">−∞</text><text x="100" y="12" fontSize="7" fill="#22c55e">+∞</text></svg>
        <Sm>lim(x→−∞) = −∞<br/>lim(x→+∞) = +∞<br/>Example: x³</Sm></Box>}
        r={<Box bg="#fef2f2" s={{textAlign:"center"}}><Tt c="#dc2626">Even Degree, − Coeff</Tt>
        <svg width="120" height="80" viewBox="0 0 120 80"><line x1="5" y1="40" x2="115" y2="40" stroke="#ddd"/><line x1="60" y1="2" x2="60" y2="78" stroke="#ddd"/><path d="M 5 72 C 25 68, 40 20, 60 12 C 80 20, 95 68, 115 72" stroke="#ef4444" strokeWidth="2.5" fill="none"/><text x="10" y="75" fontSize="7" fill="#ef4444">−∞</text><text x="100" y="75" fontSize="7" fill="#ef4444">−∞</text></svg>
        <Sm>lim(x→−∞) = −∞<br/>lim(x→+∞) = −∞<br/>Example: −x²</Sm></Box>}/>
      <G l={<Box bg="#fef3c7" s={{textAlign:"center"}}><Tt c="#92400e">Even Degree, + Coeff</Tt>
        <svg width="120" height="80" viewBox="0 0 120 80"><line x1="5" y1="40" x2="115" y2="40" stroke="#ddd"/><line x1="60" y1="2" x2="60" y2="78" stroke="#ddd"/><path d="M 5 8 C 25 12, 40 60, 60 68 C 80 60, 95 12, 115 8" stroke="#f59e0b" strokeWidth="2.5" fill="none"/><text x="10" y="12" fontSize="7" fill="#22c55e">+∞</text><text x="100" y="12" fontSize="7" fill="#22c55e">+∞</text></svg>
        <Sm>lim(x→−∞) = +∞<br/>lim(x→+∞) = +∞<br/>Example: x⁴</Sm></Box>}
        r={<Box bg="#f0fdf4" s={{textAlign:"center"}}><Tt c="#166534">Odd Degree, − Coeff</Tt>
        <svg width="120" height="80" viewBox="0 0 120 80"><line x1="5" y1="40" x2="115" y2="40" stroke="#ddd"/><line x1="60" y1="2" x2="60" y2="78" stroke="#ddd"/><path d="M 5 8 C 30 15, 45 32, 60 40 C 75 48, 90 65, 115 72" stroke="#22c55e" strokeWidth="2.5" fill="none"/><text x="10" y="12" fontSize="7" fill="#22c55e">+∞</text><text x="100" y="75" fontSize="7" fill="#ef4444">−∞</text></svg>
        <Sm>lim(x→−∞) = +∞<br/>lim(x→+∞) = −∞<br/>Example: −x³</Sm></Box>}/>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Limit Notation (AP Exam Required!)</Tt><Sm>
        Write: <B c="#7c3aed">lim</B> f(x) = ∞ as x → ∞, NOT "goes up." The AP exam requires FORMAL limit notation for all end behavior descriptions.
      </Sm></Box>
    </div>},
  ]},
  { id:"1.7", name:"Rational Functions & End Behavior", slides:[
    { title:"Concept — Three Cases", content:<div>
      <Fm label="Rational Function">r(x) = p(x)/q(x), where q(x) ≠ 0. The end behavior is determined by the quotient of the LEADING TERMS.</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Variable Definitions</Tt><Sm>
        • <B c="#4338ca">n</B> = degree of the NUMERATOR<br/>
        • <B c="#4338ca">d</B> = degree of the DENOMINATOR<br/>
        • Compare n vs d to determine horizontal asymptote behavior
      </Sm></Box>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
        <Box bg="#dbeafe" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#1e40af"}}>n{"<"}d</div><Sm>HA: <B c="#1e40af">y = 0</B><br/>Numerator "loses" — outputs shrink to 0</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#be185d"}}>n=d</div><Sm>HA: <B c="#be185d">y = aₙ/bₘ</B><br/>Ratio of leading coefficients</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#92400e"}}>n{">"}d</div><Sm><B c="#92400e">No HA</B><br/>If n=d+1 → slant asymptote</Sm></Box>
      </div>
      <Fm label="If HA exists at y = b">lim(x→∞) r(x) = b AND lim(x→−∞) r(x) = b</Fm>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">When n {">"} d (No HA)</Tt><Sm>
        The quotient of leading terms is a <B c="#7c3aed">nonconstant polynomial</B>, so the rational function has the end behavior of that polynomial. If n = d + 1, the end behavior is a <B c="#7c3aed">slant (oblique) asymptote</B> found by polynomial long division.
      </Sm></Box>
      <W>The HA tells you where the graph LEVELS OFF for very large |x|. But the graph CAN cross a HA in the middle — it just approaches it at the ends!</W>
      <Tp>Quick method: cover everything except the leading terms in num and den. Simplify that fraction. If it's a constant → that's your HA. If it has x → no HA.</Tp>
    </div>},
    { title:"Example — Finding Horizontal Asymptotes", content:<div>
      <Q>Find the horizontal asymptote (if one exists) for each rational function.</Q>
      <FmUsed>Compare n (degree of numerator) vs d (degree of denominator)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1.</b> f(x) = (x − 2)/(x² − 9)</MathLine>
        <MathLine size={14} indent={20}>n = 1, d = 2 → n {"<"} d → <MathBox color="#3b82f6">HA: y = 0</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>2.</b> g(x) = (5x² − 2)/(7x² − 9)</MathLine>
        <MathLine size={14} indent={20}>n = 2, d = 2 → n = d → <MathBox color="#ec4899">HA: y = 5/7</MathBox><Annotate color="#ec4899">ratio of leading coefficients</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>3.</b> h(x) = (5x² − 2x + 3)/(x − 9)</MathLine>
        <MathLine size={14} indent={20}>n = 2, d = 1 → n {">"} d → <MathBox color="#f59e0b">No HA</MathBox></MathLine>
      </WB>
      <Tp>Remember the three cases: n{"<"}d → y=0, n=d → y=ratio of LCs, n{">"}d → no HA.</Tp>
    </div>},
    { title:"Example — Leading Term Ratios & End Behavior", content:<div>
      <Q>Find the quotient of leading terms and use it to describe end behavior.</Q>
      <FmUsed>Quotient of leading terms = (leading term of num) / (leading term of den)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1.</b> r(x) = (4x³−3x+1)/(2x³+5x+1)</MathLine>
        <MathLine size={14} indent={20}>Ratio: 4x³/2x³ = <MathBox color="#6366f1">2</MathBox> (constant) → HA: y = 2</MathLine>
        <MathLine size={14} indent={20}>lim(x→±∞) r(x) = 2</MathLine>
        <MathLine size={14} color="#4338ca"><b>2.</b> r(x) = (4x⁵−3x+1)/(2x³+5x+1)</MathLine>
        <MathLine size={14} indent={20}>Ratio: 4x⁵/2x³ = <MathBox color="#6366f1">2x²</MathBox> (nonconstant) → No HA</MathLine>
        <MathLine size={14} indent={20}>Behaves like 2x² → both ends → +∞</MathLine>
        <MathLine size={14} color="#4338ca"><b>3.</b> r(x) = (x⁶−3x³+1)/(x³+5x+1)</MathLine>
        <MathLine size={14} indent={20}>Ratio: x⁶/x³ = <MathBox color="#6366f1">x³</MathBox> → behaves like cubic</MathLine>
        <Ans>lim(x→∞) = ∞ · lim(x→−∞) = −∞</Ans>
        <MathLine size={14} color="#4338ca"><b>4.</b> v(x) = (−2x³−3x²+6x+1)/(x²+5x+1)</MathLine>
        <MathLine size={14} indent={20}>Ratio: −2x³/x² = <MathBox color="#6366f1">−2x</MathBox> → slant asymptote ∥ y = −2x</MathLine>
        <Ans>lim(x→∞) = −∞ · lim(x→−∞) = +∞</Ans>
      </WB>
    </div>},
  ]},
  { id:"1.8", name:"Rational Functions & Zeros", slides:[
    { title:"Concept — Zeros & Rational Inequalities", content:<div>
      <Fm label="Real Zeros of Rational Functions">The zeros of r(x) = p(x)/q(x) correspond to the zeros of the NUMERATOR p(x) where q(x) ≠ 0</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Finding Zeros — Step by Step</Tt><Sm>
        <B c="#4338ca">1.</B> Factor the numerator completely<br/>
        <B c="#4338ca">2.</B> Set each numerator factor = 0 to find candidates<br/>
        <B c="#4338ca">3.</B> Check: does the denominator also = 0 at that x?<br/>
        • If NO → it's a <B c="#22c55e">real zero</B> (x-intercept)<br/>
        • If YES → it's a <B c="#f59e0b">hole</B>, NOT a zero!
      </Sm></Box>
      <W>If a value makes BOTH numerator AND denominator zero, it's a HOLE, not a zero! Always check the denominator.</W>
      <Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">Solving Rational Inequalities</Tt><Sm>
        To solve r(x) ≥ 0, ≤ 0, {">"} 0, or {"<"} 0:<br/>
        <B c="#dc2626">1.</B> Find ALL zeros of both numerator AND denominator<br/>
        <B c="#dc2626">2.</B> Number line: ● for num zeros (included in ≥/≤), ○ for den zeros (never included!)<br/>
        <B c="#dc2626">3.</B> Test each interval for + or −<br/>
        <B c="#dc2626">4.</B> Select intervals matching the inequality
      </Sm></Box>
      <Tp>Denominator zeros are NEVER included in the solution (even for ≤ or ≥) because the function is undefined there!</Tp>
    </div>},
    { title:"Example — Finding Zeros & Solving Inequality", content:<div>
      <Q>Find the real zeros of r(x) = (x³−5x²+6x)/(x²−2x−3). Then solve r(x) ≥ 0.</Q>
      <FmUsed>Factor num and den. Zeros of num (where den ≠ 0) are real zeros. Use number line for inequality.</FmUsed>
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
  { id:"1.9", name:"Rational Functions & Vertical Asymptotes", slides:[
    { title:"Concept — Vertical Asymptotes & Limits", content:<div>
      <Fm label="Vertical Asymptotes">The VA(s) of a rational function correspond to zeros of the DENOMINATOR that are NOT also zeros of the numerator.</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Finding Vertical Asymptotes</Tt><Sm>
        <B c="#4338ca">1.</B> Factor denominator completely<br/>
        <B c="#4338ca">2.</B> Set each factor = 0 to find candidates<br/>
        <B c="#4338ca">3.</B> If numerator ≠ 0 at that x → <B c="#ef4444">VA</B> · If numerator = 0 too → <B c="#f59e0b">hole</B>
      </Sm></Box>
      <W>A VA is a LINE — always write it as an equation: x = a, NOT just "a"!</W>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">One-Sided Limits at VAs</Tt><Sm>
        As x approaches a VA at x = a, the output values increase or decrease <B c="#7c3aed">without bound</B>:<br/>
        • <B c="#7c3aed">From the right:</B> lim(x→a⁺) r(x) = +∞ or −∞<br/>
        • <B c="#7c3aed">From the left:</B> lim(x→a⁻) r(x) = +∞ or −∞
      </Sm></Box>
      <svg width="100%" height="80" viewBox="0 0 260 80"><line x1="15" y1="40" x2="245" y2="40" stroke="#ddd"/><line x1="130" y1="2" x2="130" y2="78" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3"/><path d="M 25 38 Q 75 35, 110 78" stroke="#6366f1" strokeWidth="2" fill="none"/><path d="M 150 2 Q 185 45, 240 42" stroke="#6366f1" strokeWidth="2" fill="none"/><text x="138" y="12" fontSize="8" fill="#ef4444" fontWeight="700">x=a (VA)</text></svg>
      <Tp>Use the graph on your calculator to determine whether each side goes to +∞ or −∞. The sign can be different on each side!</Tp>
    </div>},
    { title:"Example — Finding Vertical Asymptotes", content:<div>
      <Q>Find the vertical asymptotes of r(x) = (x²−8x+7)/(x²+x−6).</Q>
      <FmUsed>Factor num & den → check if den zeros also zero the num</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Factor numerator</b></MathLine>
        <MathLine size={14}>x²−8x+7 = (x−7)(x−1)<Annotate>−7×−1=7, −7+(−1)=−8 ✓</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Factor denominator</b></MathLine>
        <MathLine size={14}>x²+x−6 = (x+3)(x−2)<Annotate>3×(−2)=−6, 3+(−2)=1 ✓</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: Check denominator zeros</b></MathLine>
        <MathLine size={14}>x = −3: num = (−3−7)(−3−1) = (−10)(−4) = 40 ≠ 0 → <MathBox color="#ef4444">VA</MathBox></MathLine>
        <MathLine size={14}>x = 2: num = (2−7)(2−1) = (−5)(1) = −5 ≠ 0 → <MathBox color="#ef4444">VA</MathBox></MathLine>
        <Ans>Vertical Asymptotes: x = −3 and x = 2</Ans>
      </WB>
      <Wh>Both denominator zeros produce non-zero numerator values, so both are VAs (no holes). Always check EACH zero individually!</Wh>
    </div>},
    { title:"Example — One-Sided Limits from a Graph", content:<div>
      <Q>A rational function r(x) has VAs at x = −2 and x = 4. Use the graph to determine the one-sided limits at each VA.</Q>
      <FmUsed>lim(x→a⁺) = value from the RIGHT · lim(x→a⁻) = value from the LEFT</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>At x = −2:</b></MathLine>
        <MathLine size={14}>As x → −2 from the right: graph goes DOWN → lim(x→−2⁺) r(x) = <MathBox color="#ef4444">−∞</MathBox></MathLine>
        <MathLine size={14}>As x → −2 from the left: graph goes UP → lim(x→−2⁻) r(x) = <MathBox color="#22c55e">+∞</MathBox></MathLine>
        <MathLine size={14} color="#7c3aed">Opposite directions → <b>odd multiplicity VA</b></MathLine>
        <MathLine size={14} color="#4338ca"><b>At x = 4:</b></MathLine>
        <MathLine size={14}>As x → 4 from the right: graph goes UP → lim(x→4⁺) r(x) = <MathBox color="#22c55e">+∞</MathBox></MathLine>
        <MathLine size={14}>As x → 4 from the left: graph goes DOWN → lim(x→4⁻) r(x) = <MathBox color="#ef4444">−∞</MathBox></MathLine>
        <MathLine size={14} color="#7c3aed">Opposite directions → <b>odd multiplicity VA</b></MathLine>
      </WB>
      <Tp>Read the graph near each VA carefully: trace from each side and see if the curve shoots UP (+∞) or DOWN (−∞). Odd multiplicity → opposite directions; even multiplicity → same direction.</Tp>
    </div>},
    { title:"Example — Graphing & Limits of a Rational Function", content:<div>
      <Q>Graph v(x) = (x²−5x+4)/(x²+4x−12) on your calculator. Find the VAs and determine the one-sided limits at each VA.</Q>
      <FmUsed>Factor → find VAs → use calculator graph for limit directions</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Factor</b></MathLine>
        <MathLine size={14}>Num: x²−5x+4 = (x−4)(x−1)</MathLine>
        <MathLine size={14}>Den: x²+4x−12 = (x+6)(x−2)</MathLine>
        <MathLine size={14}>No common factors → no holes</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Identify VAs</b></MathLine>
        <MathLine size={14}>Den = 0: x = −6 and x = 2 → <MathBox color="#ef4444">VAs: x = −6 and x = 2</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: One-sided limits from graph</b></MathLine>
        <MathLine size={14}><b>At x = −6:</b></MathLine>
        <MathLine size={14}>lim(x→−6⁺) v(x) = <MathBox color="#ef4444">−∞</MathBox> · lim(x→−6⁻) v(x) = <MathBox color="#22c55e">+∞</MathBox></MathLine>
        <MathLine size={14}><b>At x = 2:</b></MathLine>
        <MathLine size={14}>lim(x→2⁺) v(x) = <MathBox color="#ef4444">−∞</MathBox> · lim(x→2⁻) v(x) = <MathBox color="#22c55e">+∞</MathBox></MathLine>
      </WB>
      <Wh>Both VAs have odd multiplicity (each factor appears once in the denominator), so the function goes in opposite directions on each side — confirmed by the calculator graph!</Wh>
    </div>},
    { title:"Concept — VA Multiplicity & Behavior Near Asymptotes", content:<div>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Multiplicity of VA Determines One-Sided Behavior</Tt><Sm>
        <B c="#4338ca">Odd multiplicity VA</B> (factor in den appears 1, 3, 5... times): the function goes in <B c="#ef4444">opposite directions</B> on each side (+∞ on one side, −∞ on the other)<br/><br/>
        <B c="#4338ca">Even multiplicity VA</B> (factor in den appears 2, 4, 6... times): the function goes in the <B c="#22c55e">same direction</B> on both sides (both +∞ or both −∞)
      </Sm></Box>
      <G l={<Box bg="#fef2f2" s={{textAlign:"center"}}><Tt c="#dc2626">Odd Mult VA</Tt>
        <svg width="100" height="65" viewBox="0 0 100 65"><line x1="50" y1="2" x2="50" y2="63" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2"/><line x1="5" y1="32" x2="95" y2="32" stroke="#ddd"/>
          <path d="M 8 30 Q 25 28, 42 62" stroke="#6366f1" strokeWidth="2" fill="none"/><path d="M 58 2 Q 75 28, 92 30" stroke="#6366f1" strokeWidth="2" fill="none"/>
        </svg>
        <Sm>One side → +∞<br/>Other side → −∞</Sm></Box>}
        r={<Box bg="#f0fdf4" s={{textAlign:"center"}}><Tt c="#166534">Even Mult VA</Tt>
        <svg width="100" height="65" viewBox="0 0 100 65"><line x1="50" y1="2" x2="50" y2="63" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2"/><line x1="5" y1="32" x2="95" y2="32" stroke="#ddd"/>
          <path d="M 8 30 Q 25 28, 42 2" stroke="#6366f1" strokeWidth="2" fill="none"/><path d="M 58 2 Q 75 28, 92 30" stroke="#6366f1" strokeWidth="2" fill="none"/>
        </svg>
        <Sm>Both sides → same ∞<br/>(both +∞ or both −∞)</Sm></Box>}/>
      <Tp>To determine +∞ or −∞: test a value very close to the VA on each side. For example, for VA at x=2, test x=1.99 (left) and x=2.01 (right) in the function.</Tp>
    </div>},
  ]},
  { id:"1.10", name:"Rational Functions & Holes", slides:[
    { title:"Concept — Holes in Rational Functions", content:<div>
      <Fm label="Holes">A hole occurs when the same factor appears in BOTH numerator and denominator and cancels out.</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Finding Hole Coordinates — Step by Step</Tt><Sm>
        <B c="#4338ca">1.</B> Factor numerator AND denominator completely<br/>
        <B c="#4338ca">2.</B> Find common factors (same zero in both)<br/>
        <B c="#4338ca">3.</B> Cancel common factors → get simplified f(x)<br/>
        <B c="#4338ca">4.</B> x-coordinate = the zero of the canceled factor<br/>
        <B c="#4338ca">5.</B> y-coordinate = plug x into the SIMPLIFIED function f(x)
      </Sm></Box>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Limits at Holes</Tt><Sm>
        The function is <B c="#7c3aed">undefined</B> at a hole (you'd get 0/0), but the <B c="#7c3aed">limit EXISTS</B>. As x approaches the hole, the outputs approach the y-coordinate: <B c="#7c3aed">lim(x→c) r(x) = L</B>
      </Sm></Box>
      <W>At a hole, plugging into the ORIGINAL function gives 0/0 (undefined). You must use the SIMPLIFIED function to find the y-value!</W>
    </div>},
    { title:"Example — Finding a Hole and Its Limit", content:<div>
      <Q>Find the hole in r(x) = (x²−8x+7)/(x²+x−2). Write the limit.</Q>
      <FmUsed>Factor → cancel common factor → plug into simplified function</FmUsed>
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
  { id:"1.11", name:"Equivalent Representations of Polynomial & Rational Expressions", slides:[
    { title:"Concept — Forms & Tools", content:<div>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Factored Form Reveals:</Tt><Sm>
        • Real zeros (x-intercepts)<br/>
        • Vertical asymptotes<br/>
        • Holes<br/>
        • Domain restrictions<br/>
        • Range
      </Sm></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">Standard Form Reveals:</Tt><Sm>
        • End behavior (from leading term)<br/>
        • y-intercept (constant term)<br/>
        • Degree
      </Sm></Box>}/>
      <Fm label="Polynomial Long Division">f(x) = g(x) · q(x) + r(x) where q(x) is the quotient and r(x) is the remainder</Fm>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Why Long Division Matters</Tt><Sm>
        When degree of numerator {">"} degree of denominator by exactly 1, the quotient q(x) is the <B c="#7c3aed">slant (oblique) asymptote</B>: y = q(x). The process: Divide → Multiply → Subtract → Repeat.
      </Sm></Box>
      <Fm label="Binomial Theorem">Expand (a+b)ⁿ using the coefficients from Pascal's Triangle</Fm>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">Pascal's Triangle (rows 0-5)</Tt>
        <div style={{textAlign:"center",fontFamily:"monospace",fontSize:13,lineHeight:1.8}}>1<br/>1 &nbsp; 1<br/>1 &nbsp; 2 &nbsp; 1<br/>1 &nbsp; 3 &nbsp; 3 &nbsp; 1<br/>1 &nbsp; 4 &nbsp; 6 &nbsp; 4 &nbsp; 1<br/>1 &nbsp; 5 &nbsp; 10 &nbsp; 10 &nbsp; 5 &nbsp; 1</div>
      </Box>
      <Tp>For (a+b)ⁿ: powers of a decrease (n→0) while powers of b increase (0→n). Signs alternate when b is negative!</Tp>
      <W>In long division, if a term is missing (e.g., no x term in x²+7), use a placeholder: x² + 0x + 7. Otherwise your columns won't line up!</W>
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
  { id:"1.12", name:"Transformations of Functions", slides:[
    { title:"Concept — All Transformation Rules", content:<div>
      <Fm label="General Form">g(x) = a · f( b(x − h) ) + k</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Additive Transformations (Shifts)</Tt><Sm>
        • <B c="#4338ca">g(x) = f(x) + k</B> → vertical translation UP by k units (down if k {"<"} 0)<br/>
        • <B c="#4338ca">g(x) = f(x + h)</B> → horizontal translation LEFT by h units<br/>
        • <B c="#4338ca">g(x) = f(x − h)</B> → horizontal translation RIGHT by h units
      </Sm></Box>
      <W>Horizontal shifts go the OPPOSITE direction of the sign! f(x+3) → LEFT 3. f(x−3) → RIGHT 3. This catches people on EVERY exam.</W>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Multiplicative Transformations (Dilations)</Tt><Sm>
        • <B c="#be185d">g(x) = a·f(x)</B> → vertical dilation by factor |a|. If a {"<"} 0, also reflects over x-axis<br/>
        • <B c="#be185d">g(x) = f(bx)</B> → horizontal dilation by factor |1/b|. If b {"<"} 0, also reflects over y-axis
      </Sm></Box>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Order of Transformations</Tt><Sm>
        <B c="#7c3aed">①</B> Horizontal dilation (b) → <B c="#7c3aed">②</B> Horizontal shift (h) → <B c="#7c3aed">③</B> Vertical dilation (a) → <B c="#7c3aed">④</B> Vertical shift (k)
      </Sm></Box>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">Effect on Domain and Range</Tt><Sm>
        Additive and multiplicative transformations may change the <B c="#166534">domain and range</B> of the transformed function.<br/>
        • Horizontal transformations affect the <B c="#166534">domain</B><br/>
        • Vertical transformations affect the <B c="#166534">range</B>
      </Sm></Box>
      <Tp>When using a table: g(x) = 4f(x−1)−5. To find g(2): first compute the INSIDE: x−1 = 2−1 = 1. Then look up f(1) in the table. Then multiply by 4 and subtract 5.</Tp>
    </div>},
    { title:"Example — Describing Transformations", content:<div>
      <Q>For each function, describe the transformation(s) applied to f.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1. g(x) = f(x) + 7</b></MathLine>
        <MathLine size={14}>+7 is OUTSIDE → <MathBox color="#22c55e">vertical translation UP 7 units</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>2. g(x) = f(x + 7)</b></MathLine>
        <MathLine size={14}>+7 is INSIDE → <MathBox color="#22c55e">horizontal translation LEFT 7 units</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>3. g(x) = 4f(x)</b></MathLine>
        <MathLine size={14}>×4 is OUTSIDE → <MathBox color="#ec4899">vertical dilation by factor of 4</MathBox><Annotate color="#ec4899">stretch vertically</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>4. g(x) = f(x/4)</b></MathLine>
        <MathLine size={14}>÷4 is INSIDE (b = 1/4) → <MathBox color="#ec4899">horizontal dilation by factor of 4</MathBox><Annotate color="#ec4899">stretch horizontally</Annotate></MathLine>
      </WB>
      <W>Inside changes (horizontal) go the OPPOSITE direction of the sign. Outside changes (vertical) go the SAME direction. This is the #1 transformation trap on the AP exam!</W>
    </div>},
    { title:"Example — Combined Transformation Description", content:<div>
      <Q>Let g(x) = (1/2)f(x/3) + 4. Describe the transformations in the correct order to construct the graph of g from f.</Q>
      <FmUsed>g(x) = a·f(b(x − h)) + k → Order: horiz dilation → horiz shift → vert dilation → vert shift</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Identify the constants:</b></MathLine>
        <MathLine size={14}>a = 1/2 (vertical dilation) · b = 1/3 (horizontal dilation) · k = +4 (vertical shift)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Apply transformations in order:</b></MathLine>
        <MathLine size={14}><MathBox color="#6366f1">①</MathBox> Horizontal dilation by factor of |1/b| = |1/(1/3)| = <MathBox color="#6366f1">3</MathBox><Annotate>stretch horizontally ×3</Annotate></MathLine>
        <MathLine size={14}><MathBox color="#ec4899">②</MathBox> Vertical dilation by factor of |a| = <MathBox color="#ec4899">1/2</MathBox><Annotate color="#ec4899">compress vertically ×(1/2)</Annotate></MathLine>
        <MathLine size={14}><MathBox color="#22c55e">③</MathBox> Vertical translation <MathBox color="#22c55e">UP 4 units</MathBox></MathLine>
        <Ans>Horiz stretch ×3 → Vert compress ×(1/2) → Up 4</Ans>
      </WB>
      <Tp>Always apply transformations in this order: horizontal dilation, horizontal shift, vertical dilation, vertical shift. Getting the order wrong changes the result!</Tp>
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
    { title:"Example — Combined Transformations: Domain & Range", content:<div>
      <Q>f(x) has domain [−2, 5] and range [−1, 2]. Let g(x) = −2f(x − 1) + 3. Find the domain and range of g.</Q>
      <FmUsed>g(x) = a·f(b(x − h)) + k → Horizontal: domain shifts/stretches. Vertical: range shifts/stretches.</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Domain of g:</b></MathLine>
        <MathLine size={14}>g uses f(x − 1), so the input to f must be in [−2, 5]</MathLine>
        <MathLine size={14}>Set: −2 ≤ x − 1 ≤ 5</MathLine>
        <Arrow text="Add 1 to all parts"/>
        <MathLine size={14}>−1 ≤ x ≤ 6 → Domain of g = <MathBox>[−1, 6]</MathBox><Annotate>shifted RIGHT 1</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Range of g:</b></MathLine>
        <MathLine size={14}>f(x) has range [−1, 2]. Apply vertical transformations in order:</MathLine>
        <Arrow text="Step 1: Multiply by −2 (stretch by 2, then reflect)"/>
        <MathLine size={14}>[−1, 2] × (−2) → [−2·2, −2·(−1)] = [−4, 2]<Annotate>flip the interval!</Annotate></MathLine>
        <Arrow text="Step 2: Add 3 (shift up 3)"/>
        <MathLine size={14}>[−4, 2] + 3 = <MathBox>[−1, 5]</MathBox></MathLine>
        <Ans>Domain: [−1, 6] · Range: [−1, 5]</Ans>
      </WB>
      <W>When multiplying by a NEGATIVE number, the inequality flips! The maximum becomes the minimum and vice versa. Always reorder the interval after multiplying by a negative.</W>
    </div>},
  ]},
  { id:"1.13", name:"Function Model Selection & Assumption Articulation", slides:[
    { title:"Concept — Model Selection & Geometric Models", content:<div>
      <Fm label="Model Selection">Given data, determine which function model is appropriate based on patterns in the data</Fm>
      <Tb h={["Type","Key Clues","What to Check"]} r={[["Linear","Always ↑ or always ↓, constant slope","1st differences constant"],["Quadratic","Symmetry in outputs, has min/max","2nd differences constant"],["Piecewise Linear","Slope changes at a point","Different constant rates on different intervals"]]}/>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Geometric Models</Tt><Sm>
        • <B c="#4338ca">Area problems</B> (2 dimensions multiplied) → result is <B c="#4338ca">quadratic</B> (x²)<br/>
        • <B c="#4338ca">Volume problems</B> (3 dimensions multiplied) → result is <B c="#4338ca">cubic</B> (x³)<br/>
        • Always define all dimensions in terms of <B>one variable</B>, then multiply
      </Sm></Box>
      <Wh>When writing geometric models, don't forget to include the deck/border/extra material around the main shape! Read the problem carefully for dimensions that are ADDED to the base shape.</Wh>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Domain & Range in Context</Tt><Sm>
        With "real world" problems, consider:<br/>
        • <B c="#166534">Domain restrictions</B> — dimensions must be positive, often have an upper limit<br/>
        • <B c="#166534">Range restrictions</B> — compute min/max using domain endpoints<br/>
        • <B c="#166534">Units of measure</B> — ft², in³, etc.
      </Sm></Box>
    </div>},
    { title:"Example — Identifying Linear vs Quadratic vs Piecewise Data", content:<div>
      <Q>For each data set, explain why it models a linear, quadratic, or piecewise linear function.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Data Set 1:</b></MathLine>
        <Tb h={["x","−3","−2","−1","0","1"]} r={[["f(x)","4","7","10","13","16"]]}/>
        <MathLine size={14}>1st differences: 3, 3, 3, 3 → <MathBox color="#22c55e">constant</MathBox></MathLine>
        <Ans>LINEAR — constant rate of change of 3</Ans>
        <MathLine size={14} color="#4338ca"><b>Data Set 2:</b></MathLine>
        <Tb h={["x","−3","−2","−1","0","1"]} r={[["f(x)","0","−1","0","3","8"]]}/>
        <MathLine size={14}>1st diff: −1, 1, 3, 5 (not constant) · 2nd diff: 2, 2, 2 → <MathBox color="#22c55e">constant</MathBox></MathLine>
        <Ans>QUADRATIC — constant second difference, output −1 is minimum</Ans>
        <MathLine size={14} color="#4338ca"><b>Data Set 3:</b></MathLine>
        <Tb h={["x","−4","−3","−2","−1","0","1","2"]} r={[["f(x)","10","5","0","−5","−3","−1","1"]]}/>
        <MathLine size={14}>Rate of change: −5 for x∈[−4,−1], then +2 for x∈[−1,2]</MathLine>
        <Ans>PIECEWISE LINEAR — two different constant rates on different intervals</Ans>
      </WB>
    </div>},
    { title:"Example — Geometric Model: Area (Quadratic)", content:<div>
      <Q>A pool has length = 3w. A cool deck 2ft wide is placed along the length and 3ft wide on each end. Write A(w) for total area.</Q>
      <FmUsed>Area = length × width (2 dimensions → quadratic)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Express ALL dimensions in terms of w</b></MathLine>
        <MathLine size={14}>Pool length = 3w · Pool width = w</MathLine>
        <MathLine size={14}>Total length = 3w + 3 + 3 = <MathBox color="#6366f1">3w + 6</MathBox><Annotate>3ft deck on each end</Annotate></MathLine>
        <MathLine size={14}>Total width = w + 2 + 2 = <MathBox color="#6366f1">w + 4</MathBox><Annotate>2ft deck on each side</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Multiply for area</b></MathLine>
        <MathLine size={14}>A = (3w+6)(w+4) = 3w² + 12w + 6w + 24</MathLine>
        <Ans>A(w) = 3w² + 18w + 24 ft²</Ans>
        <MathLine size={14} color="#4338ca"><b>Step 3: Domain & Range (w ≤ 20 ft)</b></MathLine>
        <MathLine size={14}>Domain: 0 {"<"} w ≤ 20 · A(20) = 3(400)+18(20)+24 = 1584</MathLine>
        <Ans>D: (0, 20] · R: (24, 1584]</Ans>
      </WB>
    </div>},
    { title:"Example — Geometric Model: Volume (Cubic)", content:<div>
      <Q>A fish tank has width w, height = 2w, and length = 4w (all in inches). Write V(w). If h ≤ 24 in, find domain and range.</Q>
      <FmUsed>Volume = length × width × height (3 dimensions → cubic)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Express all dimensions</b></MathLine>
        <MathLine size={14}>Width = <MathBox color="#ec4899">w</MathBox> · Height = <MathBox color="#f59e0b">2w</MathBox> · Length = <MathBox color="#6366f1">4w</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Multiply for volume</b></MathLine>
        <MathLine size={14}>V = 4w · w · 2w = <MathBox>8w³</MathBox></MathLine>
        <Ans>V(w) = 8w³ in³</Ans>
        <MathLine size={14} color="#4338ca"><b>Step 3: Domain & Range</b></MathLine>
        <MathLine size={14}>h ≤ 24 → 2w ≤ 24 → w ≤ 12</MathLine>
        <MathLine size={14}>V(12) = 8(12)³ = 8(1728) = 13,824</MathLine>
        <Ans>D: (0, 12] · R: (0, 13824]</Ans>
      </WB>
    </div>},
    { title:"Concept — Residuals & Model Validation", content:<div>
      <Fm label="Residual">Residual = Actual Value − Predicted Value (observed − expected)</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Residual Plot Analysis</Tt><Sm>
        • A <B c="#22c55e">good model</B> → residuals scattered randomly above and below zero (no pattern)<br/>
        • A <B c="#ef4444">bad model</B> → residuals show a clear pattern (curve, U-shape, fan shape)<br/>
        • If residuals form a U-shape, try a <B c="#4338ca">higher degree</B> polynomial<br/>
        • If residuals fan out, the model may have <B c="#4338ca">non-constant variance</B>
      </Sm></Box>
      <svg width="100%" height="55" viewBox="0 0 300 55">
        <line x1="20" y1="28" x2="145" y2="28" stroke="#666" strokeWidth="1"/><line x1="170" y1="28" x2="290" y2="28" stroke="#666" strokeWidth="1"/>
        {[{x:30,y:18},{x:45,y:35},{x:60,y:22},{x:75,y:32},{x:90,y:20},{x:105,y:38},{x:120,y:25},{x:135,y:30}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={3} fill="#22c55e"/>)}
        {[{x:180,y:35},{x:195,y:30},{x:210,y:20},{x:225,y:15},{x:240,y:18},{x:255,y:25},{x:270,y:35},{x:285,y:40}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={3} fill="#ef4444"/>)}
        <text x="80" y="52" textAnchor="middle" fontSize="8" fill="#22c55e" fontWeight="700">✓ Good (random)</text>
        <text x="230" y="52" textAnchor="middle" fontSize="8" fill="#ef4444" fontWeight="700">✗ Bad (U-pattern)</text>
      </svg>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Assumption Articulation (AP Exam!)</Tt><Sm>
        When selecting a model, state your reasoning:<br/>
        • "The data shows constant first differences, so a <B c="#92400e">linear model</B> is appropriate."<br/>
        • "The residual plot shows random scatter, confirming the model is a good fit."<br/>
        • "The data has two changes in direction, suggesting at least a <B c="#92400e">cubic model</B>."
      </Sm></Box>
      <Tp>The AP exam may ask you to JUSTIFY your model choice. Always reference the pattern in the data (differences, residual plots, or context clues) rather than just guessing.</Tp>
    </div>},
  ]},
  { id:"1.14", name:"Function Model Construction & Application", slides:[
    { title:"Concept — Regression & Inverse Variation", content:<div>
      <Fm label="Regression Models">Enter data into calculator → perform indicated regression → use model to predict</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Constructing a Model Using Regressions</Tt><Sm>
        <B c="#4338ca">Step 1:</B> Enter the data into calculator lists (STAT → EDIT)<br/>
        <B c="#4338ca">Step 2:</B> Perform the indicated regression (STAT → CALC → choose type: LinReg, QuadReg, CubicReg, QuartReg)<br/>
        <B c="#4338ca">Step 3:</B> Use the regression equation to make predictions by plugging in the desired input value
      </Sm></Box>
      <Tb h={["Regression Type","Form","When to Use"]} r={[["Linear","y = ax + b","Constant 1st differences"],["Quadratic","y = ax² + bx + c","Constant 2nd differences"],["Cubic","y = ax³ + bx² + cx + d","Constant 3rd differences"],["Quartic","y = ax⁴ + ...","Constant 4th differences"]]}/>
      <Fm label="Inverse Variation">y = k/x where k is the constant of proportionality</Fm>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Inverse Variation — Key Properties</Tt><Sm>
        • If x is <B c="#92400e">inversely proportional</B> to y, then y = k/x<br/>
        • <B c="#92400e">k = x · y</B> (find k by multiplying a known input-output pair)<br/>
        • As x increases, y decreases (and vice versa)<br/>
        • The graph is a rational function (hyperbola) with asymptotes at x = 0 and y = 0
      </Sm></Box>
      <W>A regression model gives an approximation, not an exact answer. Don't round intermediate steps — only round your final answer!</W>
    </div>},
    { title:"Example — Cubic Regression (Roller Coaster)", content:<div>
      <Q>A roller coaster's height is recorded at 2-second intervals. Use cubic regression to model the height and predict h(7).</Q>
      <Tb h={["t (sec)","0","2","4","6","8","10"]} r={[["h (ft)","0","22","23","6","2","17"]]}/>
      <FmUsed>Enter data → STAT → CALC → CubicReg</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Enter data into L1 and L2</b></MathLine>
        <MathLine size={14}>L1 = {"{"}0, 2, 4, 6, 8, 10{"}"} · L2 = {"{"}0, 22, 23, 6, 2, 17{"}"}</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Perform cubic regression</b></MathLine>
        <MathLine size={14}>STAT → CALC → 6: CubicReg</MathLine>
        <Ans>h(t) = 0.339t³ − 5.332t² + 21.153t − 0.317</Ans>
        <MathLine size={14} color="#4338ca"><b>Step 3: Predict h(7)</b></MathLine>
        <MathLine size={14}>h(7) = 0.339(343) − 5.332(49) + 21.153(7) − 0.317</MathLine>
        <MathLine size={14} indent={24}>= 116.277 − 261.268 + 148.071 − 0.317</MathLine>
        <Ans>h(7) ≈ 2.790 feet</Ans>
      </WB>
    </div>},
    { title:"Example — Inverse Variation (Soap Company)", content:<div>
      <Q>A soap company finds that bar sales are inversely proportional to price. At $8/bar, they sell 100 bars. Find k, write the model, predict sales at $6, and find the price if 125 bars are sold.</Q>
      <FmUsed>Inverse variation: b(x) = k/x where k = price × quantity</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Find k</b></MathLine>
        <MathLine size={14}>k = price × quantity = 8 × 100 = <MathBox color="#6366f1">800</MathBox></MathLine>
        <Ans>b(x) = 800/x</Ans>
        <MathLine size={14} color="#4338ca"><b>Step 2: Predict sales at $6</b></MathLine>
        <MathLine size={14}>b(6) = 800/6 ≈ <MathBox>133 bars</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: Find price for 125 bars</b></MathLine>
        <MathLine size={14}>125 = 800/x → x = 800/125 = <MathBox>$6.40</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Rational Function Model (Oysters)", content:<div>
      <Q>Oysters are modeled by P(t) = 200t/(0.002t+1) + 300 where t is months after harvesting stops. Find P(1) and the AROC from t=2 to t=4.</Q>
      <FmUsed>P(t) = 200t/(0.002t+1) + 300 · AROC = [P(b)−P(a)]/(b−a)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Find P(1)</b></MathLine>
        <MathLine size={14}>P(1) = 200(1)/(0.002(1)+1) + 300</MathLine>
        <MathLine size={14} indent={24}>= 200/(1.002) + 300 ≈ 199.6 + 300</MathLine>
        <Ans>P(1) ≈ 499 oysters</Ans>
        <MathLine size={14} color="#4338ca"><b>Step 2: Find AROC from t=2 to t=4</b></MathLine>
        <MathLine size={14}>P(2) = 200(2)/(0.004+1) + 300 ≈ 398.4 + 300 = 698.4</MathLine>
        <MathLine size={14}>P(4) = 200(4)/(0.008+1) + 300 ≈ 793.7 + 300 = 1093.7</MathLine>
        <MathLine size={14}>AROC = (1093.7 − 698.4)/(4 − 2) = 395.3/2</MathLine>
        <Ans>AROC ≈ +197 oysters/month</Ans>
      </WB>
      <Wh>The positive AROC means the oyster population is increasing — which makes sense since harvesting has stopped!</Wh>
    </div>},
  ]},
];

// ══════════════════════════════════════════════════
//  UNIT 2 TOPICS
// ══════════════════════════════════════════════════
const unit2Topics = [
  { id:"2.1", name:"Change in Arithmetic & Geometric Sequences", slides:[
    { title:"Concept — Arithmetic Sequences", content:<div>
      <Fm label="Definition">An arithmetic sequence is a list of numbers where you ADD the same value each time</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Key Properties of Arithmetic Sequences</Tt><Sm>
        • The graph consists of <B>discrete points</B> (dots, not a connected curve)<br/>
        • Successive terms have a <B>common difference d</B> (subtract any two consecutive terms to find d)<br/>
        • Successive terms have a <B>constant rate of change</B> (the AROC between consecutive terms is always d)<br/>
        • The sequence is the <B>discrete version of a linear function</B>
      </Sm></Box>
      <Fm label="Formula 1 (from initial value)">aₙ = a₀ + d·n</Fm>
      <Fm label="Formula 2 (from any known term)">aₙ = aₖ + d·(n − k) where aₖ is the kth term</Fm>
      <Box bg="#fef3c7"><Tt c="#92400e">Variable Definitions</Tt><Sm>
        • <B c="#92400e">d</B> = common difference (what you add each time)<br/>
        • <B c="#92400e">a₀</B> = initial value (the "zeroth" term — before the sequence starts)<br/>
        • <B c="#92400e">aₙ</B> = the value of the nth term<br/>
        • <B c="#92400e">aₖ</B> = any known term you're building from
      </Sm></Box>
      <svg width="100%" height="90" viewBox="0 0 340 90">
        <line x1="30" y1="75" x2="310" y2="75" stroke="#cbd5e1" strokeWidth="1.5"/>
        <line x1="30" y1="75" x2="30" y2="10" stroke="#cbd5e1" strokeWidth="1.5"/>
        {[{x:60,y:65},{x:110,y:52},{x:160,y:39},{x:210,y:26},{x:260,y:13}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="5" fill="#6366f1"/>)}
        <text x="170" y="88" textAnchor="middle" fontSize="10" fill="#6366f1" fontWeight="600">Points form a straight LINE → arithmetic</text>
        <line x1="60" y1="65" x2="260" y2="13" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5"/>
      </svg>
      <W>Formula 1 uses a₀ (zeroth term). Formula 2 uses aₖ (any known kth term). Know BOTH — the AP exam may give you a₁ instead of a₀!</W>
      <Tp>To find d: subtract ANY term from the NEXT term. d = aₙ₊₁ − aₙ. If d is positive, the sequence increases. If d is negative, it decreases.</Tp>
    </div>},
    { title:"Concept — Geometric Sequences", content:<div>
      <Fm label="Definition">A geometric sequence is a list of numbers where you MULTIPLY by the same value each time</Fm>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Key Properties of Geometric Sequences</Tt><Sm>
        • The graph consists of <B c="#be185d">discrete points</B> (dots, not a connected curve)<br/>
        • Successive terms have a <B c="#be185d">common ratio r</B> (divide any term by the previous to find r)<br/>
        • Successive terms have a <B c="#be185d">constant proportional change</B> (each term is r times the previous)<br/>
        • The sequence is the <B c="#be185d">discrete version of an exponential function</B>
      </Sm></Box>
      <Fm label="Formula 1 (from initial value)">gₙ = g₀ · rⁿ</Fm>
      <Fm label="Formula 2 (from any known term)">gₙ = gₖ · r⁽ⁿ⁻ᵏ⁾ where gₖ is the kth term</Fm>
      <Box bg="#fef3c7"><Tt c="#92400e">Variable Definitions</Tt><Sm>
        • <B c="#92400e">r</B> = common ratio (what you multiply each time)<br/>
        • <B c="#92400e">g₀</B> = initial value (the "zeroth" term)<br/>
        • <B c="#92400e">gₙ</B> = the value of the nth term<br/>
        • <B c="#92400e">gₖ</B> = any known term you're building from
      </Sm></Box>
      <svg width="100%" height="90" viewBox="0 0 340 90">
        <line x1="30" y1="75" x2="310" y2="75" stroke="#cbd5e1" strokeWidth="1.5"/>
        <line x1="30" y1="75" x2="30" y2="10" stroke="#cbd5e1" strokeWidth="1.5"/>
        {[{x:60,y:70},{x:110,y:65},{x:160,y:52},{x:210,y:30},{x:260,y:12}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="5" fill="#ec4899"/>)}
        <text x="170" y="88" textAnchor="middle" fontSize="10" fill="#ec4899" fontWeight="600">Points form a CURVE → geometric</text>
      </svg>
      <G l={<Box bg="#f0fdf4" s={{textAlign:"center"}}><Tt c="#166534">r {">"} 1</Tt><Sm>Terms get <B c="#166534">bigger</B><br/>Exponential growth</Sm></Box>}
        r={<Box bg="#fef2f2" s={{textAlign:"center"}}><Tt c="#991b1b">0 {"<"} r {"<"} 1</Tt><Sm>Terms get <B c="#991b1b">smaller</B><br/>Exponential decay</Sm></Box>}/>
      <W>To find r: DIVIDE any term by the PREVIOUS term. r = gₙ₊₁ / gₙ. A negative r makes terms alternate between positive and negative!</W>
      <Tp>How to tell arithmetic vs geometric from a graph: arithmetic points fall on a straight LINE, geometric points fall on a CURVE.</Tp>
    </div>},
    { title:"Example — Arithmetic: Common Difference & nth Term", content:<div>
      <Q>Given the arithmetic sequence 3, 9, 15, 21, 27, ... (a₁ = 3). Find d, write aₙ, find a₁₀.</Q>
      <FmUsed>aₙ = a₁ + d(n − 1) where a₁ is the 1st term</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a) Find common difference:</b></MathLine>
        <MathLine size={14}>d = 9 − 3 = <MathBox color="#6366f1">6</MathBox><Annotate>subtract any two consecutive terms</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b) Write expression for aₙ:</b></MathLine>
        <MathLine size={14}>aₙ = 3 + 6(n − 1)<Annotate>plug in a₁ = 3, d = 6</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c) Find the 10th term:</b></MathLine>
        <MathLine size={14}>a₁₀ = 3 + 6(<MathBox color="#6366f1">10</MathBox> − 1) = 3 + 6(9) = 3 + 54</MathLine>
        <Ans>a₁₀ = 57</Ans>
      </WB>
    </div>},
    { title:"Example — Arithmetic from a₁ and d", content:<div>
      <Q>a₁ = −4, common difference d = 6. Find the 10th term.</Q>
      <FmUsed>aₙ = a₁ + d(n − 1)</FmUsed>
      <WB>
        <MathLine>aₙ = −4 + 6(n − 1)</MathLine>
        <Arrow text="Plug in n = 10"/>
        <MathLine>a₁₀ = −4 + 6(<MathBox color="#6366f1">10</MathBox> − 1) = −4 + 6(9) = −4 + 54</MathLine>
        <Ans>a₁₀ = 50</Ans>
      </WB>
    </div>},
    { title:"Example — Geometric: Common Ratio & nth Term", content:<div>
      <Q>Given the geometric sequence 2/3, 2, 6, 18, ... (g₁ = 2/3). Find r, write gₙ, find g₅.</Q>
      <FmUsed>gₙ = g₁ · r⁽ⁿ⁻¹⁾</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a) Find common ratio:</b></MathLine>
        <MathLine size={14}>r = 2 ÷ (2/3) = 2 × (3/2) = <MathBox color="#6366f1">3</MathBox><Annotate>divide any term by the previous</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b) Write expression for gₙ:</b></MathLine>
        <MathLine size={14}>gₙ = (2/3) · 3⁽ⁿ⁻¹⁾</MathLine>
        <MathLine size={14} color="#4338ca"><b>c) Find the 5th term:</b></MathLine>
        <MathLine size={14}>g₅ = (2/3) · 3⁽⁵⁻¹⁾ = (2/3) · 3⁴ = (2/3) · 81</MathLine>
        <Ans>g₅ = 54</Ans>
      </WB>
    </div>},
    { title:"Example — Geometric from g₁ and r", content:<div>
      <Q>g₁ = −4, common ratio r = −2. Find the 6th term.</Q>
      <FmUsed>gₙ = g₁ · r⁽ⁿ⁻¹⁾</FmUsed>
      <WB>
        <MathLine>gₙ = −4 · (−2)⁽ⁿ⁻¹⁾</MathLine>
        <Arrow text="Plug in n = 6"/>
        <MathLine>g₆ = −4 · (−2)⁽⁶⁻¹⁾ = −4 · (−2)⁵</MathLine>
        <MathLine indent={20}>= −4 · (−32)<Annotate>(−2)⁵ = −32</Annotate></MathLine>
        <Ans>g₆ = 128</Ans>
      </WB>
      <Wh>Negative base with odd power → negative. Then −4 × −32 = +128. Watch those signs!</Wh>
    </div>},
    { title:"Example — Identifying from Graphs", content:<div>
      <Q>Two graphs of sequences are shown. Identify which is arithmetic vs geometric and write expressions.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Graph 1 (linear pattern):</b> Arithmetic</MathLine>
        <MathLine size={14}>a₁ = −12, d = 2</MathLine>
        <MathLine size={14}>aₙ = −12 + 2(n − 1)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Graph 2 (curved/decaying):</b> Geometric</MathLine>
        <MathLine size={14}>g₁ = 5, r = 1/5</MathLine>
        <MathLine size={14}>gₙ = 5 · (1/5)⁽ⁿ⁻¹⁾</MathLine>
      </WB>
      <Tp>Arithmetic → points fall on a LINE. Geometric → points fall on a CURVE (exponential shape). This is how you tell them apart visually!</Tp>
    </div>},
  ]},
  { id:"2.2", name:"Change in Linear & Exponential Functions", slides:[
    { title:"Concept — Arithmetic↔Linear, Geometric↔Exponential", content:<div>
      <Fm label="Big Idea">Sequences are DISCRETE (dots). Functions are CONTINUOUS (curves). But they follow the same rules!</Fm>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Arithmetic Sequence → Linear Function</Tt><Sm>
        <B>Sequence:</B> aₙ = a₀ + dn<br/>
        <B>Function:</B> y = b + mx<br/>
        Both use <B>initial value + repeated addition</B> of a constant rate of change.<br/><br/>
        <B>From a known kth term:</B><br/>
        Sequence: aₙ = aₖ + d(n − k)<br/>
        Function: y = yᵢ + m(x − xᵢ)<br/><br/>
        <B c="#4338ca">d = m</B> (common difference = slope)
      </Sm></Box>}
        r={<Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Geometric Sequence → Exponential Function</Tt><Sm>
        <B>Sequence:</B> gₙ = g₀ · rⁿ<br/>
        <B>Function:</B> f(x) = abˣ<br/>
        Both use <B c="#be185d">initial value × repeated multiplication</B> by a constant proportion.<br/><br/>
        <B>From a known kth term:</B><br/>
        Sequence: gₙ = gₖ · r⁽ⁿ⁻ᵏ⁾<br/>
        Function: f(x) = yᵢ · b⁽ˣ⁻ˣⁱ⁾<br/><br/>
        <B c="#be185d">r = b</B> (common ratio = base)
      </Sm></Box>}/>
      <Wh>The KEY connection: the common difference d of an arithmetic sequence IS the slope m of the linear function. The common ratio r of a geometric sequence IS the base b of the exponential function. Same math, different packaging!</Wh>
      <W>When building from a known term (not the initial value), use the "from kth term" formula. The AP exam loves giving you the 1st term (not the 0th) and asking you to write the expression.</W>
    </div>},
    { title:"Example — Arithmetic Sequence → Linear Function", content:<div>
      <Q>Given arithmetic sequence 3, ___, ___, 15, ... AND linear function with points (1,3) and (4,15). Write expressions for both.</Q>
      <FmUsed>Arith: aₙ = aₖ + d(n−k) · Linear: y = yᵢ + m(x−xᵢ)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Arithmetic Sequence:</b></MathLine>
        <MathLine size={14}>a₁ = 3, a₄ = 15</MathLine>
        <MathLine size={14}>15 = 3 + d(4−1) → 15 = 3 + 3d → d = <MathBox color="#6366f1">4</MathBox></MathLine>
        <MathLine size={14}>aₙ = 3 + 4(n − 1)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Linear Function:</b></MathLine>
        <MathLine size={14}>m = d = <MathBox color="#6366f1">4</MathBox><Annotate>same as common difference!</Annotate></MathLine>
        <Ans>y = 3 + 4(x − 1)</Ans>
      </WB>
      <Wh>The common difference d of an arithmetic sequence IS the slope m of the corresponding linear function. They're the same thing!</Wh>
    </div>},
    { title:"Example — Geometric Sequence → Exponential Function", content:<div>
      <Q>Given geometric sequence 3, ___, ___, 24, ... AND exponential function with points (1,3) and (4,24). Write expressions for both.</Q>
      <FmUsed>Geom: gₙ = gₖ · r⁽ⁿ⁻ᵏ⁾ · Exp: f(x) = yᵢ · b⁽ˣ⁻ˣⁱ⁾</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Geometric Sequence:</b></MathLine>
        <MathLine size={14}>g₁ = 3, g₄ = 24</MathLine>
        <MathLine size={14}>24 = 3 · r⁽⁴⁻¹⁾ → 8 = r³ → r = <MathBox color="#6366f1">2</MathBox></MathLine>
        <MathLine size={14}>gₙ = 3 · 2⁽ⁿ⁻¹⁾</MathLine>
        <MathLine size={14} color="#4338ca"><b>Exponential Function:</b></MathLine>
        <MathLine size={14}>b = r = <MathBox color="#6366f1">2</MathBox><Annotate>same as common ratio!</Annotate></MathLine>
        <Ans>y = 3 · 2⁽ˣ⁻¹⁾</Ans>
      </WB>
      <Wh>The common ratio r of a geometric sequence IS the base b of the corresponding exponential function.</Wh>
    </div>},
  ]},
  { id:"2.3", name:"Exponential Functions", slides:[
    { title:"Concept — Exponential Form, Growth & Decay", content:<div>
      <Fm label="General Form">f(x) = a·bˣ where a ≠ 0, b {">"} 0, b ≠ 1</Fm>
      <Box bg="#eef2ff"><Tt c="#4338ca">What Each Part Means</Tt><Sm>
        • <B>a</B> = the <B>initial value</B> (the y-intercept, because when x=0, f(0) = a·b⁰ = a·1 = a)<br/>
        • <B>b</B> = the <B>base</B> (the growth/decay factor — what you multiply by each time x increases by 1)<br/>
        • <B>x</B> = the exponent (the input variable)
      </Sm></Box>
      <G l={<Box bg="#f0fdf4" border="2px solid #86efac" s={{textAlign:"center"}}>
        <Tt c="#166534">📈 Exponential GROWTH</Tt>
        <Sm>a {">"} 0 and <B c="#166534">b {">"} 1</B></Sm>
        <svg width="120" height="60" viewBox="0 0 120 60"><path d="M 5 55 Q 40 52, 60 40 Q 80 28, 100 5" stroke="#22c55e" strokeWidth="2.5" fill="none"/><line x1="5" y1="55" x2="115" y2="55" stroke="#ddd" strokeWidth="1"/></svg>
        <Sm>Always <B c="#166534">increasing</B><br/>Always <B c="#166534">concave up</B><br/>Domain: all reals<br/>Range: (0, ∞)<br/>HA: y = 0 (on the LEFT)</Sm>
      </Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5" s={{textAlign:"center"}}>
        <Tt c="#991b1b">📉 Exponential DECAY</Tt>
        <Sm>a {">"} 0 and <B c="#991b1b">0 {"<"} b {"<"} 1</B></Sm>
        <svg width="120" height="60" viewBox="0 0 120 60"><path d="M 5 5 Q 30 28, 50 40 Q 80 52, 115 55" stroke="#ef4444" strokeWidth="2.5" fill="none"/><line x1="5" y1="55" x2="115" y2="55" stroke="#ddd" strokeWidth="1"/></svg>
        <Sm>Always <B c="#991b1b">decreasing</B><br/>Always <B c="#991b1b">concave up</B><br/>Domain: all reals<br/>Range: (0, ∞)<br/>HA: y = 0 (on the RIGHT)</Sm>
      </Box>}/>
      <W>BOTH growth and decay are CONCAVE UP when a {">"} 0! Don't confuse "decreasing" with "concave down." A decay curve goes DOWN but still BENDS UPWARD.</W>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Key Points to Plot (for any f(x) = a·bˣ)</Tt><Sm>
        • <B c="#7c3aed">f(0) = a</B> → the y-intercept is always the value of a<br/>
        • <B c="#7c3aed">f(1) = a·b</B> → one step to the right, multiply by b<br/>
        • <B c="#7c3aed">f(−1) = a/b</B> → one step to the left, divide by b<br/>
        • The graph <B>never touches y = 0</B> (horizontal asymptote)
      </Sm></Box>
    </div>},
    { title:"Concept — Proportional Outputs & Additive Transformation", content:<div>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">THE Key Property of Exponential Functions</Tt><Sm>
        For <B>equal-length input intervals</B>, the output values of an exponential function are <B>proportional</B>.<br/><br/>
        This means: if you divide ANY output by the previous output (same spacing), you always get the <B>same ratio</B>.<br/><br/>
        Example: if f(0)=2, f(1)=6, f(2)=18, f(3)=54 → ratios: 6/2=<B>3</B>, 18/6=<B>3</B>, 54/18=<B>3</B> → exponential!
      </Sm></Box>
      <Tb h={["Test","What to Check","If Constant..."]} r={[["Linear","1st differences (subtract)","→ Linear"],["Quadratic","2nd differences","→ Quadratic"],["Exponential","Ratios (divide)","→ Exponential"]]}/>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Additive Transformation: g(x) = f(x) + k</Tt><Sm>
        If g(x) = f(x) + k, and the values of <B c="#92400e">f(x)</B> are proportional over equal-length input intervals, then g(x) is a <B c="#92400e">vertical translation</B> of an exponential function.<br/><br/>
        <B>How to use this:</B> If a table doesn't look exponential, try subtracting a constant from each output. If the remainders have a constant ratio, the original is an exponential shifted up/down!
      </Sm></Box>
      <Wh>This is a HUGE AP exam strategy: when a table doesn't seem to be linear, quadratic, OR exponential — try subtracting a constant from each output and check the ratios again!</Wh>
    </div>},
    { title:"Example — Evaluating & Graphing Exponential Functions", content:<div>
      <Q>For f(x) = 3·2ˣ, evaluate f(−1), f(0), f(1), f(2). Is f always increasing or decreasing? Concave up or down? State domain and range.</Q>
      <FmUsed>f(x) = a·bˣ → f(0) = a, f(1) = a·b, f(−1) = a/b</FmUsed>
      <WB>
        <MathLine size={14}>f(−1) = 3·2⁻¹ = 3·(1/2) = <MathBox color="#22c55e">3/2</MathBox></MathLine>
        <MathLine size={14}>f(0) = 3·2⁰ = 3·1 = <MathBox color="#22c55e">3</MathBox><Annotate>y-intercept is always a</Annotate></MathLine>
        <MathLine size={14}>f(1) = 3·2¹ = <MathBox color="#22c55e">6</MathBox></MathLine>
        <MathLine size={14}>f(2) = 3·2² = <MathBox color="#22c55e">12</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Properties:</b></MathLine>
        <MathLine size={14}>a = 3 {">"} 0, b = 2 {">"} 1 → exponential GROWTH</MathLine>
        <MathLine size={14}>Always <MathBox color="#22c55e">increasing</MathBox> · Always <MathBox color="#22c55e">concave up</MathBox></MathLine>
        <Ans>Domain: all reals · Range: (0, ∞) · HA: y = 0</Ans>
      </WB>
    </div>},
    { title:"Example — Showing Outputs are Proportional", content:<div>
      <Q>Show that the output values of f and g are proportional over equal-length input intervals.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(x): ratio = 5 each time</b></MathLine>
        <Tb h={["x","f(x)","Proportion"]} r={[["−2","2/25","×5"],["−1","2/5","×5"],["0","2","×5"],["1","10","×5"],["2","50",""]]}/>
        <MathLine size={14} color="#4338ca"><b>g(x): ratio = 1/3 each time</b></MathLine>
        <Tb h={["x","g(x)","Proportion"]} r={[["−2","27","×1/3"],["−1","9","×1/3"],["0","3","×1/3"],["1","1","×1/3"],["2","1/3",""]]}/>
      </WB>
      <Wh>For f: each output is 5× the previous → exponential with base 5. For g: each output is 1/3 of the previous → exponential with base 1/3 (decay).</Wh>
    </div>},
    { title:"Example — Additive Transformation", content:<div>
      <Q>h(x) = f(x) + 5. Complete the table for f(x). Explain how you know f is exponential.</Q>
      <Tb h={["x","f(x)","h(x)"]} r={[["−2","2","7"],["−1","4","9"],["0","8","13"],["1","16","21"],["2","32","37"]]}/>
      <WB>
        <MathLine size={14}>f(x) = h(x) − 5 for each row<Annotate>subtract 5 from h to get f</Annotate></MathLine>
        <MathLine size={14}>Check proportions: 4/2 = <MathBox color="#22c55e">2</MathBox>, 8/4 = <MathBox color="#22c55e">2</MathBox>, 16/8 = <MathBox color="#22c55e">2</MathBox>, 32/16 = <MathBox color="#22c55e">2</MathBox></MathLine>
        <Ans>f(x) outputs are proportional (ratio = 2) → f is exponential</Ans>
      </WB>
      <Tp>Even though h(x) values (7,9,13,21,37) don't look proportional, subtracting the constant reveals the exponential underneath!</Tp>
    </div>},
    { title:"Concept — End Behavior of Exponential Functions", content:<div>
      <Fm label="End Behavior of f(x) = abˣ">Depends on the sign of a AND whether b {">"} 1 or 0 {"<"} b {"<"} 1</Fm>
      <Tb h={["Function","a","b","lim x→−∞","lim x→+∞","Description"]} r={[
        ["a·bˣ","+","b>1","0","∞","Growth, above x-axis"],
        ["a·bˣ","−","b>1","0","−∞","Growth, below x-axis"],
        ["a·bˣ","+","0<b<1","∞","0","Decay, above x-axis"],
        ["a·bˣ","−","0<b<1","−∞","0","Decay, below x-axis"],
      ]}/>
      <Wh>The HA y=0 is always on the side where the base "shrinks." Growth: HA on left. Decay: HA on right. Negative a flips everything upside down.</Wh>
    </div>},
    { title:"Example — End Behavior of Exponential Functions", content:<div>
      <Q>For each exponential function, identify growth/decay, then write the end behavior using limit notation.</Q>
      <FmUsed>f(x) = a·bˣ → check sign of a and whether b {">"} 1 or 0 {"<"} b {"<"} 1</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(x) = 4·2ˣ</b> (a{">"}0, b{">"}1 → growth)</MathLine>
        <MathLine size={14}>lim(x→−∞) 4·2ˣ = <MathBox color="#3b82f6">0</MathBox> · lim(x→+∞) 4·2ˣ = <MathBox color="#3b82f6">∞</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(x) = −2·3ˣ</b> (a{"<"}0, b{">"}1 → reflected growth)</MathLine>
        <MathLine size={14}>lim(x→−∞) = <MathBox color="#ef4444">0</MathBox> · lim(x→+∞) = <MathBox color="#ef4444">−∞</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>h(x) = 4·(1/2)ˣ</b> (a{">"}0, 0{"<"}b{"<"}1 → decay)</MathLine>
        <MathLine size={14}>lim(x→−∞) = <MathBox color="#22c55e">∞</MathBox> · lim(x→+∞) = <MathBox color="#22c55e">0</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>k(x) = −2·(1/3)ˣ</b> (a{"<"}0, 0{"<"}b{"<"}1 → reflected decay)</MathLine>
        <MathLine size={14}>lim(x→−∞) = <MathBox color="#f59e0b">−∞</MathBox> · lim(x→+∞) = <MathBox color="#f59e0b">0</MathBox></MathLine>
      </WB>
    </div>},
  ]},
  { id:"2.4", name:"Exponential Function Manipulation", slides:[
    { title:"Concept — Product, Power, & Negative Exponent Properties", content:<div>
      <Fm label="Product Property">bᵐ · bⁿ = b⁽ᵐ⁺ⁿ⁾ — same base? ADD exponents</Fm>
      <Fm label="Power Property">(bᵐ)ⁿ = b⁽ᵐ·ⁿ⁾ — power of a power? MULTIPLY exponents</Fm>
      <Fm label="Negative Exponent">b⁻ⁿ = 1/bⁿ — negative exponent? FLIP to denominator</Fm>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">Exponential Unit Fraction (Roots)</Tt><Sm>
        b^(1/k) = ᵏ√b where k is a natural number<br/>
        • 8^(1/3) = ³√8 = <B c="#166534">2</B> because 2³ = 8<br/>
        • 81^(1/4) = ⁴√81 = <B c="#166534">3</B> because 3⁴ = 81<br/>
        • 32^(1/5) = ⁵√32 = <B c="#166534">2</B> because 2⁵ = 32
      </Sm></Box>
      <W>You can ONLY use the product property when the bases are the SAME! 2³ · 3⁴ cannot be combined. But 2³ · 2⁴ = 2⁷.</W>
      <Tp>Know your powers! 2⁴=16, 2⁵=32, 3³=27, 3⁴=81, 5³=125. The AP exam expects you to recognize these instantly.</Tp>
    </div>},
    { title:"Concept — Horizontal Translation = Vertical Dilation", content:<div>
      <Fm label="Big Idea">For exponential functions, every horizontal shift is equivalent to a vertical stretch/compression</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Why This Works (Product Property)</Tt><Sm>
        <B>Shifting left c units:</B> f(x) = b⁽ˣ⁺ᶜ⁾ = bˣ · bᶜ = <B c="#4338ca">(bᶜ) · bˣ</B><br/>
        This is a vertical dilation by factor bᶜ!<br/><br/>
        <B>Example:</B> 2⁽ˣ⁺²⁾ = 2ˣ · 2² = 4 · 2ˣ<br/>
        Shifting left 2 = multiplying output by 4
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Horizontal Dilation = Change of Base</Tt><Sm>
        <B>Compressing horizontally by 1/n:</B> f(x) = b⁽ⁿˣ⁾ = (bⁿ)ˣ = <B c="#be185d">new_base ˣ</B><br/><br/>
        <B>Example:</B> 2²ˣ = (2²)ˣ = 4ˣ<br/>
        Compressing by ½ horizontally changed base from 2 to 4
      </Sm></Box>
      <Wh>This is why exponentials are special: translations and dilations are interchangeable! The AP exam LOVES asking you to show two expressions are equivalent.</Wh>
    </div>},
    { title:"Example — Product Property", content:<div>
      <Q>Rewrite each expression with a single base of 2 using bᵐ · bⁿ = b⁽ᵐ⁺ⁿ⁾.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> 2³ · 2⁵ = 2⁽³⁺⁵⁾ = <MathBox color="#22c55e">2⁸</MathBox><Annotate>add exponents</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> 2ˣ · 2⁵ = <MathBox color="#22c55e">2⁽ˣ⁺⁵⁾</MathBox><Annotate>works with variables too!</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c)</b> 16 · 2⁶ = 2⁴ · 2⁶ = <MathBox color="#22c55e">2¹⁰</MathBox><Annotate>16 = 2⁴, then add: 4+6=10</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>d)</b> 4 · 2ˣ = 2² · 2ˣ = <MathBox color="#22c55e">2⁽²⁺ˣ⁾</MathBox><Annotate>4 = 2², then add exponents</Annotate></MathLine>
      </WB>
      <W>Convert constants to matching bases first! 16=2⁴, 4=2², 8=2³, 32=2⁵. Then use the product property.</W>
    </div>},
    { title:"Example — Power Property & Change of Base", content:<div>
      <Q>Rewrite using power property (bᵐ)ⁿ = b⁽ᵐⁿ⁾ to change the base.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> (5³)⁶ = <MathBox color="#22c55e">5¹⁸</MathBox><Annotate>3 × 6 = 18</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> (2ˣ)⁵ = <MathBox color="#22c55e">2⁵ˣ</MathBox><Annotate>x × 5 = 5x</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c) Change base:</b> (3ˣ)⁵ = 3⁵ˣ = <MathBox color="#22c55e">243ˣ</MathBox><Annotate>3⁵ = 243</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>d) Change base:</b> (2ˣ)⁵ = 2⁵ˣ = <MathBox color="#22c55e">32ˣ</MathBox><Annotate>2⁵ = 32</Annotate></MathLine>
      </WB>
      <Tp>Horizontal dilation = change of base! g(x) = 2²ˣ = (2²)ˣ = 4ˣ. Compressing by ½ horizontally changed base 2 to base 4.</Tp>
    </div>},
    { title:"Example — Negative Exponents & Unit Fractions", content:<div>
      <Q>Rewrite using negative exponent property and unit fractions.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Negative Exponents:</b></MathLine>
        <MathLine size={14}>2⁻³ = 1/2³ = <MathBox color="#22c55e">1/8</MathBox></MathLine>
        <MathLine size={14}>3⁻⁴ = 1/3⁴ = <MathBox color="#22c55e">1/81</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Unit Fractions (fractional exponents = roots):</b></MathLine>
        <MathLine size={14}>8^(1/3) = ³√8 = <MathBox color="#6366f1">2</MathBox><Annotate>what cubed = 8? → 2</Annotate></MathLine>
        <MathLine size={14}>81^(1/4) = ⁴√81 = <MathBox color="#6366f1">3</MathBox><Annotate>what to the 4th = 81? → 3</Annotate></MathLine>
      </WB>
    </div>},
  ]},
  { id:"2.5", name:"Exponential Function Context & Data Modeling", slides:[
    { title:"Concept — Building Exponential Models", content:<div>
      <Fm label="Without Technology">Find the ratio r from table → f(x) = a·rˣ (where a = f(0))</Fm>
      <Fm label="With Technology (Regression)">Enter data → STAT → ExpReg → y = abˣ</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Building a Model Without Technology</Tt><Sm>
        <B>Step 1:</B> Check that input intervals are equal-length<br/>
        <B>Step 2:</B> Divide consecutive outputs to find the ratio r<br/>
        <B>Step 3:</B> Use f(0) as the initial value a, OR use any known point with the "from kth term" formula<br/>
        <B>Step 4:</B> Write f(x) = a·rˣ
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Building from Two Points</Tt><Sm>
        If given f(x) = c·bˣ + d with two points:<br/>
        <B>Step 1:</B> Plug both points in to create a system of two equations<br/>
        <B>Step 2:</B> Solve for d first (often using the x=0 point)<br/>
        <B>Step 3:</B> Substitute d back to find b
      </Sm></Box>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">The Number e (Euler's Number)</Tt><Sm>
        • <B c="#166534">e ≈ 2.718</B> — an irrational number, like π<br/>
        • Used for <B c="#166534">continuous growth/decay</B> models<br/>
        • f(x) = eˣ is the "natural" exponential function<br/>
        • Key points: (0, 1) and (1, e ≈ 2.718)<br/>
        • The graph looks like any other exponential with base {">"} 1
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Changing Time Units</Tt><Sm>
        If a quantity doubles every day d, then f(d) = (2)ᵈ gives the quantity after d days.<br/>
        An equivalent form: f(d) = (2⁷)^(d/7) shows it increases by a factor of <B c="#92400e">2⁷ = 128 every week</B>.<br/><br/>
        <B c="#92400e">General rule:</B> To convert from small unit to big unit, raise the base to the conversion factor.
      </Sm></Box>
    </div>},
    { title:"Example — Model from Table (No Tech)", content:<div>
      <Q>The function f is decreasing. Write an exponential function to model the data in the table.</Q>
      <FmUsed>f(x) = a · bˣ where a = f(0) and b = common ratio (divide any output by the previous)</FmUsed>
      <Tb h={["x","0","1","2","3"]} r={[["f(x)","25","15","9","27/5"]]}/>
      <WB>
        <Arrow text="Step 1: Check that the data is exponential by finding ratios"/>
        <MathLine size={14}>15/25 = <MathBox color="#6366f1">3/5</MathBox><Annotate>from x=0 to x=1</Annotate></MathLine>
        <MathLine size={14}>9/15 = <MathBox color="#6366f1">3/5</MathBox><Annotate>from x=1 to x=2</Annotate></MathLine>
        <MathLine size={14}>(27/5)/9 = 27/45 = <MathBox color="#6366f1">3/5</MathBox><Annotate>from x=2 to x=3</Annotate></MathLine>
        <MathLine size={14}>All ratios are equal → confirmed exponential<Annotate color="#22c55e">constant ratio ✓</Annotate></MathLine>
        <Arrow text="Step 2: Identify a (initial value) and b (base)"/>
        <MathLine size={14}>a = f(0) = <MathBox color="#22c55e">25</MathBox><Annotate>the output when x = 0</Annotate></MathLine>
        <MathLine size={14}>b = common ratio = <MathBox color="#22c55e">3/5</MathBox><Annotate>0 {"<"} 3/5 {"<"} 1 → decay ✓</Annotate></MathLine>
        <Arrow text="Step 3: Write the model"/>
        <Ans>f(x) = 25 · (3/5)ˣ</Ans>
      </WB>
      <Tp>Always verify with at least 2-3 ratios to confirm the data is exponential. If the ratios aren't constant, it might be a different function type!</Tp>
    </div>},
    { title:"Example — Model from Two Points", content:<div>
      <Q>The function g(x) = 5·bˣ + d contains the points (0, 7) and (3, 137). Find b and d, then write the complete model.</Q>
      <FmUsed>Plug each point into g(x) = 5bˣ + d to create a system of two equations with two unknowns.</FmUsed>
      <WB>
        <Arrow text="Step 1: Plug in the point (0, 7)"/>
        <MathLine size={14}>7 = 5 · b⁰ + d<Annotate>substitute x=0, g=7</Annotate></MathLine>
        <MathLine size={14}>7 = 5 · 1 + d<Annotate>anything to the 0 power = 1</Annotate></MathLine>
        <MathLine size={14}>7 = 5 + d → <MathBox color="#6366f1">d = 2</MathBox></MathLine>
        <Arrow text="Step 2: Plug in the point (3, 137) using d = 2"/>
        <MathLine size={14}>137 = 5 · b³ + 2</MathLine>
        <MathLine size={14}>135 = 5b³<Annotate>subtract 2 from both sides</Annotate></MathLine>
        <MathLine size={14}>b³ = 27<Annotate>divide both sides by 5</Annotate></MathLine>
        <MathLine size={14}>b = ³√27 = <MathBox color="#6366f1">3</MathBox></MathLine>
        <Arrow text="Step 3: Write the complete model"/>
        <Ans>g(x) = 5 · 3ˣ + 2</Ans>
      </WB>
      <Tp>Always use x = 0 first if you have it — b⁰ = 1 simplifies the equation and lets you find d immediately. Then use the second point to find b.</Tp>
    </div>},
    { title:"Example — Bacteria Doubling (Days & Weeks)", content:<div>
      <Q>920 bacteria double every day. a) Write b(t) in days. b) Find b(5). c) When does b reach 10,000? d) Rewrite for weeks.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> b(t) = 920 · 2ᵗ</MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> b(5) = 920 · 2⁵ = 920 · 32 = <MathBox>29,440</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>c)</b> 10000 = 920 · 2ᵗ → t = <MathBox>3.442 days</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>d)</b> b(t) = 920 · (2⁷)ᵗ = <MathBox color="#22c55e">920 · 128ᵗ</MathBox><Annotate>t now in weeks</Annotate></MathLine>
      </WB>
      <Wh>To change time units: raise the base to the conversion factor. Doubling daily → multiply by 2⁷ = 128 weekly.</Wh>
    </div>},
    { title:"Example — Continuous Growth with e", content:<div>
      <Q>A weed is 6 inches tall and grows according to the model w(t) = 6·e^(t/4), where t is in weeks. Find the height at 1 week and 4 weeks.</Q>
      <FmUsed>w(t) = a·e^(kt) where e ≈ 2.718 — evaluate by substituting t, then compute e^(power) on calculator</FmUsed>
      <WB>
        <Arrow text="Step 1: Find height at t = 1 week"/>
        <MathLine size={14}>w(1) = 6 · e^(1/4) = 6 · e^(0.25)</MathLine>
        <MathLine size={14}>e^(0.25) ≈ 1.284<Annotate>use calculator: eˣ button with x = 0.25</Annotate></MathLine>
        <MathLine size={14}>w(1) = 6 · 1.284 = <MathBox color="#22c55e">7.704 inches</MathBox></MathLine>
        <Arrow text="Step 2: Find height at t = 4 weeks"/>
        <MathLine size={14}>w(4) = 6 · e^(4/4) = 6 · e^(1) = 6 · e</MathLine>
        <MathLine size={14}>e ≈ 2.718<Annotate>e¹ is just e itself</Annotate></MathLine>
        <MathLine size={14}>w(4) = 6 · 2.718 = <MathBox color="#22c55e">16.310 inches</MathBox></MathLine>
        <Arrow text="Interpret the results"/>
        <MathLine size={14}>After 1 week: grew ~1.7 inches · After 4 weeks: grew ~10.3 inches<Annotate>growth accelerates!</Annotate></MathLine>
      </WB>
      <Wh>The base e appears in "continuous growth" models — where something grows every instant, not just at fixed intervals. The exponent t/4 means the growth rate is tied to a 4-week cycle.</Wh>
    </div>},
  ]},
  { id:"2.6", name:"Competing Function Model Validation", slides:[
    { title:"Concept — Identifying Model Type from Data", content:<div>
      <Fm label="Big Idea">Given data, determine whether it's LINEAR, QUADRATIC, or EXPONENTIAL</Fm>
      <Tb h={["Model Type","What to Test","How to Test","If Constant →"]} r={[
        ["Linear","1st differences","Subtract consecutive outputs","Linear (degree 1)"],
        ["Quadratic","2nd differences","Find differences of the 1st differences","Quadratic (degree 2)"],
        ["Exponential","Output ratios","Divide consecutive outputs","Exponential"],
      ]}/>
      <W>You MUST have equal-length input intervals for these tests to work! If x goes 0,1,2,3 that's fine. If x goes 0,2,5,7 — the tests won't give reliable results.</W>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Residual Plots — Checking Model Fit</Tt><Sm>
        <B>Residual</B> = actual value − predicted value (how far off the model is)<br/><br/>
        <B c="#22c55e">Good model:</B> residual plot shows <B>random scatter</B> (no pattern) → model fits!<br/>
        <B c="#ef4444">Bad model:</B> residual plot shows a <B>clear pattern</B> (U-shape, wave, etc.) → wrong model type!<br/><br/>
        If you see a U-shape in residuals from a linear regression → try quadratic instead.
      </Sm></Box>
    </div>},
    { title:"Example — Classify Three Functions", content:<div>
      <Q>Determine which function is linear, quadratic, and exponential.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(x): Check differences</b></MathLine>
        <Tb h={["x","−1","0","1","2"]} r={[["f(x)","−2","0","−2","−8"]]}/>
        <MathLine size={14}>1st diff: 2, −2, −6<Annotate>not constant</Annotate></MathLine>
        <MathLine size={14}>2nd diff: −4, −4<Annotate color="#22c55e">CONSTANT → Quadratic</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(x): Check proportions</b></MathLine>
        <Tb h={["x","−1","0","1","2"]} r={[["g(x)","2","4","8","16"]]}/>
        <MathLine size={14}>Ratios: 4/2=2, 8/4=2, 16/8=2<Annotate color="#22c55e">CONSTANT → Exponential</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>h(x): Check differences</b></MathLine>
        <Tb h={["x","−1","0","1","2"]} r={[["h(x)","−2","0","2","4"]]}/>
        <MathLine size={14}>1st diff: 2, 2, 2<Annotate color="#22c55e">CONSTANT → Linear</Annotate></MathLine>
      </WB>
    </div>},
    { title:"Example — Residual Plot Analysis", content:<div>
      <Q>Determine whether each residual plot shows a pattern. Is the model appropriate?</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Plot 1:</b> Points scattered randomly around y=0</MathLine>
        <Ans>No pattern → regression model IS appropriate ✓</Ans>
        <MathLine size={14} color="#4338ca"><b>Plot 2:</b> Points form a curved pattern (U-shape)</MathLine>
        <Ans>Pattern exists → regression model is NOT appropriate ✗</Ans>
      </WB>
      <Wh>A good residual plot looks like random noise. If you can see any shape (curve, wave, trend), the model doesn't fit the data well.</Wh>
    </div>},
  ]},
  { id:"2.7", name:"Composition of Functions", slides:[
    { title:"Concept — What is Composition?", content:<div>
      <Fm label="Notation">f(g(x)) or (f∘g)(x) — read as "f of g of x"</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">How Composition Works</Tt><Sm>
        The output of the <B>inner function</B> (g) becomes the input of the <B>outer function</B> (f).<br/><br/>
        Think of it as a <B>two-step machine</B>:<br/>
        x goes into g → g(x) comes out → g(x) goes into f → f(g(x)) comes out<br/><br/>
        <B>Always work INSIDE OUT!</B> Evaluate the inner function first, then plug that result into the outer function.
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Domain Restrictions</Tt><Sm>
        For h(x) = f(g(x)) to be defined, TWO things must be true:<br/>
        1. x must be in the <B c="#92400e">domain of g</B> (so g(x) can be computed)<br/>
        2. g(x) must be in the <B c="#92400e">domain of f</B> (so f can accept the output of g)
      </Sm></Box>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Decomposition (Reverse of Composition)</Tt><Sm>
        Given h(x), find f and g such that h(x) = f(g(x)).<br/>
        <B>The "inside" part</B> = g(x)<br/>
        <B>What you do to the inside</B> = f(x)<br/>
        Example: h(x) = √(3x+1) → g(x) = 3x+1 (inside), f(x) = √x (what you do)
      </Sm></Box>
      <W>f(g(x)) ≠ g(f(x)) in general! The order MATTERS. Always check which function is inside and which is outside.</W>
      <Tp>On the AP exam, compositions can come from tables, graphs, equations, or combinations. Practice all four representations!</Tp>
    </div>},
    { title:"Example — Analytical Composition", content:<div>
      <Q>Given f(x) = √x and g(x) = 1/(x−4). Find f(g(x)), f(g(6)), g(f(x)), g(f(9)). State domains.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(g(x)):</b> replace x in f with g(x)</MathLine>
        <MathLine size={14}>f(g(x)) = f(1/(x−4)) = <MathBox color="#22c55e">√(1/(x−4))</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>f(g(6)):</b></MathLine>
        <MathLine size={14}>g(6) = 1/(6−4) = 1/2, then f(1/2) = √(1/2) = <MathBox>1/√2</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(f(x)):</b> replace x in g with f(x)</MathLine>
        <MathLine size={14}>g(f(x)) = g(√x) = <MathBox color="#22c55e">1/(√x − 4)</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(f(9)):</b></MathLine>
        <MathLine size={14}>f(9) = √9 = 3, then g(3) = 1/(3−4) = <MathBox>−1</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Domains:</b></MathLine>
        <MathLine size={14}>h(x) = f(g(x)): x ≠ 4<Annotate>g undefined at x=4</Annotate></MathLine>
        <MathLine size={14}>j(x) = g(f(x)): x ≥ 0 and x ≠ 16<Annotate>need √x defined AND √x ≠ 4</Annotate></MathLine>
      </WB>
      <W>f(g(x)) ≠ g(f(x)) in general! Order matters!</W>
    </div>},
    { title:"Example — Decomposition", content:<div>
      <Q>If h(x) = f(g(x)), decompose h(x) = ³√(2x−5) into f and g.</Q>
      <WB>
        <MathLine size={14}>h(x) = ³√(2x − 5)</MathLine>
        <Arrow text="The 'inside' function is what's under the cube root"/>
        <MathLine size={14}>g(x) = <MathBox color="#6366f1">2x − 5</MathBox><Annotate>the inside part</Annotate></MathLine>
        <MathLine size={14}>f(x) = <MathBox color="#ec4899">³√x</MathBox><Annotate color="#ec4899">what you do to the inside</Annotate></MathLine>
        <MathLine size={14}>Check: f(g(x)) = ³√(2x−5) ✓</MathLine>
      </WB>
    </div>},
    { title:"Example — Composition from Tables", content:<div>
      <Q>Using the tables, find f(g(3)) and g(f(1)).</Q>
      <G l={<Tb h={["x","f(x)"]} r={[["−1","−4"],["0","1"],["1","3"],["2","5"]]}/>}
        r={<Tb h={["x","g(x)"]} r={[["−2","0"],["1","1"],["3","2"],["6","4"]]}/>}/>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(g(3)):</b></MathLine>
        <MathLine size={14}>Step 1: g(3) = <MathBox color="#6366f1">2</MathBox><Annotate>from g table</Annotate></MathLine>
        <MathLine size={14}>Step 2: f(2) = <MathBox color="#22c55e">5</MathBox><Annotate>from f table</Annotate></MathLine>
        <Ans>f(g(3)) = 5</Ans>
        <MathLine size={14} color="#4338ca"><b>g(f(1)):</b></MathLine>
        <MathLine size={14}>Step 1: f(1) = <MathBox color="#6366f1">3</MathBox><Annotate>from f table</Annotate></MathLine>
        <MathLine size={14}>Step 2: g(3) = <MathBox color="#22c55e">2</MathBox><Annotate>from g table</Annotate></MathLine>
        <Ans>g(f(1)) = 2</Ans>
      </WB>
      <Tp>Always work INSIDE OUT. Find the inner function value first, then use that as input for the outer function.</Tp>
    </div>},
    { title:"Example — Mixed Representations (Graph + Equation)", content:<div>
      <Q>f is piecewise-linear on [−5,4] with points (−5,2),(−3,4),(3,2),(4,4). g(x)=x+1. Find f(g(2)) and g(f(−3)).</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(g(2)):</b></MathLine>
        <MathLine size={14}>g(2) = 2+1 = <MathBox color="#6366f1">3</MathBox></MathLine>
        <MathLine size={14}>f(3) = <MathBox color="#22c55e">2</MathBox><Annotate>read from graph at x=3</Annotate></MathLine>
        <Ans>f(g(2)) = 2</Ans>
        <MathLine size={14} color="#4338ca"><b>g(f(−3)):</b></MathLine>
        <MathLine size={14}>f(−3) = <MathBox color="#6366f1">4</MathBox><Annotate>read from graph at x=−3</Annotate></MathLine>
        <MathLine size={14}>g(4) = 4+1 = <MathBox color="#22c55e">5</MathBox></MathLine>
        <Ans>g(f(−3)) = 5</Ans>
      </WB>
    </div>},
  ]},
  { id:"2.8", name:"Inverse Functions", slides:[
    { title:"Concept — Inverse Functions", content:<div>
      <Fm label="Definition">An inverse function REVERSES the mapping: if f(a) = b, then f⁻¹(b) = a</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">When Does a Function Have an Inverse?</Tt><Sm>
        A function is <B>invertible</B> (has an inverse) if and only if it is <B>one-to-one</B>:<br/>
        each output value comes from exactly ONE input value.<br/><br/>
        <B>Horizontal Line Test:</B> if any horizontal line crosses the graph more than once, the function is NOT one-to-one and does NOT have an inverse (unless you restrict the domain).
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Notation & Properties</Tt><Sm>
        • <B c="#be185d">Notation:</B> f⁻¹(x) means "the inverse of f" (NOT 1/f(x)!)<br/>
        • <B c="#be185d">Composition check:</B> f(f⁻¹(x)) = x AND f⁻¹(f(x)) = x<br/>
        • <B c="#be185d">Domain/Range swap:</B> Domain of f = Range of f⁻¹ and vice versa<br/>
        • <B c="#be185d">Graphically:</B> f and f⁻¹ are reflections over the line y = x
      </Sm></Box>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">How to Find f⁻¹(x) Algebraically</Tt><Sm>
        <B c="#166534">Step 1:</B> Write y = f(x)<br/>
        <B c="#166534">Step 2:</B> Swap x and y (replace every x with y and every y with x)<br/>
        <B c="#166534">Step 3:</B> Solve for y<br/>
        <B c="#166534">Step 4:</B> Write f⁻¹(x) = your answer
      </Sm></Box>
      <svg width="100%" height="100" viewBox="0 0 300 100">
        <line x1="10" y1="90" x2="290" y2="90" stroke="#ddd" strokeWidth="1"/>
        <line x1="10" y1="90" x2="10" y2="5" stroke="#ddd" strokeWidth="1"/>
        <line x1="10" y1="90" x2="100" y2="0" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,3"/>
        <path d="M 20 85 Q 80 80, 140 50 Q 200 20, 280 10" stroke="#6366f1" strokeWidth="2.5" fill="none"/>
        <path d="M 85 80 Q 80 50, 50 40 Q 20 30, 10 15" stroke="#ec4899" strokeWidth="2.5" fill="none" strokeDasharray="6,3"/>
        <text x="260" y="25" fontSize="10" fill="#6366f1" fontWeight="600">f(x)</text>
        <text x="15" y="12" fontSize="10" fill="#ec4899" fontWeight="600">f⁻¹(x)</text>
        <text x="85" y="8" fontSize="9" fill="#94a3b8">y = x</text>
      </svg>
      <W>f⁻¹(x) does NOT mean 1/f(x)! The superscript −1 means "inverse function," not "reciprocal." This is the #1 notation mistake on the AP exam.</W>
      <Tp>For the inverse table: just swap the x and f(x) rows. Every point (a, b) on f becomes (b, a) on f⁻¹.</Tp>
    </div>},
    { title:"Example — Finding Inverse Algebraically", content:<div>
      <Q>Find the inverse of f(x) = 2x² + 1 for x ≥ 0.</Q>
      <FmUsed>Swap x and y, then solve for y</FmUsed>
      <WB>
        <MathLine size={14}>y = 2x² + 1</MathLine>
        <Arrow text="Swap x and y"/>
        <MathLine size={14}>x = 2y² + 1</MathLine>
        <Arrow text="Solve for y"/>
        <MathLine size={14}>x − 1 = 2y²</MathLine>
        <MathLine size={14}>(x−1)/2 = y²</MathLine>
        <MathLine size={14}>y = √((x−1)/2)<Annotate>positive root since original domain x ≥ 0</Annotate></MathLine>
        <Ans>f⁻¹(x) = √((x−1)/2) for x ≥ 1</Ans>
      </WB>
    </div>},
    { title:"Example — Finding Inverse of Rational Function", content:<div>
      <Q>Find the inverse of g(x) = 2x/(x+1), x ≠ −1.</Q>
      <WB>
        <MathLine size={14}>y = 2x/(x+1)</MathLine>
        <Arrow text="Swap x and y"/>
        <MathLine size={14}>x = 2y/(y+1)</MathLine>
        <Arrow text="Multiply both sides by (y+1)"/>
        <MathLine size={14}>x(y+1) = 2y → xy + x = 2y</MathLine>
        <Arrow text="Collect y terms on one side"/>
        <MathLine size={14}>xy − 2y = −x → y(x−2) = −x</MathLine>
        <MathLine size={14}>y = −x/(x−2) = <MathBox color="#22c55e">x/(2−x)</MathBox></MathLine>
        <Ans>g⁻¹(x) = x/(2−x), x ≠ 2</Ans>
      </WB>
    </div>},
    { title:"Example — Verifying Inverses by Composition", content:<div>
      <Q>f(x) = (2x+1)/3 and g(x) = (3x−1)/2. Show f and g are inverses.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(g(x)):</b></MathLine>
        <MathLine size={14}>f((3x−1)/2) = (2·(3x−1)/2 + 1)/3</MathLine>
        <MathLine size={14}>= ((3x−1) + 1)/3 = 3x/3 = <MathBox color="#22c55e">x</MathBox> ✓</MathLine>
        <MathLine size={14} color="#4338ca"><b>g(f(x)):</b></MathLine>
        <MathLine size={14}>g((2x+1)/3) = (3·(2x+1)/3 − 1)/2</MathLine>
        <MathLine size={14}>= ((2x+1) − 1)/2 = 2x/2 = <MathBox color="#22c55e">x</MathBox> ✓</MathLine>
        <Ans>Both compositions = x → f and g are inverses ✓</Ans>
      </WB>
    </div>},
    { title:"Example — Inverse from Table & Graph", content:<div>
      <Q>Given the table for f(x), write a complete table of values for f⁻¹(x). Explain the relationship between f and f⁻¹.</Q>
      <FmUsed>To find f⁻¹: swap every (input, output) pair → (output, input). Point (a,b) on f becomes (b,a) on f⁻¹.</FmUsed>
      <Tb h={["x","−3","−1","0","2","4","5"]} r={[["f(x)","−11","−8","−4","0","3","4"]]}/>
      <WB>
        <Arrow text="Step 1: Swap x and f(x) — each output becomes the new input"/>
        <MathLine size={14}>f(−3) = −11 → f⁻¹(−11) = −3<Annotate>the pair (−3, −11) becomes (−11, −3)</Annotate></MathLine>
        <MathLine size={14}>f(−1) = −8 → f⁻¹(−8) = −1</MathLine>
        <MathLine size={14}>f(0) = −4 → f⁻¹(−4) = 0</MathLine>
        <MathLine size={14}>f(2) = 0 → f⁻¹(0) = 2</MathLine>
        <MathLine size={14}>f(4) = 3 → f⁻¹(3) = 4</MathLine>
        <MathLine size={14}>f(5) = 4 → f⁻¹(4) = 5</MathLine>
      </WB>
      <Tb h={["x","−11","−8","−4","0","3","4"]} r={[["f⁻¹(x)","−3","−1","0","2","4","5"]]}/>
      <Wh>Notice that the domain of f⁻¹ is the range of f, and the range of f⁻¹ is the domain of f. On a graph, every point reflects over the line y = x.</Wh>
    </div>},
  ]},
  { id:"2.9", name:"Logarithmic Expressions", slides:[
    { title:"Concept — Exponential ↔ Logarithmic Form", content:<div>
      <Fm label="The Two Forms Are Equivalent">bᵃ = c ↔ log_b(c) = a</Fm>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc" s={{textAlign:"center"}}><Tt c="#4338ca">Exponential Form</Tt><Sm><B>bᵃ = c</B><br/>"b raised to a equals c"<br/><br/>Example: 2³ = 8</Sm></Box>}
        r={<Box bg="#fce7f3" border="2px solid #f9a8d4" s={{textAlign:"center"}}><Tt c="#be185d">Logarithmic Form</Tt><Sm><B>log_b(c) = a</B><br/>"log base b of c equals a"<br/><br/>Example: log₂(8) = 3</Sm></Box>}/>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">What Does log_b(c) Actually Mean?</Tt><Sm>
        <B c="#166534">"What power do I raise b to in order to get c?"</B><br/><br/>
        log₂(8) = ? → "2 to what power = 8?" → 2³ = 8 → answer is <B>3</B><br/>
        log₃(81) = ? → "3 to what power = 81?" → 3⁴ = 81 → answer is <B>4</B><br/>
        log₅(1) = ? → "5 to what power = 1?" → 5⁰ = 1 → answer is <B>0</B><br/>
        log₁₀(0.01) = ? → "10 to what power = 0.01?" → 10⁻² = 0.01 → answer is <B>−2</B>
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Common Logarithm (base 10)</Tt><Sm>
        When no base is written, the base is <B c="#92400e">10</B>.<br/>
        <B>log(x)</B> means <B>log₁₀(x)</B><br/>
        Examples: log(100) = 2, log(1000) = 3, log(1) = 0
      </Sm></Box>
      <Tp>Two facts that are ALWAYS true: log_b(1) = 0 (because b⁰ = 1) and log_b(b) = 1 (because b¹ = b). Memorize these!</Tp>
    </div>},
    { title:"Example — Converting Between Forms", content:<div>
      <Q>Convert 3⁴ = 81 to logarithmic form, and convert log₇(49) = 2 to exponential form.</Q>
      <FmUsed>bᵃ = c ↔ log_b(c) = a — the base stays the base, the exponent becomes the answer</FmUsed>
      <WB>
        <Arrow text="Part 1: Exponential → Logarithmic (3⁴ = 81)"/>
        <MathLine size={14}>Start: <MathBox color="#6366f1">3</MathBox>⁴ = 81<Annotate>base = 3, exponent = 4, result = 81</Annotate></MathLine>
        <MathLine size={14}>The base (3) stays the base of the log</MathLine>
        <MathLine size={14}>The result (81) goes inside the log</MathLine>
        <MathLine size={14}>The exponent (4) becomes the answer</MathLine>
        <Ans>log₃(81) = 4</Ans>
        <Arrow text="Part 2: Logarithmic → Exponential (log₇(49) = 2)"/>
        <MathLine size={14}>Start: log₇(49) = 2<Annotate>base = 7, inside = 49, answer = 2</Annotate></MathLine>
        <MathLine size={14}>The base (7) stays the base</MathLine>
        <MathLine size={14}>The answer (2) becomes the exponent</MathLine>
        <MathLine size={14}>The inside (49) becomes the result</MathLine>
        <Ans>7² = 49</Ans>
      </WB>
      <Tp>Think: "log base b of c equals a" is just another way of saying "b to the a equals c." The log IS the exponent — it tells you what power to raise the base to.</Tp>
    </div>},
    { title:"Example — Evaluating Logarithms (No Calculator)", content:<div>
      <Q>Find each logarithm without technology.</Q>
      <WB>
        <MathLine size={14}>log₅(125) = ?<Annotate>Ask: 5 to what power = 125?</Annotate></MathLine>
        <MathLine size={14}>5³ = 125, so log₅(125) = <MathBox color="#22c55e">3</MathBox></MathLine>
        <MathLine size={14}>log₈(2) = ?<Annotate>Ask: 8 to what power = 2?</Annotate></MathLine>
        <MathLine size={14}>8^(1/3) = 2, so log₈(2) = <MathBox color="#22c55e">1/3</MathBox></MathLine>
        <MathLine size={14}>log(10000) = ?<Annotate>base 10: 10 to what power = 10000?</Annotate></MathLine>
        <MathLine size={14}>10⁴ = 10000, so log(10000) = <MathBox color="#22c55e">4</MathBox></MathLine>
        <MathLine size={14}>log(1/100) = ?<Annotate>1/100 = 10⁻²</Annotate></MathLine>
        <MathLine size={14}>10⁻² = 1/100, so log(1/100) = <MathBox color="#22c55e">−2</MathBox></MathLine>
      </WB>
      <Tp>For logs without a base written, the base is 10 (common log). For ln, the base is e.</Tp>
    </div>},
    { title:"Example — Evaluating Logarithms (With Calculator)", content:<div>
      <Q>Use technology to evaluate each logarithm.</Q>
      <WB>
        <MathLine size={14}>log₅(27) = <MathBox color="#22c55e">2.048</MathBox></MathLine>
        <MathLine size={14}>log₈(5) = <MathBox color="#22c55e">0.774</MathBox></MathLine>
        <MathLine size={14}>log(110) = <MathBox color="#22c55e">2.041</MathBox></MathLine>
        <MathLine size={14}>log(5.4) = <MathBox color="#22c55e">0.732</MathBox></MathLine>
      </WB>
      <Wh>On most calculators, use the logBASE( function or change of base: log_b(x) = log(x)/log(b).</Wh>
    </div>},
  ]},
  { id:"2.10", name:"Inverses of Exponential Functions", slides:[
    { title:"Concept — Logarithmic Function as Inverse of Exponential", content:<div>
      <Fm label="Logarithmic Function">f(x) = a·log_b(x), where b {">"} 0, b ≠ 1, a ≠ 0</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">The Exponential-Logarithmic Inverse Relationship</Tt><Sm>
        • f(x) = log_b(x) and g(x) = bˣ are <B>inverse functions</B> of each other<br/>
        • log_b(bˣ) = x and b^(log_b(x)) = x (they "undo" each other)<br/>
        • The graph of log_b(x) is a <B>reflection of bˣ over the line y = x</B>
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Input Values Change Proportionally</Tt><Sm>
        For a logarithmic function, the <B c="#be185d">input</B> values change proportionally as the output values increase in equal-length intervals. This is the <B c="#be185d">opposite</B> of exponential functions (where outputs are proportional)!<br/><br/>
        Exponential: equal x-spacing → proportional y-values<br/>
        Logarithmic: proportional x-values → equal y-spacing
      </Sm></Box>
      <svg width="100%" height="100" viewBox="0 0 300 100">
        <line x1="25" y1="85" x2="280" y2="85" stroke="#ddd" strokeWidth="1"/>
        <line x1="25" y1="85" x2="25" y2="5" stroke="#ddd" strokeWidth="1"/>
        <path d="M 30 80 Q 35 60, 50 45 Q 80 20, 160 10" stroke="#6366f1" strokeWidth="2.5" fill="none"/>
        <path d="M 80 80 Q 60 60, 45 45 Q 30 20, 25 8" stroke="#ec4899" strokeWidth="2.5" fill="none" strokeDasharray="5,3"/>
        <line x1="25" y1="85" x2="100" y2="10" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
        <text x="165" y="15" fontSize="10" fill="#6366f1" fontWeight="600">bˣ</text>
        <text x="30" y="8" fontSize="10" fill="#ec4899" fontWeight="600">log_b(x)</text>
        <text x="80" y="15" fontSize="9" fill="#94a3b8">y = x</text>
        <circle cx="25" cy="45" r="3" fill="#6366f1"/><text x="10" y="44" fontSize="8" fill="#6366f1">(0,1)</text>
        <circle cx="45" cy="85" r="3" fill="#ec4899"/><text x="40" y="98" fontSize="8" fill="#ec4899">(1,0)</text>
      </svg>
    </div>},
    { title:"Example — Graphing log₂(x) from 2ˣ", content:<div>
      <Q>Given g(x) = 2ˣ. Make a table and graph f(x) = log₂(x).</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Swap the x and y values from 2ˣ:</b></MathLine>
      </WB>
      <Tb h={["x","1/4","1/2","1","2","4","8"]} r={[["f(x) = log₂(x)","−2","−1","0","1","2","3"]]}/>
      <WB>
        <MathLine size={14}>Key point: log_b(1) = <MathBox color="#6366f1">0</MathBox> always<Annotate>b⁰ = 1 for any base</Annotate></MathLine>
        <MathLine size={14}>Key point: log_b(b) = <MathBox color="#6366f1">1</MathBox> always<Annotate>b¹ = b</Annotate></MathLine>
      </WB>
      <Wh>The exponential 2ˣ passes through (0,1) and (1,2). Its inverse log₂(x) passes through (1,0) and (2,1) — same points, swapped!</Wh>
    </div>},
  ]},
  { id:"2.11", name:"Logarithmic Functions", slides:[
    { title:"Concept — Logarithmic Functions in Detail", content:<div>
      <Fm label="General Form">f(x) = a·log_b(x) where a ≠ 0, b {">"} 0, b ≠ 1</Fm>
      <Box bg="#eef2ff"><Sm><B>Domain:</B> x {">"} 0 (you can ONLY take the log of a positive number)<br/><B>Range:</B> all real numbers (log outputs can be anything)<br/><B>Vertical Asymptote:</B> x = 0 (the y-axis)<br/><B>x-intercept:</B> always at (1, 0) because log_b(1) = 0</Sm></Box>
      <G l={<Box bg="#f0fdf4" border="2px solid #86efac" s={{textAlign:"center"}}>
        <Tt c="#166534">b {">"} 1, a {">"} 0</Tt>
        <svg width="120" height="60" viewBox="0 0 120 60"><path d="M 5 55 Q 15 35, 30 22 Q 60 8, 115 2" stroke="#22c55e" strokeWidth="2.5" fill="none"/><line x1="5" y1="0" x2="5" y2="60" stroke="#ddd" strokeWidth="1" strokeDasharray="3,2"/></svg>
        <Sm>Always <B c="#166534">increasing</B><br/>Always concave <B c="#166534">down</B></Sm>
      </Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5" s={{textAlign:"center"}}>
        <Tt c="#991b1b">0 {"<"} b {"<"} 1, a {">"} 0</Tt>
        <svg width="120" height="60" viewBox="0 0 120 60"><path d="M 5 5 Q 15 20, 30 35 Q 60 50, 115 58" stroke="#ef4444" strokeWidth="2.5" fill="none"/><line x1="5" y1="0" x2="5" y2="60" stroke="#ddd" strokeWidth="1" strokeDasharray="3,2"/></svg>
        <Sm>Always <B c="#991b1b">decreasing</B><br/>Always concave <B c="#991b1b">up</B></Sm>
      </Box>}/>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Proportional Inputs (The Reverse of Exponential)</Tt><Sm>
        For log functions, <B c="#92400e">input values change proportionally</B> as output values increase in equal-length intervals.<br/>
        This is the reverse of exponential (where outputs are proportional).<br/><br/>
        <B>Additive Transformation:</B> g(x) = f(x + k) — if the input values of g are proportional over equal-length output intervals, then f is logarithmic (even if g itself doesn't look logarithmic).
      </Sm></Box>
    </div>},
    { title:"Concept — End Behavior of Log Functions", content:<div>
      <Fm label="End Behavior">VA at x = 0. As x → 0⁺: ±∞. As x → ∞: ±∞.</Fm>
      <Tb h={["Function","a","b","lim x→0⁺","lim x→∞"]} r={[
        ["a·log_b(x)","+","b>1","−∞","+∞"],
        ["a·log_b(x)","−","b>1","+∞","−∞"],
        ["a·log_b(x)","+","0<b<1","+∞","−∞"],
        ["a·log_b(x)","−","0<b<1","−∞","+∞"],
      ]}/>
      <Wh>Log functions always have a VA at x = 0 (domain: x {">"} 0). The sign of a and whether b {">"} 1 or 0 {"<"} b {"<"} 1 determine which direction each limit goes.</Wh>
    </div>},
    { title:"Example — End Behavior of Log Functions", content:<div>
      <Q>For each logarithmic function, write the end behavior limits.</Q>
      <FmUsed>Check sign of a and base b → use the end behavior table</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(x) = 4·log₅(x)</b> (a{">"}0, b{">"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#ef4444">−∞</MathBox> · lim(x→∞) = <MathBox color="#22c55e">∞</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(x) = −2·log₃(x)</b> (a{"<"}0, b{">"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#22c55e">∞</MathBox> · lim(x→∞) = <MathBox color="#ef4444">−∞</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>h(x) = 3·log_(1/2)(x)</b> (a{">"}0, 0{"<"}b{"<"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#22c55e">∞</MathBox> · lim(x→∞) = <MathBox color="#ef4444">−∞</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>k(x) = −2·log_(1/4)(x)</b> (a{"<"}0, 0{"<"}b{"<"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#ef4444">−∞</MathBox> · lim(x→∞) = <MathBox color="#22c55e">∞</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Graphing Log Functions", content:<div>
      <Q>Sketch f(x) = 2·log₃(x). State properties.</Q>
      <WB>
        <MathLine size={14}>f(1/3) = 2·log₃(1/3) = 2·(−1) = <MathBox color="#6366f1">−2</MathBox><Annotate>point (1/3, −2)</Annotate></MathLine>
        <MathLine size={14}>f(1) = 2·log₃(1) = 2·0 = <MathBox color="#6366f1">0</MathBox><Annotate>x-intercept (1, 0)</Annotate></MathLine>
        <MathLine size={14}>f(3) = 2·log₃(3) = 2·1 = <MathBox color="#6366f1">2</MathBox><Annotate>point (3, 2)</Annotate></MathLine>
        <MathLine size={14}>Always <MathBox color="#22c55e">increasing</MathBox>, concave <MathBox color="#ef4444">down</MathBox></MathLine>
        <MathLine size={14}>Domain: (0,∞), Range: all reals, VA: x = 0</MathLine>
      </WB>
    </div>},
  ]},
  { id:"2.12", name:"Logarithmic Function Manipulation", slides:[
    { title:"Concept — Log Properties (Product, Quotient, Power, Change of Base)", content:<div>
      <Fm label="Product Property">log_b(xy) = log_b(x) + log_b(y) — log of a product = SUM of logs</Fm>
      <Fm label="Quotient Property">log_b(x/y) = log_b(x) − log_b(y) — log of a quotient = DIFFERENCE of logs</Fm>
      <Fm label="Power Property">log_b(xⁿ) = n·log_b(x) — exponent comes DOWN as a multiplier</Fm>
      <Fm label="Change of Base">log_b(x) = log_a(x) / log_a(b) — convert to ANY base you want</Fm>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">Key Equivalences for Exponential/Log Graphs</Tt><Sm>
        • <B c="#166534">Horizontal dilation of log = vertical translation:</B> log₂(8x) = log₂(8) + log₂(x) = 3 + log₂(x)<br/>
        • <B c="#166534">Power input = vertical dilation:</B> log₂(x²) = 2·log₂(x)<br/>
        • <B c="#166534">All log functions are vertical dilations of each other</B> (change of base proves it)
      </Sm></Box>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Natural Logarithm (ln)</Tt><Sm>
        log_e(x) is written as <B c="#7c3aed">ln(x)</B><br/>
        The base is e ≈ 2.718 (Euler's number)<br/>
        Domain: (0, ∞) · Range: all real numbers<br/>
        Key point: (e, 1) since ln(e) = 1<br/>
        This is the form used in logarithmic regressions on calculators.
      </Sm></Box>
      <W>Product property means MULTIPLY inside = ADD outside. Don't confuse with: log(x) + log(y) ≠ log(x + y)! That's a common mistake.</W>
    </div>},
    { title:"Example — Combining & Expanding Logs", content:<div>
      <Q>Rewrite each logarithmic expression.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Combine into single log:</b></MathLine>
        <MathLine size={14}>log₂(4) + log₂(8) = log₂(4·8) = log₂(32) = <MathBox color="#22c55e">5</MathBox></MathLine>
        <MathLine size={14}>log₂(3) + log₂(x) = <MathBox color="#22c55e">log₂(3x)</MathBox></MathLine>
        <MathLine size={14}>log₂(x) + log₂(y) − log₂(z) = <MathBox color="#22c55e">log₂(xy/z)</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Expand into sum/difference:</b></MathLine>
        <MathLine size={14}>log₅(4x) = log₅(4) + log₅(x)</MathLine>
        <MathLine size={14}>log₇(4/x) = log₇(4) − log₇(x)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Power property:</b></MathLine>
        <MathLine size={14}>log₅(x³) = <MathBox color="#22c55e">3·log₅(x)</MathBox></MathLine>
        <MathLine size={14}>5·log(y) = <MathBox color="#22c55e">log(y⁵)</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Change of Base & Relationship Between Logs", content:<div>
      <Q>Change base. Describe relationship between f(x) = log₅(x) and g(x) = log₁₂₅(x).</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Change to base 10:</b></MathLine>
        <MathLine size={14}>log₃(x) = log(x)/log(3)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Change to base 2:</b></MathLine>
        <MathLine size={14}>log₃(8) = log₂(8)/log₂(3) = 3/log₂(3)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Relationship:</b></MathLine>
        <MathLine size={14}>g(x) = log₁₂₅(x) = log₅(x)/log₅(125) = log₅(x)/3</MathLine>
        <Ans>g(x) = (1/3)·f(x) — vertical dilation by 1/3!</Ans>
      </WB>
      <Tp>All log functions are vertical dilations of each other. Change of base proves it!</Tp>
    </div>},
  ]},
  { id:"2.13", name:"Exponential & Logarithmic Equations & Inequalities", slides:[
    { title:"Concept — Solving Strategies", content:<div>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Solving Exponential Equations</Tt><Sm>
        <B>Method 1 — Same Base:</B> Get both sides to the same base, then set exponents equal.<br/>
        Example: 2⁽ˣ⁺¹⁾ = 8 → 2⁽ˣ⁺¹⁾ = 2³ → x+1 = 3 → x = 2<br/><br/>
        <B>Method 2 — Take a Log:</B> When you can't match bases, take log of both sides.<br/>
        Example: 3ˣ = 20 → x = log₃(20) ≈ 2.727<br/><br/>
        <B>Method 3 — Substitution:</B> For equations like e²ˣ + eˣ − 6 = 0, let u = eˣ to get a quadratic: u² + u − 6 = 0.<br/><br/>
        <B>Key identity:</B> bˣ = c^((log_c b)·x) — lets you rewrite any base in terms of another.
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Solving Logarithmic Equations</Tt><Sm>
        <B>Method 1 — Convert to Exponential:</B> log_b(x) = a → bᵃ = x<br/>
        Example: log₂(x) = 5 → x = 2⁵ = 32<br/><br/>
        <B>Method 2 — Combine Logs:</B> Use product/quotient properties to combine into one log, then convert.<br/>
        Example: log(x) + log(3) = 2 → log(3x) = 2 → 3x = 100 → x = 100/3<br/><br/>
        <B>Method 3 — If log_b(A) = log_b(B), then A = B</B>
      </Sm></Box>
      <W>ALWAYS check for extraneous solutions! For logs: the argument must be POSITIVE. For exponentials: eˣ is ALWAYS positive (eˣ = −3 has NO solution).</W>
    </div>},
    { title:"Concept — Constructing Inverses of Exp & Log Functions", content:<div>
      <G l={<Box bg="#eef2ff"><Tt c="#4338ca">Inverse of Exponential</Tt><Sm>
        Given f(x) = a·b⁽ˣ⁺ʰ⁾ + k:<br/>
        1. Subtract k<br/>
        2. Divide by a<br/>
        3. Take log base b<br/>
        4. Subtract h<br/>
        Result: <B>f⁻¹(x) = log_b((x−k)/a) − h</B>
      </Sm></Box>}
        r={<Box bg="#fce7f3"><Tt c="#be185d">Inverse of Logarithmic</Tt><Sm>
        Given f(x) = a·log_b(x+h) + k:<br/>
        1. Subtract k<br/>
        2. Divide by a<br/>
        3. Raise b to both sides<br/>
        4. Subtract h<br/>
        Result: <B c="#be185d">f⁻¹(x) = b^((x−k)/a) − h</B>
      </Sm></Box>}/>
      <Wh>The inverse of an exponential is a log. The inverse of a log is an exponential. They UNDO each other!</Wh>
    </div>},
    { title:"Example — Solving Exponential Equations", content:<div>
      <Q>Solve for x: a) 3·2⁽ˣ⁺¹⁾ = 24  b) 4⁽⁵ˣ⁻³⁾ = 3^(2·log₃4·x)  c) e²ˣ + eˣ − 6 = 0</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> 3·2⁽ˣ⁺¹⁾ = 24</MathLine>
        <MathLine size={14}>2⁽ˣ⁺¹⁾ = 8 = 2³<Annotate>divide by 3, recognize 8 = 2³</Annotate></MathLine>
        <MathLine size={14}>x + 1 = 3 → <MathBox>x = 2</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> 4⁽⁵ˣ⁻³⁾ = 3^(log₃16·x) = 16ˣ = 4²ˣ</MathLine>
        <MathLine size={14}>5x−3 = 2x → 3x = 3 → <MathBox>x = 1</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>c)</b> Let u = eˣ: u² + u − 6 = 0</MathLine>
        <MathLine size={14}>(eˣ + 3)(eˣ − 2) = 0</MathLine>
        <MathLine size={14}>eˣ = −3 (impossible!) or eˣ = 2 → <MathBox>x = ln(2)</MathBox></MathLine>
      </WB>
      <W>eˣ is ALWAYS positive! So eˣ = −3 has no solution. Always check!</W>
    </div>},
    { title:"Example — Solving Logarithmic Equations", content:<div>
      <Q>Solve: a) log(x) + log(2) = 1  b) log₃(2x + 1) − log₃(x − 1) = log₃(5). Check for extraneous solutions.</Q>
      <FmUsed>Product property: log(a) + log(b) = log(ab) · Quotient: log(a) − log(b) = log(a/b)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> log(x) + log(2) = 1</MathLine>
        <MathLine size={14}>log(2x) = 1 → 10¹ = 2x → <MathBox>x = 5</MathBox></MathLine>
        <MathLine size={14}>Check: log(5) + log(2) = log(10) = 1 ✓</MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> log₃(2x+1) − log₃(x−1) = log₃(5)</MathLine>
        <MathLine size={14}>log₃((2x+1)/(x−1)) = log₃(5)</MathLine>
        <Arrow text="Same base logs equal → arguments equal"/>
        <MathLine size={14}>(2x+1)/(x−1) = 5 → 2x+1 = 5x−5 → 6 = 3x</MathLine>
        <MathLine size={14}><MathBox>x = 2</MathBox> · Check: x−1 = 1 {">"} 0 ✓ (no extraneous solutions)</MathLine>
      </WB>
    </div>},
    { title:"Example — Constructing Inverses of Exp & Log Functions", content:<div>
      <Q>Find the inverse of f(x) = 3·5⁽ˣ⁺¹⁾ − 4.</Q>
      <FmUsed>Swap x and y → undo operations in reverse order</FmUsed>
      <WB>
        <MathLine size={14}>y = 3·5⁽ˣ⁺¹⁾ − 4</MathLine>
        <Arrow text="Swap x and y"/>
        <MathLine size={14}>x = 3·5⁽ʸ⁺¹⁾ − 4</MathLine>
        <Arrow text="Add 4, divide by 3"/>
        <MathLine size={14}>(x+4)/3 = 5⁽ʸ⁺¹⁾</MathLine>
        <Arrow text="Take log₅ of both sides"/>
        <MathLine size={14}>log₅((x+4)/3) = y + 1</MathLine>
        <Arrow text="Subtract 1"/>
        <Ans>f⁻¹(x) = log₅((x+4)/3) − 1</Ans>
      </WB>
      <Tp>To invert an exponential: use log. To invert a log: use exponential. They're opposite operations!</Tp>
    </div>},
  ]},
  { id:"2.14", name:"Logarithmic Function Context & Data Modeling", slides:[
    { title:"Concept — Building Logarithmic Models", content:<div>
      <Fm label="Without Technology">Find pattern → f(x) = a·log_b(x)</Fm>
      <Fm label="With Technology (Log Regression)">y = a + b·ln(x) — natural log form</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Building a Log Model from a Table</Tt><Sm>
        <B>Step 1:</B> Check that outputs increase in equal intervals (add the same amount each time)<br/>
        <B>Step 2:</B> Check that inputs are proportional (multiply by the same factor each time)<br/>
        <B>Step 3:</B> The multiplier = base b. The output increase = a.<br/>
        <B>Step 4:</B> Write f(x) = a·log_b(x)
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Log Models are INVERSES of Exponential Models</Tt><Sm>
        If an exponential model gives <B c="#be185d">output from input</B> (e.g., population from time),<br/>
        then the log model gives <B c="#be185d">input from output</B> (e.g., time from population).<br/><br/>
        Exponential: b = 800·2ᵗ → solve for t → Log: t = log₂(b/800)
      </Sm></Box>
      <Wh>The natural log form y = a + b·ln(x) is what your calculator gives for LnReg. This is useful for modeling continuous growth situations.</Wh>
    </div>},
    { title:"Example — Log Model from Table", content:<div>
      <Q>Write a logarithmic function f(x) = a·log₂(x) to model the data.</Q>
      <Tb h={["x","1","2","4","8","16"]} r={[["f(x)","0","3","6","9","12"]]}/>
      <WB>
        <MathLine size={14}>Outputs increase by 3 each time (equal intervals)<Annotate>0,3,6,9,12</Annotate></MathLine>
        <MathLine size={14}>Inputs are proportional: ×2 each time<Annotate>1,2,4,8,16</Annotate></MathLine>
        <MathLine size={14}>a = 3 (output change per interval), base = 2 (input multiplier)</MathLine>
        <Ans>f(x) = 3·log₂(x)</Ans>
      </WB>
    </div>},
    { title:"Example — Applying Log Models (Bacteria Inverse)", content:<div>
      <Q>800 bacteria double daily. Write f(b) for time in days given population b. When does it reach 20,000?</Q>
      <FmUsed>Exponential: b = 800·2ᵗ → Inverse: t = log₂(b/800)</FmUsed>
      <WB>
        <MathLine size={14}>Exponential model: b = 800·2ᵗ</MathLine>
        <Arrow text="Reverse operations to solve for t"/>
        <MathLine size={14}>b/800 = 2ᵗ → t = log₂(b/800)</MathLine>
        <Ans>f(b) = log₂(b/800) days</Ans>
        <MathLine size={14} color="#4338ca"><b>When b = 20,000:</b></MathLine>
        <MathLine size={14}>f(20000) = log₂(20000/800) = log₂(25) ≈ <MathBox>4.644 days</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Continuous Growth Inverse (Natural Log)", content:<div>
      <Q>An app's downloads follow D(t) = 50·e^(0.3t) where t is months. Write the inverse t(D) that gives time from downloads. How many months to reach 10,000 downloads?</Q>
      <FmUsed>D = a·eᵏᵗ → solve for t → t = ln(D/a) / k</FmUsed>
      <WB>
        <MathLine size={14}>D = 50·e^(0.3t)</MathLine>
        <Arrow text="Divide by 50"/>
        <MathLine size={14}>D/50 = e^(0.3t)</MathLine>
        <Arrow text="Take ln of both sides"/>
        <MathLine size={14}>ln(D/50) = 0.3t</MathLine>
        <Arrow text="Divide by 0.3"/>
        <Ans>t(D) = ln(D/50) / 0.3</Ans>
        <MathLine size={14} color="#4338ca"><b>When D = 10,000:</b></MathLine>
        <MathLine size={14}>t = ln(10000/50) / 0.3 = ln(200) / 0.3 ≈ 5.298 / 0.3</MathLine>
        <Ans>t ≈ 17.66 months</Ans>
      </WB>
      <Wh>For continuous models with base e, the inverse uses ln (natural log). Same idea: exponential → log to solve for the exponent.</Wh>
    </div>},
  ]},
  { id:"2.15", name:"Semi-log Plots", slides:[
    { title:"Concept — What is a Semi-log Plot?", content:<div>
      <Fm label="Semi-log Plot">A graph where the y-axis is scaled LOGARITHMICALLY and the x-axis stays LINEAR</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Why Semi-log Plots Matter</Tt><Sm>
        <B>KEY IDEA: Exponential data appears LINEAR on a semi-log plot!</B><br/><br/>
        On a regular graph, exponential data curves sharply upward — hard to analyze.<br/>
        On a semi-log plot, the same data forms a straight line — easy to work with!<br/><br/>
        • If points form a <B c="#22c55e">straight line</B> on semi-log → exponential model <B c="#22c55e">IS appropriate</B><br/>
        • If points are <B c="#ef4444">NOT linear</B> on semi-log → exponential model <B c="#ef4444">is NOT appropriate</B>
      </Sm></Box>
      <Fm label="Linearizing Exponential Data">For f(x) = a·bˣ, the semi-log linear model is: y = (logₙ b)·x + logₙ a</Fm>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Reading the Linear Model</Tt><Sm>
        y = (logₙ b)·x + logₙ a has the form y = mx + c where:<br/>
        • <B c="#92400e">Slope m = logₙ(b)</B> → tells you the base b<br/>
        • <B c="#92400e">y-intercept c = logₙ(a)</B> → tells you the initial value a<br/>
        • n can be any base (usually 10 or e)
      </Sm></Box>
      <Wh>Semi-log plots are used in science, medicine, and finance to visualize data that spans many orders of magnitude (1, 10, 100, 1000, etc.).</Wh>
    </div>},
    { title:"Example — Plotting & Linearizing", content:<div>
      <Q>Given f(x) = 2·7ˣ. Complete the table. Write the linear model for the semi-log plot.</Q>
      <Tb h={["x","0","1","2","3","4"]} r={[["f(x)","2","14","98","686","4802"]]}/>
      <WB>
        <MathLine size={14}>f(0)=2·7⁰=2, f(1)=2·7¹=14, f(2)=2·7²=98</MathLine>
        <MathLine size={14}>f(3)=2·7³=686, f(4)=2·7⁴=4802</MathLine>
        <MathLine size={14} color="#4338ca"><b>Points on semi-log plot are LINEAR ✓</b></MathLine>
        <Ans>y = (log 7)x + log 2 ≈ 0.845x + 0.301</Ans>
      </WB>
    </div>},
    { title:"Example — Is Exponential Appropriate?", content:<div>
      <Q>Plot the data on a semi-log plot. Is an exponential model appropriate for this data?</Q>
      <FmUsed>If data is exponential, it appears as a STRAIGHT LINE on a semi-log plot. If it curves or scatters, exponential is NOT appropriate.</FmUsed>
      <Tb h={["x","0","1","2","3","4"]} r={[["f(x)","0.1","0.5","90","400","700"]]}/>
      <WB>
        <Arrow text="Step 1: Take log of each output to create semi-log values"/>
        <MathLine size={14}>log(0.1) = −1, log(0.5) = −0.3, log(90) = 1.95, log(400) = 2.60, log(700) = 2.85</MathLine>
        <Arrow text="Step 2: Plot these log values against x and check for linearity"/>
        <MathLine size={14}>The jumps between consecutive log values: +0.7, +2.25, +0.65, +0.25</MathLine>
        <MathLine size={14}>These differences are NOT constant — they vary wildly<Annotate>a line would have equal spacing</Annotate></MathLine>
        <Arrow text="Step 3: Interpret — do the points form a straight line?"/>
        <MathLine size={14}>On a semi-log plot, these points do <MathBox color="#ef4444">NOT</MathBox> form a straight line</MathLine>
        <MathLine size={14}>They curve/scatter instead of being collinear</MathLine>
        <Ans>Exponential model is NOT appropriate — the semi-log plot is not linear</Ans>
      </WB>
      <Wh>A straight line on a semi-log plot means the data grows by a CONSTANT FACTOR over equal intervals. Here the data jumps from 0.5 to 90 (×180) but then from 400 to 700 (×1.75) — wildly inconsistent ratios confirm it is not exponential.</Wh>
    </div>},
    { title:"Example — Bacteria from Semi-log Plot", content:<div>
      <Q>Bacteria measured every 5 days. From the semi-log plot, (10,100) and (15,200) are points. Find B(t).</Q>
      <WB>
        <MathLine size={14}>Data doubles every 5 days: ratio = 2, period = 5</MathLine>
        <MathLine size={14}>B(t) = a·(2)^(t/5)</MathLine>
        <Arrow text="Use point (10, 100) to find a"/>
        <MathLine size={14}>100 = a·2^(10/5) = a·2² = 4a</MathLine>
        <MathLine size={14}>a = 100/4 = <MathBox color="#6366f1">25</MathBox></MathLine>
        <Ans>B(t) = 25·(2)^(t/5)</Ans>
      </WB>
      <Tp>On a semi-log plot, a straight line CONFIRMS exponential data. The slope gives log(b) and the y-intercept gives log(a).</Tp>
    </div>},
    { title:"Concept — Linearizing Exponential Data", content:<div>
      <Fm label="Key Formula">For f(x) = a·bˣ, the linear model on a semi-log plot is: y = (log b)·x + log a</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Why This Works</Tt><Sm>
        Start with f(x) = a·bˣ. Take log of both sides:<br/>
        log f(x) = log(a·bˣ) = log a + x·log b<br/>
        This is in the form <B c="#4338ca">y = mx + c</B> where:<br/>
        • <B c="#4338ca">slope m = log b</B> (rate of exponential growth on the log scale)<br/>
        • <B c="#4338ca">y-intercept = log a</B> (initial value on the log scale)
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">How to Test if Exponential is Appropriate</Tt><Sm>
        <B c="#92400e">1.</B> Plot the data on a semi-log plot (y-axis is logarithmic, x-axis is regular)<br/>
        <B c="#92400e">2.</B> If the points appear <B c="#22c55e">linear</B> → exponential model IS appropriate<br/>
        <B c="#92400e">3.</B> If the points appear <B c="#ef4444">curved</B> → exponential model is NOT appropriate
      </Sm></Box>
      <Q>f(x) = 2·7ˣ. Write the corresponding linear model for the semi-log plot.</Q>
      <WB>
        <MathLine size={14}>y = (log b)·x + log a</MathLine>
        <MathLine size={14}>y = (log 7)·x + log 2</MathLine>
        <Ans>y = (log 7)x + log 2 ≈ 0.845x + 0.301</Ans>
      </WB>
      <Tp>On the AP exam, they may give you a semi-log plot and ask if exponential is appropriate. If the points look LINEAR on the semi-log plot → YES. If curved → NO.</Tp>
    </div>},
  ]},
];
const unit1Practice = [
  { id:"1.1", problems:[
    <PQ key="1" n="1" q={<span>Given g(x) = 150 + 8x. If the input value is 7, what is the output value? Show your substitution and simplification step by step.</span>} a="g(7) = 206" e={<WB>
      <MathLine>g(x) = 150 + 8x</MathLine>
      <Arrow text="Replace every x with 7"/>
      <MathLine>g(<MathBox color="#6366f1">7</MathBox>) = 150 + 8(<MathBox color="#6366f1">7</MathBox>)<Annotate>substituted x = 7</Annotate></MathLine>
      <Arrow text="Multiply first (order of operations)"/>
      <MathLine indent={24}>= 150 + <MathBox color="#22c55e">56</MathBox><Annotate color="#22c55e">8 × 7 = 56</Annotate></MathLine>
      <Arrow text="Then add"/>
      <Ans>g(7) = 206</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Complete the table of values for g(x) = 150 + 8x. Plug in each x-value and show your work.<br/><Tb h={["x","0","1","2","3","4"]} r={[["g(x)","___","___","___","___","___"]]}/></span>} a="150, 158, 166, 174, 182" e={<WB>
      <MathLine size={14}>g(<MathBox color="#6366f1">0</MathBox>) = 150 + 8(0) = 150 + 0 = <MathBox>150</MathBox></MathLine>
      <MathLine size={14}>g(<MathBox color="#6366f1">1</MathBox>) = 150 + 8(1) = 150 + 8 = <MathBox>158</MathBox></MathLine>
      <MathLine size={14}>g(<MathBox color="#6366f1">2</MathBox>) = 150 + 8(2) = 150 + 16 = <MathBox>166</MathBox></MathLine>
      <MathLine size={14}>g(<MathBox color="#6366f1">3</MathBox>) = 150 + 8(3) = 150 + 24 = <MathBox>174</MathBox></MathLine>
      <MathLine size={14}>g(<MathBox color="#6366f1">4</MathBox>) = 150 + 8(4) = 150 + 32 = <MathBox>182</MathBox></MathLine>
      <Tp>Pattern: goes up by 8 each time — that's the slope!</Tp>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A pool has 500 gallons of water. A drain removes 12 gallons per minute. Write an expression W(t) for the amount of water remaining after t minutes. Identify the starting value and the rate of change.</span>} a="W(t) = 500 − 12t" e={<WB>
      <MathLine size={14} color="#6366f1">Starting amount: <MathBox color="#6366f1">500</MathBox> gallons<Annotate>at t = 0</Annotate></MathLine>
      <MathLine size={14} color="#ef4444">Rate: <MathBox color="#ef4444">−12</MathBox> gal/min<Annotate color="#ef4444">negative because draining</Annotate></MathLine>
      <Arrow text="total = starting + (rate × time)"/>
      <Ans>W(t) = 500 − 12t</Ans>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>A graph of f has zeros at x = −3 and x = 1, a local maximum at x = −1, and a local minimum at x = 3. Determine True or False for each statement.<br/>a) f is increasing on −3 {"<"} x {"<"} −1<br/>b) f is concave down on −1 {"<"} x {"<"} 3<br/>c) f has zeros at x = −3 and x = 1</span>} a="a) True  b) True  c) True" e={<WB>
      <MathLine size={14}><B c="#22c55e">a) TRUE</B> — from zero (x=−3) uphill to peak (x=−1) → <MathBox color="#22c55e">increasing ✓</MathBox></MathLine>
      <MathLine size={14}><B c="#22c55e">b) TRUE</B> — from peak down to valley, curve bends down → <MathBox color="#22c55e">concave down ✓</MathBox></MathLine>
      <MathLine size={14}><B c="#22c55e">c) TRUE</B> — zeros at x = −3 and x = 1 given → <MathBox color="#22c55e">✓</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"1.2", problems:[
    <PQ key="1" n="1" q={<span>Find the average rate of change of f from x = −2 to x = 4 using the table below.<br/><Tb h={["x","−2","0","2","4"]} r={[["f(x)","3","−1","−3","5"]]}/></span>} a="AROC = 1/3" e={<WB>
      <FmUsed>AROC = [f(b) − f(a)] / (b − a)</FmUsed>
      <MathLine size={14}>a = −2, b = 4, f(−2) = 3, f(4) = 5</MathLine>
      <MathLine>AROC = (<MathBox color="#6366f1">5</MathBox> − <MathBox color="#6366f1">3</MathBox>) / (4 − (−2))</MathLine>
      <Arrow text="Careful! 4 − (−2) = 4 + 2 = 6"/>
      <MathLine indent={42}>= 2 / 6</MathLine>
      <Ans>AROC = 1/3</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>The function g(t) = −16t² + 48t + 5 gives the height of a ball in feet at t seconds. Find g(1) and g(3), then compute the average rate of change from t = 1 to t = 3. Include units in your answer.</span>} a="AROC = −16 ft/sec" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Step 1: Find g(1)</b></MathLine>
      <MathLine size={14}>g(<MathBox color="#6366f1">1</MathBox>) = −16(1) + 48(1) + 5 = −16 + 48 + 5 = <MathBox>37</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Step 2: Find g(3)</b></MathLine>
      <MathLine size={14}>g(<MathBox color="#6366f1">3</MathBox>) = −16(9) + 48(3) + 5 = −144 + 144 + 5 = <MathBox>5</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Step 3: AROC formula</b></MathLine>
      <MathLine size={14}>AROC = (<MathBox>5</MathBox> − <MathBox>37</MathBox>) / (3 − 1) = −32/2</MathLine>
      <Ans>AROC = −16 ft/sec</Ans>
      <W>Negative means the object is FALLING. Units: ft ÷ sec = ft/sec.</W>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Using the function g(t) = −16t² + 48t + 5, approximate the instantaneous rate of change at t = 1 by computing the AROC over [1, 1.5], [1, 1.1], [1, 1.01], and [1, 1.001]. What value do the AROCs appear to converge to?</span>} a="Converges to 16 ft/sec" e={<WB>
      <MathLine size={14}>[1, 1.5]: AROC = <MathBox color="#ef4444">8</MathBox><Annotate>rough</Annotate></MathLine>
      <MathLine size={14}>[1, 1.1]: AROC = <MathBox color="#f59e0b">14.4</MathBox><Annotate color="#f59e0b">closer...</Annotate></MathLine>
      <MathLine size={14}>[1, 1.01]: AROC = <MathBox color="#22c55e">15.84</MathBox><Annotate color="#22c55e">closer still...</Annotate></MathLine>
      <MathLine size={14}>[1, 1.001]: AROC = <MathBox color="#3b82f6">15.984</MathBox><Annotate color="#3b82f6">almost there!</Annotate></MathLine>
      <div style={{textAlign:"center",margin:"8px 0",fontSize:13,fontFamily:"sans-serif"}}>8 → 14.4 → 15.84 → 15.984 → converging to <b>16</b></div>
      <Ans>Rate at t = 1 ≈ 16 ft/sec</Ans>
    </WB>}/>,
  ]},
  { id:"1.3", problems:[
    <PQ key="1" n="1" q={<span>Find the slope of the secant line from the point (2, 7) to the point (5, −2). Show the slope formula and simplify.</span>} a="Slope = −3" e={<WB>
      <FmUsed>Slope = [f(b) − f(a)] / (b − a)</FmUsed>
      <MathLine size={14}>Point 1: (2, 7) · Point 2: (5, −2)</MathLine>
      <MathLine size={14}>Slope = (−2 − 7) / (5 − 2) = −9/3</MathLine>
      <Ans>Slope = −3</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For g(x) = 2x² + 1/(x + 3), find the slope of the secant line from (−2, g(−2)) to (1, g(1)). Show all work computing g(−2) and g(1) first.</span>} a="Slope = (9/4 − 9) / 3 = −27/12 = −2.25" e={<WB>
      <MathLine size={14} color="#4338ca"><b>g(−2):</b></MathLine>
      <MathLine size={14}>= 2(4) + 1/(−2+3) = 8 + 1/1 = <MathBox>9</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>g(1):</b></MathLine>
      <MathLine size={14}>= 2(1) + 1/(1+3) = 2 + 1/4 = <MathBox>9/4</MathBox></MathLine>
      <MathLine size={14}>Slope = (9/4 − 9) / (1 − (−2)) = (−27/4) / 3</MathLine>
      <Ans>Slope = −27/12 = −9/4 = −2.25</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Compute all 4 AROCs over consecutive intervals. Is f linear or quadratic? What is the change in AROC?<br/><Tb h={["x","−2","−1","0","1","2"]} r={[["f(x)","10","7","4","1","−2"]]}/></span>} a="LINEAR (all AROCs = −3)" e={<WB>
      <MathLine size={14}>[−2,−1]: (7−10)/1 = <MathBox color="#22c55e">−3</MathBox></MathLine>
      <MathLine size={14}>[−1, 0]: (4−7)/1 = <MathBox color="#22c55e">−3</MathBox></MathLine>
      <MathLine size={14}>[ 0, 1]: (1−4)/1 = <MathBox color="#22c55e">−3</MathBox></MathLine>
      <MathLine size={14}>[ 1, 2]: (−2−1)/1 = <MathBox color="#22c55e">−3</MathBox></MathLine>
      <div style={{margin:"8px 0",padding:8,background:"#eef2ff",borderRadius:8,textAlign:"center",fontFamily:"sans-serif",fontSize:13}}>All AROCs = <b>−3</b> → constant → change in AROC = <b>0</b></div>
      <Ans>f is LINEAR</Ans>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>Compute all 4 AROCs over consecutive intervals, then find the 3 changes between them. Is the change constant? Is g quadratic? Is g concave up or concave down?<br/><Tb h={["x","−2","−1","0","1","2"]} r={[["g(x)","5","0","−1","2","9"]]}/></span>} a="QUADRATIC, concave UP" e={<WB>
      <MathLine size={14} color="#4338ca"><b>AROCs:</b></MathLine>
      <MathLine size={14}>(0−5)/1 = <MathBox color="#22c55e">−5</MathBox>, (−1−0)/1 = <MathBox color="#22c55e">−1</MathBox>, (2−(−1))/1 = <MathBox color="#22c55e">3</MathBox>, (9−2)/1 = <MathBox color="#22c55e">7</MathBox></MathLine>
      <MathLine size={14} color="#dc2626"><b>Changes in AROC:</b></MathLine>
      <MathLine size={14}>−1−(−5) = <MathBox color="#ef4444">4</MathBox>, 3−(−1) = <MathBox color="#ef4444">4</MathBox>, 7−3 = <MathBox color="#ef4444">4</MathBox></MathLine>
      <MathLine size={14}>Constant change of +4 → <MathBox color="#22c55e">QUADRATIC</MathBox></MathLine>
      <MathLine size={14}>AROCs −5→−1→3→7 are <MathBox color="#22c55e">increasing</MathBox> → concave UP ☕</MathLine>
    </WB>}/>,
    <PQ key="5" n="5" q={<span>Compute all 4 AROCs over consecutive intervals (each interval has width 2). Are the AROCs increasing or decreasing? Is h concave up or concave down?<br/><Tb h={["x","−6","−4","−2","0","2"]} r={[["h(x)","50","20","2","−4","2"]]}/></span>} a="Increasing → concave UP" e={<WB>
      <MathLine size={14}>[−6,−4]: (20−50)/2 = <MathBox color="#22c55e">−15</MathBox></MathLine>
      <MathLine size={14}>[−4,−2]: (2−20)/2 = <MathBox color="#22c55e">−9</MathBox></MathLine>
      <MathLine size={14}>[−2, 0]: (−4−2)/2 = <MathBox color="#22c55e">−3</MathBox></MathLine>
      <MathLine size={14}>[ 0, 2]: (2−(−4))/2 = <MathBox color="#22c55e">3</MathBox></MathLine>
      <div style={{margin:"8px 0",padding:8,background:"#f0fdf4",borderRadius:8,textAlign:"center",fontFamily:"sans-serif",fontSize:13}}>−15 → −9 → −3 → 3 → <b style={{color:"#166534"}}>INCREASING</b></div>
      <Ans>AROCs increasing → concave UP ☕</Ans>
    </WB>}/>,
  ]},
  { id:"1.4", problems:[
    <PQ key="1" n="1" q={<span>For each polynomial, rewrite in descending order if needed, then name the degree and leading coefficient.<br/>a) f(x) = −5x³ + 2x⁵ − x + 8<br/>b) g(x) = 12 − 7x² + x⁴</span>} a="a) Degree 5, LC = 2   b) Degree 4, LC = 1" e={<WB>
      <MathLine size={14} color="#4338ca"><b>a)</b> Rewrite: <MathBox color="#6366f1">2x⁵</MathBox> − 5x³ − x + 8</MathLine>
      <MathLine size={14} indent={20}>Highest power: x⁵ → Degree = <MathBox color="#6366f1">5</MathBox>, LC = <MathBox color="#ec4899">2</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>b)</b> Rewrite: <MathBox color="#6366f1">x⁴</MathBox> − 7x² + 12</MathLine>
      <MathLine size={14} indent={20}>Highest power: x⁴ → Degree = <MathBox color="#6366f1">4</MathBox>, LC = <MathBox color="#ec4899">1</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A polynomial with restricted domain has local minima at x = −1 and x = 4 with output values f(−1) = −3 and f(4) = 2. It has local maxima at x = 1 and x = 6 with f(1) = 5 and f(6) = 8. Find the global minimum and global maximum.</span>} a="Global min = −3 (at x=−1), Global max = 8 (at x=6)" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Local mins:</b> f(−1) = −3, f(4) = 2</MathLine>
      <MathLine size={14}>Smallest: −3 → Global min at x = <MathBox color="#3b82f6">−1</MathBox>, value = <MathBox color="#3b82f6">−3</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Local maxes:</b> f(1) = 5, f(6) = 8</MathLine>
      <MathLine size={14}>Largest: 8 → Global max at x = <MathBox color="#ec4899">6</MathBox>, value = <MathBox color="#ec4899">8</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Graph p(x) = −x⁴ + 3x² − 1 on your calculator. What is the absolute maximum value? What is the absolute minimum value? If the function goes to ±∞ in either direction, write N/A.</span>} a="Abs Max = 1.25, Abs Min = N/A" e={<WB>
      <MathLine size={14}>Leading term: <MathBox color="#ef4444">−x⁴</MathBox> → both ends → −∞<Annotate color="#ef4444">even degree, neg coeff</Annotate></MathLine>
      <MathLine size={14}>Local max at x = ±√(3/2) → y = 5/4 = <MathBox color="#22c55e">1.25</MathBox></MathLine>
      <MathLine size={14}>Both ends → −∞ → no absolute minimum</MathLine>
      <Ans>Abs Max = 1.25 · Abs Min = N/A (→ −∞)</Ans>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>A polynomial curve passes through points A through F. The curve is concave up from A to C, concave down from C to E, and concave up again from E to F. Which points are inflection points? Explain.</span>} a="C and E are inflection points" e={<WB>
      <MathLine size={14}>At C: concavity changes UP → DOWN → <MathBox color="#f59e0b">inflection ✓</MathBox></MathLine>
      <MathLine size={14}>At E: concavity changes DOWN → UP → <MathBox color="#f59e0b">inflection ✓</MathBox></MathLine>
      <MathLine size={14}>A, B, D, F: no change in concavity → NOT inflection points</MathLine>
      <Ans>Inflection points at C and E</Ans>
    </WB>}/>,
  ]},
  { id:"1.5", problems:[
    <PQ key="1" n="1" q={<span>Factor p(x) = x³ − 4x completely. State each zero and its multiplicity. At each zero, does the graph cross, bounce, or wiggle through the x-axis?</span>} a="x(x−2)(x+2); all mult 1 → all cross" e={<WB>
      <MathLine size={14}>x³ − 4x = x(x² − 4)<Annotate>factor out x</Annotate></MathLine>
      <Arrow text="Difference of squares: x² − 4 = (x−2)(x+2)"/>
      <MathLine size={14}>= <MathBox>x(x − 2)(x + 2)</MathBox></MathLine>
      <MathLine size={14}>x = 0: mult <MathBox color="#3b82f6">1</MathBox> → crosses · x = 2: mult <MathBox color="#3b82f6">1</MathBox> → crosses · x = −2: mult <MathBox color="#3b82f6">1</MathBox> → crosses</MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A cubic polynomial has an x-intercept at (−3, 0) and a complex zero at 1 + 4i. What is the third zero? Explain your reasoning.</span>} a="1 − 4i" e={<WB>
      <MathLine size={14}>Complex zeros come in <MathBox color="#6366f1">conjugate pairs</MathBox></MathLine>
      <MathLine size={14}>If 1 + 4i is a zero → <MathBox>1 − 4i</MathBox> must also be a zero</MathLine>
      <Ans>Third zero = 1 − 4i</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Use the method of successive differences to determine the degree of the polynomial that fits this data.<br/><Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","8","3","2","5","12"]]}/></span>} a="Degree 2 (Quadratic)" e={<WB>
      <MathLine size={14}>1st diff: −5, −1, 3, 7<Annotate>not constant</Annotate></MathLine>
      <MathLine size={14}>2nd diff: 4, 4, 4<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
      <Ans>Degree 2 (Quadratic)</Ans>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>Classify each polynomial as even (E), odd (O), or neither (N). Check by examining the exponents.<br/>a) f(x) = x⁶ − 3x⁴ + 2x²<br/>b) g(x) = x⁷ − x³ + x<br/>c) h(x) = x⁵ + x² − 1</span>} a="a) Even  b) Odd  c) Neither" e={<WB>
      <MathLine size={14}><b>a)</b> Exponents: 6, 4, 2 (all even) → <MathBox color="#6366f1">EVEN</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> Exponents: 7, 3, 1 (all odd) → <MathBox color="#22c55e">ODD</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> Exponents: 5, 2, 0 (mixed!) → <MathBox color="#ef4444">NEITHER</MathBox></MathLine>
    </WB>}/>,
    <PQ key="5" n="5" q={<span>The polynomial p(x) = x⁴ − 4x³ + 4x² − x has x-intercepts at (−2, 0), (0, 0), (1, 0), and (2, 0). Write p(x) as a product of linear factors. (Hint: check the leading coefficient!)</span>} a="p(x) = −x(x + 2)(x − 1)(x − 2)" e={<WB>
      <MathLine size={14}>From intercepts: factors are x, (x+2), (x−1), (x−2)</MathLine>
      <MathLine size={14}>Product of leading terms: x·x·x·x = x⁴</MathLine>
      <MathLine size={14}>But p(x) has leading term <MathBox color="#ef4444">−x⁴</MathBox> → need factor of −1</MathLine>
      <Ans>p(x) = −x(x + 2)(x − 1)(x − 2)</Ans>
    </WB>}/>,
  ]},
  { id:"1.6", problems:[
    <PQ key="1" n="1" q={<span>For p(x) = 4x⁵ − x³ + 2, identify the leading term, the degree, and the leading coefficient. Then write the end behavior using limit notation.</span>} a="lim(x→−∞) = −∞, lim(x→+∞) = +∞" e={<WB>
      <MathLine size={14}>Leading term: <MathBox color="#6366f1">4x⁵</MathBox> · Degree: <MathBox color="#6366f1">5</MathBox> (odd) · LC: <MathBox color="#ec4899">+4</MathBox> (positive)</MathLine>
      <MathLine size={14}>Odd + positive → left DOWN, right UP</MathLine>
      <Ans>lim(x→−∞) = −∞ · lim(x→+∞) = +∞</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Identify the leading term and write the end behavior of q(x) = −3x⁴ + 7x² − 2x + 9 using limit notation.</span>} a="lim(x→−∞) = −∞, lim(x→+∞) = −∞" e={<WB>
      <MathLine size={14}>Leading term: <MathBox color="#6366f1">−3x⁴</MathBox> · Degree: <MathBox color="#6366f1">4</MathBox> (even) · LC: <MathBox color="#ef4444">−3</MathBox> (negative)</MathLine>
      <MathLine size={14}>Even + negative → both ends DOWN</MathLine>
      <Ans>lim(x→−∞) = −∞ · lim(x→+∞) = −∞</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A graph of a polynomial shows: the left end goes UP (+∞) and the right end goes DOWN (−∞). What can you conclude about the degree (even or odd) and the sign of the leading coefficient? Write the limits.</span>} a="Odd degree, negative LC" e={<WB>
      <MathLine size={14}>Opposite directions → <MathBox color="#22c55e">odd degree</MathBox></MathLine>
      <MathLine size={14}>Right goes DOWN → <MathBox color="#ef4444">negative leading coefficient</MathBox></MathLine>
      <Ans>lim(x→−∞) = +∞ · lim(x→+∞) = −∞ · Odd, negative</Ans>
    </WB>}/>,
  ]},
  { id:"1.7", problems:[
    <PQ key="1" n="1" q={<span>Find the horizontal asymptote (if one exists) for each rational function. Compare the degree of the numerator vs. the denominator.<br/>a) (2x − 5)/(x² + 1)<br/>b) (3x³ + 1)/(x³ − 4)<br/>c) (x⁴ − 2)/(x² + x)</span>} a="a) y=0  b) y=3  c) No HA" e={<WB>
      <MathLine size={14}><b>a)</b> n=1 {"<"} d=2 → <MathBox color="#3b82f6">HA: y = 0</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> n=d=3 → ratio: 3/1 → <MathBox color="#ec4899">HA: y = 3</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> n=4 {">"} d=2 → <MathBox color="#f59e0b">No HA</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For r(x) = (2x⁵ − x)/(4x³ + 3), find the ratio of the leading terms. Then write the end behavior as x → ∞ and x → −∞ using limit notation.</span>} a="x²/2; both limits → +∞" e={<WB>
      <MathLine size={14}>Leading terms: 2x⁵ / 4x³ = <MathBox color="#6366f1">x²/2</MathBox></MathLine>
      <MathLine size={14}>x² is always positive for large |x|</MathLine>
      <Ans>lim(x→∞) = +∞ · lim(x→−∞) = +∞</Ans>
    </WB>}/>,
  ]},
  { id:"1.8", problems:[
    <PQ key="1" n="1" q={<span>For r(x) = (x² − x − 6)/(x² − 9), factor the numerator and denominator completely. Identify any holes. Find the zeros of r(x). Then solve r(x) ≥ 0 using a sign chart.</span>} a="Zero: x=−2. Hole at x=3. VA at x=−3." e={<WB>
      <MathLine size={14}>Num: (x−3)(x+2) · Den: (x−3)(x+3)</MathLine>
      <MathLine size={14}>(x−3) cancels → <MathBox color="#f59e0b">hole at x=3</MathBox></MathLine>
      <MathLine size={14}>Simplified: (x+2)/(x+3)</MathLine>
      <MathLine size={14}>Zero: x+2=0 → <MathBox color="#22c55e">x=−2</MathBox> · VA: x+3=0 → <MathBox color="#ef4444">x=−3</MathBox></MathLine>
      <Ans>r(x)≥0: (−∞,−3) ∪ [−2,3) ∪ (3,∞)</Ans>
    </WB>}/>,
  ]},
  { id:"1.9", problems:[
    <PQ key="1" n="1" q={<span>Find the vertical asymptotes of f(x) = (x² − 4)/(x² − x − 2). Factor both the numerator and denominator first, and check for any holes before identifying VAs.</span>} a="VA: x = −1 (hole at x = 2)" e={<WB>
      <MathLine size={14}>Num: (x−2)(x+2) · Den: (x−2)(x+1)</MathLine>
      <MathLine size={14}>(x−2) cancels → <MathBox color="#f59e0b">hole at x=2</MathBox></MathLine>
      <MathLine size={14}>Remaining den: x+1=0 → <MathBox color="#ef4444">VA: x=−1</MathBox></MathLine>
      <MathLine size={14}>Check num at x=−1: (−1+2) = 1 ≠ 0 ✓</MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A rational function h(x) has vertical asymptotes at x = 1 and x = −3. From a graph, the function goes to +∞ as x → 1⁺ and to −∞ as x → 1⁻. At x = −3, it goes to +∞ from both sides. Determine the multiplicity (odd or even) of each VA and write all four one-sided limits.</span>} a="x=1: odd mult. x=−3: even mult." e={<WB>
      <MathLine size={14} color="#4338ca"><b>At x = 1:</b></MathLine>
      <MathLine size={14}>lim(x→1⁺) h(x) = +∞ · lim(x→1⁻) h(x) = −∞</MathLine>
      <MathLine size={14}>Opposite directions → <MathBox color="#ef4444">odd multiplicity</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>At x = −3:</b></MathLine>
      <MathLine size={14}>lim(x→−3⁺) h(x) = +∞ · lim(x→−3⁻) h(x) = +∞</MathLine>
      <MathLine size={14}>Same direction → <MathBox color="#22c55e">even multiplicity</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Find the vertical asymptotes of g(x) = (x² − 9)/(x³ − 4x² + 3x). Factor completely and check for holes. Then use a calculator to determine the one-sided limits at each VA.</span>} a="Hole at x=3. VAs: x=0, x=1" e={<WB>
      <MathLine size={14}>Num: (x−3)(x+3) · Den: x(x−3)(x−1)</MathLine>
      <MathLine size={14}>(x−3) cancels → <MathBox color="#f59e0b">hole at x=3</MathBox></MathLine>
      <MathLine size={14}>Simplified: (x+3)/[x(x−1)]</MathLine>
      <MathLine size={14}>VAs: <MathBox color="#ef4444">x = 0</MathBox> and <MathBox color="#ef4444">x = 1</MathBox></MathLine>
      <MathLine size={14}>At x=0: lim(x→0⁺)=−∞, lim(x→0⁻)=+∞</MathLine>
      <MathLine size={14}>At x=1: lim(x→1⁺)=+∞, lim(x→1⁻)=−∞</MathLine>
    </WB>}/>,
  ]},
  { id:"1.10", problems:[
    <PQ key="1" n="1" q={<span>For r(x) = (x² − 5x + 6)/(x² − 4x + 4), factor the numerator and denominator. Cancel any common factors and simplify. Then determine whether x = 2 is a hole or a vertical asymptote, and explain why.</span>} a="Simplified: (x−3)/(x−2). x = 2 is a VA, not a hole." e={<WB>
      <MathLine size={14}>Num: (x−2)(x−3) · Den: (x−2)²</MathLine>
      <Arrow text="Cancel one (x−2)"/>
      <MathLine size={14}>Simplified: (x−3)/(x−2)</MathLine>
      <MathLine size={14}>(x−2) still in den → <MathBox color="#ef4444">x=2 is a VA</MathBox><Annotate color="#ef4444">not a hole!</Annotate></MathLine>
    </WB>}/>,
  ]},
  { id:"1.11", problems:[
    <PQ key="1" n="1" q={<span>Use polynomial long division to divide (2x² + 3x − 5) by (x − 1). Show each step of the divide-multiply-subtract cycle. What is the slant asymptote?</span>} a="Quotient: 2x + 5, R = 0. Slant: y = 2x + 5" e={<WB>
      <MathLine size={14} color="#6366f1">① 2x² ÷ x = <MathBox color="#6366f1">2x</MathBox></MathLine>
      <MathLine size={14} color="#ec4899">② 2x(x−1) = <MathBox color="#ec4899">2x²−2x</MathBox></MathLine>
      <MathLine size={14} color="#f59e0b">③ (2x²+3x)−(2x²−2x) = <MathBox color="#f59e0b">5x</MathBox></MathLine>
      <MathLine size={14} color="#6366f1">④ 5x ÷ x = <MathBox color="#6366f1">5</MathBox></MathLine>
      <MathLine size={14} color="#ec4899">⑤ 5(x−1) = <MathBox color="#ec4899">5x−5</MathBox></MathLine>
      <MathLine size={14} color="#f59e0b">⑥ (5x−5)−(5x−5) = <MathBox color="#f59e0b">0</MathBox></MathLine>
      <Ans>Quotient: 2x+5 · R: 0 · Slant: y = 2x+5</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Expand (x + 3)⁴ and (x − 2)³ using Pascal's Triangle. Write out the appropriate row of Pascal's Triangle, then show each term with its coefficient and power.</span>} a="x⁴+12x³+54x²+108x+81 and x³−6x²+12x−8" e={<WB>
      <div style={{textAlign:"center",fontFamily:"monospace",fontSize:14,lineHeight:1.8}}><b style={{color:"#166534"}}>1 &nbsp;4 &nbsp;6 &nbsp;4 &nbsp;1</b></div>
      <MathLine size={13}>(x+3)⁴ = x⁴ + 4·<MathBox color="#6366f1">3</MathBox>x³ + 6·<MathBox color="#6366f1">9</MathBox>x² + 4·<MathBox color="#6366f1">27</MathBox>x + <MathBox color="#6366f1">81</MathBox></MathLine>
      <Ans>= x⁴ + 12x³ + 54x² + 108x + 81</Ans>
      <div style={{textAlign:"center",fontFamily:"monospace",fontSize:14}}><b>1 &nbsp;3 &nbsp;3 &nbsp;1</b></div>
      <MathLine size={13}>(x−2)³ = x³ + 3·<MathBox color="#ef4444">(−2)</MathBox>x² + 3·<MathBox color="#ef4444">4</MathBox>x + <MathBox color="#ef4444">(−8)</MathBox></MathLine>
      <Ans>= x³ − 6x² + 12x − 8</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>For r(x) = (3x² + 2x − 8)/(x² − x − 6): find the HA, zeros, VAs, and any holes. Factor completely and simplify.</span>} a="HA: y=3. Zeros: x=−2, x=4/3. VA: x=3. Hole at x=−2." e={<WB>
      <MathLine size={14}>Num: (3x−4)(x+2) · Den: (x−3)(x+2)</MathLine>
      <MathLine size={14}>(x+2) cancels → <MathBox color="#f59e0b">Hole at x=−2</MathBox></MathLine>
      <MathLine size={14}>Simplified: (3x−4)/(x−3)</MathLine>
      <MathLine size={14}>HA: n=d=2, 3/1 → <MathBox color="#3b82f6">y=3</MathBox></MathLine>
      <MathLine size={14}>Zero: 3x−4=0 → <MathBox color="#22c55e">x=4/3</MathBox></MathLine>
      <MathLine size={14}>VA: x−3=0 → <MathBox color="#ef4444">x=3</MathBox></MathLine>
      <MathLine size={14}>Hole y: f(−2) = (3(−2)−4)/(−2−3) = −10/−5 = <MathBox color="#f59e0b">2</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"1.12", problems:[
    <PQ key="1" n="1" q={<span>Describe the transformation(s) applied to f for each function:<br/>a) g(x) = f(x) − 5<br/>b) g(x) = f(x − 3)<br/>c) g(x) = 3f(x)<br/>d) g(x) = f(2x)</span>} a="a) Down 5  b) Right 3  c) Vert stretch ×3  d) Horiz compress ×(1/2)" e={<WB>
      <MathLine size={14}><b>a)</b> −5 outside → <MathBox color="#22c55e">vertical translation DOWN 5</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> −3 inside → <MathBox color="#22c55e">horizontal translation RIGHT 3</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> ×3 outside → <MathBox color="#ec4899">vertical dilation by factor 3</MathBox></MathLine>
      <MathLine size={14}><b>d)</b> ×2 inside (b=2) → <MathBox color="#ec4899">horizontal dilation by factor 1/2</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Let g(x) = 3f(x/2) − 1. Describe the transformations in the correct order to construct the graph of g from f.</span>} a="Horiz stretch ×2 → Vert stretch ×3 → Down 1" e={<WB>
      <MathLine size={14}>b = 1/2, a = 3, k = −1</MathLine>
      <MathLine size={14}><MathBox color="#6366f1">①</MathBox> Horizontal dilation by |1/b| = <MathBox color="#6366f1">2</MathBox> (stretch ×2)</MathLine>
      <MathLine size={14}><MathBox color="#ec4899">②</MathBox> Vertical dilation by |a| = <MathBox color="#ec4899">3</MathBox> (stretch ×3)</MathLine>
      <MathLine size={14}><MathBox color="#22c55e">③</MathBox> Vertical translation <MathBox color="#22c55e">DOWN 1</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>The table below gives values for f. If g(x) = 2f(x + 1) − 3, find g(0) and g(1). Remember to simplify the inside argument first before looking up the table value.<br/><Tb h={["x","−2","−1","0","1","2"]} r={[["f(x)","1","4","3","0","−1"]]}/></span>} a="g(0) = −3, g(1) = −5" e={<WB>
      <MathLine>g(<MathBox color="#6366f1">0</MathBox>) = 2·f(<MathBox color="#6366f1">0</MathBox>+1) − 3 = 2·f(1) − 3</MathLine>
      <Arrow text="Look up f(1) = 0"/>
      <MathLine indent={24}>= 2(<MathBox color="#f59e0b">0</MathBox>) − 3 = <MathBox>−3</MathBox></MathLine>
      <MathLine>g(<MathBox color="#6366f1">1</MathBox>) = 2·f(<MathBox color="#6366f1">1</MathBox>+1) − 3 = 2·f(2) − 3</MathLine>
      <Arrow text="Look up f(2) = −1"/>
      <MathLine indent={24}>= 2(<MathBox color="#f59e0b">−1</MathBox>) − 3 = <MathBox>−5</MathBox></MathLine>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>The function f has domain [−3, 4] and range [0, 6]. If g(x) = −3f(x + 2) + 1, find the domain and range of g. Apply the transformations in the correct order.</span>} a="D: [−5, 2], R: [−17, 1]" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Domain:</b> x+2 shifts left 2</MathLine>
      <MathLine size={14}>[−3−2, 4−2] = <MathBox>[−5, 2]</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Range:</b> ×(−3) flips, then +1</MathLine>
      <MathLine size={14}>[0,6] → ×(−3) → [−18, 0] → +1 → <MathBox>[−17, 1]</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"1.13", problems:[
    <PQ key="1" n="1" q={<span>Determine whether each data set models a linear, quadratic, or piecewise linear function. Explain your reasoning.<br/><Tb h={["x","0","1","2","3","4"]} r={[["f(x)","2","5","8","11","14"]]}/></span>} a="LINEAR — constant 1st differences of 3" e={<WB>
      <MathLine size={14}>1st diff: 3, 3, 3, 3 → constant</MathLine>
      <Ans>LINEAR — constant rate of change of 3</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A rectangular garden has length = 2w. A stone border 1.5 ft wide surrounds the entire garden. Write A(w) for the total area (garden + border). If w ≤ 15, state domain and range.</span>} a="A(w) = 2w² + 9w + 9. D: (0,15], R: (9,594]" e={<WB>
      <MathLine size={14}>Total length = 2w + 2(1.5) = <MathBox color="#6366f1">2w + 3</MathBox></MathLine>
      <MathLine size={14}>Total width = w + 2(1.5) = <MathBox color="#6366f1">w + 3</MathBox></MathLine>
      <MathLine size={14}>A = (2w+3)(w+3) = 2w² + 6w + 3w + 9</MathLine>
      <Ans>A(w) = 2w² + 9w + 9 · D: (0,15] · R: (9,594]</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A rectangular box has length = 5w, width = w, and height = 3w, where w is in inches. Write V(w) for the volume of the box. If w ≤ 8, state the domain and range of V.</span>} a="V(w) = 15w³. D: (0, 8], R: (0, 7680]" e={<WB>
      <MathLine size={14}>V = <MathBox color="#6366f1">5w</MathBox> · <MathBox color="#ec4899">w</MathBox> · <MathBox color="#f59e0b">3w</MathBox> = 15w³</MathLine>
      <MathLine size={14}>V(8) = 15(8)³ = 15(512) = <MathBox>7680</MathBox></MathLine>
      <Ans>V(w) = 15w³ · D: (0,8] · R: (0, 7680]</Ans>
    </WB>}/>,
  ]},
  { id:"1.14", problems:[
    <PQ key="1" n="1" q={<span>A ball is thrown into the air and its height is recorded at 1-second intervals. Use cubic regression to model the height and predict h(3.5).<br/><Tb h={["t (sec)","0","1","2","3","4","5"]} r={[["h (ft)","0","28","40","36","16","0"]]}/></span>} a="h(t) ≈ −0.667t³ + 2.667t² + 26t + 0. h(3.5) ≈ 37.6 ft" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Step 1: Enter data into L1, L2</b></MathLine>
      <MathLine size={14}>L1 = {"{"}0,1,2,3,4,5{"}"} · L2 = {"{"}0,28,40,36,16,0{"}"}</MathLine>
      <MathLine size={14} color="#4338ca"><b>Step 2: STAT → CALC → CubicReg</b></MathLine>
      <Ans>h(t) ≈ −0.667t³ + 2.667t² + 26t</Ans>
      <MathLine size={14} color="#4338ca"><b>Step 3: Predict h(3.5)</b></MathLine>
      <MathLine size={14}>Plug t = 3.5 into regression equation</MathLine>
      <Ans>h(3.5) ≈ 37.6 feet</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A company finds that widget sales follow an inverse variation model. When the price is $5, the company sells 250 widgets. Find the constant k, write the model b(x) = k/x, predict how many widgets sell at a price of $10, and find the price needed to sell 400 widgets.</span>} a="k = 1250, b(10) = 125 widgets, price = $3.13" e={<WB>
      <MathLine size={14}>k = 250 × 5 = <MathBox color="#6366f1">1250</MathBox><Annotate>k = x·y</Annotate></MathLine>
      <MathLine size={14}>Model: b(x) = 1250/x</MathLine>
      <MathLine size={14}>At $10: 1250/10 = <MathBox>125 widgets</MathBox></MathLine>
      <MathLine size={14}>400 sold: 1250/400 = <MathBox>$3.125</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A fish population is modeled by P(t) = 150t/(0.005t + 1) + 400 where t is months after a conservation effort begins. Find P(2) and the AROC from t = 3 to t = 6.</span>} a="P(2) ≈ 697 fish, AROC ≈ 140 fish/month" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Find P(2):</b></MathLine>
      <MathLine size={14}>P(2) = 150(2)/(0.005(2)+1) + 400 = 300/1.01 + 400 ≈ 297.0 + 400</MathLine>
      <Ans>P(2) ≈ 697 fish</Ans>
      <MathLine size={14} color="#4338ca"><b>AROC from t=3 to t=6:</b></MathLine>
      <MathLine size={14}>P(3) = 450/1.015 + 400 ≈ 843.3</MathLine>
      <MathLine size={14}>P(6) = 900/1.03 + 400 ≈ 1273.8</MathLine>
      <MathLine size={14}>AROC = (1273.8 − 843.3)/(6−3) = 430.5/3</MathLine>
      <Ans>AROC ≈ 143.5 fish/month</Ans>
    </WB>}/>,
  ]},
];

const unit2Practice = [
  { id:"2.1", problems:[
    <PQ key="1" n="1" q={<span>Given the arithmetic sequence 5, 11, 17, 23, 29, ... where a₁ = 5.<br/>a) Find the common difference d.<br/>b) Write an expression for the nth term, aₙ.<br/>c) Find the 12th term, a₁₂.</span>} a="d = 6, aₙ = 5 + 6(n−1), a₁₂ = 71" e={<WB>
      <MathLine size={14}>d = 11 − 5 = <MathBox color="#6366f1">6</MathBox><Annotate>subtract consecutive terms</Annotate></MathLine>
      <MathLine size={14}>aₙ = 5 + 6(n − 1)</MathLine>
      <MathLine size={14}>a₁₂ = 5 + 6(<MathBox color="#6366f1">12</MathBox>−1) = 5 + 6(11) = 5 + 66</MathLine>
      <Ans>a₁₂ = 71</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>The first term of an arithmetic sequence is a₁ = −7 and the common difference is d = 4. What is the 15th term of the sequence?</span>} a="a₁₅ = 49" e={<WB>
      <FmUsed>aₙ = a₁ + d(n − 1)</FmUsed>
      <MathLine>a₁₅ = −7 + 4(<MathBox color="#6366f1">15</MathBox> − 1) = −7 + 4(14)</MathLine>
      <MathLine indent={24}>= −7 + <MathBox color="#22c55e">56</MathBox></MathLine>
      <Ans>a₁₅ = 49</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Given the geometric sequence 4, 12, 36, 108, ... where g₁ = 4.<br/>a) Find the common ratio r.<br/>b) Write an expression for the nth term, gₙ.<br/>c) Find the 6th term, g₆.</span>} a="r = 3, gₙ = 4·3⁽ⁿ⁻¹⁾, g₆ = 972" e={<WB>
      <MathLine size={14}>r = 12 ÷ 4 = <MathBox color="#6366f1">3</MathBox><Annotate>divide consecutive terms</Annotate></MathLine>
      <MathLine size={14}>gₙ = 4 · 3⁽ⁿ⁻¹⁾</MathLine>
      <MathLine size={14}>g₆ = 4 · 3⁵ = 4 · 243</MathLine>
      <Ans>g₆ = 972</Ans>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>The first term of a geometric sequence is g₁ = −5 and the common ratio is r = −3. What is the 5th term of the sequence? Show all exponent work carefully.</span>} a="g₅ = −405" e={<WB>
      <MathLine>g₅ = −5 · (−3)⁽⁵⁻¹⁾ = −5 · (−3)⁴</MathLine>
      <Arrow text="(−3)⁴ = 81 (even power → positive!)"/>
      <MathLine indent={24}>= −5 · <MathBox color="#22c55e">81</MathBox></MathLine>
      <Ans>g₅ = −405</Ans>
    </WB>}/>,
    <PQ key="5" n="5" q={<span>Two sequence graphs are shown. Graph A shows points: (1,12), (2,10), (3,8), (4,6). Graph B shows points: (1,5), (2,10), (3,20), (4,40). Identify which is arithmetic and which is geometric, and write an expression for each.</span>} a="A: Arithmetic, aₙ = 12−2(n−1). B: Geometric, gₙ = 5·2⁽ⁿ⁻¹⁾" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Graph A (linear pattern):</b> Arithmetic</MathLine>
      <MathLine size={14}>a₁ = 12, d = 10−12 = −2</MathLine>
      <MathLine size={14}>aₙ = 12 + (−2)(n − 1) = <MathBox>12 − 2(n−1)</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Graph B (curved pattern):</b> Geometric</MathLine>
      <MathLine size={14}>g₁ = 5, r = 10/5 = 2</MathLine>
      <MathLine size={14}>gₙ = <MathBox>5 · 2⁽ⁿ⁻¹⁾</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"2.2", problems:[
    <PQ key="1" n="1" q={<span>Given an arithmetic sequence 4, ___, ___, 22, ... where a₁ = 4 and a₄ = 22, AND a linear function passing through (1, 4) and (4, 22). Find the common difference d, then write expressions for both the sequence and the linear function.</span>} a="d = 6. aₙ = 4 + 6(n−1). y = 4 + 6(x−1)" e={<WB>
      <MathLine size={14}>22 = 4 + d(4−1) → 18 = 3d → d = <MathBox color="#6366f1">6</MathBox></MathLine>
      <MathLine size={14}>Arithmetic: aₙ = 4 + 6(n − 1)</MathLine>
      <MathLine size={14}>Linear: m = d = 6 → y = 4 + 6(x − 1)</MathLine>
      <Wh>Common difference d = slope m. They're the same thing!</Wh>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Given a geometric sequence 5, ___, ___, 40, ... where g₁ = 5 and g₄ = 40, AND an exponential function passing through (1, 5) and (4, 40). Find the common ratio r, then write expressions for both the sequence and the exponential function.</span>} a="r = 2. gₙ = 5·2⁽ⁿ⁻¹⁾. y = 5·2⁽ˣ⁻¹⁾" e={<WB>
      <MathLine size={14}>40 = 5 · r³ → r³ = 8 → r = <MathBox color="#6366f1">2</MathBox></MathLine>
      <MathLine size={14}>Geometric: gₙ = 5 · 2⁽ⁿ⁻¹⁾</MathLine>
      <MathLine size={14}>Exponential: b = r = 2 → y = 5 · 2⁽ˣ⁻¹⁾</MathLine>
      <Wh>Common ratio r = base b. They're the same thing!</Wh>
    </WB>}/>,
  ]},
  { id:"2.3", problems:[
    <PQ key="1" n="1" q={<span>For f(x) = 3·2ˣ, find f(−1), f(0), and f(1). Is the function always increasing or always decreasing? Always concave up or always concave down? State the domain and range.</span>} a="3/2, 3, 6. Increasing, concave up. D: all reals, R: (0, ∞)" e={<WB>
      <MathLine size={14}>f(−1) = 3·2⁻¹ = 3·(1/2) = <MathBox>3/2</MathBox></MathLine>
      <MathLine size={14}>f(0) = 3·2⁰ = 3·1 = <MathBox>3</MathBox><Annotate>y-intercept is always "a"</Annotate></MathLine>
      <MathLine size={14}>f(1) = 3·2¹ = <MathBox>6</MathBox></MathLine>
      <MathLine size={14}>b = 2 {">"} 1, a = 3 {">"} 0 → <MathBox color="#22c55e">increasing</MathBox>, concave <MathBox color="#22c55e">up</MathBox></MathLine>
      <Ans>D: all reals · R: (0, ∞)</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Show that the output values in the table are proportional over equal-length input intervals. What is the common ratio?<br/><Tb h={["x","0","1","2","3","4"]} r={[["f(x)","5","15","45","135","405"]]}/></span>} a="Common ratio = 3" e={<WB>
      <MathLine size={14}>15/5 = <MathBox color="#22c55e">3</MathBox>, 45/15 = <MathBox color="#22c55e">3</MathBox>, 135/45 = <MathBox color="#22c55e">3</MathBox>, 405/135 = <MathBox color="#22c55e">3</MathBox></MathLine>
      <Ans>Constant ratio of 3 → exponential with base 3</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A function h has an additive transformation: h(x) = f(x) + 3. The table gives values of h(x). Find f(x) for each row by subtracting 3, then show that the ratios of consecutive f(x) values are constant to prove f is exponential.<br/><Tb h={["x","0","1","2","3"]} r={[["h(x)","5","9","21","57"]]}/></span>} a="f: 2, 6, 18, 54. Ratio = 3. f is exponential." e={<WB>
      <MathLine size={14}>f(x) = h(x) − 3 for each:<Annotate>subtract 3 from each h value</Annotate></MathLine>
      <MathLine size={14}>f: <MathBox color="#6366f1">2</MathBox>, <MathBox color="#6366f1">6</MathBox>, <MathBox color="#6366f1">18</MathBox>, <MathBox color="#6366f1">54</MathBox></MathLine>
      <MathLine size={14}>Ratios: 6/2 = <MathBox color="#22c55e">3</MathBox>, 18/6 = <MathBox color="#22c55e">3</MathBox>, 54/18 = <MathBox color="#22c55e">3</MathBox></MathLine>
      <Ans>Constant ratio → f is exponential (base 3)</Ans>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>For each exponential function, write the two limits that describe the end behavior (as x → −∞ and as x → +∞).<br/>a) f(x) = 5·4ˣ<br/>b) g(x) = −3·2ˣ<br/>c) h(x) = 6·(1/4)ˣ<br/>d) k(x) = −4·(1/5)ˣ</span>} a="a) 0, ∞  b) 0, −∞  c) ∞, 0  d) −∞, 0" e={<WB>
      <MathLine size={14}><b>a)</b> a{">"}0, b{">"}1: lim(x→−∞)=<MathBox color="#3b82f6">0</MathBox>, lim(x→+∞)=<MathBox color="#3b82f6">∞</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> a{"<"}0, b{">"}1: lim(x→−∞)=<MathBox color="#ef4444">0</MathBox>, lim(x→+∞)=<MathBox color="#ef4444">−∞</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> a{">"}0, b{"<"}1: lim(x→−∞)=<MathBox color="#22c55e">∞</MathBox>, lim(x→+∞)=<MathBox color="#22c55e">0</MathBox></MathLine>
      <MathLine size={14}><b>d)</b> a{"<"}0, b{"<"}1: lim(x→−∞)=<MathBox color="#f59e0b">−∞</MathBox>, lim(x→+∞)=<MathBox color="#f59e0b">0</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"2.4", problems:[
    <PQ key="1" n="1" q={<span>Rewrite each expression as a single power with base 3 using the product property bᵐ · bⁿ = b⁽ᵐ⁺ⁿ⁾.<br/>a) 3⁴ · 3²<br/>b) 3ˣ · 3⁷<br/>c) 9 · 3ˣ<br/>d) 27 · 3⁴</span>} a="a) 3⁶  b) 3⁽ˣ⁺⁷⁾  c) 3⁽ˣ⁺²⁾  d) 3⁷" e={<WB>
      <MathLine size={14}><b>a)</b> 3⁴ · 3² = 3⁽⁴⁺²⁾ = <MathBox color="#22c55e">3⁶</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> 3ˣ · 3⁷ = <MathBox color="#22c55e">3⁽ˣ⁺⁷⁾</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> 9 = 3² → 3² · 3ˣ = <MathBox color="#22c55e">3⁽ˣ⁺²⁾</MathBox></MathLine>
      <MathLine size={14}><b>d)</b> 27 = 3³ → 3³ · 3⁴ = <MathBox color="#22c55e">3⁷</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Use the power property (bᵐ)ⁿ = b⁽ᵐⁿ⁾ to rewrite each expression. For parts c and d, rewrite as a single base raised to x.<br/>a) (4³)⁵<br/>b) (3ˣ)⁴<br/>c) (2ˣ)⁴ = ?ˣ<br/>d) (5ˣ)³ = ?ˣ</span>} a="a) 4¹⁵  b) 3⁴ˣ  c) 16ˣ  d) 125ˣ" e={<WB>
      <MathLine size={14}><b>a)</b> (4³)⁵ = 4⁽³ˣ⁵⁾ = <MathBox color="#22c55e">4¹⁵</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> (3ˣ)⁴ = <MathBox color="#22c55e">3⁴ˣ</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> 2⁴ˣ = (2⁴)ˣ = <MathBox color="#22c55e">16ˣ</MathBox><Annotate>horiz dilation = base change!</Annotate></MathLine>
      <MathLine size={14}><b>d)</b> 5³ˣ = (5³)ˣ = <MathBox color="#22c55e">125ˣ</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Using the product property, show that g(x) = 3⁽ˣ⁺⁴⁾ and h(x) = 81 · 3ˣ are the same function. Then explain: what vertical transformation is equivalent to shifting the graph of 3ˣ four units to the left?</span>} a="3⁽ˣ⁺⁴⁾ = 81·3ˣ ✓. Left 4 = vertical dilation by a factor of 81." e={<WB>
      <MathLine>3⁽ˣ⁺⁴⁾ = 3ˣ · 3⁴ = 3ˣ · <MathBox color="#6366f1">81</MathBox> = 81 · 3ˣ ✓</MathLine>
      <Ans>Shifting left 4 = multiplying output by 3⁴ = 81</Ans>
    </WB>}/>,
  ]},
  { id:"2.5", problems:[
    <PQ key="1" n="1" q={<span>The function f is decreasing. Without using technology, write an exponential function to model the data in the table.<br/><Tb h={["x","0","1","2","3"]} r={[["f(x)","40","20","10","5"]]}/></span>} a="f(x) = 40·(1/2)ˣ" e={<WB>
      <MathLine size={14}>Ratios: 20/40 = <MathBox color="#6366f1">1/2</MathBox>, 10/20 = <MathBox color="#6366f1">1/2</MathBox>, 5/10 = <MathBox color="#6366f1">1/2</MathBox></MathLine>
      <MathLine size={14}>r = 1/2, a = f(0) = 40</MathLine>
      <Ans>f(x) = 40·(1/2)ˣ</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>An exponential function has the form g(x) = 4·bˣ + d and contains the input-output pairs (0, 9) and (2, 41). Write two equations using these points, then solve for b and d.</span>} a="b = 3, d = 5. g(x) = 4·3ˣ + 5" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Point (0, 9):</b></MathLine>
      <MathLine size={14}>9 = 4·b⁰ + d = 4 + d → <MathBox color="#6366f1">d = 5</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Point (2, 41):</b></MathLine>
      <MathLine size={14}>41 = 4b² + 5 → 36 = 4b² → b² = 9 → <MathBox color="#6366f1">b = 3</MathBox></MathLine>
      <Ans>g(x) = 4·3ˣ + 5</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A population of 500 bacteria triples every day. Let b(t) be the number of bacteria at time t.<br/>a) Write an exponential model b(t) where t is in days.<br/>b) Find the number of bacteria after 4 days.<br/>c) When will the population reach 50,000?<br/>d) Rewrite the model so that t is measured in weeks.</span>} a="a) 500·3ᵗ  b) 40,500  c) ≈ 4.19 days  d) 500·2187ᵗ" e={<WB>
      <MathLine size={14}><b>a)</b> b(t) = 500 · 3ᵗ</MathLine>
      <MathLine size={14}><b>b)</b> b(4) = 500 · 3⁴ = 500 · 81 = <MathBox>40,500</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> 50000 = 500·3ᵗ → 100 = 3ᵗ → t = log₃(100) ≈ <MathBox>4.19 days</MathBox></MathLine>
      <MathLine size={14}><b>d)</b> b(t) = 500·(3⁷)ᵗ = <MathBox>500·2187ᵗ</MathBox><Annotate>t in weeks</Annotate></MathLine>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>A radioactive substance has a half-life of 6 hours. Starting with 200 mg, write the exponential model A(t) = A₀·eᵏᵗ. Find k, then predict the amount remaining after 10 hours.</span>} a="k ≈ −0.1155. A(10) ≈ 63.0 mg" e={<WB>
      <MathLine size={14}>A(t) = 200·eᵏᵗ. At t=6: 100 = 200·e⁶ᵏ</MathLine>
      <MathLine size={14}>1/2 = e⁶ᵏ → 6k = ln(1/2) → k = ln(1/2)/6</MathLine>
      <MathLine size={14}>k ≈ <MathBox color="#6366f1">−0.1155</MathBox></MathLine>
      <MathLine size={14}>A(10) = 200·e⁻¹·¹⁵⁵ ≈ 200 · 0.3150</MathLine>
      <Ans>A(10) ≈ 63.0 mg</Ans>
    </WB>}/>,
  ]},
  { id:"2.6", problems:[
    <PQ key="1" n="1" q={<span>For each function in the table, determine whether it is linear, quadratic, or exponential. Show your work by testing first differences, second differences, or output ratios.<br/><Tb h={["x","0","1","2","3"]} r={[["f(x)","1","3","9","27"],["g(x)","2","5","8","11"],["h(x)","1","0","−3","−8"]]}/></span>} a="f: Exponential  g: Linear  h: Quadratic" e={<WB>
      <MathLine size={14} color="#4338ca"><b>f:</b> ratios 3/1=3, 9/3=3, 27/9=3 → <MathBox color="#22c55e">Exponential</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>g:</b> 1st diff: 3, 3, 3 → <MathBox color="#22c55e">Linear</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>h:</b> 1st diff: −1, −3, −5. 2nd diff: −2, −2 → <MathBox color="#22c55e">Quadratic</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A residual plot for a linear regression model shows a clear U-shaped curve. Is the linear model appropriate for this data? What type of model might be a better fit? If the residual plot showed points scattered randomly with no pattern, what would that tell you about the model?</span>} a="U-shape: NOT appropriate (try quadratic). Random: model IS appropriate." e={<WB>
      <MathLine size={14}><MathBox color="#ef4444">U-shape</MathBox> = pattern → model NOT appropriate<Annotate color="#ef4444">try quadratic</Annotate></MathLine>
      <MathLine size={14}><MathBox color="#22c55e">Random scatter</MathBox> = no pattern → model IS appropriate ✓</MathLine>
    </WB>}/>,
  ]},
  { id:"2.7", problems:[
    <PQ key="1" n="1" q={<span>Given f(x) = x² and g(x) = 3x + 1.<br/>a) Find f(g(x)) and simplify.<br/>b) Evaluate f(g(2)).<br/>c) Find g(f(x)) and simplify.<br/>d) Evaluate g(f(3)).<br/>e) Is f(g(2)) equal to g(f(2))? What does this tell you?</span>} a="a) (3x+1)²  b) 49  c) 3x²+1  d) 28  e) No (49 ≠ 13)" e={<WB>
      <MathLine size={14} color="#4338ca"><b>f(g(x))</b> = f(3x+1) = (3x+1)²</MathLine>
      <MathLine size={14} color="#4338ca"><b>f(g(2))</b>: g(2)=7, f(7)=49 → <MathBox>49</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>g(f(x))</b> = g(x²) = 3x²+1</MathLine>
      <MathLine size={14} color="#4338ca"><b>g(f(3))</b>: f(3)=9, g(9)=28 → <MathBox>28</MathBox></MathLine>
      <MathLine size={14}><b>g(f(2))</b>: f(2)=4, g(4)=13. <MathBox color="#ef4444">49 ≠ 13</MathBox> → order matters!</MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>If h(x) = f(g(x)), decompose h(x) = (4x + 7)⁵ into two simpler functions f and g. Identify the "inside" and "outside" functions, then verify that f(g(x)) = h(x).</span>} a="g(x) = 4x + 7, f(x) = x⁵" e={<WB>
      <MathLine size={14}>Inside: g(x) = <MathBox color="#6366f1">4x + 7</MathBox><Annotate>what's "inside"</Annotate></MathLine>
      <MathLine size={14}>Outside: f(x) = <MathBox color="#ec4899">x⁵</MathBox><Annotate color="#ec4899">what you do to the inside</Annotate></MathLine>
      <MathLine size={14}>Check: f(g(x)) = (4x+7)⁵ ✓</MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Use the tables for f and g to evaluate:<br/><Tb h={["x","0","1","2","3"]} r={[["f(x)","3","1","0","2"],["g(x)","2","0","3","1"]]}/><br/>a) f(g(1))  b) g(f(2))  c) f(f(3))  d) g(g(0))</span>} a="a) 3  b) 2  c) 0  d) 3" e={<WB>
      <MathLine size={14}><b>a)</b> g(1)=0, f(0)=3 → <MathBox color="#22c55e">f(g(1))=3</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> f(2)=0, g(0)=2 → <MathBox color="#22c55e">g(f(2))=2</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> f(3)=2, f(2)=0 → <MathBox color="#22c55e">f(f(3))=0</MathBox></MathLine>
      <MathLine size={14}><b>d)</b> g(0)=2, g(2)=3 → <MathBox color="#22c55e">g(g(0))=3</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Using the two tables below, find f(g(5)) and g(f(0)). Remember to evaluate the inside function first.<br/><Tb h={["x","f(x)"]} r={[["0","2"],["1","−3"],["2","7"],["3","1"]]}/><Tb h={["x","g(x)"]} r={[["−3","0"],["2","3"],["5","1"],["7","2"]]}/></span>} a="f(g(5)) = −3, g(f(0)) = 3" e={<WB>
      <MathLine size={14} color="#4338ca"><b>f(g(5)):</b></MathLine>
      <MathLine size={14}>g(5) = <MathBox color="#6366f1">1</MathBox> → f(1) = <MathBox color="#22c55e">−3</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>g(f(0)):</b></MathLine>
      <MathLine size={14}>f(0) = <MathBox color="#6366f1">2</MathBox> → g(2) = <MathBox color="#22c55e">3</MathBox></MathLine>
      <Tp>Always inside out! Inner function first, then outer.</Tp>
    </WB>}/>,
  ]},
  { id:"2.8", problems:[
    <PQ key="1" n="1" q={<span>Find the inverse of f(x) = 3x² − 2 for x ≥ 0. Show the swap-and-solve steps. State the domain of f⁻¹.</span>} a="f⁻¹(x) = √((x+2)/3), x ≥ −2" e={<WB>
      <MathLine size={14}>y = 3x² − 2</MathLine>
      <Arrow text="Swap x and y"/>
      <MathLine size={14}>x = 3y² − 2</MathLine>
      <Arrow text="Solve for y"/>
      <MathLine size={14}>x + 2 = 3y² → y² = (x+2)/3</MathLine>
      <MathLine size={14}>y = √((x+2)/3)<Annotate>+ root since x ≥ 0</Annotate></MathLine>
      <Ans>f⁻¹(x) = √((x+2)/3), x ≥ −2</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Find the inverse of g(x) = 5x/(x − 3) for x ≠ 3. Swap x and y, multiply out the denominator, collect y terms on one side, and factor.</span>} a="g⁻¹(x) = 3x/(x − 5), x ≠ 5" e={<WB>
      <MathLine size={14}>x = 5y/(y−3)</MathLine>
      <Arrow text="Multiply both sides by (y−3)"/>
      <MathLine size={14}>x(y−3) = 5y → xy − 3x = 5y</MathLine>
      <Arrow text="Collect y terms"/>
      <MathLine size={14}>xy − 5y = 3x → y(x−5) = 3x</MathLine>
      <Ans>g⁻¹(x) = 3x/(x−5)</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Show that f(x) = (4x − 3)/5 and g(x) = (5x + 3)/4 are inverse functions by computing both f(g(x)) and g(f(x)) and verifying each equals x.</span>} a="Both compositions = x ✓" e={<WB>
      <MathLine size={14} color="#4338ca"><b>f(g(x)):</b></MathLine>
      <MathLine size={14}>(4·(5x+3)/4 − 3)/5 = ((5x+3)−3)/5 = 5x/5 = <MathBox color="#22c55e">x</MathBox> ✓</MathLine>
      <MathLine size={14} color="#4338ca"><b>g(f(x)):</b></MathLine>
      <MathLine size={14}>(5·(4x−3)/5 + 3)/4 = ((4x−3)+3)/4 = 4x/4 = <MathBox color="#22c55e">x</MathBox> ✓</MathLine>
    </WB>}/>,
    <PQ key="4" n="4" q={<span>The table gives values for the invertible function y = f(x). Write a complete table of values for f⁻¹(x) by swapping the input and output rows.<br/><Tb h={["x","−2","0","1","3","5","7"]} r={[["f(x)","−9","−5","0","4","6","10"]]}/></span>} a="x: −9, −5, 0, 4, 6, 10 → f⁻¹: −2, 0, 1, 3, 5, 7" e={<WB>
      <MathLine size={14}>Swap every (input, output) → (output, input):</MathLine>
      <MathLine size={14}>(−2,−9) → (<MathBox color="#6366f1">−9</MathBox>, −2)</MathLine>
      <MathLine size={14}>(0,−5) → (<MathBox color="#6366f1">−5</MathBox>, 0)</MathLine>
      <MathLine size={14}>(1,0) → (<MathBox color="#6366f1">0</MathBox>, 1) ... and so on</MathLine>
    </WB>}/>,
  ]},
  { id:"2.9", problems:[
    <PQ key="1" n="1" q={<span>a) Write 5³ = 125 in logarithmic form.<br/>b) Write log₄(64) = 3 in exponential form.<br/>c) Evaluate without a calculator: log₂(32), log₃(27), log(1000), and log(1/10).</span>} a="a) log₅(125) = 3  b) 4³ = 64  c) 5, 3, 3, −1" e={<WB>
      <MathLine size={14}><b>a)</b> 5³=125 → <MathBox color="#22c55e">log₅(125) = 3</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> log₄(64)=3 → <MathBox color="#22c55e">4³ = 64</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> 2⁵=32 → <MathBox>5</MathBox> · 3³=27 → <MathBox>3</MathBox> · 10³=1000 → <MathBox>3</MathBox> · 10⁻¹=1/10 → <MathBox>−1</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Evaluate each logarithm using technology (calculator). Round to 3 decimal places.<br/>a) log₃(40)<br/>b) log₆(11)<br/>c) log(250)<br/>d) log(0.75)</span>} a="a) 3.358  b) 1.338  c) 2.398  d) −0.125" e={<WB>
      <FmUsed>Change of base: log_b(x) = log(x)/log(b)</FmUsed>
      <MathLine size={14}>log₃(40) = log(40)/log(3) ≈ <MathBox>3.358</MathBox></MathLine>
      <MathLine size={14}>log₆(11) = log(11)/log(6) ≈ <MathBox>1.338</MathBox></MathLine>
      <MathLine size={14}>log(250) ≈ <MathBox>2.398</MathBox> · log(0.75) ≈ <MathBox>−0.125</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Evaluate each logarithm without a calculator. Think: "b raised to what power gives me x?"<br/>a) log₅(125)  b) log₂(1/8)  c) log₇(1)  d) log₄(2)  e) ln(e³)</span>} a="a) 3  b) −3  c) 0  d) 1/2  e) 3" e={<WB>
      <MathLine size={14}><b>a)</b> 5³ = 125 → <MathBox>3</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> 2⁻³ = 1/8 → <MathBox>−3</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> 7⁰ = 1 → <MathBox>0</MathBox><Annotate>log of 1 is ALWAYS 0</Annotate></MathLine>
      <MathLine size={14}><b>d)</b> 4^(1/2) = √4 = 2 → <MathBox>1/2</MathBox></MathLine>
      <MathLine size={14}><b>e)</b> e³ → ln(e³) = <MathBox>3</MathBox><Annotate>ln and e cancel</Annotate></MathLine>
    </WB>}/>,
  ]},
  { id:"2.10", problems:[
    <PQ key="1" n="1" q={<span>Make a table of values for f(x) = log₃(x) using x = 1/9, 1/3, 1, 3, 9, and 27. For each value, ask yourself: "3 raised to what power gives me this x?"</span>} a="f(x): −2, −1, 0, 1, 2, 3" e={<WB>
      <MathLine size={14}>3⁻² = 1/9 → log₃(1/9) = <MathBox>−2</MathBox></MathLine>
      <MathLine size={14}>3⁻¹ = 1/3 → log₃(1/3) = <MathBox>−1</MathBox></MathLine>
      <MathLine size={14}>3⁰ = 1 → log₃(1) = <MathBox>0</MathBox><Annotate>log of 1 is ALWAYS 0</Annotate></MathLine>
      <MathLine size={14}>3¹ = 3 → log₃(3) = <MathBox>1</MathBox><Annotate>log base b of b = 1</Annotate></MathLine>
      <MathLine size={14}>3² = 9 → log₃(9) = <MathBox>2</MathBox> · 3³ = 27 → log₃(27) = <MathBox>3</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"2.11", problems:[
    <PQ key="1" n="1" q={<span>For f(x) = −3·log₂(x), find f(1/2), f(1), f(2), and f(4). Is f always increasing or always decreasing? Always concave up or always concave down? State the domain and range.</span>} a="3, 0, −3, −6. Decreasing, concave up. D: (0, ∞), R: all reals" e={<WB>
      <MathLine size={14}>f(1/2) = −3·log₂(1/2) = −3·(−1) = <MathBox>3</MathBox></MathLine>
      <MathLine size={14}>f(1) = −3·log₂(1) = −3·0 = <MathBox>0</MathBox></MathLine>
      <MathLine size={14}>f(2) = −3·log₂(2) = −3·1 = <MathBox>−3</MathBox></MathLine>
      <MathLine size={14}>f(4) = −3·log₂(4) = −3·2 = <MathBox>−6</MathBox></MathLine>
      <MathLine size={14}>a{"<"}0, b{">"}1 → <MathBox color="#ef4444">decreasing</MathBox>, concave <MathBox color="#22c55e">up</MathBox>. D:(0,∞), R: all reals</MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For each logarithmic function, write the two limits that describe the end behavior (as x → 0⁺ and as x → ∞).<br/>a) f(x) = 3·log₄(x)<br/>b) g(x) = −5·log₂(x)<br/>c) h(x) = 2·log_(1/3)(x)</span>} a="a) −∞, +∞  b) +∞, −∞  c) +∞, −∞" e={<WB>
      <MathLine size={14}><b>a)</b> a{">"}0, b{">"}1: x→0⁺ gives <MathBox color="#ef4444">−∞</MathBox>, x→∞ gives <MathBox color="#22c55e">+∞</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> a{"<"}0, b{">"}1: x→0⁺ gives <MathBox color="#22c55e">+∞</MathBox>, x→∞ gives <MathBox color="#ef4444">−∞</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> a{">"}0, 0{"<"}b{"<"}1: x→0⁺ gives <MathBox color="#22c55e">+∞</MathBox>, x→∞ gives <MathBox color="#ef4444">−∞</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"2.12", problems:[
    <PQ key="1" n="1" q={<span>Rewrite each logarithmic expression in an equivalent form.<br/>a) Combine into a single log: log₃(x) + log₃(5)<br/>b) Expand completely: log₄(x³y²)<br/>c) Combine into a single log: 2·log(x) − 3·log(y)<br/>d) Expand completely: log₇(x²/(4z³))</span>} a="a) log₃(5x)  b) 3log₄x + 2log₄y  c) log(x²/y³)  d) 2log₇x − log₇4 − 3log₇z" e={<WB>
      <MathLine size={14}><b>a)</b> Product: log₃(x·5) = <MathBox color="#22c55e">log₃(5x)</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> Power+product: <MathBox color="#22c55e">3log₄(x) + 2log₄(y)</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> Power→quotient: log(x²) − log(y³) = <MathBox color="#22c55e">log(x²/y³)</MathBox></MathLine>
      <MathLine size={14}><b>d)</b> <MathBox color="#22c55e">2log₇x − log₇4 − 3log₇z</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>a) Rewrite log₇(x) using base 10 with the change of base formula.<br/>b) Rewrite log₇(x) using base 2 with the change of base formula.<br/>c) If f(x) = log₃(x) and g(x) = log₂₇(x), express g(x) as a vertical dilation of f(x). What is the dilation factor?</span>} a="a) log(x)/log(7)  b) log₂(x)/log₂(7)  c) g(x) = (1/3)·f(x)" e={<WB>
      <FmUsed>log_b(x) = log_a(x) / log_a(b)</FmUsed>
      <MathLine size={14}><b>a)</b> log₇(x) = <MathBox color="#22c55e">log(x)/log(7)</MathBox></MathLine>
      <MathLine size={14}><b>b)</b> log₇(x) = <MathBox color="#22c55e">log₂(x)/log₂(7)</MathBox></MathLine>
      <MathLine size={14}><b>c)</b> log₂₇(x) = log₃(x)/log₃(27) = log₃(x)/3 = <MathBox color="#22c55e">(1/3)f(x)</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"2.13", problems:[
    <PQ key="1" n="1" q={<span>Solve each exponential equation for x.<br/>a) 5 · 3⁽ˣ⁻²⁾ = 135<br/>b) e²ˣ − 5eˣ + 6 = 0 (Hint: let u = eˣ to make it a quadratic in u)</span>} a="a) x = 5  b) x = ln 2 or x = ln 3" e={<WB>
      <MathLine size={14} color="#4338ca"><b>a)</b></MathLine>
      <MathLine size={14}>3⁽ˣ⁻²⁾ = 135/5 = 27 = 3³</MathLine>
      <MathLine size={14}>x − 2 = 3 → <MathBox>x = 5</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>b)</b> Let u = eˣ:</MathLine>
      <MathLine size={14}>u² − 5u + 6 = 0 → (u−2)(u−3) = 0</MathLine>
      <MathLine size={14}>eˣ = 2 → x = <MathBox>ln 2</MathBox> · eˣ = 3 → x = <MathBox>ln 3</MathBox></MathLine>
      <W>eˣ is always positive, so both solutions are valid here!</W>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Solve each logarithmic equation for x. Check for extraneous solutions by verifying that all log arguments are positive.<br/>a) log(x) + log(5) = 2<br/>b) log₃(2x + 1) − log₃(x − 1) = log₃(5)</span>} a="a) x = 20  b) x = 2" e={<WB>
      <MathLine size={14} color="#4338ca"><b>a)</b></MathLine>
      <MathLine size={14}>log(5x) = 2 → 5x = 10² = 100 → <MathBox>x = 20</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>b)</b></MathLine>
      <MathLine size={14}>log₃((2x+1)/(x−1)) = log₃(5)</MathLine>
      <Arrow text="If log₃(A) = log₃(B) then A = B"/>
      <MathLine size={14}>(2x+1)/(x−1) = 5 → 2x+1 = 5x−5 → 6 = 3x</MathLine>
      <MathLine size={14}><MathBox>x = 2</MathBox><Annotate color="#22c55e">Check: x−1 = 1 {">"} 0 ✓</Annotate></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Find the inverse function for each.<br/>a) f(x) = 2 · 4⁽ˣ⁻³⁾ + 1<br/>b) g(x) = (1/3) · ln(x + 2) − 4</span>} a="a) f⁻¹(x) = log₄((x−1)/2) + 3  b) g⁻¹(x) = e³⁽ˣ⁺⁴⁾ − 2" e={<WB>
      <MathLine size={14} color="#4338ca"><b>a)</b> y = 2·4⁽ˣ⁻³⁾+1</MathLine>
      <MathLine size={14}>y−1 = 2·4⁽ˣ⁻³⁾ → (y−1)/2 = 4⁽ˣ⁻³⁾</MathLine>
      <MathLine size={14}>log₄((y−1)/2) = x−3</MathLine>
      <Ans>f⁻¹(x) = log₄((x−1)/2) + 3</Ans>
      <MathLine size={14} color="#4338ca"><b>b)</b> y = (1/3)ln(x+2)−4</MathLine>
      <MathLine size={14}>y+4 = (1/3)ln(x+2) → 3(y+4) = ln(x+2)</MathLine>
      <MathLine size={14}>e^(3y+12) = x+2</MathLine>
      <Ans>g⁻¹(x) = e^(3x+12) − 2</Ans>
    </WB>}/>,
  ]},
  { id:"2.14", problems:[
    <PQ key="1" n="1" q={<span>The function f is increasing. The table below gives values for f at selected values of x. Write a logarithmic function in the form f(x) = a · log_b(x) to model the data.<br/><Tb h={["x","1","3","9","27","81"]} r={[["f(x)","0","2","4","6","8"]]}/></span>} a="f(x) = 2 · log₃(x)" e={<WB>
      <MathLine size={14}>Outputs add <MathBox color="#6366f1">2</MathBox> each time → a = 2</MathLine>
      <MathLine size={14}>Inputs multiply by <MathBox color="#6366f1">3</MathBox> each time → base = 3</MathLine>
      <MathLine size={14}>Check: 2·log₃(9) = 2·2 = 4 ✓</MathLine>
      <Ans>f(x) = 2·log₃(x)</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A population of 600 bacteria doubles every day. The exponential model is b = 600 · 2ᵗ where t is in days.<br/>a) Write the inverse function f(b) that gives time in days as a function of population b.<br/>b) How many days does it take for the population to reach 15,000?</span>} a="a) f(b) = log₂(b/600)  b) ≈ 4.64 days" e={<WB>
      <MathLine size={14}>b = 600·2ᵗ</MathLine>
      <Arrow text="Solve for t (reverse the operations)"/>
      <MathLine size={14}>b/600 = 2ᵗ → t = log₂(b/600)</MathLine>
      <Ans>f(b) = log₂(b/600)</Ans>
      <MathLine size={14}>f(15000) = log₂(15000/600) = log₂(25) ≈ <MathBox>4.64 days</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>The number of downloads D of an app is modeled by D(t) = 50·e^(0.3t) where t is months since launch.<br/>a) Write the inverse function t(D) that gives time as a function of downloads.<br/>b) How many months until the app reaches 10,000 downloads?</span>} a="a) t(D) = ln(D/50)/0.3  b) ≈ 17.66 months" e={<WB>
      <MathLine size={14}>D = 50·e^(0.3t)</MathLine>
      <Arrow text="Divide by 50"/>
      <MathLine size={14}>D/50 = e^(0.3t)</MathLine>
      <Arrow text="Take ln of both sides"/>
      <MathLine size={14}>ln(D/50) = 0.3t → t = ln(D/50)/0.3</MathLine>
      <Ans>t(D) = ln(D/50) / 0.3</Ans>
      <MathLine size={14}>t(10000) = ln(10000/50)/0.3 = ln(200)/0.3 ≈ 5.298/0.3 ≈ <MathBox>17.66 months</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"2.15", problems:[
    <PQ key="1" n="1" q={<span>Given the exponential function f(x) = 5 · 3ˣ. Write the corresponding linear model y = (log b)x + log a for the semi-log plot. Then compute the slope and y-intercept as decimals rounded to 3 places.</span>} a="y = 0.477x + 0.699" e={<WB>
      <FmUsed>y = (log b)x + log a</FmUsed>
      <MathLine size={14}>a = 5, b = 3</MathLine>
      <MathLine size={14}>Slope = log(3) ≈ <MathBox color="#6366f1">0.477</MathBox></MathLine>
      <MathLine size={14}>y-int = log(5) ≈ <MathBox color="#6366f1">0.699</MathBox></MathLine>
      <Ans>y = 0.477x + 0.699</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>On a semi-log plot, the points (6, 80) and (12, 320) are visible. The data shows that the bacteria population quadruples every 6 days. Using the model B(t) = a · 4^(t/6) and the point (6, 80), find the initial value a and write the complete model.</span>} a="a = 20. B(t) = 20 · 4^(t/6)" e={<WB>
      <MathLine size={14}>B(6) = a·4^(6/6) = a·4¹ = 4a</MathLine>
      <Arrow text="Use point (6, 80)"/>
      <MathLine size={14}>4a = 80 → a = <MathBox color="#6366f1">20</MathBox></MathLine>
      <Ans>B(t) = 20·4^(t/6)</Ans>
      <MathLine size={14}>Check: B(12) = 20·4² = 20·16 = 320 ✓</MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A table of values is shown. Plot the data on a semi-log plot (y-axis logarithmic). Do the points appear linear? If so, an exponential model is appropriate. If not, explain why.<br/><Tb h={["x","0","1","2","3","4"]} r={[["f(x)","0.5","2","50","400","750"]]}/></span>} a="Not linear → exponential model NOT appropriate" e={<WB>
      <MathLine size={14}>Plot (x, log f(x)): (0, −0.3), (1, 0.3), (2, 1.7), (3, 2.6), (4, 2.9)</MathLine>
      <MathLine size={14}>The points curve — they are NOT linear on the semi-log plot</MathLine>
      <Ans>Exponential model is NOT appropriate (curved on semi-log)</Ans>
      <Tp>If the semi-log plot is NOT linear, the data does not follow an exponential pattern. Try a different model type (polynomial, logistic, etc.).</Tp>
    </WB>}/>,
  ]},
];
// ══════════════════════════════════════════════════
//  UNIT 3 TOPICS
// ══════════════════════════════════════════════════
const unit3Topics = [
  { id:"3.1", name:"Periodic Phenomena", slides:[
    { title:"Concept — Periodic Functions", content:<div>
      <Fm label="Definition">A periodic function repeats its output values over successive equal-width intervals of input values</Fm>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Key Properties</Tt><Sm>
        • As input values increase, the output values demonstrate a <B c="#92400e">repeating pattern</B><br/>
        • This pattern occurs over successive <B c="#92400e">equal-width intervals</B><br/>
        • The graph can be constructed from a <B c="#92400e">single cycle</B>
      </Sm></Box>
      <Fm label="Period">The smallest positive value k such that f(θ + k) = f(θ) for all θ in the domain</Fm>
      <svg width="100%" height="80" viewBox="0 0 340 80">
        <line x1="10" y1="40" x2="330" y2="40" stroke="#ddd" strokeWidth="1"/>
        <path d="M 10 40 Q 30 10, 50 10 Q 70 10, 90 40 Q 110 70, 130 70 Q 150 70, 170 40 Q 190 10, 210 10 Q 230 10, 250 40 Q 270 70, 290 70 Q 310 70, 330 40" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
        <line x1="10" y1="5" x2="10" y2="75" stroke="#ddd" strokeWidth="1"/>
        <line x1="170" y1="10" x2="170" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,3"/>
        <text x="85" y="78" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="600">← one period →</text>
      </svg>
      <Tp>To find the period from a graph: measure the horizontal distance between two consecutive peaks (or two consecutive valleys, or any two corresponding points).</Tp>
      <Wh>Real-world examples: Ferris wheels, tides, seasons, sound waves, heartbeat, pendulums. Anything that cycles!</Wh>
    </div>},
    { title:"Example — Fan Blade & Periodic Graph", content:<div>
      <Q>A box fan completes 2 rotations per second. Point A is at a blade tip, 18 inches from the floor at t=0. The lowest point is 2 inches from the floor. Find P, Q, R coordinates and the period.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Period:</b> 2 rotations/sec → 1 rotation = 0.5 sec</MathLine>
        <MathLine size={14}>P = (<MathBox color="#6366f1">0, 18</MathBox>)<Annotate>starting point (max height)</Annotate></MathLine>
        <MathLine size={14}>Q = (<MathBox color="#6366f1">0.25, 2</MathBox>)<Annotate>half period later (min height)</Annotate></MathLine>
        <MathLine size={14}>R = (<MathBox color="#6366f1">0.5, 18</MathBox>)<Annotate>full period later (back to max)</Annotate></MathLine>
        <Ans>Period = 0.5 seconds</Ans>
      </WB>
    </div>},
    { title:"Example — Reading Period & Predicting Values", content:<div>
      <Q>A periodic function has period 4. Find f(10) and f(12).</Q>
      <WB>
        <MathLine size={14}>Period = 4, so f(x+4) = f(x) for all x</MathLine>
        <MathLine size={14}>f(10) = f(10−4) = f(6) = f(6−4) = f(2) = <MathBox color="#22c55e">−2</MathBox></MathLine>
        <MathLine size={14}>f(12) = f(12−4) = f(8) = f(8−4) = f(4) = f(4−4) = f(0) = <MathBox color="#22c55e">0</MathBox></MathLine>
      </WB>
      <Tp>To evaluate f at large inputs: keep subtracting the period until you're back in the first cycle!</Tp>
    </div>},
  ]},
  { id:"3.2", name:"Sine, Cosine, & Tangent", slides:[
    { title:"Concept — Angles, Radians, & the Unit Circle", content:<div>
      <Fm label="Standard Position">Vertex at origin, initial side on positive x-axis, terminal side rotates counterclockwise (positive) or clockwise (negative)</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Radian Measure</Tt><Sm>
        A <B>radian</B> is the ratio of arc length to radius: θ = arclength / radius.<br/>
        On a <B>unit circle</B> (radius = 1), the radian measure equals the arc length.<br/><br/>
        <B>Key conversions:</B> π radians = 180° · 2π radians = 360°<br/>
        <B>Quadrantal angles:</B> 0, π/2, π, 3π/2, 2π
      </Sm></Box>
      <svg width="100%" height="110" viewBox="0 0 280 110">
        <circle cx="110" cy="55" r="45" fill="none" stroke="#6366f1" strokeWidth="2"/>
        <line x1="110" y1="55" x2="155" y2="55" stroke="#333" strokeWidth="1.5"/>
        <line x1="110" y1="55" x2="142" y2="23" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="155" cy="55" r="3" fill="#333"/><text x="160" y="58" fontSize="9" fill="#333">(1,0)</text>
        <circle cx="110" cy="10" r="3" fill="#333"/><text x="115" y="13" fontSize="9" fill="#333">(0,1)</text>
        <circle cx="65" cy="55" r="3" fill="#333"/><text x="40" y="58" fontSize="9" fill="#333">(−1,0)</text>
        <circle cx="110" cy="100" r="3" fill="#333"/><text x="115" y="108" fontSize="9" fill="#333">(0,−1)</text>
        <text x="130" y="48" fontSize="9" fill="#ef4444">θ</text>
        <text x="200" y="20" fontSize="11" fill="#4338ca" fontWeight="700">Unit Circle</text>
        <text x="200" y="35" fontSize="10" fill="#333">sin θ = y-coord</text>
        <text x="200" y="50" fontSize="10" fill="#333">cos θ = x-coord</text>
        <text x="200" y="65" fontSize="10" fill="#333">tan θ = y/x = slope</text>
        <text x="200" y="85" fontSize="10" fill="#ef4444">tan θ = sin θ / cos θ</text>
      </svg>
    </div>},
    { title:"Concept — Sine, Cosine, and Tangent Definitions", content:<div>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">For ANY Circle (radius r)</Tt><Sm>
        <B c="#166534">sin θ = y/r</B> (vertical displacement ÷ radius)<br/>
        <B c="#166534">cos θ = x/r</B> (horizontal displacement ÷ radius)<br/>
        <B c="#166534">tan θ = y/x = sin θ / cos θ</B> (slope of terminal side)<br/><br/>
        Equivalently: <B>x = r·cos θ</B> and <B>y = r·sin θ</B>
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">On the UNIT Circle (radius = 1)</Tt><Sm>
        sin θ = <B c="#be185d">y-coordinate</B> of point P<br/>
        cos θ = <B c="#be185d">x-coordinate</B> of point P<br/>
        tan θ = <B c="#be185d">slope</B> of the terminal side (y/x)
      </Sm></Box>
      <W>tan θ is UNDEFINED when cos θ = 0 (at θ = π/2 and θ = 3π/2). You can't divide by zero!</W>
    </div>},
    { title:"Example — Trig Ratios from a Point (Q1)", content:<div>
      <Q>Point P(3, 4) is on the terminal ray of angle θ in standard position. The radius of the circle is 5. Find sin θ, cos θ, and tan θ.</Q>
      <FmUsed>sin θ = y/r · cos θ = x/r · tan θ = y/x = sin θ/cos θ</FmUsed>
      <WB>
        <Arrow text="Step 1: Identify x, y, and r from the point and radius"/>
        <MathLine size={14}>Point P(3, 4) → x = 3, y = 4<Annotate>the coordinates</Annotate></MathLine>
        <MathLine size={14}>r = 5<Annotate>given; verify: √(3²+4²) = √(9+16) = √25 = 5 ✓</Annotate></MathLine>
        <Arrow text="Step 2: Determine the quadrant"/>
        <MathLine size={14}>x = 3 (positive), y = 4 (positive) → Point is in <MathBox color="#22c55e">Quadrant 1</MathBox></MathLine>
        <MathLine size={14}>In Q1, ALL trig functions are positive (the "A" in ASTC)</MathLine>
        <Arrow text="Step 3: Apply each trig ratio"/>
        <MathLine size={14}>sin θ = y/r = 4/5 = <MathBox color="#6366f1">4/5 = 0.8</MathBox><Annotate>vertical component ÷ radius</Annotate></MathLine>
        <MathLine size={14}>cos θ = x/r = 3/5 = <MathBox color="#6366f1">3/5 = 0.6</MathBox><Annotate>horizontal component ÷ radius</Annotate></MathLine>
        <MathLine size={14}>tan θ = y/x = 4/3 = <MathBox color="#6366f1">4/3 ≈ 1.33</MathBox><Annotate>slope of terminal ray</Annotate></MathLine>
        <Ans>sin θ = 4/5, cos θ = 3/5, tan θ = 4/3</Ans>
      </WB>
      <Wh>Think of sin as "how high up" (y), cos as "how far right" (x), and tan as the "slope" of the line from the origin to the point. Dividing by r scales everything to a unit circle.</Wh>
    </div>},
    { title:"Example — Trig Ratios from a Point (Q2)", content:<div>
      <Q>Point P(−12, 5) is on the terminal ray of angle θ. The radius is 13. Find sin θ, cos θ, and tan θ, and identify the quadrant.</Q>
      <FmUsed>sin θ = y/r · cos θ = x/r · tan θ = y/x · r is always positive</FmUsed>
      <WB>
        <Arrow text="Step 1: Identify x, y, and r"/>
        <MathLine size={14}>Point P(−12, 5) → x = −12, y = 5, r = 13</MathLine>
        <MathLine size={14}>Verify: √((−12)²+5²) = √(144+25) = √169 = 13 ✓</MathLine>
        <Arrow text="Step 2: Determine the quadrant from the signs of x and y"/>
        <MathLine size={14}>x = −12 (negative), y = 5 (positive) → <MathBox color="#ec4899">Quadrant 2</MathBox></MathLine>
        <MathLine size={14}>In Q2 (the "S" in ASTC): only <B>Sine</B> is positive, cos and tan are negative</MathLine>
        <Arrow text="Step 3: Compute each ratio — the signs follow automatically"/>
        <MathLine size={14}>sin θ = y/r = 5/13 = <MathBox color="#22c55e">5/13</MathBox><Annotate color="#22c55e">positive ✓ (y is positive)</Annotate></MathLine>
        <MathLine size={14}>cos θ = x/r = −12/13 = <MathBox color="#ef4444">−12/13</MathBox><Annotate color="#ef4444">negative ✓ (x is negative)</Annotate></MathLine>
        <MathLine size={14}>tan θ = y/x = 5/(−12) = <MathBox color="#ef4444">−5/12</MathBox><Annotate color="#ef4444">negative ✓ (opposite signs)</Annotate></MathLine>
        <Ans>sin θ = 5/13, cos θ = −12/13, tan θ = −5/12</Ans>
      </WB>
      <Tp>You don't need to memorize which functions are negative in which quadrant — the signs come naturally from the x and y values. Just plug in and the negatives take care of themselves! r is ALWAYS positive since it is a distance.</Tp>
    </div>},
  ]},
  { id:"3.3", name:"Sine & Cosine Function Values", slides:[
    { title:"Concept — Special Angles on the Unit Circle", content:<div>
      <Fm label="Key Idea">For special angles (multiples of π/6, π/4, π/3), we can find EXACT values of sin and cos</Fm>
      <Tb h={["Angle","sin θ","cos θ","Comes from"]} r={[
        ["π/6 (30°)","1/2","√3/2","30-60-90 triangle"],
        ["π/4 (45°)","√2/2","√2/2","45-45-90 triangle"],
        ["π/3 (60°)","√3/2","1/2","30-60-90 triangle"],
      ]}/>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Unit Circle Coordinates by Quadrant</Tt><Sm>
        The reference angle gives you the VALUES. The quadrant gives you the SIGNS.<br/><br/>
        <B>Q1:</B> sin +, cos + · <B>Q2:</B> sin +, cos − · <B>Q3:</B> sin −, cos − · <B>Q4:</B> sin −, cos +<br/><br/>
        Memory aid: <B>"All Students Take Calculus"</B> → All, Sin, Tan, Cos (which trig functions are positive in each quadrant)
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">For ANY Circle (not just unit circle)</Tt><Sm>
        x = r·cos θ and y = r·sin θ<br/>
        Just multiply the unit circle coordinates by the radius r!
      </Sm></Box>
      <W>Your calculator MUST be in RADIAN mode for AP Precalculus! Degree mode will give wrong answers.</W>
    </div>},
    { title:"Example — Evaluating Special Angles", content:<div>
      <Q>Evaluate without a calculator.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Multiples of π/4:</b></MathLine>
        <MathLine size={14}>sin(3π/4) = <MathBox color="#22c55e">√2/2</MathBox><Annotate>Q2: sin is positive</Annotate></MathLine>
        <MathLine size={14}>cos(5π/4) = <MathBox color="#22c55e">−√2/2</MathBox><Annotate>Q3: cos is negative</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Multiples of π/3:</b></MathLine>
        <MathLine size={14}>sin(4π/3) = <MathBox color="#22c55e">−√3/2</MathBox><Annotate>Q3: sin is negative</Annotate></MathLine>
        <MathLine size={14}>cos(π/3) = <MathBox color="#22c55e">1/2</MathBox><Annotate>Q1: cos is positive</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Multiples of π/6:</b></MathLine>
        <MathLine size={14}>sin(π/6) = <MathBox color="#22c55e">1/2</MathBox> · cos(5π/6) = <MathBox color="#22c55e">−√3/2</MathBox> · sin(−7π/6) = <MathBox color="#22c55e">1/2</MathBox></MathLine>
      </WB>
    </div>},
    { title:"Example — Coordinates on a Circle of Radius 8", content:<div>
      <Q>An angle of π/4 radians in standard position intersects a circle of radius 8. Find the exact (x, y) coordinates of the intersection point.</Q>
      <FmUsed>x = r · cos θ and y = r · sin θ (multiply unit circle values by radius)</FmUsed>
      <WB>
        <Arrow text="Step 1: Identify r and θ"/>
        <MathLine size={14}>r = 8, θ = π/4 (which is 45°)</MathLine>
        <Arrow text="Step 2: Recall the unit circle values at π/4"/>
        <MathLine size={14}>On the unit circle at π/4: cos(π/4) = √2/2 and sin(π/4) = √2/2</MathLine>
        <MathLine size={14}>(These come from the 45-45-90 triangle where both legs are equal)</MathLine>
        <Arrow text="Step 3: Multiply by the radius to scale up"/>
        <MathLine size={14}>x = r · cos(π/4) = 8 · (√2/2) = 8√2/2 = <MathBox color="#22c55e">4√2</MathBox><Annotate>≈ 5.66</Annotate></MathLine>
        <MathLine size={14}>y = r · sin(π/4) = 8 · (√2/2) = 8√2/2 = <MathBox color="#22c55e">4√2</MathBox><Annotate>≈ 5.66</Annotate></MathLine>
        <Ans>Point = (4√2, 4√2)</Ans>
      </WB>
      <Wh>Since π/4 is a 45° angle, x and y are equal — this makes sense because the point lies on the line y = x. The unit circle gives you the "template" coordinates, and multiplying by r just scales them up.</Wh>
    </div>},
    { title:"Example — Finding Radius and Angle from a Point", content:<div>
      <Q>The terminal ray of angle θ intersects a circle at the point (−12, −12√3). Find the radius r of the circle and the exact angle θ.</Q>
      <FmUsed>r = √(x² + y²) for the radius · Use reference angle + quadrant to find θ</FmUsed>
      <WB>
        <Arrow text="Step 1: Find r using the Pythagorean theorem"/>
        <MathLine size={14}>r = √(x² + y²) = √((−12)² + (−12√3)²)</MathLine>
        <MathLine size={14}>= √(144 + 144·3) = √(144 + 432) = √576 = <MathBox color="#6366f1">24</MathBox></MathLine>
        <Arrow text="Step 2: Determine the quadrant"/>
        <MathLine size={14}>x = −12 (negative), y = −12√3 (negative) → <MathBox color="#ec4899">Quadrant 3</MathBox></MathLine>
        <Arrow text="Step 3: Find the reference angle using cos or sin"/>
        <MathLine size={14}>cos(ref) = |x|/r = 12/24 = 1/2<Annotate>use absolute value for reference angle</Annotate></MathLine>
        <MathLine size={14}>Reference angle = cos⁻¹(1/2) = <MathBox color="#6366f1">π/3</MathBox><Annotate>which special angle has cos = 1/2?</Annotate></MathLine>
        <Arrow text="Step 4: Adjust for Q3"/>
        <MathLine size={14}>In Q3: θ = π + reference angle = π + π/3 = <MathBox color="#6366f1">4π/3</MathBox></MathLine>
        <Ans>r = 24, θ = 4π/3</Ans>
      </WB>
      <Tp>To find θ in each quadrant: Q1: θ = ref · Q2: θ = π − ref · Q3: θ = π + ref · Q4: θ = 2π − ref</Tp>
    </div>},
  ]},
  { id:"3.4", name:"Sine & Cosine Function Graphs", slides:[
    { title:"Concept — The Sine and Cosine Graphs", content:<div>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">f(θ) = sin θ</Tt><Sm>
        Gives the <B>vertical displacement</B> from the x-axis on the unit circle<br/><br/>
        <B>Domain:</B> all real numbers<br/>
        <B>Range:</B> [−1, 1]<br/>
        <B>Period:</B> 2π<br/>
        <B>Key points (one cycle):</B><br/>
        (0, 0), (π/2, 1), (π, 0), (3π/2, −1), (2π, 0)
      </Sm></Box>}
        r={<Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">f(θ) = cos θ</Tt><Sm>
        Gives the <B c="#be185d">horizontal displacement</B> from the y-axis on the unit circle<br/><br/>
        <B>Domain:</B> all real numbers<br/>
        <B>Range:</B> [−1, 1]<br/>
        <B>Period:</B> 2π<br/>
        <B>Key points (one cycle):</B><br/>
        (0, 1), (π/2, 0), (π, −1), (3π/2, 0), (2π, 1)
      </Sm></Box>}/>
      <svg width="100%" height="70" viewBox="0 0 340 70">
        <line x1="10" y1="35" x2="330" y2="35" stroke="#ddd" strokeWidth="1"/>
        <path d="M 10 35 Q 50 5, 90 35 Q 130 65, 170 35 Q 210 5, 250 35 Q 290 65, 330 35" stroke="#6366f1" strokeWidth="2" fill="none"/>
        <path d="M 10 5 Q 50 5, 90 35 Q 130 65, 170 65 Q 210 65, 250 35 Q 290 5, 330 5" stroke="#ec4899" strokeWidth="2" fill="none" strokeDasharray="5,3"/>
        <text x="270" y="15" fontSize="9" fill="#6366f1" fontWeight="600">sin θ</text>
        <text x="270" y="62" fontSize="9" fill="#ec4899" fontWeight="600">cos θ</text>
      </svg>
      <Wh>cos θ = sin(θ + π/2). The cosine graph is just the sine graph shifted LEFT by π/2. They're the same wave!</Wh>
      <Tp>As input values increase, outputs oscillate between −1 and 1. The graphs alternate between concave up and concave down with inflection points on the midline.</Tp>
    </div>},
    { title:"Concept — Sine Graph Key Points", content:<div>
      <Fm label="f(θ) = sin θ">Sine starts at 0, goes UP to 1, back to 0, DOWN to −1, and back to 0</Fm>
      <svg width="100%" height="110" viewBox="0 0 360 110">
        <line x1="30" y1="55" x2="340" y2="55" stroke="#ddd" strokeWidth="1"/><line x1="30" y1="10" x2="30" y2="100" stroke="#ddd" strokeWidth="1"/>
        <path d="M 30 55 C 60 55, 68 15, 105 15 C 142 15, 150 55, 180 55 C 210 55, 218 95, 255 95 C 292 95, 300 55, 330 55" stroke="#6366f1" strokeWidth="2.5" fill="none"/>
        {[{x:30,y:55,l:"(0, 0)"},{x:105,y:15,l:"(π/2, 1)"},{x:180,y:55,l:"(π, 0)"},{x:255,y:95,l:"(3π/2, −1)"},{x:330,y:55,l:"(2π, 0)"}].map((p,i)=><g key={i}><circle cx={p.x} cy={p.y} r={4} fill="#ef4444"/><text x={p.x} y={p.y-8} textAnchor="middle" fontSize="7.5" fill="#ef4444" fontWeight="600">{p.l}</text></g>)}
        <text x="345" y="58" fontSize="8" fill="#6366f1" fontWeight="700">sin θ</text>
        <text x="15" y="18" fontSize="8" fill="#666">1</text><text x="12" y="98" fontSize="8" fill="#666">−1</text>
      </svg>
      <Tb h={["θ","0","π/2","π","3π/2","2π"]} r={[["sin θ","0","1","0","−1","0"]]}/>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Sine Key Facts</Tt><Sm>
        • <B>Increasing:</B> (−π/2, π/2) — the "rising half" near the origin<br/>
        • <B>Decreasing:</B> (π/2, 3π/2) — the "falling half"<br/>
        • <B>Concave up:</B> (π, 2π) — the bottom part bends upward<br/>
        • <B>Concave down:</B> (0, π) — the top part bends downward<br/>
        • <B>Inflection points:</B> where the graph crosses the midline (every π)
      </Sm></Box>
    </div>},
    { title:"Example — Sketching Key Points and Identifying Properties", content:<div>
      <Q>Complete the table for both sin θ and cos θ, then identify where each function is increasing, decreasing, concave up, and concave down on [0, 2π].</Q>
      <WB>
        <Tb h={["θ","0","π/2","π","3π/2","2π"]} r={[["sin θ","0","1","0","−1","0"],["cos θ","1","0","−1","0","1"]]}/>
        <MathLine size={14} color="#4338ca"><b>sin θ:</b></MathLine>
        <MathLine size={14}>Increasing: (0, π/2) and (3π/2, 2π) · Decreasing: (π/2, 3π/2)</MathLine>
        <MathLine size={14}>Concave down: (0, π) · Concave up: (π, 2π)</MathLine>
        <MathLine size={14} color="#4338ca"><b>cos θ:</b></MathLine>
        <MathLine size={14}>Decreasing: (0, π) · Increasing: (π, 2π)</MathLine>
        <MathLine size={14}>Concave down: (0, π/2) and (3π/2, 2π) · Concave up: (π/2, 3π/2)</MathLine>
      </WB>
      <Tp>Inflection points on the midline: sin has them at 0, π, 2π. Cos has them at π/2, 3π/2.</Tp>
    </div>},
    { title:"Concept — Cosine Graph Key Points", content:<div>
      <Fm label="f(θ) = cos θ">Cosine starts at 1, goes DOWN to 0, DOWN to −1, back to 0, and UP to 1</Fm>
      <svg width="100%" height="110" viewBox="0 0 360 110">
        <line x1="30" y1="55" x2="340" y2="55" stroke="#ddd" strokeWidth="1"/><line x1="30" y1="10" x2="30" y2="100" stroke="#ddd" strokeWidth="1"/>
        <path d="M 30 15 C 60 15, 68 55, 105 55 C 142 55, 150 95, 180 95 C 210 95, 218 55, 255 55 C 292 55, 300 15, 330 15" stroke="#ec4899" strokeWidth="2.5" fill="none"/>
        {[{x:30,y:15,l:"(0, 1)"},{x:105,y:55,l:"(π/2, 0)"},{x:180,y:95,l:"(π, −1)"},{x:255,y:55,l:"(3π/2, 0)"},{x:330,y:15,l:"(2π, 1)"}].map((p,i)=><g key={i}><circle cx={p.x} cy={p.y} r={4} fill="#ef4444"/><text x={p.x} y={p.y+(p.y>55?14:-8)} textAnchor="middle" fontSize="7.5" fill="#ef4444" fontWeight="600">{p.l}</text></g>)}
        <text x="345" y="58" fontSize="8" fill="#ec4899" fontWeight="700">cos θ</text>
        <text x="15" y="18" fontSize="8" fill="#666">1</text><text x="12" y="98" fontSize="8" fill="#666">−1</text>
      </svg>
      <Tb h={["θ","0","π/2","π","3π/2","2π"]} r={[["cos θ","1","0","−1","0","1"]]}/>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Cosine Key Facts</Tt><Sm>
        • <B>Decreasing:</B> (0, π) — falls from max to min<br/>
        • <B>Increasing:</B> (π, 2π) — rises from min back to max<br/>
        • <B>Concave up:</B> (π/2, 3π/2) — bottom bends up<br/>
        • <B>Concave down:</B> (−π/2, π/2) — top bends down<br/>
        • Cosine is an <B>EVEN</B> function: cos(−θ) = cos(θ)
      </Sm></Box>
    </div>},
  ]},
  { id:"3.5", name:"Sinusoidal Functions", slides:[
    { title:"Concept — Sinusoidal Functions", content:<div>
      <Fm label="Definition">A sinusoidal function is any function with additive and multiplicative transformations of f(θ) = sin θ</Fm>
      <Fm label="Key Identity">cos θ = sin(θ + π/2) — cosine is just a shifted sine!</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Four Key Properties</Tt><Sm>
        <B c="#4338ca">Period:</B> the smallest positive value k such that f(θ + k) = f(θ). How long one full cycle takes.<br/>
        <B c="#4338ca">Frequency:</B> the reciprocal of the period (1/period). How many cycles per unit.<br/>
        <B c="#4338ca">Amplitude:</B> half the distance between max and min. Amplitude = (max − min)/2<br/>
        <B c="#4338ca">Midline:</B> the horizontal line halfway between max and min. Midline = (max + min)/2
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">For the Parent Functions sin θ and cos θ</Tt><Sm>
        Period = 2π · Frequency = 1/(2π) · Amplitude = 1 · Midline = y = 0
      </Sm></Box>
      <G l={<Box bg="#f0fdf4" s={{textAlign:"center"}}><Tt c="#166534">Sine = ODD</Tt><Sm>sin(−θ) = −sin(θ)<br/>Rotational symmetry about origin</Sm></Box>}
        r={<Box bg="#faf5ff" s={{textAlign:"center"}}><Tt c="#7c3aed">Cosine = EVEN</Tt><Sm>cos(−θ) = cos(θ)<br/>Reflective symmetry over y-axis</Sm></Box>}/>
      <W>Points of inflection occur on the midline — where the graph switches between concave up and concave down.</W>
    </div>},
    { title:"Example — Finding Period, Amplitude, Midline from Graph", content:<div>
      <Q>A sinusoidal function has a max at (1, 4) and a min at (5, −2). Find all properties.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Amplitude:</b></MathLine>
        <MathLine size={14}>(max − min)/2 = (4 − (−2))/2 = 6/2 = <MathBox color="#22c55e">3</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Midline:</b></MathLine>
        <MathLine size={14}>(max + min)/2 = (4 + (−2))/2 = 2/2 = <MathBox color="#22c55e">1</MathBox> → y = 1</MathLine>
        <MathLine size={14} color="#4338ca"><b>Period:</b></MathLine>
        <MathLine size={14}>Max to min = half period → 5 − 1 = 4 → period = <MathBox color="#22c55e">8</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Frequency:</b></MathLine>
        <MathLine size={14}>1/period = <MathBox color="#22c55e">1/8</MathBox></MathLine>
      </WB>
      <Tp>Max to NEXT max = full period. Max to min = HALF period. This is a common AP trick!</Tp>
    </div>},
    { title:"Example — Even/Odd Symmetry and Properties", content:<div>
      <Q>Determine whether each function is even, odd, or neither. What symmetry does each have?</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(θ) = sin θ:</b></MathLine>
        <MathLine size={14}>sin(−θ) = −sin(θ) → <MathBox color="#6366f1">ODD function</MathBox></MathLine>
        <MathLine size={14}>Symmetry: rotational about the origin (180° rotation)</MathLine>
        <MathLine size={14} color="#4338ca"><b>g(θ) = cos θ:</b></MathLine>
        <MathLine size={14}>cos(−θ) = cos(θ) → <MathBox color="#ec4899">EVEN function</MathBox></MathLine>
        <MathLine size={14}>Symmetry: reflective over the y-axis</MathLine>
        <MathLine size={14} color="#4338ca"><b>h(θ) = sin θ + cos θ:</b></MathLine>
        <MathLine size={14}>h(−θ) = sin(−θ) + cos(−θ) = −sin θ + cos θ</MathLine>
        <MathLine size={14}>≠ h(θ) and ≠ −h(θ) → <MathBox color="#f59e0b">NEITHER</MathBox></MathLine>
      </WB>
    </div>},
  ]},
  { id:"3.6", name:"Sinusoidal Function Transformations", slides:[
    { title:"Concept — Transformation Form", content:<div>
      <Fm label="General Form">f(θ) = a·sin(b(θ + c)) + d  or  f(θ) = a·cos(b(θ + c)) + d</Fm>
      <Tb h={["Parameter","Name","Effect","Formula"]} r={[
        ["a","Amplitude","Vertical stretch by |a|. If a < 0, reflection over x-axis","Amplitude = |a|"],
        ["b","Horizontal compression","Horizontal compression by 1/|b|","Period = 2π/|b|"],
        ["c","Phase shift","Horizontal translation LEFT by c","Shift = −c"],
        ["d","Vertical shift","Vertical translation UP by d","Midline: y = d"],
      ]}/>
      <W>The phase shift goes OPPOSITE to the sign inside! sin(θ − π/4) shifts RIGHT π/4. sin(θ + π/4) shifts LEFT π/4.</W>
      <Wh>When b multiplies the ENTIRE inside expression like sin(2(θ + π)), the phase shift is still −c = −π. But if written as sin(2θ + π), you must factor: sin(2(θ + π/2)), so the shift is LEFT π/2.</Wh>
    </div>},
    { title:"Example — Applying Transformations Step by Step", content:<div>
      <Q>Start with f(θ) = sin θ. Apply these transformations in order: phase shift left π, amplitude 5, and reflection over the x-axis. Write the final function.</Q>
      <FmUsed>g(θ) = a · sin(b(θ + c)) + d — apply each transformation one at a time</FmUsed>
      <WB>
        <Arrow text="Step 1: Start with the parent function"/>
        <MathLine size={14}>f(θ) = sin θ</MathLine>
        <Arrow text="Step 2: Apply phase shift LEFT π"/>
        <MathLine size={14}>A left shift of π means we ADD π inside the function</MathLine>
        <MathLine size={14}>sin(θ) → sin(θ + π)<Annotate>left = add inside</Annotate></MathLine>
        <Arrow text="Step 3: Apply amplitude of 5"/>
        <MathLine size={14}>Multiply the entire function by 5 to stretch vertically</MathLine>
        <MathLine size={14}>sin(θ + π) → 5 · sin(θ + π)<Annotate>a = 5</Annotate></MathLine>
        <Arrow text="Step 4: Apply reflection over the x-axis"/>
        <MathLine size={14}>Reflection over x-axis means multiply by −1</MathLine>
        <MathLine size={14}>5 · sin(θ + π) → −5 · sin(θ + π)<Annotate>negative flips upside down</Annotate></MathLine>
        <Ans>g(θ) = −5sin(θ + π)</Ans>
      </WB>
      <Tp>Apply transformations one at a time in this order: horizontal changes first (phase shift), then vertical changes (amplitude, reflection, vertical shift). Writing each step separately prevents errors.</Tp>
    </div>},
    { title:"Example — Writing a Sinusoidal Function from Graph Properties", content:<div>
      <Q>A sinusoidal graph has amplitude 3, period π, is reflected over the x-axis, and has midline y = 1. Write the function.</Q>
      <FmUsed>f(θ) = a · sin(bθ) + d where |a| = amplitude, period = 2π/|b|, d = midline</FmUsed>
      <WB>
        <Arrow text="Step 1: Determine a (amplitude + reflection)"/>
        <MathLine size={14}>Amplitude = 3 → |a| = 3</MathLine>
        <MathLine size={14}>Reflected over x-axis → a is NEGATIVE</MathLine>
        <MathLine size={14}>Therefore a = <MathBox color="#6366f1">−3</MathBox></MathLine>
        <Arrow text="Step 2: Find b from the period"/>
        <MathLine size={14}>Period = π, and the formula is: period = 2π/|b|</MathLine>
        <MathLine size={14}>π = 2π/|b| → |b| = 2π/π → b = <MathBox color="#6366f1">2</MathBox></MathLine>
        <Arrow text="Step 3: Identify d (the midline)"/>
        <MathLine size={14}>Midline y = 1 → d = <MathBox color="#6366f1">1</MathBox></MathLine>
        <Arrow text="Step 4: No phase shift mentioned, so c = 0"/>
        <MathLine size={14}>Combine: f(θ) = a · sin(bθ) + d</MathLine>
        <Ans>f(θ) = −3sin(2θ) + 1</Ans>
      </WB>
      <Wh>The negative a means the graph starts by going DOWN from the midline instead of up. The period π means it completes a full cycle twice as fast as sin θ (which has period 2π).</Wh>
    </div>},
  ]},
  { id:"3.7", name:"Sinusoidal Function Context & Data Modeling", slides:[
    { title:"Concept — Building Sinusoidal Models", content:<div>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Without Technology (from a table/description)</Tt><Sm>
        <B>Step 1:</B> Find the amplitude: (max − min)/2<br/>
        <B>Step 2:</B> Find the midline (vertical shift d): (max + min)/2<br/>
        <B>Step 3:</B> Find the period, then b = 2π/period<br/>
        <B>Step 4:</B> Determine the phase shift c by checking where the max/min occurs<br/>
        <B>Step 5:</B> Write f(x) = a·sin(b(x + c)) + d or a·cos(b(x + c)) + d
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">With Technology (Sinusoidal Regression)</Tt><Sm>
        Enter data → STAT → SinReg → y = a·sin(bx + c) + d<br/>
        The regression model is only useful over the <B c="#be185d">contextual domain</B> — don't extrapolate beyond the data!
      </Sm></Box>
      <Tp>If the data STARTS at a maximum, use cosine. If it starts at the midline going up, use sine. This avoids needing a phase shift!</Tp>
    </div>},
    { title:"Example — Model from Max/Min Data", content:<div>
      <Q>Function oscillates between −1 and 7. At x=0, f(0)=−1. At x=2π, f(2π)=7. At x=4π, f(4π)=−1.</Q>
      <WB>
        <MathLine size={14}>Amplitude = (7−(−1))/2 = <MathBox color="#6366f1">4</MathBox></MathLine>
        <MathLine size={14}>Midline = (7+(−1))/2 = <MathBox color="#6366f1">3</MathBox></MathLine>
        <MathLine size={14}>Period: min at 0, max at 2π, back to min at 4π → period = <MathBox color="#6366f1">4π</MathBox></MathLine>
        <MathLine size={14}>b = 2π/(4π) = <MathBox color="#6366f1">1/2</MathBox></MathLine>
        <MathLine size={14}>Starts at min → use negative cosine</MathLine>
        <Ans>f(x) = −4cos(x/2) + 3</Ans>
      </WB>
    </div>},
    { title:"Example — Merry-go-round Context Problem", content:<div>
      <Q>Child is 6 ft from parents when closest, 24 ft when farthest. Rotation takes 30 sec. At t=0, child is closest.</Q>
      <WB>
        <MathLine size={14}>Amplitude = (24−6)/2 = <MathBox color="#6366f1">9</MathBox></MathLine>
        <MathLine size={14}>Midline d = (24+6)/2 = <MathBox color="#6366f1">15</MathBox></MathLine>
        <MathLine size={14}>Period = 30 → b = 2π/30 = <MathBox color="#6366f1">π/15</MathBox></MathLine>
        <MathLine size={14}>At t=0, min distance → starts at min</MathLine>
        <MathLine size={14}>Shift: max at t=15 → c = −7.5 for sine form</MathLine>
        <Ans>m(t) = 9sin(π/15·(t − 7.5)) + 15</Ans>
      </WB>
    </div>},
  ]},
  { id:"3.8", name:"The Tangent Function", slides:[
    { title:"Concept — The Tangent Function", content:<div>
      <Fm label="Definition">tan θ = y/x = sin θ / cos θ = slope of the terminal side</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Properties of f(θ) = tan θ</Tt><Sm>
        <B>Period:</B> π (NOT 2π like sin/cos!)<br/>
        <B>Domain:</B> all real numbers except θ = π/2 + kπ (where cos θ = 0)<br/>
        <B>Range:</B> all real numbers (−∞, ∞)<br/>
        <B>Vertical Asymptotes:</B> θ = π/2 + kπ where k is an integer<br/>
        <B>Always increasing</B> between consecutive asymptotes<br/>
        <B>Concavity:</B> concave down then concave up between consecutive VAs
      </Sm></Box>
      <svg width="100%" height="80" viewBox="0 0 300 80">
        <line x1="10" y1="40" x2="290" y2="40" stroke="#ddd" strokeWidth="1"/>
        <line x1="75" y1="5" x2="75" y2="75" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="150" y1="5" x2="150" y2="75" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="225" y1="5" x2="225" y2="75" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/>
        <path d="M 80 75 Q 112 45, 112 40 Q 112 35, 145 5" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
        <path d="M 155 75 Q 187 45, 187 40 Q 187 35, 220 5" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
        <text x="70" y="78" fontSize="8" fill="#ef4444">−π/2</text>
        <text x="148" y="78" fontSize="8" fill="#ef4444">π/2</text>
        <text x="220" y="78" fontSize="8" fill="#ef4444">3π/2</text>
      </svg>
      <Fm label="Transformations">f(θ) = a·tan(b(θ + c)) + d — period changes to π/|b|</Fm>
      <W>The tangent period is π/|b|, NOT 2π/|b| like sine/cosine. Don't mix these up!</W>
    </div>},
    { title:"Example — Tangent with Stretch and Phase Shift", content:<div>
      <Q>For f(θ) = 3tan(θ − π/8), find the period and describe every transformation applied to the parent function tan θ.</Q>
      <FmUsed>f(θ) = a · tan(b(θ + c)) + d — tangent period = π/|b| (NOT 2π/|b|!)</FmUsed>
      <WB>
        <Arrow text="Step 1: Identify each parameter by comparing to the general form"/>
        <MathLine size={14}>f(θ) = 3 · tan(1 · (θ − π/8)) + 0</MathLine>
        <MathLine size={14}>a = 3, b = 1, c = −π/8, d = 0</MathLine>
        <Arrow text="Step 2: Calculate the period"/>
        <MathLine size={14}>Period = π/|b| = π/|1| = <MathBox color="#22c55e">π</MathBox><Annotate>same as parent since b = 1</Annotate></MathLine>
        <Arrow text="Step 3: Describe each transformation"/>
        <MathLine size={14}>a = 3 → vertical stretch by factor of <MathBox color="#6366f1">3</MathBox><Annotate>outputs are 3× taller</Annotate></MathLine>
        <MathLine size={14}>b = 1 → no horizontal dilation (period unchanged)</MathLine>
        <MathLine size={14}>c = −π/8 → phase shift <MathBox color="#6366f1">RIGHT π/8</MathBox><Annotate>it's (θ − π/8), minus = right</Annotate></MathLine>
        <MathLine size={14}>d = 0 → no vertical shift</MathLine>
        <Ans>Period = π · Vertical stretch ×3 · Phase shift right π/8</Ans>
      </WB>
      <W>For tangent, the period formula uses π (not 2π). Tangent naturally repeats every π radians, which is HALF the period of sine and cosine.</W>
    </div>},
    { title:"Example — Tangent with Horizontal Dilation", content:<div>
      <Q>For f(θ) = tan(θ/2), find the period and describe the horizontal dilation. How does this graph compare to the parent function tan θ?</Q>
      <FmUsed>Period = π/|b| · Horizontal dilation stretches/compresses the graph</FmUsed>
      <WB>
        <Arrow text="Step 1: Rewrite to identify b clearly"/>
        <MathLine size={14}>f(θ) = tan(θ/2) = tan((1/2) · θ)<Annotate>b = 1/2</Annotate></MathLine>
        <Arrow text="Step 2: Calculate the new period"/>
        <MathLine size={14}>Period = π/|b| = π/(1/2) = π · (2/1) = <MathBox color="#22c55e">2π</MathBox></MathLine>
        <MathLine size={14}>Compare: parent tan θ has period π, this has period 2π<Annotate>doubled!</Annotate></MathLine>
        <Arrow text="Step 3: Describe the horizontal dilation"/>
        <MathLine size={14}>Horizontal dilation factor = 1/|b| = 1/(1/2) = <MathBox color="#22c55e">2</MathBox></MathLine>
        <MathLine size={14}>The graph is stretched horizontally by a factor of 2 — everything is twice as wide</MathLine>
        <MathLine size={14}>VAs move from ±π/2 to ±π (also stretched by factor of 2)</MathLine>
        <Ans>Period = 2π · Horizontal stretch by factor of 2</Ans>
      </WB>
      <Wh>When |b| is less than 1, the graph stretches wider (longer period). When |b| is greater than 1, it compresses narrower (shorter period). This is the opposite direction from what you might expect — horizontal transformations are always "backwards."</Wh>
    </div>},
  ]},
  { id:"3.9", name:"Inverse Trigonometric Functions", slides:[
    { title:"Concept — Inverse Trigonometric Functions", content:<div>
      <Fm label="Key Idea">Inverse trig functions find the ANGLE given a ratio</Fm>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:8}}>
        <Box bg="#eef2ff" s={{textAlign:"center"}}><Tt c="#4338ca">sin⁻¹(x) = arcsin(x)</Tt><Sm>Domain: [−1, 1]<br/>Range: [−π/2, π/2]</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><Tt c="#be185d">cos⁻¹(x) = arccos(x)</Tt><Sm>Domain: [−1, 1]<br/>Range: [0, π]</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><Tt c="#92400e">tan⁻¹(x) = arctan(x)</Tt><Sm>Domain: all reals<br/>Range: (−π/2, π/2)<br/>HA: y = ±π/2</Sm></Box>
      </div>
      <W>sin⁻¹(x) does NOT mean 1/sin(x)! The superscript −1 means "inverse function," not "reciprocal." 1/sin(x) = csc(x).</W>
      <Tp>The restricted ranges ensure each inverse function gives exactly ONE answer. The AP exam loves asking for values outside the range — be careful!</Tp>
    </div>},
    { title:"Example — Evaluating Inverse Trig", content:<div>
      <Q>Evaluate sin⁻¹(1/2) and cos⁻¹(−√3/2). Give exact answers in radians.</Q>
      <FmUsed>sin⁻¹ range: [−π/2, π/2] · cos⁻¹ range: [0, π] — ask "what angle in the range has this value?"</FmUsed>
      <WB>
        <Arrow text="Part 1: sin⁻¹(1/2)"/>
        <MathLine size={14}>Question: "What angle θ in [−π/2, π/2] has sin θ = 1/2?"</MathLine>
        <MathLine size={14}>From the unit circle: sin(π/6) = 1/2<Annotate>30° angle</Annotate></MathLine>
        <MathLine size={14}>Check: is π/6 in the range [−π/2, π/2]? YES ✓</MathLine>
        <Ans>sin⁻¹(1/2) = π/6</Ans>
        <Arrow text="Part 2: cos⁻¹(−√3/2)"/>
        <MathLine size={14}>Question: "What angle θ in [0, π] has cos θ = −√3/2?"</MathLine>
        <MathLine size={14}>Reference angle: cos(π/6) = √3/2<Annotate>the positive version</Annotate></MathLine>
        <MathLine size={14}>Cosine is negative in Q2 → θ = π − π/6 = <MathBox color="#6366f1">5π/6</MathBox></MathLine>
        <MathLine size={14}>Check: is 5π/6 in the range [0, π]? YES ✓</MathLine>
        <Ans>cos⁻¹(−√3/2) = 5π/6</Ans>
      </WB>
      <W>sin⁻¹ only returns angles in Q1 or Q4. cos⁻¹ only returns angles in Q1 or Q2. If you need solutions in other quadrants, use the inverse to find ONE solution, then use symmetry to find the others.</W>
    </div>},
    { title:"Concept — Graphs of Inverse Trig Functions", content:<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:8}}>
        <Box bg="#eef2ff" s={{textAlign:"center"}}><Tt c="#4338ca">y = sin⁻¹(x)</Tt>
        <svg width="100%" height="90" viewBox="0 0 120 90"><rect x="0" y="0" width="120" height="90" fill="#fafafe"/>
          <line x1="60" y1="5" x2="60" y2="85" stroke="#ddd"/><line x1="10" y1="45" x2="110" y2="45" stroke="#ddd"/>
          <path d="M 10 80 C 25 75, 40 65, 50 55 C 55 50, 60 45, 65 40 C 75 30, 90 18, 110 10" stroke="#4338ca" strokeWidth="2.5" fill="none"/>
          <text x="14" y="12" fontSize="7" fill="#888">π/2</text><text x="10" y="84" fontSize="7" fill="#888">-π/2</text>
          <text x="13" y="42" fontSize="7" fill="#888">-1</text><text x="100" y="42" fontSize="7" fill="#888">1</text>
        </svg>
        <Sm>D: [−1,1]<br/>R: [−π/2, π/2]<br/>Increasing, passes through origin</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><Tt c="#be185d">y = cos⁻¹(x)</Tt>
        <svg width="100%" height="90" viewBox="0 0 120 90"><rect x="0" y="0" width="120" height="90" fill="#fefafe"/>
          <line x1="60" y1="5" x2="60" y2="85" stroke="#ddd"/><line x1="10" y1="45" x2="110" y2="45" stroke="#ddd"/>
          <path d="M 10 10 C 25 15, 40 25, 50 35 C 55 40, 60 45, 65 50 C 75 60, 90 72, 110 80" stroke="#be185d" strokeWidth="2.5" fill="none"/>
          <text x="20" y="12" fontSize="7" fill="#888">π</text><text x="100" y="84" fontSize="7" fill="#888">0</text>
        </svg>
        <Sm>D: [−1,1]<br/>R: [0, π]<br/>Decreasing, cos⁻¹(0)=π/2</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><Tt c="#92400e">y = tan⁻¹(x)</Tt>
        <svg width="100%" height="90" viewBox="0 0 120 90"><rect x="0" y="0" width="120" height="90" fill="#fefefa"/>
          <line x1="60" y1="5" x2="60" y2="85" stroke="#ddd"/><line x1="10" y1="45" x2="110" y2="45" stroke="#ddd"/>
          <line x1="10" y1="15" x2="110" y2="15" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/><line x1="10" y1="75" x2="110" y2="75" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 10 73 C 25 70, 35 65, 45 55 C 52 48, 60 45, 68 42 C 80 35, 90 25, 110 17" stroke="#92400e" strokeWidth="2.5" fill="none"/>
          <text x="88" y="12" fontSize="7" fill="#ef4444">y=π/2</text><text x="86" y="84" fontSize="7" fill="#ef4444">y=-π/2</text>
        </svg>
        <Sm>D: all reals<br/>R: (−π/2, π/2)<br/>Increasing, HA: y = ±π/2</Sm></Box>
      </div>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Transformation of Inverse Trig</Tt><Sm>
        f(x) = a · sin⁻¹(x) → vertical stretch/compression by |a|. If a {"<"} 0, reflection over x-axis.<br/>
        f(x) = sin⁻¹(bx) → horizontal compression by 1/|b|, domain becomes [−1/|b|, 1/|b|]
      </Sm></Box>
      <Tp>AP exam loves asking domain/range of transformed inverse trig. Remember: vertical transformations change the RANGE, horizontal transformations change the DOMAIN.</Tp>
    </div>},
    { title:"Example — Transformed Inverse Trig Functions", content:<div>
      <Q>For f(x) = 2sin⁻¹(x), describe the transformation and find the domain and range.</Q>
      <WB>
        <Arrow text="Step 1: Identify the transformation"/>
        <MathLine size={14}>f(x) = <MathBox color="#6366f1">2</MathBox> · sin⁻¹(x)<Annotate>vertical stretch by factor of 2</Annotate></MathLine>
        <Arrow text="Step 2: Domain stays the same (no horizontal change)"/>
        <MathLine size={14}>Domain of sin⁻¹(x) is [−1, 1] → Domain of f(x) = <MathBox>[−1, 1]</MathBox></MathLine>
        <Arrow text="Step 3: Range is multiplied by 2"/>
        <MathLine size={14}>Range of sin⁻¹(x) is [−π/2, π/2]</MathLine>
        <MathLine size={14}>Multiply by 2: [−π/2 · 2, π/2 · 2] = <MathBox>[−π, π]</MathBox></MathLine>
        <Ans>Vertical stretch by 2 · Domain: [−1, 1] · Range: [−π, π]</Ans>
      </WB>
      <Q>For g(x) = cos⁻¹(x) − π/4, find the range.</Q>
      <WB>
        <MathLine size={14}>Subtracting π/4 shifts the graph DOWN by π/4</MathLine>
        <MathLine size={14}>Range of cos⁻¹(x) is [0, π]</MathLine>
        <MathLine size={14}>Subtract π/4: [0 − π/4, π − π/4] = <MathBox>[−π/4, 3π/4]</MathBox></MathLine>
        <Ans>Range: [−π/4, 3π/4]</Ans>
      </WB>
    </div>},
  ]},
  { id:"3.10", name:"Trigonometric Equations & Inequalities", slides:[
    { title:"Concept — Solving Trig Equations", content:<div>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Two Types of Solutions</Tt><Sm>
        <B>1. On a specific interval</B> (e.g., 0 ≤ x ≤ 2π) → finite number of solutions<br/>
        <B>2. ALL solutions</B> → use "+ 2kπ" (for sin/cos) or "+ kπ" (for tan) where k is any integer
      </Sm></Box>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Solving Strategy</Tt><Sm>
        <B c="#166534">Step 1:</B> Isolate the trig function (get sin x = number or cos x = number)<br/>
        <B c="#166534">Step 2:</B> Use inverse trig or unit circle to find the reference angle<br/>
        <B c="#166534">Step 3:</B> Find ALL angles in the correct quadrants<br/>
        <B c="#166534">Step 4:</B> If "all solutions," add the appropriate multiple of the period
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Trig Inequalities</Tt><Sm>
        Solve the corresponding equation first to find boundary values, then use the graph or unit circle to determine which intervals satisfy the inequality.
      </Sm></Box>
      <Tp>For equations like 2sin²x + sinx − 1 = 0, let u = sin x to get a quadratic: 2u² + u − 1 = 0. Factor and solve!</Tp>
    </div>},
    { title:"Example — Solving on an Interval & All Solutions", content:<div>
      <Q>a) Solve 2sin x − 1 = 0 on [0, 2π].  b) Find ALL solutions.</Q>
      <WB>
        <MathLine size={14}>sin x = 1/2</MathLine>
        <MathLine size={14}>Reference angle: π/6</MathLine>
        <MathLine size={14} color="#4338ca"><b>a) On [0, 2π]:</b></MathLine>
        <MathLine size={14}>x = <MathBox color="#22c55e">π/6</MathBox> (Q1) and x = <MathBox color="#22c55e">5π/6</MathBox> (Q2)</MathLine>
        <MathLine size={14} color="#4338ca"><b>b) All solutions:</b></MathLine>
        <Ans>x = π/6 + 2kπ or x = 5π/6 + 2kπ, where k is an integer</Ans>
      </WB>
    </div>},
    { title:"Example — Trig Inequality", content:<div>
      <Q>Find all values of x on [−π, π] where 2cos x + 1 {">"} 0.</Q>
      <FmUsed>Solve for cos x, find boundary angles, then determine which intervals satisfy the inequality.</FmUsed>
      <WB>
        <Arrow text="Step 1: Isolate the trig function"/>
        <MathLine size={14}>2cos x + 1 {">"} 0</MathLine>
        <MathLine size={14}>2cos x {">"} −1</MathLine>
        <MathLine size={14}>cos x {">"} −1/2</MathLine>
        <Arrow text="Step 2: Find where cos x = −1/2 (the boundary)"/>
        <MathLine size={14}>cos x = −1/2 at x = <MathBox color="#6366f1">2π/3</MathBox> and x = <MathBox color="#6366f1">−2π/3</MathBox><Annotate>reference angle π/3 in Q2 and Q3</Annotate></MathLine>
        <Arrow text="Step 3: Determine where cos x is GREATER than −1/2"/>
        <MathLine size={14}>Cosine is greater than −1/2 between the two boundary angles</MathLine>
        <MathLine size={14}>Think about the unit circle: cos x = x-coordinate {">"} −1/2 for angles close to 0</MathLine>
        <Ans>−2π/3 {"<"} x {"<"} 2π/3</Ans>
      </WB>
      <Tp>Strategy for trig inequalities: (1) Isolate the trig function, (2) Find where equality holds (boundary angles), (3) Test or visualize which intervals satisfy the inequality. Drawing the cosine graph helps you see which parts are above/below the line y = −1/2.</Tp>
    </div>},
  ]},
  { id:"3.11", name:"The Secant, Cosecant, & Cotangent Functions", slides:[
    { title:"Concept — Secant, Cosecant, Cotangent", content:<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:8}}>
        <Box bg="#eef2ff" s={{textAlign:"center"}}><Tt c="#4338ca">sec θ = 1/cos θ</Tt><Sm>D: cos θ ≠ 0<br/>R: (−∞,−1]∪[1,∞)<br/>Period: 2π</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><Tt c="#be185d">csc θ = 1/sin θ</Tt><Sm>D: sin θ ≠ 0<br/>R: (−∞,−1]∪[1,∞)<br/>Period: 2π</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><Tt c="#92400e">cot θ = cos θ/sin θ</Tt><Sm>D: sin θ ≠ 0<br/>R: all reals<br/>Period: π</Sm></Box>
      </div>
      <Tp>Vertical asymptotes of reciprocal functions occur where the original function equals zero!</Tp>
    </div>},
    { title:"Example — Evaluating Reciprocal Functions", content:<div>
      <Q>Evaluate without a calculator: sec(π/4), csc(5π/4), and cot(7π/6). Show each step.</Q>
      <FmUsed>sec θ = 1/cos θ · csc θ = 1/sin θ · cot θ = cos θ/sin θ</FmUsed>
      <WB>
        <Arrow text="Part 1: sec(π/4) — reciprocal of cosine"/>
        <MathLine size={14}>sec(π/4) = 1/cos(π/4)<Annotate>sec = 1/cos</Annotate></MathLine>
        <MathLine size={14}>cos(π/4) = √2/2<Annotate>from the unit circle (45°)</Annotate></MathLine>
        <MathLine size={14}>1 ÷ (√2/2) = 1 · (2/√2) = 2/√2 = 2√2/2 = <MathBox color="#22c55e">√2</MathBox><Annotate>rationalize the denominator</Annotate></MathLine>
        <Arrow text="Part 2: csc(5π/4) — reciprocal of sine"/>
        <MathLine size={14}>csc(5π/4) = 1/sin(5π/4)<Annotate>csc = 1/sin</Annotate></MathLine>
        <MathLine size={14}>5π/4 is in Q3, reference angle = π/4. In Q3 sin is negative.</MathLine>
        <MathLine size={14}>sin(5π/4) = −√2/2</MathLine>
        <MathLine size={14}>1 ÷ (−√2/2) = −2/√2 = <MathBox color="#22c55e">−√2</MathBox></MathLine>
        <Arrow text="Part 3: cot(7π/6) — cosine over sine"/>
        <MathLine size={14}>cot(7π/6) = cos(7π/6) / sin(7π/6)<Annotate>cot = cos/sin</Annotate></MathLine>
        <MathLine size={14}>7π/6 is in Q3, reference angle = π/6. In Q3 both sin and cos are negative.</MathLine>
        <MathLine size={14}>cos(7π/6) = −√3/2 · sin(7π/6) = −1/2</MathLine>
        <MathLine size={14}>(−√3/2) ÷ (−1/2) = (−√3/2)(−2/1) = <MathBox color="#22c55e">√3</MathBox><Annotate>negatives cancel!</Annotate></MathLine>
      </WB>
      <Tp>Strategy: (1) Write the reciprocal definition, (2) Find the sin/cos value from the unit circle using reference angle + quadrant, (3) Flip the fraction. When dividing by a fraction, multiply by its reciprocal.</Tp>
    </div>},
    { title:"Concept — Graphs of Reciprocal Trig Functions", content:<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:8}}>
        <Box bg="#eef2ff" s={{textAlign:"center"}}><Tt c="#4338ca">f(θ) = sec θ</Tt>
        <svg width="100%" height="85" viewBox="0 0 130 85"><rect x="0" y="0" width="130" height="85" fill="#fafafe"/>
          <line x1="10" y1="42" x2="120" y2="42" stroke="#ddd"/><line x1="65" y1="5" x2="65" y2="80" stroke="#ddd"/>
          <line x1="33" y1="5" x2="33" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/><line x1="97" y1="5" x2="97" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
          <path d="M 10 10 C 18 15, 25 28, 33 42" stroke="#4338ca" strokeWidth="2" fill="none" opacity="0"/>
          <path d="M 35 80 C 42 55, 50 35, 65 30 C 80 35, 88 55, 95 80" stroke="#4338ca" strokeWidth="2" fill="none"/>
          <path d="M 35 5 C 42 28, 50 48, 65 55 C 80 48, 88 28, 95 5" stroke="#4338ca" strokeWidth="2" fill="none"/>
          <text x="5" y="12" fontSize="6" fill="#888">VAs at π/2+kπ</text>
        </svg>
        <Sm>VAs where cos θ = 0<br/>θ = π/2 + kπ, k∈ℤ<br/>U-shapes between VAs</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><Tt c="#be185d">f(θ) = csc θ</Tt>
        <svg width="100%" height="85" viewBox="0 0 130 85"><rect x="0" y="0" width="130" height="85" fill="#fefafe"/>
          <line x1="10" y1="42" x2="120" y2="42" stroke="#ddd"/><line x1="65" y1="5" x2="65" y2="80" stroke="#ddd"/>
          <line x1="10" y1="5" x2="10" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/><line x1="65" y1="5" x2="65" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/><line x1="120" y1="5" x2="120" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
          <path d="M 12 5 C 22 25, 30 35, 38 30 C 46 25, 55 10, 63 5" stroke="#be185d" strokeWidth="2" fill="none"/>
          <path d="M 67 80 C 77 60, 85 50, 93 55 C 101 60, 110 75, 118 80" stroke="#be185d" strokeWidth="2" fill="none"/>
          <text x="5" y="12" fontSize="6" fill="#888">VAs at kπ</text>
        </svg>
        <Sm>VAs where sin θ = 0<br/>θ = kπ, k∈ℤ<br/>U-shapes between VAs</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><Tt c="#92400e">f(θ) = cot θ</Tt>
        <svg width="100%" height="85" viewBox="0 0 130 85"><rect x="0" y="0" width="130" height="85" fill="#fefefa"/>
          <line x1="10" y1="42" x2="120" y2="42" stroke="#ddd"/><line x1="65" y1="5" x2="65" y2="80" stroke="#ddd"/>
          <line x1="10" y1="5" x2="10" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/><line x1="120" y1="5" x2="120" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
          <path d="M 15 10 C 30 20, 50 35, 65 42 C 80 50, 100 65, 115 75" stroke="#92400e" strokeWidth="2" fill="none"/>
          <text x="30" y="12" fontSize="6" fill="#888">Decreasing · Period π</text>
        </svg>
        <Sm>VAs where sin θ = 0<br/>θ = kπ, k∈ℤ<br/>Always decreasing</Sm></Box>
      </div>
      <W>Key difference: sec and csc have U-shaped curves between VAs. Cotangent looks like a DECREASING tangent with VAs at different locations (kπ instead of π/2 + kπ).</W>
    </div>},
    { title:"Example — Period & Asymptotes of Reciprocal Functions", content:<div>
      <Q>For each transformed function, find the period and equations of the vertical asymptotes.</Q>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1. f(θ) = sec(θ/2)</b></MathLine>
        <MathLine size={14}>Period of sec θ = 2π. With b = 1/2: period = 2π/|1/2| = <MathBox color="#22c55e">4π</MathBox></MathLine>
        <MathLine size={14}>VAs: θ/2 = π/2 + kπ → θ = <MathBox>π + 2kπ</MathBox>, k∈ℤ</MathLine>
        <MathLine size={14} color="#be185d"><b>2. f(θ) = 2csc(3θ) − 1</b></MathLine>
        <MathLine size={14}>Period of csc θ = 2π. With b = 3: period = 2π/3 = <MathBox color="#22c55e">2π/3</MathBox></MathLine>
        <MathLine size={14}>Range: (−∞, −1·2−1] ∪ [1·2−1, ∞) = <MathBox>(−∞, −3] ∪ [1, ∞)</MathBox></MathLine>
        <MathLine size={14} color="#92400e"><b>3. f(θ) = cot(4θ)</b></MathLine>
        <MathLine size={14}>Period of cot θ = π. With b = 4: period = π/4 = <MathBox color="#22c55e">π/4</MathBox></MathLine>
        <MathLine size={14}>VAs: 4θ = kπ → θ = <MathBox>kπ/4</MathBox>, k∈ℤ</MathLine>
      </WB>
      <Tp>Period formula: sec/csc use 2π/|b| (same as sin/cos). Cotangent uses π/|b| (same as tangent). VAs: set the INSIDE equal to the parent function's VA locations, then solve for θ.</Tp>
    </div>},
  ]},
  { id:"3.12", name:"Equivalent Representations of Trigonometric Functions", slides:[
    { title:"Concept — Trig Identities", content:<div>
      <Fm label="Pythagorean Identity">sin²θ + cos²θ = 1</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Derived Pythagorean Identities</Tt><Sm>
        sin²θ = 1 − cos²θ · cos²θ = 1 − sin²θ<br/>
        1 + tan²θ = sec²θ · 1 + cot²θ = csc²θ
      </Sm></Box>
      <Fm label="Sum/Difference Identities">sin(α ± β) = sinα·cosβ ± cosα·sinβ</Fm>
      <Fm label="">cos(α ± β) = cosα·cosβ ∓ sinα·sinβ</Fm>
      <Fm label="Double Angle">sin(2θ) = 2sinθ·cosθ · cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ</Fm>
      <W>These identities are used to simplify expressions and solve equations. The AP exam expects you to recognize and apply them!</W>
    </div>},
    { title:"Example — Simplifying with the Pythagorean Identity", content:<div>
      <Q>Use a Pythagorean identity to express 3cos³x / (1 − sin²x) in terms of only cos x.</Q>
      <FmUsed>sin²θ + cos²θ = 1 → rearranged: 1 − sin²θ = cos²θ</FmUsed>
      <WB>
        <Arrow text="Step 1: Look at the denominator — recognize a Pythagorean identity"/>
        <MathLine size={14}>The denominator is (1 − sin²x)</MathLine>
        <MathLine size={14}>From sin²x + cos²x = 1, we can rearrange: 1 − sin²x = <MathBox color="#6366f1">cos²x</MathBox></MathLine>
        <Arrow text="Step 2: Substitute cos²x for the denominator"/>
        <MathLine size={14}>3cos³x / (1 − sin²x) = 3cos³x / cos²x</MathLine>
        <Arrow text="Step 3: Simplify by canceling cos²x"/>
        <MathLine size={14}>3cos³x / cos²x = 3 · cos⁽³⁻²⁾x = 3 · cos¹x<Annotate>subtract exponents when dividing</Annotate></MathLine>
        <Ans>= 3cos x</Ans>
      </WB>
      <Tp>Whenever you see "1 − sin²" or "1 − cos²" in an expression, immediately think Pythagorean identity. This substitution is one of the most common simplification steps on the AP exam.</Tp>
    </div>},
    { title:"Example — Solving a Double Angle Equation", content:<div>
      <Q>Solve the equation sin(2x) + 2cos(x) = 0 on the interval [0, 2π). Find all solutions.</Q>
      <FmUsed>sin(2θ) = 2sin θ · cos θ (double angle identity for sine)</FmUsed>
      <WB>
        <Arrow text="Step 1: Replace sin(2x) using the double angle identity"/>
        <MathLine size={14}>sin(2x) + 2cos x = 0</MathLine>
        <MathLine size={14}><MathBox color="#6366f1">2sin x · cos x</MathBox> + 2cos x = 0<Annotate>sin(2x) = 2sin x cos x</Annotate></MathLine>
        <Arrow text="Step 2: Factor out the GCF"/>
        <MathLine size={14}>Both terms have 2cos x in common:</MathLine>
        <MathLine size={14}>2cos x · (sin x + 1) = 0<Annotate>factor out 2cos x</Annotate></MathLine>
        <Arrow text="Step 3: Set each factor equal to zero (Zero Product Property)"/>
        <MathLine size={14}><b>Factor 1:</b> cos x = 0</MathLine>
        <MathLine size={14}>cos x = 0 at x = <MathBox color="#22c55e">π/2</MathBox> and x = <MathBox color="#22c55e">3π/2</MathBox><Annotate>top and bottom of unit circle</Annotate></MathLine>
        <MathLine size={14}><b>Factor 2:</b> sin x + 1 = 0 → sin x = −1</MathLine>
        <MathLine size={14}>sin x = −1 at x = <MathBox color="#22c55e">3π/2</MathBox><Annotate>bottom of unit circle</Annotate></MathLine>
        <Arrow text="Step 4: Combine all solutions (remove duplicates)"/>
        <MathLine size={14}>3π/2 appeared from both factors — only list it once</MathLine>
        <Ans>x = π/2, 3π/2</Ans>
      </WB>
      <Wh>The strategy: (1) Use an identity to rewrite everything in terms of sin x and cos x, (2) Factor, (3) Set each factor = 0, (4) Find all angles in [0, 2π) that satisfy each equation.</Wh>
    </div>},
  ]},
  { id:"3.13", name:"Trigonometry & Polar Coordinates", slides:[
    { title:"Concept — Polar Coordinate System", content:<div>
      <Fm label="Polar Coordinates">(r, θ) where r = distance from origin, θ = angle in standard position</Fm>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Polar → Rectangular</Tt><Sm>
        <B c="#4338ca">x = r·cos θ</B><br/>
        <B c="#4338ca">y = r·sin θ</B>
      </Sm></Box>}
        r={<Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Rectangular → Polar</Tt><Sm>
        <B c="#be185d">r = √(x² + y²)</B><br/>
        <B c="#be185d">θ = arctan(y/x)</B> (adjust for quadrant!)
      </Sm></Box>}/>
      <W>When converting to polar, arctan only gives angles in Q1 and Q4. If the point is in Q2 or Q3, add π to the angle!</W>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Complex Numbers in Polar Form</Tt><Sm>
        a + bi can be written as r(cos θ + i·sin θ) or r·cis(θ)<br/>
        where r = √(a² + b²) and θ = arctan(b/a)
      </Sm></Box>
    </div>},
    { title:"Example — Polar to Rectangular Conversion", content:<div>
      <Q>Convert the polar coordinates (3, π/6) to rectangular coordinates (x, y).</Q>
      <FmUsed>x = r · cos θ and y = r · sin θ</FmUsed>
      <WB>
        <Arrow text="Step 1: Identify r and θ"/>
        <MathLine size={14}>r = 3, θ = π/6 (which is 30°)</MathLine>
        <Arrow text="Step 2: Find x using x = r · cos θ"/>
        <MathLine size={14}>x = 3 · cos(π/6)<Annotate>cos(π/6) = √3/2 from the unit circle</Annotate></MathLine>
        <MathLine size={14}>x = 3 · (√3/2) = <MathBox color="#22c55e">3√3/2 ≈ 2.60</MathBox></MathLine>
        <Arrow text="Step 3: Find y using y = r · sin θ"/>
        <MathLine size={14}>y = 3 · sin(π/6)<Annotate>sin(π/6) = 1/2 from the unit circle</Annotate></MathLine>
        <MathLine size={14}>y = 3 · (1/2) = <MathBox color="#22c55e">3/2 = 1.5</MathBox></MathLine>
        <Ans>Rectangular: (3√3/2, 3/2)</Ans>
      </WB>
      <Tp>Polar → Rectangular is straightforward: just plug r and θ into the two formulas. The key is knowing your unit circle values for sin and cos at common angles.</Tp>
    </div>},
    { title:"Example — Rectangular to Polar Conversion", content:<div>
      <Q>Convert the rectangular coordinates (−5, −12) to polar coordinates (r, θ). Make sure θ is in the correct quadrant.</Q>
      <FmUsed>r = √(x² + y²) · θ = arctan(y/x) then ADJUST for quadrant</FmUsed>
      <WB>
        <Arrow text="Step 1: Find r using the Pythagorean theorem"/>
        <MathLine size={14}>r = √(x² + y²) = √((−5)² + (−12)²)</MathLine>
        <MathLine size={14}>= √(25 + 144) = √169 = <MathBox color="#6366f1">13</MathBox></MathLine>
        <Arrow text="Step 2: Determine the quadrant"/>
        <MathLine size={14}>x = −5 (negative), y = −12 (negative) → <MathBox color="#ec4899">Quadrant 3</MathBox></MathLine>
        <Arrow text="Step 3: Find θ — use arctan then adjust for Q3"/>
        <MathLine size={14}>arctan(y/x) = arctan(−12/−5) = arctan(2.4) ≈ 1.176 radians</MathLine>
        <MathLine size={14}>But arctan gives a Q1 angle! Our point is in Q3, so add π:</MathLine>
        <MathLine size={14}>θ = 1.176 + π ≈ 1.176 + 3.14159 ≈ <MathBox color="#6366f1">4.318 radians</MathBox></MathLine>
        <Ans>Polar: (13, 4.318)</Ans>
      </WB>
      <W>arctan(y/x) only gives angles in Q1 and Q4! For Q2 or Q3 points, you MUST add π. Always check which quadrant the original (x, y) point is in before accepting the arctan result.</W>
    </div>},
  ]},
  { id:"3.14", name:"Polar Function Graphs", slides:[
    { title:"Concept — Polar Function Graphs", content:<div>
      <Fm label="Polar Function">r = f(θ) consists of ordered pairs (r, θ) where inputs are angles θ and outputs are radii r.</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Graphing Polar Functions</Tt><Sm>
        • The input values are <B>angle measures θ</B> (in radians)<br/>
        • The output values are <B>radii r</B> (distance from the origin)<br/>
        • Plot points by rotating θ from the polar axis, then moving r units outward<br/>
        • If <B>r is negative</B>, the point is plotted in the <B>opposite direction</B> — reflected through the origin
      </Sm></Box>
      <W>Negative r-values are tricky! When r is negative on an interval, those points are graphed in the opposite quadrant. For example, negative r's from angles in Q2 appear in Q4.</W>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Classic Polar Curve Types</Tt><Sm>
        <B c="#166534">1. Circles:</B> r = a, r = a·sin(θ), r = a·cos(θ)<br/>
        <B c="#166534">2. Limaçons:</B> r = a + b·sin(θ), r = a + b·cos(θ)<br/>
        <B c="#166534">3. Roses:</B> r = a·sin(bθ), r = a·cos(bθ)
      </Sm></Box>
      <Tp>The AP Exam does not reference the names "limaçon," "cardioid," or "rose" — but you must recognize the shapes and their properties!</Tp>
    </div>},
    { title:"Concept — Limaçons and Roses", content:<div>
      <Fm label="Limaçons">r = a + b·sin(θ) or r = a + b·cos(θ)</Fm>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Limaçon Shapes</Tt><Sm>
        • <B>|a| = |b|</B> → <B>cardioid</B> (heart shape)<br/>
        • <B>|a| {"<"} |b|</B> → limaçon with <B>inner loop</B><br/>
        • <B>|a| {">"} |b|</B> → dimpled limaçon (kidney bean)
      </Sm></Box>}
        r={<Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Inner Loop</Tt><Sm>
        The inner loop forms when the function produces <B c="#be185d">negative r-values</B>. The negative outputs trace the loop through the origin and into the opposite quadrant.
      </Sm></Box>}/>
      <Fm label="Roses">r = a·sin(bθ) or r = a·cos(bθ)</Fm>
      <Tb h={["b value","Domain","Number of Petals"]} r={[
        ["b is odd","0 ≤ θ ≤ π","b petals"],
        ["b is even","0 ≤ θ ≤ 2π","2b petals"],
      ]}/>
      <Wh>For roses, the maximum distance from the origin equals |a| — each petal reaches out to a distance of |a| from the origin.</Wh>
      <W>Don't confuse roses with limaçons! Roses have the trig function multiplied by bθ inside (like sin(2θ)), while limaçons add a constant to the trig function (like 2 + 3sin(θ)).</W>
    </div>},
    { title:"Example — Graphing r = 4cos(θ)", content:<div>
      <Q>Complete the table for r(θ) = 4cos(θ) on 0 ≤ θ ≤ π and describe the graph.</Q>
      <FmUsed>r(θ) = 4cos(θ)</FmUsed>
      <WB>
        <Tb h={["θ","0","π/6","π/3","π/2","2π/3","5π/6","π"]} r={[
          ["r(θ)","4","3.5","2","0","−2","−3.5","−4"],
        ]}/>
        <Arrow text="Analyze the sign of r(θ)"/>
        <MathLine size={14}>On 0 ≤ θ ≤ π/2: r(θ) is <MathBox color="#22c55e">positive</MathBox><Annotate>points in Q1</Annotate></MathLine>
        <MathLine size={14}>On π/2 ≤ θ ≤ π: r(θ) is <MathBox color="#ef4444">negative</MathBox><Annotate>points reflected to Q4</Annotate></MathLine>
        <Arrow text="Interpret the shape"/>
        <MathLine size={14}>The graph is a <MathBox color="#6366f1">circle</MathBox> centered at (2, 0) with radius 2.</MathLine>
        <Ans>Circle with diameter 4 along the polar axis</Ans>
      </WB>
      <Wh>Negative r-values from Q2 angles get graphed in Q4. This is why the full circle appears even though θ only goes to π.</Wh>
    </div>},
    { title:"Example — Graphing a Limaçon with Inner Loop", content:<div>
      <Q>Complete the table for r(θ) = 2 − 4cos(θ) on 0 ≤ θ ≤ π. Identify where the inner loop occurs.</Q>
      <FmUsed>r(θ) = 2 − 4cos(θ) — limaçon since |a| {"<"} |b| (2 {"<"} 4)</FmUsed>
      <WB>
        <Tb h={["θ","0","π/6","π/3","π/2","2π/3","5π/6","π"]} r={[
          ["r(θ)","−2","−1.5","0","2","4","5.5","6"],
        ]}/>
        <Arrow text="Identify where r = 0"/>
        <MathLine size={14}>r = 0 when 2 − 4cos(θ) = 0 → cos(θ) = 1/2 → θ = <MathBox color="#6366f1">π/3</MathBox></MathLine>
        <Arrow text="Analyze the inner loop"/>
        <MathLine size={14}>On 0 ≤ θ ≤ π/3: r(θ) is <MathBox color="#ef4444">negative</MathBox><Annotate>inner loop!</Annotate></MathLine>
        <MathLine size={14}>On π/3 ≤ θ ≤ π: r(θ) is <MathBox color="#22c55e">positive</MathBox><Annotate>outer loop</Annotate></MathLine>
        <Ans>Inner loop forms where r is negative (0 ≤ θ ≤ π/3 and 5π/3 ≤ θ ≤ 2π)</Ans>
      </WB>
      <Tp>On the AP exam, if asked where the inner loop occurs, look for the interval where r {"<"} 0.</Tp>
    </div>},
    { title:"Example — Rose Curves", content:<div>
      <Q>Describe the graph of r(θ) = 4sin(2θ) on 0 ≤ θ ≤ 2π. How many petals does it have?</Q>
      <FmUsed>r(θ) = a·sin(bθ) — Rose curve with a = 4, b = 2</FmUsed>
      <WB>
        <MathLine size={14}>Since b = 2 (even), the domain is 0 ≤ θ ≤ 2π</MathLine>
        <MathLine size={14}>Number of petals = 2b = 2(2) = <MathBox color="#6366f1">4 petals</MathBox></MathLine>
        <MathLine size={14}>Maximum distance from origin = |a| = <MathBox color="#22c55e">4</MathBox></MathLine>
        <Arrow text="Compare: what if b were odd?"/>
        <MathLine size={14}>r(θ) = 2sin(3θ): b = 3 (odd) → domain 0 ≤ θ ≤ π</MathLine>
        <MathLine size={14}>Number of petals = b = <MathBox color="#ec4899">3 petals</MathBox></MathLine>
      </WB>
      <Tb h={["Function","b","Domain","Petals"]} r={[
        ["4sin(2θ)","2 (even)","0 ≤ θ ≤ 2π","4"],
        ["2sin(3θ)","3 (odd)","0 ≤ θ ≤ π","3"],
        ["4cos(4θ)","4 (even)","0 ≤ θ ≤ 2π","8"],
      ]}/>
    </div>},
  ]},
  { id:"3.15", name:"Rates of Change in Polar Functions", slides:[
    { title:"Concept — Distance from the Origin", content:<div>
      <Fm label="Key Idea">The distance between (r, θ) and the origin depends on BOTH the sign and the direction of change of r = f(θ).</Fm>
      <Tb h={["Condition","Distance from Origin"]} r={[
        ["r positive and increasing","Increasing"],
        ["r positive and decreasing","Decreasing"],
        ["r negative and decreasing (more negative)","Increasing"],
        ["r negative and increasing (less negative)","Decreasing"],
      ]}/>
      <Wh>When r is negative, think about |r| — the absolute value is the actual distance. If r goes from −2 to −4, the distance is growing (from 2 to 4) even though r is "decreasing."</Wh>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Relative Extrema on Polar Curves</Tt><Sm>
        If r = f(θ) changes from <B>increasing to decreasing</B> (or vice versa), the function has a <B>relative extremum</B> — a point <B>closest to</B> or <B>farthest from</B> the origin.
      </Sm></Box>
      <W>Don't confuse "r is at a maximum" with "farthest from origin." If r has a maximum of −1, the point is only 1 unit from the origin. Distance = |r|, not r!</W>
      <Tp>On the AP exam, when asked about distance from the origin, always consider both the sign of r AND whether it is increasing or decreasing.</Tp>
    </div>},
    { title:"Concept — Average Rate of Change in Polar", content:<div>
      <Fm label="Average Rate of Change">AROC = [r(θ₂) − r(θ₁)] / [θ₂ − θ₁]</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">What AROC Tells You</Tt><Sm>
        • The average rate of change gives the rate at which the <B>radius changes per radian</B><br/>
        • <B c="#22c55e">Positive AROC</B> means r is increasing on average over the interval<br/>
        • <B c="#ef4444">Negative AROC</B> means r is decreasing on average over the interval<br/>
        • Units: if r is in cm, then AROC is in <B>cm per radian</B>
      </Sm></Box>
      <Fm label="Estimation Using AROC">r(θ) ≈ r(θ₁) + AROC · (θ − θ₁)</Fm>
      <Wh>This estimation formula is just a linear approximation — you use a known point and the rate of change to predict a nearby value.</Wh>
      <W>Make sure you use the correct interval when computing AROC. The denominator is the change in θ (radians), NOT the change in r!</W>
    </div>},
    { title:"Example — Analyzing Distance from Origin", content:<div>
      <Q>Given r(θ) = 4sin(θ) on 0 ≤ θ ≤ π. Describe the distance from the origin and find the point farthest from the origin.</Q>
      <FmUsed>r(θ) = 4sin(θ)</FmUsed>
      <WB>
        <Tb h={["θ","0","π/6","π/3","π/2","2π/3","5π/6","π"]} r={[
          ["r(θ)","0","2","3.5","4","3.5","2","0"],
        ]}/>
        <Arrow text="Analyze each sub-interval"/>
        <MathLine size={14}>On 0 ≤ θ ≤ π/2: r is <MathBox color="#22c55e">positive</MathBox> and <MathBox color="#22c55e">increasing</MathBox></MathLine>
        <MathLine size={14}>→ Distance from origin is <MathBox color="#22c55e">increasing</MathBox></MathLine>
        <MathLine size={14}>On π/2 ≤ θ ≤ π: r is <MathBox color="#6366f1">positive</MathBox> and <MathBox color="#ef4444">decreasing</MathBox></MathLine>
        <MathLine size={14}>→ Distance from origin is <MathBox color="#ef4444">decreasing</MathBox></MathLine>
        <Arrow text="Find the farthest point"/>
        <MathLine size={14}>r changes from increasing → decreasing at θ = π/2</MathLine>
        <Ans>Farthest from origin: (π/2, 4) — the point where r switches from increasing to decreasing</Ans>
      </WB>
    </div>},
    { title:"Example — Negative r and Distance", content:<div>
      <Q>Given r(θ) = 4cos(2θ). On π/4 ≤ θ ≤ 3π/4, describe the distance from the origin and find the farthest distance.</Q>
      <FmUsed>r(θ) = 4cos(2θ)</FmUsed>
      <WB>
        <Tb h={["θ","π/4","π/3","π/2","2π/3","3π/4"]} r={[
          ["r(θ)","0","−2","−4","−2","0"],
        ]}/>
        <Arrow text="Analyze sign and direction"/>
        <MathLine size={14}>On π/4 ≤ θ ≤ π/2: r is <MathBox color="#ef4444">negative</MathBox> and <MathBox color="#ef4444">decreasing</MathBox> (0 → −4)</MathLine>
        <MathLine size={14}>→ Distance from origin is <MathBox color="#22c55e">increasing</MathBox><Annotate>|r| grows from 0 to 4</Annotate></MathLine>
        <MathLine size={14}>On π/2 ≤ θ ≤ 3π/4: r is <MathBox color="#ef4444">negative</MathBox> and <MathBox color="#6366f1">increasing</MathBox> (−4 → 0)</MathLine>
        <MathLine size={14}>→ Distance from origin is <MathBox color="#ef4444">decreasing</MathBox><Annotate>|r| shrinks from 4 to 0</Annotate></MathLine>
        <Ans>Greatest distance on this interval = 4, occurring at θ = π/2</Ans>
      </WB>
    </div>},
    { title:"Example — Average Rate of Change and Estimation", content:<div>
      <Q>Given r(θ) = 3 + 3sin(θ) where r is in cm. Find the AROC on [0.4, 0.6], use it to estimate r(0.5), and compare with the actual value.</Q>
      <FmUsed>AROC = [r(θ₂) − r(θ₁)] / [θ₂ − θ₁]</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Part (a): Find AROC on [0.4, 0.6]</b></MathLine>
        <MathLine size={14}>r(0.6) = 3 + 3sin(0.6) ≈ 3 + 1.692 ≈ 4.692</MathLine>
        <MathLine size={14}>r(0.4) = 3 + 3sin(0.4) ≈ 3 + 1.168 ≈ 4.168</MathLine>
        <MathLine size={14}>AROC = (4.692 − 4.168)/(0.6 − 0.4) = 0.524/0.2 ≈ <MathBox color="#6366f1">2.628 cm/radian</MathBox></MathLine>
        <Arrow text="Part (b): Estimate r(0.5)"/>
        <MathLine size={14}>r(0.5) ≈ r(0.4) + AROC · (0.5 − 0.4)</MathLine>
        <MathLine size={14}>r(0.5) ≈ 4.168 + 2.628 · (0.1) = <MathBox color="#22c55e">4.431</MathBox></MathLine>
        <Arrow text="Part (c): Compare with actual"/>
        <MathLine size={14}>r(0.5) = 3 + 3sin(0.5) = 3 + 1.438 = <MathBox color="#22c55e">4.438</MathBox></MathLine>
        <Ans>Estimate: 4.431 vs. Actual: 4.438 — differs only in the thousandths place!</Ans>
      </WB>
      <Tp>The closer the estimation point is to the known point, the more accurate the linear approximation will be.</Tp>
    </div>},
  ]},
];
const unit3Practice = [
  { id:"3.1", problems:[
    <PQ key="1" n="1" q={<span>A periodic function has period 6. If f(2) = 5, find f(14) and f(20).</span>} a="f(14) = 5, f(20) = 5" e={<WB>
      <MathLine size={14}>f(14) = f(14−6) = f(8) = f(8−6) = f(2) = <MathBox color="#22c55e">5</MathBox></MathLine>
      <MathLine size={14}>f(20) = f(20−6) = f(14) = f(14−6) = f(8) = f(8−6) = f(2) = <MathBox color="#22c55e">5</MathBox></MathLine>
      <Tp>Keep subtracting the period until you land in the first cycle!</Tp>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A Ferris wheel has a radius of 40 feet. The center of the wheel is 50 feet above the ground. It completes one revolution every 60 seconds. What is the period, maximum height, and minimum height?</span>} a="Period = 60 sec, Max = 90 ft, Min = 10 ft" e={<WB>
      <MathLine size={14}>Period = 60 seconds (one full revolution)</MathLine>
      <MathLine size={14}>Max height = center + radius = 50 + 40 = <MathBox color="#22c55e">90 ft</MathBox></MathLine>
      <MathLine size={14}>Min height = center − radius = 50 − 40 = <MathBox color="#22c55e">10 ft</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"3.2", problems:[
    <PQ key="1" n="1" q={<span>Point P(5, −12) is on the terminal ray of angle θ. The radius of the circle is 13. Find sin θ, cos θ, and tan θ as fractions.</span>} a="sin θ = −12/13, cos θ = 5/13, tan θ = −12/5" e={<WB>
      <MathLine size={14}>sin θ = y/r = −12/13 = <MathBox color="#22c55e">−12/13</MathBox></MathLine>
      <MathLine size={14}>cos θ = x/r = 5/13 = <MathBox color="#22c55e">5/13</MathBox></MathLine>
      <MathLine size={14}>tan θ = y/x = −12/5 = <MathBox color="#22c55e">−12/5</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>On the unit circle, an angle in standard position has a radian measure of θ = 3π/2. Find sin θ, cos θ, and tan θ.</span>} a="sin θ = −1, cos θ = 0, tan θ = undefined" e={<WB>
      <MathLine size={14}>At 3π/2, the point on the unit circle is (0, −1)</MathLine>
      <MathLine size={14}>sin(3π/2) = y = <MathBox color="#22c55e">−1</MathBox></MathLine>
      <MathLine size={14}>cos(3π/2) = x = <MathBox color="#22c55e">0</MathBox></MathLine>
      <MathLine size={14}>tan(3π/2) = y/x = −1/0 = <MathBox color="#ef4444">undefined</MathBox><Annotate color="#ef4444">can't divide by 0!</Annotate></MathLine>
    </WB>}/>,
  ]},
  { id:"3.3", problems:[
    <PQ key="1" n="1" q={<span>Evaluate without a calculator: sin(2π/3), cos(5π/4), and sin(−π/6).</span>} a="√3/2, −√2/2, −1/2" e={<WB>
      <MathLine size={14}>sin(2π/3): ref angle π/3, Q2 (sin +) → <MathBox color="#22c55e">√3/2</MathBox></MathLine>
      <MathLine size={14}>cos(5π/4): ref angle π/4, Q3 (cos −) → <MathBox color="#22c55e">−√2/2</MathBox></MathLine>
      <MathLine size={14}>sin(−π/6): sin is odd → −sin(π/6) = <MathBox color="#22c55e">−1/2</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>An angle of π/3 radians intersects a circle of radius 10. Find the coordinates of the intersection point.</span>} a="(5, 5√3)" e={<WB>
      <MathLine size={14}>x = 10·cos(π/3) = 10·(1/2) = <MathBox color="#22c55e">5</MathBox></MathLine>
      <MathLine size={14}>y = 10·sin(π/3) = 10·(√3/2) = <MathBox color="#22c55e">5√3</MathBox></MathLine>
      <Ans>Point = (5, 5√3)</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Given a point P(−3, 4) on a circle centered at the origin, find the radius and determine sin θ, cos θ, and tan θ for the angle θ formed by the positive x-axis and the line from the origin to P.</span>} a="r = 5, sin θ = 4/5, cos θ = −3/5, tan θ = −4/3" e={<WB>
      <MathLine size={14}>r = √((-3)² + 4²) = √(9 + 16) = <MathBox color="#6366f1">5</MathBox></MathLine>
      <MathLine size={14}>sin θ = y/r = 4/5 = <MathBox color="#22c55e">4/5</MathBox></MathLine>
      <MathLine size={14}>cos θ = x/r = −3/5 = <MathBox color="#22c55e">−3/5</MathBox><Annotate>Q2: cos is negative</Annotate></MathLine>
      <MathLine size={14}>tan θ = y/x = 4/(−3) = <MathBox color="#22c55e">−4/3</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"3.4", problems:[
    <PQ key="1" n="1" q={<span>Complete the table for f(θ) = sin θ at θ = 0, π/2, π, 3π/2, 2π. State the domain and range.</span>} a="0, 1, 0, −1, 0. D: all reals, R: [−1, 1]" e={<WB>
      <MathLine size={14}>sin(0) = <MathBox>0</MathBox>, sin(π/2) = <MathBox>1</MathBox>, sin(π) = <MathBox>0</MathBox></MathLine>
      <MathLine size={14}>sin(3π/2) = <MathBox>−1</MathBox>, sin(2π) = <MathBox>0</MathBox></MathLine>
      <Ans>Domain: all real numbers · Range: [−1, 1]</Ans>
    </WB>}/>,
  ]},
  { id:"3.5", problems:[
    <PQ key="1" n="1" q={<span>A sinusoidal function has a maximum value of 10 and a minimum value of −2. Find the amplitude, midline, period if max occurs at x = 3 and the next max occurs at x = 11.</span>} a="Amplitude = 6, Midline: y = 4, Period = 8" e={<WB>
      <MathLine size={14}>Amplitude = (10 − (−2))/2 = 12/2 = <MathBox color="#22c55e">6</MathBox></MathLine>
      <MathLine size={14}>Midline = (10 + (−2))/2 = 8/2 = <MathBox color="#22c55e">4</MathBox> → y = 4</MathLine>
      <MathLine size={14}>Period = 11 − 3 = <MathBox color="#22c55e">8</MathBox><Annotate>max to next max = full period</Annotate></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Is sine an even or odd function? Is cosine even or odd? What type of symmetry does each have?</span>} a="Sine: odd (rotational). Cosine: even (reflective over y-axis)." e={<WB>
      <MathLine size={14}>sin(−θ) = −sin(θ) → <MathBox color="#6366f1">ODD</MathBox><Annotate>rotational symmetry about origin</Annotate></MathLine>
      <MathLine size={14}>cos(−θ) = cos(θ) → <MathBox color="#ec4899">EVEN</MathBox><Annotate>reflective symmetry over y-axis</Annotate></MathLine>
    </WB>}/>,
  ]},
  { id:"3.6", problems:[
    <PQ key="1" n="1" q={<span>For f(θ) = −2sin(3θ + π) + 4, identify the amplitude, period, phase shift, and midline.</span>} a="Amp = 2, Period = 2π/3, Shift left π/3, Midline y = 4" e={<WB>
      <MathLine size={14}>a = −2 → Amplitude = |−2| = <MathBox color="#22c55e">2</MathBox><Annotate>reflected over x-axis</Annotate></MathLine>
      <MathLine size={14}>Factor inside: 3(θ + π/3)</MathLine>
      <MathLine size={14}>b = 3 → Period = 2π/3 = <MathBox color="#22c55e">2π/3</MathBox></MathLine>
      <MathLine size={14}>c = π/3 → Phase shift <MathBox color="#22c55e">LEFT π/3</MathBox></MathLine>
      <MathLine size={14}>d = 4 → Midline: <MathBox color="#22c55e">y = 4</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Write a cosine function with amplitude 5, period π, vertical shift up 3, and a phase shift right π/4.</span>} a="f(θ) = 5cos(2(θ − π/4)) + 3" e={<WB>
      <MathLine size={14}>Amplitude 5: a = 5</MathLine>
      <MathLine size={14}>Period π: 2π/b = π → b = <MathBox color="#6366f1">2</MathBox></MathLine>
      <MathLine size={14}>Phase shift right π/4: c = −π/4</MathLine>
      <MathLine size={14}>Vertical shift up 3: d = 3</MathLine>
      <Ans>f(θ) = 5cos(2(θ − π/4)) + 3</Ans>
    </WB>}/>,
  ]},
  { id:"3.7", problems:[
    <PQ key="1" n="1" q={<span>A function oscillates between 2 and 14 with f(0) = 14. The function reaches its minimum at x = 5. Write a sinusoidal model.</span>} a="f(x) = 6cos(πx/5) + 8" e={<WB>
      <MathLine size={14}>Amplitude = (14−2)/2 = <MathBox color="#6366f1">6</MathBox></MathLine>
      <MathLine size={14}>Midline = (14+2)/2 = <MathBox color="#6366f1">8</MathBox></MathLine>
      <MathLine size={14}>Max at 0, min at 5 → half period = 5 → period = 10</MathLine>
      <MathLine size={14}>b = 2π/10 = <MathBox color="#6366f1">π/5</MathBox></MathLine>
      <MathLine size={14}>Starts at max → use positive cosine</MathLine>
      <Ans>f(x) = 6cos(πx/5) + 8</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A Ferris wheel has a diameter of 40 ft with its center 25 ft above the ground. It completes one revolution in 60 seconds. Write a sinusoidal model h(t) for height above the ground if the rider starts at the bottom.</span>} a="h(t) = −20cos(πt/30) + 25" e={<WB>
      <MathLine size={14}>Amplitude = radius = 40/2 = <MathBox color="#6366f1">20</MathBox></MathLine>
      <MathLine size={14}>Midline = center height = <MathBox color="#6366f1">25</MathBox></MathLine>
      <MathLine size={14}>Period = 60 sec → b = 2π/60 = <MathBox color="#6366f1">π/30</MathBox></MathLine>
      <MathLine size={14}>Starts at bottom (min) → negative cosine</MathLine>
      <Ans>h(t) = −20cos(πt/30) + 25</Ans>
    </WB>}/>,
  ]},
  { id:"3.8", problems:[
    <PQ key="1" n="1" q={<span>For f(θ) = 2tan(θ/3 − π/6), find the period and describe all transformations.</span>} a="Period = 3π. Vertical stretch ×2, horizontal stretch ×3, right π/2." e={<WB>
      <MathLine size={14}>Factor inside: (1/3)(θ − π/2)</MathLine>
      <MathLine size={14}>b = 1/3 → period = π/(1/3) = <MathBox color="#22c55e">3π</MathBox></MathLine>
      <MathLine size={14}>a = 2 → vertical dilation by <MathBox color="#22c55e">2</MathBox></MathLine>
      <MathLine size={14}>Phase shift: RIGHT <MathBox color="#22c55e">π/2</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For g(θ) = −3tan(2θ), find the period, vertical asymptotes for one period, and describe the transformations.</span>} a="Period = π/2. VAs: θ = π/4 + nπ/2. Vert stretch ×3, reflected, horiz compress ×(1/2)." e={<WB>
      <MathLine size={14}>b = 2 → period = π/2 = <MathBox color="#22c55e">π/2</MathBox></MathLine>
      <MathLine size={14}>VAs: 2θ = π/2 + nπ → θ = <MathBox color="#ef4444">π/4 + nπ/2</MathBox></MathLine>
      <MathLine size={14}>a = −3 → vertical stretch by 3 + reflection over x-axis</MathLine>
      <MathLine size={14}>Horizontal compression by factor of 1/2</MathLine>
    </WB>}/>,
  ]},
  { id:"3.9", problems:[
    <PQ key="1" n="1" q={<span>Evaluate: arcsin(−√2/2), arccos(0), and arctan(1). Give exact answers.</span>} a="−π/4, π/2, π/4" e={<WB>
      <MathLine size={14}>arcsin(−√2/2): sin(?) = −√2/2, range [−π/2, π/2] → <MathBox color="#22c55e">−π/4</MathBox></MathLine>
      <MathLine size={14}>arccos(0): cos(?) = 0, range [0, π] → <MathBox color="#22c55e">π/2</MathBox></MathLine>
      <MathLine size={14}>arctan(1): tan(?) = 1, range (−π/2, π/2) → <MathBox color="#22c55e">π/4</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For f(x) = 3cos⁻¹(x) − π, describe the transformation of the parent function y = cos⁻¹(x). Then find the domain and range of f.</span>} a="Domain: [−1, 1] · Range: [−π, 2π]" e={<WB>
      <MathLine size={14}>Transformation: vertical stretch by 3, then shift down π</MathLine>
      <MathLine size={14} color="#4338ca"><b>Domain:</b></MathLine>
      <MathLine size={14}>No horizontal change → domain stays <MathBox>[−1, 1]</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Range:</b></MathLine>
      <MathLine size={14}>cos⁻¹(x) range: [0, π]</MathLine>
      <Arrow text="Multiply by 3"/>
      <MathLine size={14}>[0, π] × 3 = [0, 3π]</MathLine>
      <Arrow text="Subtract π"/>
      <MathLine size={14}>[0−π, 3π−π] = <MathBox>[−π, 2π]</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"3.10", problems:[
    <PQ key="1" n="1" q={<span>Solve 2sin²x + sinx − 1 = 0 on the interval 0 ≤ x ≤ 2π.</span>} a="x = π/6, 5π/6, 3π/2" e={<WB>
      <MathLine size={14}>Let u = sin x: 2u² + u − 1 = 0</MathLine>
      <Arrow text="Factor the quadratic"/>
      <MathLine size={14}>(2u − 1)(u + 1) = 0</MathLine>
      <MathLine size={14}>sin x = 1/2 → x = <MathBox color="#22c55e">π/6, 5π/6</MathBox></MathLine>
      <MathLine size={14}>sin x = −1 → x = <MathBox color="#22c55e">3π/2</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Find all values of x on the interval 0 ≤ x ≤ 2π where 2sinx − 1 {"<"} 0.</span>} a="0 < x < π/6 and 5π/6 < x < 2π" e={<WB>
      <MathLine size={14}>sin x {"<"} 1/2</MathLine>
      <MathLine size={14}>sin x = 1/2 at x = π/6 and x = 5π/6</MathLine>
      <Ans>0 {"<"} x {"<"} π/6 and 5π/6 {"<"} x {"<"} 2π</Ans>
    </WB>}/>,
  ]},
  { id:"3.11", problems:[
    <PQ key="1" n="1" q={<span>Evaluate without a calculator: sec(π/4), csc(π/6), and cot(π/3).</span>} a="√2, 2, √3/3" e={<WB>
      <MathLine size={14}>sec(π/4) = 1/cos(π/4) = 1/(√2/2) = <MathBox color="#22c55e">√2</MathBox></MathLine>
      <MathLine size={14}>csc(π/6) = 1/sin(π/6) = 1/(1/2) = <MathBox color="#22c55e">2</MathBox></MathLine>
      <MathLine size={14}>cot(π/3) = cos(π/3)/sin(π/3) = (1/2)/(√3/2) = <MathBox color="#22c55e">1/√3 = √3/3</MathBox></MathLine>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For f(θ) = csc(2θ), find the period and write the equations for ALL vertical asymptotes.</span>} a="Period: π · VAs: θ = kπ/2, k∈ℤ" e={<WB>
      <MathLine size={14}>Period of csc θ = 2π. With b = 2: period = 2π/2 = <MathBox color="#22c55e">π</MathBox></MathLine>
      <MathLine size={14} color="#4338ca"><b>Vertical Asymptotes:</b></MathLine>
      <MathLine size={14}>csc is undefined where sin = 0</MathLine>
      <MathLine size={14}>Set inside = kπ: 2θ = kπ → θ = <MathBox>kπ/2</MathBox>, k∈ℤ</MathLine>
      <Tp>VAs at θ = 0, π/2, π, 3π/2, ... (every half-period)</Tp>
    </WB>}/>,
  ]},
  { id:"3.12", problems:[
    <PQ key="1" n="1" q={<span>Use the Pythagorean identity to simplify: (1 + cot²x)·sin x.</span>} a="csc x" e={<WB>
      <MathLine size={14}>1 + cot²x = csc²x<Annotate>Pythagorean identity</Annotate></MathLine>
      <MathLine size={14}>csc²x · sin x = (1/sin²x) · sin x = 1/sin x</MathLine>
      <Ans>= csc x</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Use the double angle identity to write sin(10x)/cos(5x) as a single trig function.</span>} a="2sin(5x)" e={<WB>
      <MathLine size={14}>sin(10x) = sin(2·5x) = 2sin(5x)cos(5x)<Annotate>double angle</Annotate></MathLine>
      <MathLine size={14}>2sin(5x)cos(5x) / cos(5x) = <MathBox color="#22c55e">2sin(5x)</MathBox></MathLine>
    </WB>}/>,
  ]},
  { id:"3.13", problems:[
    <PQ key="1" n="1" q={<span>Convert the polar coordinates (4, 3π/2) to rectangular coordinates (x, y).</span>} a="(0, −4)" e={<WB>
      <MathLine size={14}>x = 4·cos(3π/2) = 4·0 = <MathBox color="#22c55e">0</MathBox></MathLine>
      <MathLine size={14}>y = 4·sin(3π/2) = 4·(−1) = <MathBox color="#22c55e">−4</MathBox></MathLine>
      <Ans>(0, −4)</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>Convert the rectangular coordinates (3, −3) to polar coordinates (r, θ).</span>} a="(3√2, −π/4) or (3√2, 7π/4)" e={<WB>
      <MathLine size={14}>r = √(9 + 9) = √18 = <MathBox color="#6366f1">3√2</MathBox></MathLine>
      <MathLine size={14}>θ = arctan(−3/3) = arctan(−1) = <MathBox color="#6366f1">−π/4</MathBox><Annotate>Q4</Annotate></MathLine>
      <Ans>(3√2, −π/4) or equivalently (3√2, 7π/4)</Ans>
    </WB>}/>,
  ]},
  { id:"3.14", problems:[
    <PQ key="1" n="1" q={<span>The polar function r(θ) = 3sin(4θ) is a rose curve. How many petals does it have, and what is the appropriate domain?</span>} a="8 petals, domain 0 ≤ θ ≤ 2π" e={<WB>
      <MathLine size={14}>Rose form: r = a·sin(bθ) with a = 3, b = 4</MathLine>
      <MathLine size={14}>b = 4 is <MathBox color="#6366f1">even</MathBox></MathLine>
      <MathLine size={14}>Even b → domain 0 ≤ θ ≤ 2π, petals = 2b = 2(4) = <MathBox color="#22c55e">8</MathBox></MathLine>
      <Ans>8 petals on the domain 0 ≤ θ ≤ 2π</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For r(θ) = 1 − 3cos(θ), classify the curve type and determine whether it has an inner loop.</span>} a="Limaçon with inner loop (|a| < |b| since 1 < 3)" e={<WB>
      <MathLine size={14}>Form: r = a + b·cos(θ) with a = 1, b = −3</MathLine>
      <MathLine size={14}>|a| = 1, |b| = 3 → |a| {"<"} |b|<Annotate>inner loop!</Annotate></MathLine>
      <MathLine size={14}>Inner loop occurs where r {"<"} 0</MathLine>
      <Ans>Limaçon with inner loop since |a| {"<"} |b|</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>For the polar function r(θ) = 2cos(3θ), determine if this is a rose curve, how many petals it has, and state the appropriate domain.</span>} a="Rose with 3 petals, domain 0 ≤ θ ≤ π" e={<WB>
      <MathLine size={14}>Form: r = a·cos(bθ) with a = 2, b = 3</MathLine>
      <MathLine size={14}>b = 3 is <MathBox color="#6366f1">odd</MathBox></MathLine>
      <MathLine size={14}>Odd b → petals = b = <MathBox color="#22c55e">3</MathBox>, domain 0 ≤ θ ≤ π</MathLine>
      <Ans>Rose curve with 3 petals on [0, π]</Ans>
    </WB>}/>,
  ]},
  { id:"3.15", problems:[
    <PQ key="1" n="1" q={<span>Given r(θ) = 4 − 2sin(θ). On 0 ≤ θ ≤ π/2, r(θ) is positive and decreasing. Is the distance from the origin increasing or decreasing?</span>} a="Decreasing — r is positive and decreasing." e={<WB>
      <MathLine size={14}>r(0) = 4 − 0 = <MathBox>4</MathBox></MathLine>
      <MathLine size={14}>r(π/2) = 4 − 2 = <MathBox>2</MathBox></MathLine>
      <MathLine size={14}>r is <MathBox color="#22c55e">positive</MathBox> and <MathBox color="#ef4444">decreasing</MathBox></MathLine>
      <MathLine size={14}>→ Distance from origin is <MathBox color="#ef4444">decreasing</MathBox></MathLine>
      <Ans>Decreasing — when r is positive and decreasing, the point moves closer to the origin.</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>For r(θ) = 4cos(2θ), find the average rate of change of r on [0, π/6]. Is the radius increasing or decreasing?</span>} a="AROC = −12/π ≈ −3.82. Decreasing." e={<WB>
      <MathLine size={14}>r(0) = 4cos(0) = <MathBox>4</MathBox></MathLine>
      <MathLine size={14}>r(π/6) = 4cos(π/3) = 4(1/2) = <MathBox>2</MathBox></MathLine>
      <Arrow text="Apply AROC formula"/>
      <MathLine size={14}>AROC = (2 − 4) / (π/6) = (−2) / (π/6) = <MathBox color="#6366f1">−12/π ≈ −3.82</MathBox></MathLine>
      <Ans>AROC = −12/π. The radius is decreasing because AROC is negative.</Ans>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>Given r(θ) = 2 + 4sin(θ) in inches. Find the AROC on [1.0, 1.2] and estimate r(1.1).</span>} a="AROC ≈ 1.830 in/rad, r(1.1) ≈ 5.549 in" e={<WB>
      <MathLine size={14}>r(1.2) ≈ 2 + 3.732 ≈ <MathBox>5.732</MathBox></MathLine>
      <MathLine size={14}>r(1.0) ≈ 2 + 3.366 ≈ <MathBox>5.366</MathBox></MathLine>
      <MathLine size={14}>AROC = (5.732 − 5.366)/(0.2) ≈ <MathBox color="#6366f1">1.830 in/rad</MathBox></MathLine>
      <Arrow text="Estimate r(1.1)"/>
      <MathLine size={14}>r(1.1) ≈ 5.366 + 1.830·(0.1) = <MathBox color="#22c55e">5.549 in</MathBox></MathLine>
      <Ans>AROC ≈ 1.830 in/rad · Estimate r(1.1) ≈ 5.549 in</Ans>
    </WB>}/>,
  ]},
];
const allUnits = [
  { id: 1, name: "Polynomial & Rational", topics: unit1Topics, practice: unit1Practice },
  { id: 2, name: "Exponential & Logarithmic", topics: unit2Topics, practice: unit2Practice },
  { id: 3, name: "Trigonometric & Polar", topics: unit3Topics, practice: unit3Practice },
];

const FormulaSheet = ({unit})=>{
  if(unit===0) return (<div>
    <Fm label="Average Rate of Change">AROC = [f(b) − f(a)] / (b − a)</Fm>
    <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Rates of Change</Tt><Sm>
      <B>Positive AROC</B> → function is increasing over the interval (going uphill)<br/>
      <B>Negative AROC</B> → function is decreasing over the interval (going downhill)<br/>
      <B>Zero AROC</B> → no net change (but function may go up and down in between)<br/>
      <B>Concave up</B> → AROC is increasing (cup shape) · <B>Concave down</B> → AROC is decreasing (hill shape)
    </Sm></Box>
    <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Identifying Function Types from Tables</Tt><Sm>
      <B>1st differences constant</B> → Linear (degree 1)<br/>
      <B>2nd differences constant</B> → Quadratic (degree 2)<br/>
      <B>nᵗʰ differences constant</B> → Polynomial of degree n<br/>
      <B c="#ef4444">Only works when x-values are equally spaced!</B>
    </Sm></Box>
    <Fm label="Polynomial Standard Form">p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀</Fm>
    <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Polynomial Properties</Tt><Sm>
      <B>Degree</B> = highest power of x · <B>Leading coefficient (LC)</B> = coefficient of highest power<br/>
      <B>Zeros:</B> p(a) = 0 ↔ (x − a) is a factor<br/>
      <B>Multiplicity 1</B> → crosses x-axis · <B>Mult 2</B> → bounces · <B>Mult 3</B> → wiggles through<br/>
      <B>Complex zeros</B> always come in conjugate pairs: if a+bi is a zero, then a−bi is too
    </Sm></Box>
    <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">End Behavior</Tt><Sm>
      <B>Even degree + positive LC</B> → both ends UP (smile)<br/>
      <B>Even degree + negative LC</B> → both ends DOWN (frown)<br/>
      <B>Odd degree + positive LC</B> → left DOWN, right UP<br/>
      <B>Odd degree + negative LC</B> → left UP, right DOWN<br/>
      <B c="#be185d">Key insight:</B> Even = same direction both sides · Odd = opposite directions
    </Sm></Box>
    <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Rational Functions r(x) = p(x)/q(x)</Tt><Sm>
      <B>HA when n{"<"}d:</B> y = 0 · <B>HA when n=d:</B> y = LC ratio · <B>n{">"}d:</B> no HA (slant if n=d+1)<br/>
      <B>VA:</B> denominator = 0 and numerator ≠ 0 (graph shoots to ±∞)<br/>
      <B>Hole:</B> same factor cancels from top and bottom (graph has missing point)<br/>
      <B>Zeros:</B> numerator = 0 (where denominator ≠ 0)<br/>
      <B>y-intercept:</B> plug in x = 0
    </Sm></Box>
    <Fm label="Transformations">g(x) = a · f(b(x − h)) + k</Fm>
    <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Transformation Parameters</Tt><Sm>
      <B>a</B> = vertical stretch/compress (|a|{"<"}1 shorter, |a|{">"}1 taller, negative = flip over x-axis)<br/>
      <B>b</B> = horizontal stretch/compress (|b|{"<"}1 wider, |b|{">"}1 narrower, negative = flip over y-axis)<br/>
      <B>h</B> = horizontal shift (positive = RIGHT, negative = LEFT)<br/>
      <B>k</B> = vertical shift (positive = UP, negative = DOWN)<br/>
      <B>Order:</B> horizontal dilation → horizontal shift → vertical dilation → vertical shift
    </Sm></Box>
  </div>);

  if(unit===1) return (<div>
    <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Arithmetic vs Geometric Sequences</Tt><Sm>
      <B>Arithmetic:</B> aₙ = a₀ + dn (add d each time) · Graph is LINEAR<br/>
      <B>Geometric:</B> gₙ = g₀ · rⁿ (multiply by r each time) · Graph is EXPONENTIAL<br/>
      <B>Find d:</B> subtract consecutive terms · <B>Find r:</B> divide consecutive terms
    </Sm></Box>
    <Fm label="Exponential Function">f(x) = a · bˣ</Fm>
    <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Exponential Properties</Tt><Sm>
      <B>a</B> = initial value (y-intercept, output when x = 0)<br/>
      <B>b</B> = base (growth/decay factor — what you multiply by each time x increases by 1)<br/>
      <B>b {">"}  1</B> → exponential GROWTH · <B>0 {"<"} b {"<"} 1</B> → exponential DECAY<br/>
      <B>Growth rate</B> = b − 1 (as decimal). Ex: b = 1.07 means 7% growth per unit<br/>
      <B>Domain:</B> all reals · <B>Range:</B> (0, ∞) · <B>HA:</B> y = 0<br/>
      <B>With shift:</B> f(x) = a·bˣ + k shifts HA to y = k
    </Sm></Box>
    <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Exponent Rules</Tt><Sm>
      <B>Product:</B> bᵐ · bⁿ = b⁽ᵐ⁺ⁿ⁾ (multiply bases → add exponents)<br/>
      <B>Quotient:</B> bᵐ / bⁿ = b⁽ᵐ⁻ⁿ⁾ (divide bases → subtract exponents)<br/>
      <B>Power:</B> (bᵐ)ⁿ = b⁽ᵐⁿ⁾ (power of power → multiply exponents)<br/>
      <B>Negative:</B> b⁻ⁿ = 1/bⁿ · <B>Zero:</B> b⁰ = 1 · <B>Fractional:</B> b^(1/n) = ⁿ√b
    </Sm></Box>
    <Fm label="Logarithm Definition">log_b(c) = a ↔ bᵃ = c</Fm>
    <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Logarithm Essentials</Tt><Sm>
      <B>The log IS the exponent</B> — "what power of b gives c?"<br/>
      <B>log_b(1) = 0</B> always · <B>log_b(b) = 1</B> always · <B>ln(x) = log_e(x)</B> where e ≈ 2.718<br/>
      <B>Logs and exponentials are inverses:</B> log_b(bˣ) = x and b^(log_b(x)) = x
    </Sm></Box>
    <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Log Properties</Tt><Sm>
      <B>Product:</B> log(M·N) = log M + log N (multiply inside → add outside)<br/>
      <B>Quotient:</B> log(M/N) = log M − log N (divide inside → subtract outside)<br/>
      <B>Power:</B> log(Mⁿ) = n·log M (exponent inside → multiply outside)<br/>
      <B>Change of base:</B> log_b(x) = log(x)/log(b) = ln(x)/ln(b)<br/>
      <B c="#ef4444">WARNING: log(A+B) ≠ log A + log B — there is NO rule for log of a sum!</B>
    </Sm></Box>
    <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Semi-Log Plots</Tt><Sm>
      <B>Straight line on semi-log plot → data is EXPONENTIAL</B><br/>
      <B>Semi-log form:</B> log(y) = (log b)·x + log(a)<br/>
      <B>Slope</B> = log(b) → find b with 10^(slope)<br/>
      <B>y-intercept</B> = log(a) → find a with 10^(y-int)<br/>
      <B>Residuals:</B> actual − predicted · Random residuals → good fit · Patterned residuals → wrong model
    </Sm></Box>
  </div>);

  if(unit===2) return (<div>
    <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Unit Circle Foundations</Tt><Sm>
      <B>sin θ = y</B> (vertical) · <B>cos θ = x</B> (horizontal) · <B>tan θ = y/x = sin/cos</B><br/>
      <B>Any circle:</B> x = r·cos θ, y = r·sin θ (multiply unit circle coords by radius)
    </Sm></Box>
    <Tb h={["θ","sin θ","cos θ","tan θ","Point"]} r={[
      ["0","0","1","0","(1, 0)"],
      ["π/6","1/2","√3/2","√3/3","(√3/2, 1/2)"],
      ["π/4","√2/2","√2/2","1","(√2/2, √2/2)"],
      ["π/3","√3/2","1/2","√3","(1/2, √3/2)"],
      ["π/2","1","0","undef","(0, 1)"],
      ["π","0","−1","0","(−1, 0)"],
      ["3π/2","−1","0","undef","(0, −1)"],
    ]}/>
    <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Signs by Quadrant (ASTC)</Tt><Sm>
      <B>Q1:</B> ALL positive · <B>Q2:</B> SIN positive · <B>Q3:</B> TAN positive · <B>Q4:</B> COS positive<br/>
      Mnemonic: <B>All Students Take Calculus</B>
    </Sm></Box>
    <Fm label="Sinusoidal Function">f(θ) = a · sin(b(θ + c)) + d</Fm>
    <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Sinusoidal Parameters</Tt><Sm>
      <B>a = Amplitude</B> = |a| = (max − min)/2 · Negative a = reflection over x-axis<br/>
      <B>b = Frequency</B> → Period = 2π/|b| · Frequency = 1/period<br/>
      <B>c = Phase Shift</B> → Left if c {">"}  0, Right if c {"<"} 0<br/>
      <B>d = Midline</B> = (max + min)/2 · Range: [d−|a|, d+|a|]
    </Sm></Box>
    <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Tangent and Reciprocals</Tt><Sm>
      <B>Tangent period:</B> π/|b| (NOT 2π!) · VA at θ = π/2 + kπ · Always increasing between VAs<br/>
      <B>sec θ</B> = 1/cos θ · <B>csc θ</B> = 1/sin θ · <B>cot θ</B> = cos θ/sin θ<br/>
      <B>Inverse ranges:</B> sin⁻¹: [−π/2, π/2] · cos⁻¹: [0, π] · tan⁻¹: (−π/2, π/2)
    </Sm></Box>
    <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Trig Identities</Tt><Sm>
      <B>Pythagorean:</B> sin²θ + cos²θ = 1 · 1 + tan²θ = sec²θ · 1 + cot²θ = csc²θ<br/>
      <B>Double Angle:</B> sin(2θ) = 2sinθcosθ · cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ<br/>
      <B>Sum/Diff (sin):</B> sin(α ± β) = sinα·cosβ ± cosα·sinβ<br/>
      <B>Sum/Diff (cos):</B> cos(α ± β) = cosα·cosβ ∓ sinα·sinβ <B c="#ef4444">(sign FLIPS!)</B>
    </Sm></Box>
    <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Polar Coordinates</Tt><Sm>
      <B>Polar → Rect:</B> x = r·cosθ, y = r·sinθ<br/>
      <B>Rect → Polar:</B> r = √(x²+y²), θ = arctan(y/x) — adjust for quadrant!<br/>
      <B>Circles:</B> r = a, r = a·sinθ, r = a·cosθ<br/>
      <B>Limaçons:</B> r = a+b·sinθ or a+b·cosθ · |a|=|b| → cardioid · |a|{"<"}|b| → inner loop · |a|{">"}|b| → dimpled<br/>
      <B>Roses:</B> r = a·sin(bθ) or a·cos(bθ) · odd b → b petals [0,π] · even b → 2b petals [0,2π]
    </Sm></Box>
    <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Rates of Change in Polar</Tt><Sm>
      <B>r pos + increasing</B> → distance ↑ · <B>r pos + decreasing</B> → distance ↓<br/>
      <B>r neg + decreasing</B> → distance ↑ · <B>r neg + increasing</B> → distance ↓<br/>
      <B>AROC:</B> [r(θ₂)−r(θ₁)]/(θ₂−θ₁) · <B>Estimation:</B> r(θ) ≈ r(θ₁) + AROC·(θ−θ₁)
    </Sm></Box>
  </div>);

  return null;
};

// ─── APP ───
export default function App(){
  const [ui,setUi]=useState(0);
  const [tab,setTab]=useState("learn");
  const [ti,setTi]=useState(0);
  const [si,setSi]=useState(0);
  const [mo,setMo]=useState(false);

  const unit=allUnits[ui];
  const topics=unit.topics;
  const practice=unit.practice;
  const t=topics[ti]||topics[0];

  // Filter slides based on active tab
  const getSlides=(topic,mode)=>{
    if(mode==="learn") return topic.slides.filter(s=>!s.title.startsWith("Example"));
    if(mode==="examples") return topic.slides.filter(s=>s.title.startsWith("Example"));
    return topic.slides;
  };

  const activeSlides=tab==="learn"||tab==="examples"?getSlides(t,tab):t.slides;
  const s=activeSlides[si]||activeSlides[0]||(t.slides[0]);

  const next=()=>{if(si<activeSlides.length-1)setSi(si+1);};
  const prev=()=>{if(si>0)setSi(si-1);};
  const sel=(i)=>{setTi(i);setSi(0);setMo(false);};
  const switchUnit=(i)=>{setUi(i);setTi(0);setSi(0);setTab("learn");};

  const unitColors = ["#6366f1","#ec4899","#f59e0b"];
  const tabList=[["learn","📖 Learn"],["examples","🔍 Examples"],["practice","✏️ Practice"],["formulas","📋 Formulas"]];
  const isSlideTab=tab==="learn"||tab==="examples";

  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(180deg,#f1f5f9,#e2e8f0)",fontFamily:"'Segoe UI','Helvetica Neue',sans-serif",padding:"6px",boxSizing:"border-box"}}>
      <div style={{maxWidth:880,margin:"0 auto"}}>
        {/* Unit Selector */}
        <div style={{display:"flex",gap:4,marginBottom:6}}>
          {allUnits.map((u,i)=>(
            <button key={i} onClick={()=>switchUnit(i)} style={{flex:1,padding:"8px 6px",border:ui===i?`2px solid ${unitColors[i]}`:"2px solid #cbd5e1",borderRadius:10,background:ui===i?"#1a1a2e":"#fff",color:ui===i?"#fff":"#333",fontWeight:700,fontSize:13,cursor:"pointer",transition:"all 0.2s"}}>
              Unit {u.id}: {u.name}
            </button>
          ))}
        </div>
        {/* Tab Selector */}
        <div style={{display:"flex",gap:0,marginBottom:6}}>
          {tabList.map(([k,l],idx)=>
            <button key={k} onClick={()=>{setTab(k);setSi(0);}} style={{flex:1,padding:"10px",border:"none",borderRadius:idx===0?"12px 0 0 12px":idx===tabList.length-1?"0 12px 12px 0":"0",background:tab===k?unitColors[ui]:"#c7d2de",color:tab===k?"#fff":"#4338ca",fontWeight:700,fontSize:13,cursor:"pointer"}}>{l}</button>)}
        </div>
        {/* Progress Bar */}
        {isSlideTab&&activeSlides.length>0&&<div style={{height:4,background:"#cbd5e1",borderRadius:3,overflow:"hidden",marginBottom:5}}>
          <div style={{width:`${(si/Math.max(activeSlides.length-1,1))*100}%`,height:"100%",background:`linear-gradient(90deg,${unitColors[ui]},#ec4899)`,borderRadius:3,transition:"width 0.3s"}}/></div>}
        {/* Formula Sheet */}
        {tab==="formulas"&&<div style={{background:"#fff",borderRadius:14,boxShadow:"0 5px 25px rgba(0,0,0,0.06)",overflow:"hidden"}}>
          <div style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)",padding:"9px 16px"}}>
            <div style={{color:"#fff",fontSize:16,fontWeight:700}}>📋 Formula Reference — Unit {unit.id}: {unit.name}</div>
          </div>
          <div style={{padding:"12px 14px",maxHeight:"72vh",overflowY:"auto"}}><FormulaSheet unit={ui}/></div>
        </div>}
        {/* Topic Dropdown */}
        {tab!=="formulas"&&<div style={{position:"relative",marginBottom:5}}>
          <button onClick={()=>setMo(!mo)} style={{width:"100%",padding:"9px 14px",background:"#1a1a2e",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span>📚 {t.id} — {t.name} ({isSlideTab?activeSlides.length:""}{isSlideTab?" slides":""})</span><span>{mo?"▲":"▼"}</span>
          </button>
          {mo&&<div style={{position:"absolute",top:"100%",left:0,right:0,background:"#fff",borderRadius:10,boxShadow:"0 12px 40px rgba(0,0,0,0.18)",zIndex:10,maxHeight:350,overflowY:"auto",marginTop:3}}>
            {topics.map((x,i)=>{const cnt=isSlideTab?getSlides(x,tab).length:x.slides.length;return(
              <div key={i} onClick={()=>sel(i)} style={{padding:"8px 14px",cursor:"pointer",borderBottom:"1px solid #f1f5f9",background:i===ti?"#eef2ff":"#fff",fontSize:13,display:"flex",justifyContent:"space-between"}}>
              <span style={{fontWeight:i===ti?700:400,color:i===ti?"#4338ca":"#333"}}>{x.id} — {x.name}</span>
              {isSlideTab&&<span style={{fontSize:11,color:"#94a3b8"}}>{cnt} slides</span>}
            </div>)})}
          </div>}
        </div>}
        {/* Content Card */}
        {tab!=="formulas"&&<div style={{background:"#fff",borderRadius:14,boxShadow:"0 5px 25px rgba(0,0,0,0.06)",overflow:"hidden"}}>
          <div style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)",padding:"9px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><span style={{color:"#818cf8",fontSize:11,fontWeight:600,letterSpacing:1}}>TOPIC {t.id}</span>
              <div style={{color:"#fff",fontSize:16,fontWeight:700,marginTop:1}}>{isSlideTab?s.title:tab==="practice"?`Practice — ${t.name}`:s.title}</div></div>
            {isSlideTab&&<div style={{color:"#94a3b8",fontSize:11,textAlign:"right"}}>{si+1}/{activeSlides.length}</div>}
          </div>
          <div style={{padding:"12px 14px",maxHeight:"62vh",overflowY:"auto"}}>
            {tab==="practice"?<div><div style={{fontSize:14,color:"#555",marginBottom:10}}>Work these on paper like the whiteboard examples. Same problem types, different numbers.</div>{(practice.find(p=>p.id===t.id)||practice[0]).problems}</div>:s.content}
          </div>
          {isSlideTab&&<div style={{padding:"8px 14px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #f1f5f9"}}>
            <button onClick={prev} disabled={si===0} style={{padding:"7px 18px",borderRadius:8,border:"none",background:si===0?"#e2e8f0":unitColors[ui],color:si===0?"#94a3b8":"#fff",fontWeight:700,fontSize:13,cursor:si===0?"default":"pointer"}}>← Back</button>
            <div style={{display:"flex",gap:3}}>{activeSlides.map((_,i)=><div key={i} onClick={()=>setSi(i)} style={{width:i===si?18:7,height:7,borderRadius:4,background:i===si?unitColors[ui]:"#cbd5e1",cursor:"pointer",transition:"all 0.2s"}}/>)}</div>
            <button onClick={next} disabled={si===activeSlides.length-1} style={{padding:"7px 18px",borderRadius:8,border:"none",background:si===activeSlides.length-1?"#e2e8f0":unitColors[ui],color:si===activeSlides.length-1?"#94a3b8":"#fff",fontWeight:700,fontSize:13,cursor:si===activeSlides.length-1?"default":"pointer"}}>Next →</button>
          </div>}
        </div>}
      </div>
    </div>
  );
}
