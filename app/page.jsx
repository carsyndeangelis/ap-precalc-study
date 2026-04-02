"use client";
import { useState } from "react";

// ─── Components — Professional Lecture Style ───
const B = ({children,c="#2563eb"})=><strong style={{color:c}}>{children}</strong>;
const Box = ({bg,border,children,s={}})=><div style={{marginBottom:20,lineHeight:1.85,...s}}>{children}</div>;
const Tt = ({children,c="#1e293b"})=><div style={{fontSize:19,fontWeight:700,color:c,marginBottom:10,fontFamily:"'Georgia',serif",borderBottom:"1.5px solid #cbd5e1",paddingBottom:6}}>{children}</div>;
const Sm = ({children})=><div style={{fontSize:15,color:"#334155",lineHeight:1.85}}>{children}</div>;
const Fm = ({children,label})=><div style={{borderTop:"1px solid #94a3b8",borderBottom:"1px solid #94a3b8",padding:"14px 0",margin:"20px 0",textAlign:"center"}}>{label&&<div style={{fontSize:10,fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:2,marginBottom:6}}>{label}</div>}<div style={{fontSize:20,fontFamily:"'Georgia',serif",color:"#1e293b",fontWeight:600,lineHeight:1.6}}>{children}</div></div>;
const Ex = ({children})=><div style={{borderLeft:"3px solid #94a3b8",paddingLeft:20,marginBottom:16}}>{children}</div>;
const W = ({children})=><div style={{borderLeft:"3px solid #dc2626",paddingLeft:20,marginBottom:20,fontSize:15,lineHeight:1.85}}><div style={{fontWeight:700,color:"#dc2626",marginBottom:4,fontSize:11,textTransform:"uppercase",letterSpacing:1}}>Common Mistake</div><span style={{color:"#334155"}}>{children}</span></div>;
const Tp = ({children})=><div style={{borderLeft:"3px solid #2563eb",paddingLeft:20,marginBottom:20,fontSize:15,lineHeight:1.85}}><div style={{fontWeight:700,color:"#2563eb",marginBottom:4,fontSize:11,textTransform:"uppercase",letterSpacing:1}}>Study Tip</div><span style={{color:"#334155"}}>{children}</span></div>;
const Wh = ({children})=><div style={{borderLeft:"3px solid #0d9488",paddingLeft:20,marginBottom:20,fontSize:15,lineHeight:1.85}}><div style={{fontWeight:700,color:"#0d9488",marginBottom:4,fontSize:11,textTransform:"uppercase",letterSpacing:1}}>Why This Matters</div><span style={{color:"#334155"}}>{children}</span></div>;
const Q = ({children})=><div style={{border:"1px solid #94a3b8",padding:"16px 22px",marginBottom:20}}><div style={{fontSize:10,fontWeight:700,color:"#64748b",marginBottom:6,textTransform:"uppercase",letterSpacing:1.5}}>Question</div><Sm>{children}</Sm></div>;
const Tb = ({h,r})=>(<table style={{width:"100%",borderCollapse:"collapse",fontSize:14,marginBottom:18}}><thead><tr>{h.map((x,i)=><th key={i} style={{background:"#f1f5f9",padding:"9px 14px",borderBottom:"2px solid #1e293b",color:"#1e293b",fontWeight:700,textAlign:"center",fontSize:13}}>{x}</th>)}</tr></thead><tbody>{r.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j} style={{padding:"9px 14px",borderBottom:"1px solid #e2e8f0",textAlign:"center",fontSize:14,lineHeight:1.6}}>{cell}</td>)}</tr>)}</tbody></table>);
const G = ({l,r})=><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}}>{l}{r}</div>;
const PQ = ({n,q,a,e})=>{const [sa,setSa]=useState(false);const [se,setSe]=useState(false);return (<div style={{borderBottom:"1px solid #e2e8f0",paddingBottom:20,marginBottom:24}}><div style={{display:"flex",gap:16,alignItems:"flex-start"}}><div style={{width:28,height:28,borderRadius:"50%",background:"#1e293b",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:13,flexShrink:0}}>{n}</div><div style={{fontSize:15,color:"#334155",lineHeight:1.85,flex:1}}>{q}{a&&<div style={{marginTop:14,display:"flex",gap:8,flexWrap:"wrap"}}><button onClick={()=>{setSa(!sa);if(sa)setSe(false);}} style={{padding:"6px 16px",borderRadius:3,border:"1px solid #1e293b",background:sa?"#1e293b":"#fff",color:sa?"#fff":"#1e293b",fontWeight:600,fontSize:13,cursor:"pointer",transition:"all 0.2s"}}>{sa?"Hide Answer":"Reveal Answer"}</button>{sa&&<button onClick={()=>setSe(!se)} style={{padding:"6px 16px",borderRadius:3,border:"1px solid #64748b",background:se?"#64748b":"#fff",color:se?"#fff":"#64748b",fontWeight:600,fontSize:13,cursor:"pointer",transition:"all 0.2s"}}>{se?"Hide Explanation":"Show Explanation"}</button>}</div>}{sa&&a&&<div style={{marginTop:14,borderLeft:"3px solid #2563eb",paddingLeft:16,fontSize:16,color:"#1e293b",fontWeight:600,fontFamily:"'Georgia',serif",lineHeight:1.7}}>{a}</div>}{se&&e&&<div style={{marginTop:14}}>{e}</div>}</div></div></div>)};

// ─── Collapsible Accordion Section ───
const Accordion = ({title,children,defaultOpen=false})=>{const [open,setOpen]=useState(defaultOpen);return(<div style={{borderBottom:"1px solid #cbd5e1",marginBottom:16}}><button onClick={()=>setOpen(!open)} style={{width:"100%",padding:"10px 0",background:"transparent",color:"#1e293b",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:15,fontFamily:"'Georgia',serif"}}><span>{title}</span><span style={{fontSize:16,transition:"transform 0.2s",transform:open?"rotate(180deg)":"rotate(0deg)",color:"#64748b"}}>▾</span></button>{open&&<div style={{padding:"10px 0 20px"}}>{children}</div>}</div>)};

// ─── SOLUTION: Clean academic math display ───
const WB = ({children})=><div style={{background:"#f8fafc",borderLeft:"3px solid #2563eb",padding:"18px 24px",marginBottom:18,fontFamily:"'Georgia','Times New Roman',serif",position:"relative"}}><div style={{position:"absolute",top:8,right:14,fontSize:9,color:"#94a3b8",fontFamily:"sans-serif",fontWeight:600,textTransform:"uppercase",letterSpacing:1}}>Worked Solution</div>{children}</div>;
const MathLine = ({children,color="#1e293b",indent=0,size=16})=><div style={{fontSize:size,color,paddingLeft:indent,lineHeight:2.2,fontFamily:"'Georgia','Times New Roman',serif"}}>{children}</div>;
const Annotate = ({children,color="#2563eb"})=><span style={{fontSize:11,color,fontFamily:"sans-serif",fontWeight:600,marginLeft:12,opacity:0.75}}>← {children}</span>;
const MathBox = ({children,color="#dc2626"})=><span style={{borderBottom:`2px solid ${color}`,padding:"0 3px",color,fontWeight:700}}>{children}</span>;
const Arrow = ({text,color="#64748b"})=><div style={{textAlign:"center",color,fontSize:12,fontFamily:"sans-serif",fontWeight:600,margin:"4px 0",padding:"3px"}}>{text} ↓</div>;
const Ans = ({children})=><div style={{borderTop:"2px solid #1e293b",borderBottom:"2px solid #1e293b",padding:"10px 20px",fontSize:18,color:"#1e293b",fontWeight:700,fontFamily:"'Georgia',serif",textAlign:"center",marginTop:12}}>{children}</div>;
const FmUsed = ({children})=><div style={{padding:"8px 0",fontSize:15,color:"#2563eb",fontWeight:600,marginBottom:12,fontFamily:"'Georgia',serif",textAlign:"center",borderBottom:"1px solid #e2e8f0"}}><span style={{fontSize:10,fontFamily:"sans-serif",fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:1.5,marginRight:8}}>Formula:</span>{children}</div>;
const Strategy = ({children})=><div style={{borderLeft:"3px solid #d97706",paddingLeft:20,marginBottom:20,lineHeight:1.85}}><div style={{fontWeight:700,color:"#92400e",marginBottom:4,fontSize:11,textTransform:"uppercase",letterSpacing:1}}>Strategy</div><div style={{fontSize:15,color:"#334155"}}>{children}</div></div>;

// ══════════════════════════════════════════════════
//  UNIT 1 TOPICS
// ══════════════════════════════════════════════════
const unit1Topics = [
  { id:"1.1", name:"Change in Tandem", slides:[
    { title:"Concept — What is a Function?", content:<div>
      <Sm>Let's start with the most fundamental building block of all mathematics. Every single topic you'll study in this course — from polynomials to trigonometry — is built on this one idea. Master this, and everything else will make so much more sense.</Sm>
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
        <B c="#166534">1. Analytically</B> — an equation: f(x) = 200 + 10x. This is the most precise form — it lets you compute any output for any input and is essential for algebraic manipulation.<br/>
        <B c="#166534">2. Graphically</B> — a picture on the coordinate plane. Graphs let you see the big picture at a glance: where the function increases, decreases, and has zeros. Your eyes can catch patterns that algebra alone might miss.<br/>
        <B c="#166534">3. Numerically</B> — a table of input/output pairs. Tables are what you get from real-world data and experiments. They ground abstract equations in concrete values and are often your starting point on AP exam questions.<br/>
        <B c="#166534">4. Verbally</B> — a word description of the relationship. This is how functions live in the real world: "The cost is $200 plus $10 per hour." Translating between words and math is a skill the AP exam tests heavily.
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
      <Strategy>We are asked to find the output when the input is 5. The approach is simple: take the function rule f(x) = 200 + 10x and replace every x with 5, then simplify using order of operations (multiply before adding). This is called "evaluating a function at a point" and it is the most fundamental skill you will use throughout this entire course.</Strategy>
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
      <Strategy>We need to build a table by evaluating f(x) at several input values. The approach is straightforward: substitute each x-value (0, 1, 2, 3, 4) into f(x) = 200 + 10x one at a time and compute the output. Once the table is complete, look for a pattern in the outputs — you should notice the constant rate of change, which confirms this is a linear function.</Strategy>
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
      <Strategy>We need to translate a real-world word problem into a function equation. The key idea is to identify two things: the starting value (how many people at time t = 0) and the rate of change (how many people are added per minute). Then we combine them using the pattern: total = starting value + rate times time. This "verbal to analytical" translation is one of the most tested skills on the AP exam.</Strategy>
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
      <Strategy>For each True/False statement, we need to check the graph carefully on the EXACT interval given. The approach: for increasing/decreasing claims, trace the graph from left to right over the specified interval and check if the function ONLY goes one direction. For concavity claims, look at the bending direction (cup = concave up, frown = concave down). For zeros, check if the graph actually crosses the x-axis at those points. The key trap is that a function might increase on PART of an interval but not the whole thing.</Strategy>
      <Ex><Tt c="#92400e">Graph of f(x):</Tt>
        <Sm><B c="#ef4444">F</B> — f increases on −5{"<"}x{"<"}−2 <Annotate color="#ef4444">f decreases on part of this interval</Annotate></Sm>
        <Sm><B c="#22c55e">T</B> — f increases on 0{"<"}x{"<"}2 <Annotate color="#22c55e">uphill the whole time</Annotate></Sm>
        <Sm><B c="#22c55e">T</B> — f increases on 0{"<"}x{"<"}5 <Annotate color="#22c55e">still going up</Annotate></Sm>
        <Sm><B c="#ef4444">F</B> — f decreases on −2{"<"}x{"<"}2 <Annotate color="#ef4444">it goes down THEN up</Annotate></Sm>
        <Sm><B c="#22c55e">T</B> — f has zeros at x = ±2 <Annotate color="#22c55e">graph crosses x-axis there</Annotate></Sm>
      </Ex>
      <Ex><Tt c="#92400e">Graph of g(x):</Tt>
        <Sm><B c="#ef4444">F</B> — g increases on 2{"<"}x{"<"}6</Sm>
        <Annotate color="#ef4444">g actually DECREASES on part of this interval (it goes down from x=2 to about x=4), so it is NOT increasing on the ENTIRE interval 2{"<"}x{"<"}6</Annotate>
        <Sm><B c="#ef4444">F</B> — g is concave down on 0{"<"}x{"<"}2</Sm>
        <Annotate color="#ef4444">On 0{"<"}x{"<"}2 the graph bends UPWARD (like a cup), so it is concave UP, not concave down. Check: is the rate of change increasing or decreasing? Here it is increasing, which means concave UP.</Annotate>
        <Sm><B c="#22c55e">T</B> — g is concave up on −6{"<"}x{"<"}−2</Sm>
        <Annotate color="#22c55e">On this interval the graph curves upward — the rate of change is increasing as x moves right. The curve looks like a cup. Concave up is correct.</Annotate>
        <Sm><B c="#22c55e">T</B> — g is decreasing and concave up on −2{"<"}x{"<"}0</Sm>
        <Annotate color="#22c55e">The graph goes downhill (decreasing) BUT it bends upward (concave up). Think: the slope is negative but becoming LESS negative. A function can decrease while being concave up — those are independent properties.</Annotate>
        <Sm><B c="#22c55e">T</B> — g has zeros at x = ±2 and x = ±6</Sm>
        <Annotate color="#22c55e">The graph crosses the x-axis at all four of these points, meaning g(±2) = 0 and g(±6) = 0.</Annotate>
        <Sm><B c="#ef4444">F</B> — g decreases at a decreasing rate on −6{"<"}x{"<"}−4</Sm>
        <Annotate color="#ef4444">"Decreasing at a decreasing rate" means the slope is negative AND becoming more negative — that would be concave DOWN. But on −6{"<"}x{"<"}−4, while g is decreasing, the rate of change is actually becoming LESS negative (concave UP). So the description is wrong.</Annotate>
      </Ex>
      <Wh>Increasing/decreasing describes the DIRECTION the function moves. Concave up/down describes how the RATE OF CHANGE itself is changing. These are independent — a function can be decreasing and concave up at the same time (like a ball slowing down as it rolls downhill).</Wh>
      <W>The phrase "decreasing at a decreasing rate" means the function goes down AND the slope gets more negative — that is concave DOWN. Don't confuse "decreasing rate" with "concave up."</W>
    </div>},
  ]},
  { id:"1.2", name:"Rates of Change", slides:[
    { title:"Concept — Average Rate of Change", content:<div>
      <Fm label="Definition">The average rate of change is the ratio of the change in output values to the change in input values over an interval.</Fm>
      <Sm>Think of driving from New York to Boston — about 220 miles in 4 hours. Your speedometer bounced between 30 and 75 mph the whole trip, but your <B>average</B> speed was 220/4 = 55 mph. That is exactly what AROC does: it ignores all the moment-to-moment variation and gives you the single "big picture" rate across an entire interval.</Sm>
      <Fm label="Formula">AROC = [ f(b) − f(a) ] / ( b − a )</Fm>
      <Wh>AROC is the foundation for everything that comes next. When you study whether a function is concave up or concave down, you will be looking at how the AROC itself changes. And in calculus, the instantaneous rate of change (the derivative) is just AROC with the interval shrunk to nearly zero. Nail this concept now and you are set for the rest of the course.</Wh>
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
      <Strategy>We need to find the AROC over the interval [0, 4]. The approach is to read the output values f(0) and f(4) directly from the table, then plug them into the AROC formula: change in output divided by change in input. We are using the AROC formula because the question asks for an "average rate" over an interval, which is always the slope of the secant line between the two endpoints.</Strategy>
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
      <Strategy>This is a three-step problem. First, we need to evaluate h(t) at both endpoints of the interval by substituting t = 2 and t = 4 into the quadratic formula. Then we plug both values into the AROC formula. We use the AROC formula because the question explicitly asks for an average rate over an interval. Be extra careful with negative signs in the quadratic — this is where most mistakes happen. Also remember to include units (ft/sec) since the question asks for them.</Strategy>
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
      <Q>Approximate the instantaneous rate of change of h at t = 2 using shrinking intervals. (Recall: h(t) = −16t² − 12t + 25)</Q>
      <Strategy>We cannot compute an instantaneous rate directly (that would require dividing by zero). Instead, our approach is to compute the AROC over intervals that start at t = 2 and end at points that get progressively closer: t = 2.5, then 2.1, then 2.01, then 2.001. As the interval shrinks, the AROC values converge to the instantaneous rate. This is the same idea behind the derivative in calculus. We use the same AROC formula each time, just with a smaller and smaller "b" value.</Strategy>
      <FmUsed>AROC = [ h(b) − h(a) ] / ( b − a ) over smaller and smaller intervals</FmUsed>
      <Wh>The AROC over an interval gives the "average speed" across that interval. But what if you want the speed at one EXACT moment? You cannot divide by zero (b − a = 0), so instead you compute AROC over intervals that get smaller and smaller around the point. The values settle down (converge) to a single number — that number is the instantaneous rate of change. In calculus, this is called the <B c="#1e40af">derivative</B>.</Wh>
      <WB>
        <MathLine size={14} color="#4338ca"><b>First, recall h(2) from the previous example:</b></MathLine>
        <MathLine size={14}>h(2) = −16(2)² − 12(2) + 25 = −64 − 24 + 25 = <MathBox>−63</MathBox></MathLine>
        <Arrow text="Now compute h(2.5) fully to show the process"/>
        <MathLine size={14} color="#4338ca"><b>Interval [2, 2.5] — width = 0.5</b></MathLine>
        <MathLine size={14}>h(<MathBox color="#6366f1">2.5</MathBox>) = −16(2.5)² − 12(2.5) + 25</MathLine>
        <MathLine size={14} indent={30}>= −16(6.25) − 30 + 25<Annotate color="#22c55e">2.5² = 6.25, 12 x 2.5 = 30</Annotate></MathLine>
        <MathLine size={14} indent={30}>= −100 − 30 + 25 = <MathBox>−105</MathBox></MathLine>
        <MathLine size={14}>AROC = [h(2.5) − h(2)] / (2.5 − 2) = [−105 − (−63)] / 0.5</MathLine>
        <MathLine size={14} indent={30}>= −42 / 0.5 = <MathBox color="#ef4444">−84</MathBox><Annotate>rough estimate — interval is still wide</Annotate></MathLine>
        <Arrow text="Shrink the interval to [2, 2.1] — width = 0.1"/>
        <MathLine size={14} color="#4338ca"><b>Interval [2, 2.1] — width = 0.1</b></MathLine>
        <MathLine size={14}>[h(2.1)−h(2)] / (0.1) = <MathBox color="#f59e0b">−77.6</MathBox><Annotate color="#f59e0b">getting closer — the average is over a smaller window</Annotate></MathLine>
        <Arrow text="Shrink again to [2, 2.01] — width = 0.01"/>
        <MathLine size={14} color="#4338ca"><b>Interval [2, 2.01] — width = 0.01</b></MathLine>
        <MathLine size={14}>[h(2.01)−h(2)] / (0.01) = <MathBox color="#22c55e">−76.16</MathBox><Annotate color="#22c55e">closer still — zooming in on the instant</Annotate></MathLine>
        <Arrow text="Shrink once more to [2, 2.001] — width = 0.001"/>
        <MathLine size={14} color="#4338ca"><b>Interval [2, 2.001] — width = 0.001</b></MathLine>
        <MathLine size={14}>[h(2.001)−h(2)] / (0.001) = <MathBox color="#3b82f6">−76.016</MathBox><Annotate color="#3b82f6">almost there — essentially at the instant</Annotate></MathLine>
        <div style={{textAlign:"center",margin:"8px 0",fontSize:13,fontFamily:"sans-serif"}}>
          −84 → −77.6 → −76.16 → −76.016 → converging to <b>−76</b>
        </div>
        <Ans>Rate of change at t = 2 ≈ −76 ft/sec</Ans>
      </WB>
      <Wh>As the interval shrinks, the secant line between the two points rotates closer and closer to the <B c="#1e40af">tangent line</B> at t = 2. The slope of that tangent line is the instantaneous rate of change. In calculus, you will write this as h'(2) = lim(Δt→0) [h(2+Δt)−h(2)]/Δt = −76. This AP Precalculus technique of shrinking intervals is the conceptual foundation of the derivative.</Wh>
      <W>When computing h(2.5) or h(2.1), be very careful with the negative signs. Remember: −16(2.5)² means −16 times 6.25, NOT (−16 times 2.5) squared. Apply the exponent FIRST, then multiply by the coefficient.</W>
      <Tp>On the AP exam, if asked to "approximate the rate of change at a point," compute AROC over the smallest interval available in the table or use values on both sides of the point for a better estimate: [h(1.99) − h(2.01)] / (2.01 − 1.99).</Tp>
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
      <Wh>Understanding linear vs quadratic is foundational. Linear = constant growth (e.g., $100/month savings). Quadratic = accelerating/decelerating growth (e.g., gravity). The AP exam tests this distinction constantly.</Wh>
    </div>},
    { title:"Example — Slope of a Secant Line (Points)", content:<div>
      <Q>Find the slope of the secant line from the point (−1, 4) to the point (1, −2).</Q>
      <Strategy>We are given two points and need to find the slope of the line connecting them. This is exactly the AROC formula (which IS the slope formula). We will identify the coordinates from each point, plug into the formula, and simplify. Watch out for the double negative when subtracting x-values — 1 minus negative 1 becomes 1 + 1 = 2.</Strategy>
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
      <Strategy>Unlike the previous example where points were given, here we must first COMPUTE the y-values ourselves by evaluating the function at x = −1 and x = 3. This is a two-part problem: evaluate, then apply the slope formula. The function involves both a quadratic term and a rational term, so we need to be careful with fraction arithmetic. Find a common denominator before subtracting fractions.</Strategy>
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
      <Strategy>To classify a function as linear or quadratic from a table, we compute the AROC between every consecutive pair of points. If all AROCs are the same (constant), the function is linear. If the AROCs change but their changes are constant, the function is quadratic. The x-values are equally spaced (step of 1), so this test is valid.</Strategy>
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
      <Wh>On the AP exam, stating "the AROC is constant" is your justification that the function is linear. This is the definitive test — even if the data looks linear, you must show constant first differences to prove it.</Wh>
    </div>},
    { title:"Example — Proving a Function is Quadratic", content:<div>
      <Q>Find the AROC over each interval for g. What is the change in the AROC?</Q>
      <Tb h={["x","−2","−1","0","1","2"]} r={[["g(x)","−13","−3","1","−1","−9"]]}/>
      <Strategy>First we compute the AROC for each consecutive pair of x-values (first differences). If they are not constant, the function is not linear — so we then compute the second differences (changes between consecutive AROCs). If those second differences are constant, we have a quadratic. We also check whether the AROCs are increasing or decreasing to determine concavity.</Strategy>
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
      <Strategy>We will compute the AROC for each consecutive interval (note the interval width is 2, not 1 — that is fine as long as they are all equal). Then we look at the sequence of AROCs: if each one is larger than the previous, the AROCs are increasing, which means concave up. If each is smaller, the AROCs are decreasing, meaning concave down. Notice the symmetry in the outputs — that is a hint this is a quadratic.</Strategy>
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
      <Wh>The symmetry in the outputs (33, 9, 1, 9, 33) is a dead giveaway that h is a quadratic with its vertex at x = 0. The AROCs go from negative to positive, passing through zero — this is the hallmark of a concave-up parabola.</Wh>
      <Tp>On the AP exam, always state explicitly: "The AROCs are increasing over consecutive equal-length intervals, therefore the function is concave up." This is the expected justification language.</Tp>
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
      <Sm>Picture a roller coaster. The top of each hill is a <B>local maximum</B> — you were climbing and now you start falling. The bottom of each valley is a <B>local minimum</B> — you were dropping and now you start climbing. The tallest hill on the entire ride? That is the <B>global maximum</B>.</Sm>
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
        Where the rate of change switches from increasing to decreasing (or vice versa). The graph changes from <B c="#7c3aed">concave up ↔ concave down</B>.<br/><br/>
        Why do inflection points matter? They tell you where the function's behavior fundamentally shifts. Back to the roller coaster: an inflection point is not a hill or a valley — it is the moment the track transitions from curving one way to curving the other. In real-world terms, if a company's revenue graph has an inflection point, that is where growth stops accelerating and starts slowing down (or vice versa) — even though revenue may still be increasing. The AP exam loves testing whether you understand this distinction.
      </Sm></Box>
      <svg width="100%" height="50" viewBox="0 0 200 50"><path d="M 10 42 Q 50 12, 100 25 Q 150 38, 190 8" stroke="#f59e0b" strokeWidth="2.5" fill="none"/><circle cx="100" cy="25" r="3" fill="#92400e"/><text x="115" y="20" fontSize="9" fill="#92400e" fontWeight="700">inflection</text><text x="35" y="48" fontSize="8" fill="#888">concave up</text><text x="140" y="48" fontSize="8" fill="#888">concave down</text></svg>
      <Tp>A point of inflection is NOT an extremum! Extrema are peaks/valleys. Inflection points are where the BENDING direction changes.</Tp>
    </div>},
    { title:"Example — Degree & Leading Coefficient", content:<div>
      <Q>Name the degree and leading coefficient of each polynomial.</Q>
      <Strategy>For each polynomial, we need to find the term with the highest power of x. If the polynomial is already in standard form (descending order), the first term is the leading term. If not, we must rewrite it in descending order first. The degree is the exponent on the leading term, and the leading coefficient is the number multiplying it.</Strategy>
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
      <W>The second polynomial was NOT written in standard form! If you just look at the first term (5), you would incorrectly say degree 0. Always scan for the highest exponent across ALL terms before identifying the leading term.</W>
    </div>},
    { title:"Example — Local & Global Extrema from a Graph", content:<div>
      <Q>From a graph of a polynomial with restricted domain, identify all local minima, local maxima, and the global (absolute) minimum and maximum.</Q>
      <svg width="100%" height="140" viewBox="0 0 400 140" style={{marginBottom:14}}><line x1="30" y1="120" x2="380" y2="120" stroke="#94a3b8" strokeWidth="1"/><line x1="30" y1="10" x2="30" y2="120" stroke="#94a3b8" strokeWidth="1"/>{[[-4,60],[-3,95],[-2,30],[-1,70],[0,80],[1,105],[2,25],[3,55]].map(([x,y],i)=><text key={`l${i}`} x={30+(x+4)*50} y="135" textAnchor="middle" fontSize="10" fill="#64748b">{x}</text>)}<path d="M 30 60 Q 60 50,80 95 Q 95 120,130 30 Q 160 -10,180 70 Q 200 100,230 105 Q 260 110,280 25 Q 310 -15,380 55" stroke="#1e293b" strokeWidth="2" fill="none"/><circle cx="80" cy="95" r="4" fill="#2563eb"/><text x="80" y="110" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="600">min</text><circle cx="130" cy="30" r="4" fill="#dc2626"/><text x="130" y="22" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="600">max</text><circle cx="230" cy="105" r="4" fill="#2563eb"/><text x="230" y="118" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="600">min</text><circle cx="280" cy="25" r="4" fill="#dc2626"/><text x="280" y="17" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="600">max</text></svg>
      <Strategy>We will work in two phases. First, scan the graph for direction changes: wherever the function switches from decreasing to increasing, that is a local minimum; wherever it switches from increasing to decreasing, that is a local maximum. Second, to find GLOBAL extrema, compare ALL the local extrema values and pick the overall largest (global max) and smallest (global min). Since the domain is restricted, we also need to check the endpoint values.</Strategy>
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
      <Strategy>Before even touching the calculator, we should analyze the end behavior: the leading term is x raised to the 4th (even degree, positive coefficient), so both ends go to positive infinity. This immediately tells us there is NO absolute maximum. But there must be an absolute minimum somewhere in the valleys. We will use the calculator's minimum feature to find those valley points and pick the lowest one.</Strategy>
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
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{marginBottom:14}}><line x1="20" y1="110" x2="390" y2="110" stroke="#e2e8f0" strokeWidth="1"/><path d="M 30 90 Q 60 100,100 60 Q 130 30,170 50 Q 210 70,250 80 Q 290 90,330 40 Q 360 10,390 30" stroke="#1e293b" strokeWidth="2" fill="none"/><circle cx="65" cy="90" r="4" fill="#1e293b"/><text x="65" y="105" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">A</text><circle cx="120" cy="45" r="4" fill="#1e293b"/><text x="120" y="38" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">B</text><circle cx="190" cy="60" r="4" fill="#1e293b"/><text x="190" y="76" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">C</text><circle cx="270" cy="85" r="4" fill="#1e293b"/><text x="270" y="100" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">D</text><circle cx="345" cy="30" r="4" fill="#1e293b"/><text x="345" y="22" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">E</text></svg>
      <Strategy>An inflection point is where the concavity changes direction. Our approach: first determine the concavity (cup or frown shape) in each region of the graph. Then check each labeled point — does the concavity switch from up to down or from down to up at that point? If yes, it is an inflection point. If no, it is not. Remember: peaks and valleys (extrema) are NOT inflection points — those are where direction changes, not bending.</Strategy>
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
      <Sm>Here is one of the most powerful ideas in all of algebra, and I want you to really internalize it. Saying "x = 3 is a zero," "the graph crosses the x-axis at (3, 0)," and "(x - 3) is a factor" are three different ways of saying the <B>exact same thing</B>. Why? Because if you plug x = 3 into (x - 3), you get zero — and that factor makes the entire product zero. The graph hits the x-axis precisely because the output is zero at that input. Once you see that zeros, factors, and x-intercepts are just three languages for one idea, factoring and graphing will click together like puzzle pieces.</Sm>
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
      <Strategy>Each x-intercept gives us a zero, and each zero gives us a factor: if x = a is a zero, then (x - a) is a factor. We will convert all four x-intercepts into factors and multiply them together. But we also need to check the leading coefficient: when we multiply our factors, the leading term must match the original polynomial's leading term of -x to the 4th. If it does not match, we include a constant out front.</Strategy>
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
      <Strategy>Since the polynomial is already in factored form, we can read the zeros and their multiplicities directly from each factor. The degree equals the sum of all exponents. For graph behavior: odd multiplicity of 1 means the graph crosses straight through, even multiplicity means it bounces off, and odd multiplicity of 3 or more means it wiggles through. Set each factor equal to zero to find the x-value of each zero.</Strategy>
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
      <Strategy>A cubic polynomial has exactly 3 zeros. We already know two of them (the real one from the x-intercept and one complex zero). Since the polynomial has real coefficients, the Conjugate Pairs Theorem guarantees that complex zeros come in pairs. So we just need to find the conjugate of the given complex zero by flipping the sign of the imaginary part.</Strategy>
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
      <Strategy>We will apply the successive differences method: compute first differences between consecutive outputs. If constant, the polynomial is degree 1. If not, compute second differences. If those are constant, degree 2. We keep going until we find a constant level. The level at which differences become constant equals the polynomial's degree. This only works because the x-values are equally spaced.</Strategy>
      <Wh>Successive differences work because of a fundamental property of polynomials: the nth differences of a degree-n polynomial at equally spaced inputs are always constant. First differences detect linear (degree 1), second differences detect quadratic (degree 2), third differences detect cubic (degree 3). The level at which the differences become constant tells you the degree.</Wh>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Example 1:</b></MathLine>
        <Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","5","2","1","2","5"]]}/>
        <MathLine size={14} color="#6366f1"><b>Computing 1st differences:</b> subtract each output from the next</MathLine>
        <MathLine size={14} indent={20}>2 − 5 = <MathBox color="#ef4444">−3</MathBox><Annotate>f(0) − f(−1)</Annotate></MathLine>
        <MathLine size={14} indent={20}>1 − 2 = <MathBox color="#ef4444">−1</MathBox><Annotate>f(1) − f(0)</Annotate></MathLine>
        <MathLine size={14} indent={20}>2 − 1 = <MathBox color="#ef4444">1</MathBox><Annotate>f(2) − f(1)</Annotate></MathLine>
        <MathLine size={14} indent={20}>5 − 2 = <MathBox color="#ef4444">3</MathBox><Annotate>f(3) − f(2)</Annotate></MathLine>
        <MathLine size={14}>1st diff: −3, −1, 1, 3<Annotate>not constant — NOT linear</Annotate></MathLine>
        <Arrow text="Since 1st differences vary, compute 2nd differences"/>
        <MathLine size={14} color="#6366f1"><b>Computing 2nd differences:</b> subtract consecutive 1st differences</MathLine>
        <MathLine size={14} indent={20}>(−1) − (−3) = <MathBox color="#22c55e">2</MathBox><Annotate color="#22c55e">−1 + 3 = 2</Annotate></MathLine>
        <MathLine size={14} indent={20}>1 − (−1) = <MathBox color="#22c55e">2</MathBox><Annotate color="#22c55e">1 + 1 = 2</Annotate></MathLine>
        <MathLine size={14} indent={20}>3 − 1 = <MathBox color="#22c55e">2</MathBox><Annotate color="#22c55e">all the same!</Annotate></MathLine>
        <MathLine size={14}>2nd diff: 2, 2, 2<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
        <MathLine size={14}>→ <MathBox color="#22c55e">Degree 2</MathBox> (Quadratic)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Example 2:</b></MathLine>
        <Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","5","2","−1","−4","−7"]]}/>
        <MathLine size={14} color="#6366f1"><b>Computing 1st differences:</b></MathLine>
        <MathLine size={14} indent={20}>2 − 5 = −3, (−1) − 2 = −3, (−4) − (−1) = −3, (−7) − (−4) = −3</MathLine>
        <MathLine size={14}>1st diff: −3, −3, −3, −3<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
        <MathLine size={14}>→ <MathBox color="#22c55e">Degree 1</MathBox> (Linear)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Example 3:</b></MathLine>
        <Tb h={["x","−1","0","1","2","3"]} r={[["f(x)","26","7","0","−1","−2"]]}/>
        <MathLine size={14}>1st: 7−26=−19, 0−7=−7, −1−0=−1, −2−(−1)=−1<Annotate>not constant</Annotate></MathLine>
        <MathLine size={14}>2nd: (−7)−(−19)=12, (−1)−(−7)=6, (−1)−(−1)=0<Annotate>not constant</Annotate></MathLine>
        <MathLine size={14}>3rd: 6−12=−6, 0−6=−6<Annotate color="#22c55e">CONSTANT!</Annotate></MathLine>
        <MathLine size={14}>→ <MathBox color="#22c55e">Degree 3</MathBox> (Cubic)</MathLine>
      </WB>
      <W>This method ONLY works when x-values are equally spaced (e.g., step of 1). If x-values are not equally spaced, successive differences give wrong results!</W>
      <Tp>On the AP exam, successive differences are a fast way to classify data. State which level of differences is constant and what degree that implies — this is a common free-response justification technique.</Tp>
    </div>},
    { title:"Example — Even and Odd Functions", content:<div>
      <Q>Indicate whether each function is even (E) or odd (O). Remember: even = all even exponents, odd = all odd exponents.</Q>
      <Strategy>For polynomials, there is a quick shortcut: check if ALL exponents are even (even function) or ALL are odd (odd function). But the AP exam wants you to show the formal verification: replace every x with (-x), simplify, and check whether the result equals f(x) (even) or -f(x) (odd). We will do both the quick check and the formal proof for each polynomial.</Strategy>
      <FmUsed>Even: f(−x) = f(x) (y-axis symmetry) · Odd: f(−x) = −f(x) (origin symmetry)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1.</b> p(x) = x⁵</MathLine>
        <MathLine size={14} indent={20}>Quick check: Only exponent is 5 (odd) → predict <MathBox color="#22c55e">ODD</MathBox></MathLine>
        <Arrow text="Verify by computing p(−x) step by step"/>
        <MathLine size={14} indent={20}>p(−x) = (−x)⁵<Annotate>replace every x with (−x)</Annotate></MathLine>
        <MathLine size={14} indent={20}>= (−1)⁵ · x⁵ = (−1) · x⁵ = −x⁵<Annotate color="#22c55e">(−1)⁵ = −1 because 5 is odd</Annotate></MathLine>
        <MathLine size={14} indent={20}>−x⁵ = −p(x) ✓ → <MathBox color="#22c55e">ODD</MathBox> confirmed</MathLine>
        <MathLine size={14} color="#4338ca"><b>2.</b> f(x) = x⁴ + 5x² − 6</MathLine>
        <MathLine size={14} indent={20}>Quick check: Exponents 4, 2, 0 (all even; −6 = −6x⁰) → predict <MathBox color="#6366f1">EVEN</MathBox></MathLine>
        <Arrow text="Verify by computing f(−x) term by term"/>
        <MathLine size={14} indent={20}>f(−x) = (−x)⁴ + 5(−x)² − 6<Annotate>replace every x with (−x)</Annotate></MathLine>
        <MathLine size={14} indent={20}>= (−1)⁴x⁴ + 5(−1)²x² − 6<Annotate color="#6366f1">even powers: (−1)⁴=1, (−1)²=1</Annotate></MathLine>
        <MathLine size={14} indent={20}>= x⁴ + 5x² − 6 = f(x) ✓ → <MathBox color="#6366f1">EVEN</MathBox> confirmed</MathLine>
        <MathLine size={14} color="#4338ca"><b>3.</b> g(x) = x³ + 4x</MathLine>
        <MathLine size={14} indent={20}>Quick check: Exponents 3, 1 (all odd) → predict <MathBox color="#22c55e">ODD</MathBox></MathLine>
        <Arrow text="Verify by computing g(−x) term by term"/>
        <MathLine size={14} indent={20}>g(−x) = (−x)³ + 4(−x)<Annotate>replace every x with (−x)</Annotate></MathLine>
        <MathLine size={14} indent={20}>= (−1)³x³ + 4(−1)x = −x³ − 4x<Annotate color="#22c55e">odd powers: (−1)³=−1, (−1)¹=−1</Annotate></MathLine>
        <MathLine size={14} indent={20}>= −(x³ + 4x) = −g(x) ✓ → <MathBox color="#22c55e">ODD</MathBox> confirmed</MathLine>
      </WB>
      <Wh>The quick exponent-check works for polynomials: all even exponents → even function, all odd exponents → odd function. But the formal f(−x) verification is what the AP exam expects you to show.</Wh>
      <W>If a polynomial has MIXED exponents (like x³ + x²), it is NEITHER even nor odd. All exponents must be the same parity. Also, a constant term like −6 counts as an even-powered term (−6 = −6x⁰, and 0 is even).</W>
      <Tp>On the AP exam, always SHOW the f(−x) computation. Write out f(−x), simplify, and explicitly state whether it equals f(x) or −f(x).</Tp>
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
      <Wh>End behavior tells you the long-term trend of a function. The leading term dominates for very large inputs, making all smaller terms irrelevant.</Wh>
    </div>},
    { title:"Example — End Behavior from an Equation", content:<div>
      <Q>Identify the leading term, degree, and end behavior of p(x) = −2x³ − 4x² + 5x − 3. Write end behavior using limit notation.</Q>
      <Strategy>End behavior depends ONLY on the leading term. Our three-step approach: (1) identify the leading term by finding the highest-power term, (2) determine the degree (even or odd) and sign of the leading coefficient (positive or negative), (3) apply the end behavior rules. Odd degree means opposite ends, and the negative coefficient means the right side goes down. Write the answer in formal limit notation as the AP exam requires.</Strategy>
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
      <Wh>Think of it this way: the leading term -2x cubed behaves like a "mirror image" of x cubed. Normal x cubed goes from bottom-left to top-right. Multiplying by -2 flips it vertically, so it goes from top-left to bottom-right. All those other terms (-4x squared, +5x, -3) are irrelevant for end behavior — they get overwhelmed by the cubic term when x is huge.</Wh>
    </div>},
    { title:"Example — End Behavior from Graphs", content:<div>
      <Q>From each graph, determine a possible degree, the sign of the leading coefficient, and write the end behavior using limit notation.</Q>
      <Strategy>For each graph, we reverse-engineer the polynomial's properties from its shape. Step 1: look at the far left and far right tails — do they go the same direction (even degree) or opposite (odd degree)? Step 2: check the right tail — if it goes up, the leading coefficient is positive; if down, negative. Step 3: count turning points to estimate the minimum possible degree (a polynomial with k turning points has degree at least k+1). Write everything in limit notation.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Graph 1: Left end goes down, right end goes up</b></MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 1:</b> Look at far left: curve heads down (→ −∞). Far right: curve heads up (→ +∞).</MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 2:</b> Opposite directions → <MathBox color="#22c55e">odd degree</MathBox><Annotate color="#22c55e">only odd-degree polynomials have ends going opposite ways</Annotate></MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 3:</b> Right side goes UP → <MathBox color="#22c55e">positive leading coefficient</MathBox><Annotate color="#22c55e">right side follows the sign of LC</Annotate></MathLine>
        <MathLine size={14}>Possible degree: 3 (cubic)</MathLine>
        <Ans>lim(x→−∞) = −∞ · lim(x→∞) = +∞</Ans>
        <MathLine size={14} color="#4338ca"><b>Graph 2: Both ends go down</b></MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 1:</b> Far left and far right both head downward (→ −∞).</MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 2:</b> Same direction (both down) → <MathBox color="#ef4444">even degree</MathBox><Annotate color="#ef4444">only even-degree polynomials have both ends matching</Annotate></MathLine>
        <MathLine size={14} color="#6366f1"><b>Step 3:</b> Both go DOWN → <MathBox color="#ef4444">negative leading coefficient</MathBox><Annotate color="#ef4444">both up = positive LC, both down = negative LC</Annotate></MathLine>
        <MathLine size={14}>Possible degree: 4 (quartic)</MathLine>
        <Ans>lim(x→−∞) = −∞ · lim(x→∞) = −∞</Ans>
      </WB>
      <Wh>When reading end behavior from a graph, ignore the middle bumps and turns. Only the far left and far right tails matter. Count turning points to estimate degree: a degree-n polynomial has at most n−1 turning points.</Wh>
    </div>},
    { title:"Example — End Behavior with SVG Graphs", content:<div>
      <Q>Match each graph to its leading term and write end behavior in limit notation.</Q>
      <Strategy>This is a visual reference exercise. For each of the four possible end behavior combinations (even/odd degree crossed with positive/negative leading coefficient), we will identify the pattern: which direction do the left and right tails go? Memorize these four shapes — they cover every possible polynomial end behavior case, and the AP exam frequently shows graphs and asks you to determine the leading term.</Strategy>
      <Sm>For each graph below, focus on the <B>far left edge</B> and <B>far right edge</B>. Ask: (1) Do the two tails go the same direction or opposite? Same = even degree, opposite = odd degree. (2) Where does the right tail go? Up = positive LC, down = negative LC.</Sm>
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
      <Wh>These four graphs cover ALL end behavior cases. Odd/+: bottom-left to top-right. Even/minus: both tails down. Even/+: both tails up. Odd/minus: top-left to bottom-right. Memorize these shapes to instantly classify any polynomial.</Wh>
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
      <Sm>Think of it as a race between the numerator and denominator as x gets huge. Which one grows faster? That determines everything about the end behavior.</Sm>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
        <Box bg="#dbeafe" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#1e40af"}}>n{"<"}d</div><Sm>HA: <B c="#1e40af">y = 0</B><br/>The denominator grows faster and dominates. It is like dividing by an ever-larger number — the fraction gets crushed toward zero.</Sm></Box>
        <Box bg="#fce7f3" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#be185d"}}>n=d</div><Sm>HA: <B c="#be185d">y = aₙ/bₘ</B><br/>Neither side wins — they grow at the same rate, so the fraction settles to the ratio of their leading coefficients.</Sm></Box>
        <Box bg="#fef3c7" s={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:"#92400e"}}>n{">"}d</div><Sm><B c="#92400e">No HA</B><br/>The numerator grows faster and overwhelms the denominator. The outputs keep growing without bound — no horizontal line can contain them. If n=d+1, use long division to find the slant asymptote.</Sm></Box>
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
      <Strategy>For each function, we compare the degree of the numerator (n) to the degree of the denominator (d). There are exactly three cases: if n is less than d, the HA is y = 0; if n equals d, the HA is the ratio of leading coefficients; if n is greater than d, there is no HA. We just need to identify the highest power in the top and bottom of each fraction.</Strategy>
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
      <Strategy>The key technique: take ONLY the leading term from the numerator and ONLY the leading term from the denominator, then simplify that fraction. If it simplifies to a constant, that constant is the HA. If it simplifies to a polynomial (like 2x squared or -2x), there is no HA, and the function's end behavior matches that polynomial. This is the most efficient method for rational function end behavior.</Strategy>
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
      <Wh>Notice how problems 3 and 4 produce nonconstant leading term ratios (x cubed and -2x). These tell you the rational function behaves like a polynomial for large x-values. When the ratio is linear (like -2x), you get a slant asymptote — the graph approaches a diagonal line rather than a horizontal one.</Wh>
      <Tp>On the AP exam, if you see a rational function where the numerator degree exceeds the denominator degree by exactly 1, immediately think "slant asymptote" and prepare to do polynomial long division to find it.</Tp>
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
      <Wh>Rational inequalities appear on the AP exam in context problems like "for what values is the population increasing?" The number line method works every time and gives the complete solution.</Wh>
    </div>},
    { title:"Example — Finding Zeros & Solving Inequality", content:<div>
      <Q>Find the real zeros of r(x) = (x³−5x²+6x)/(x²−2x−3). Then solve r(x) ≥ 0.</Q>
      <Strategy>This is a two-part problem. First, to find zeros we factor both numerator and denominator completely, then check which numerator zeros are NOT also denominator zeros (shared zeros create holes, not x-intercepts). Second, for the inequality, we place all critical values (numerator zeros and denominator zeros) on a number line, test the sign of r(x) in each interval, and select the intervals where r(x) is non-negative. Remember: denominator zeros get open circles because the function is undefined there.</Strategy>
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
      <Strategy>Vertical asymptotes occur where the denominator equals zero but the numerator does NOT. Our approach: factor both numerator and denominator, find the zeros of the denominator, then check each one by plugging into the numerator. If the numerator is nonzero at that point, we have a VA. If the numerator is also zero, it is a hole instead. Always write VAs as equations (x = value).</Strategy>
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
      <svg width="100%" height="140" viewBox="0 0 400 140" style={{marginBottom:14}}><line x1="20" y1="70" x2="390" y2="70" stroke="#e2e8f0" strokeWidth="1"/><line x1="120" y1="5" x2="120" y2="135" stroke="#dc2626" strokeWidth="1" strokeDasharray="4,3"/><line x1="280" y1="5" x2="280" y2="135" stroke="#dc2626" strokeWidth="1" strokeDasharray="4,3"/><text x="120" y="135" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="600">x=−2</text><text x="280" y="135" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="600">x=4</text><path d="M 25 55 Q 60 50,90 40 Q 105 30,115 8" stroke="#1e293b" strokeWidth="2" fill="none"/><path d="M 125 132 Q 135 100,160 80 Q 190 65,230 65 Q 255 65,270 50 Q 275 40,278 8" stroke="#1e293b" strokeWidth="2" fill="none"/><path d="M 282 132 Q 290 100,310 85 Q 340 75,380 72" stroke="#1e293b" strokeWidth="2" fill="none"/><text x="108" y="15" fontSize="9" fill="#0d9488" fontWeight="600">+∞</text><text x="128" y="130" fontSize="9" fill="#0d9488" fontWeight="600">−∞</text><text x="268" y="15" fontSize="9" fill="#0d9488" fontWeight="600">−∞</text><text x="284" y="130" fontSize="9" fill="#0d9488" fontWeight="600">+∞</text></svg>
      <Strategy>For each vertical asymptote, we need to determine what happens as x approaches from the LEFT (x approaches a from below, written a minus) and from the RIGHT (x approaches a from above, written a plus). We trace the graph on each side of the VA and check whether the curve shoots up toward positive infinity or down toward negative infinity. If the directions are opposite, the VA has odd multiplicity; if the same, even multiplicity.</Strategy>
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
      <Strategy>We will combine algebraic analysis with technology. First, factor both numerator and denominator to find VAs algebraically (denominator zeros where the numerator is nonzero). Then use the calculator graph to visually determine which direction each side of each VA goes (positive or negative infinity). This two-pronged approach — algebra to find WHAT the VAs are, calculator to determine HOW the function behaves near them — is the most reliable method.</Strategy>
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
      <Strategy>A hole occurs when a factor cancels from both numerator and denominator. Our approach: (1) factor both top and bottom, (2) identify the common factor, (3) cancel it to get the simplified function, (4) the x-coordinate of the hole comes from setting the cancelled factor to zero, (5) the y-coordinate comes from plugging that x into the SIMPLIFIED function (not the original!). The limit at the hole equals this y-value.</Strategy>
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
      <W>If you plug x = 1 into the ORIGINAL function, you get 0/0, which is undefined. That is the whole point of a hole — the function literally has a missing point. You must use the simplified function to find the y-value. On the AP exam, always state that the limit exists even though the function is undefined there.</W>
    </div>},
  ]},
  { id:"1.11", name:"Equivalent Representations of Polynomial & Rational Expressions", slides:[
    { title:"Concept — Forms & Tools", content:<div>
      <Sm>One of the most important skills on the AP exam is knowing which form of an expression to use and when. Factored form and standard form each reveal different secrets about a function — and the ability to convert between them is your superpower.</Sm>
      <G l={<Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Factored Form Reveals:</Tt><Sm>
        • Real zeros (x-intercepts)<br/>
        • Vertical asymptotes<br/>
        • Holes<br/>
        • Domain restrictions<br/>
        • Range<br/><br/>
        Use factored form when the question asks about zeros, intercepts, asymptotes, or holes. If they ask "where does f(x) = 0?" — factor first.
      </Sm></Box>}
        r={<Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">Standard Form Reveals:</Tt><Sm>
        • End behavior (from leading term)<br/>
        • y-intercept (constant term)<br/>
        • Degree<br/><br/>
        Use standard form when the question asks about end behavior, the y-intercept, or the degree. If they ask "what happens as x approaches infinity?" — expand and look at the leading term.
      </Sm></Box>}/>
      <Fm label="Polynomial Long Division">f(x) = g(x) · q(x) + r(x) where q(x) is the quotient and r(x) is the remainder</Fm>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">Why Long Division Matters</Tt><Sm>
        When degree of numerator {">"} degree of denominator by exactly 1, the quotient q(x) is the <B c="#7c3aed">slant (oblique) asymptote</B>: y = q(x). Long division is powerful because it lets you rewrite a complicated rational expression in a simpler form — not just for slant asymptotes, but also to simplify expressions, find holes, and reveal hidden structure. The process: Divide → Multiply → Subtract → Repeat.
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
      <Strategy>This is a complete rational function analysis — the type of problem that combines everything from sections 1.7 through 1.10. Our approach: (1) factor both numerator and denominator, (2) identify and cancel common factors (these create holes), (3) find the HA by comparing degrees, (4) find zeros from the remaining numerator factors, (5) find VAs from the remaining denominator factors. Always work with the simplified function after canceling for zeros and VAs.</Strategy>
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
      <Wh>This type of "full analysis" question is a favorite on the AP exam. The key insight: factoring reveals EVERYTHING about a rational function. Once you have the factored form, you can read off the HA (from degree comparison), zeros (numerator), VAs (denominator), and holes (common factors) all at once.</Wh>
      <Tp>Create a checklist: HA, zeros, VAs, holes, y-intercept. Work through each one systematically. Missing one feature is a common way to lose points on the AP exam.</Tp>
    </div>},
    { title:"Example — Long Division (Whiteboard)", content:<div>
      <Q>Divide (x²−5x+7) by (x−3). Find the slant asymptote.</Q>
      <Strategy>Since the numerator degree (2) exceeds the denominator degree (1) by exactly 1, there is a slant asymptote. We find it using polynomial long division, which follows the same process as long division with numbers: divide the leading terms, multiply back, subtract, bring down the next term, and repeat. The quotient (ignoring the remainder) is the slant asymptote equation.</Strategy>
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
      <Strategy>For each binomial expansion, we follow the same pattern: (1) look up row n of Pascal's Triangle for the coefficients, (2) write each term as coefficient times a-power-decreasing times b-power-increasing, (3) compute the powers of b and multiply everything out. For (x-3) cubed, be extra careful — the "b" is -3 (not 3), so odd powers of b will be negative, creating alternating signs in the final answer.</Strategy>
      <FmUsed>(a+b)ⁿ: use row n of Pascal Triangle for coefficients. Powers of a go n to 0, powers of b go 0 to n.</FmUsed>
      <WB>
        <div style={{textAlign:"center",fontFamily:"monospace",fontSize:14,lineHeight:1.8}}>1<br/>1 &nbsp;1<br/>1 &nbsp;2 &nbsp;1<br/><b>1 &nbsp;3 &nbsp;3 &nbsp;1</b><br/><b style={{color:"#166534"}}>1 &nbsp;4 &nbsp;6 &nbsp;4 &nbsp;1</b></div>
        <MathLine size={14} color="#6366f1"><b>Write pattern:</b> Pascal coeff times x-power-down times 2-power-up</MathLine>
        <MathLine size={13} indent={10}><MathBox color="#22c55e">1</MathBox>·x⁴·2⁰ + <MathBox color="#22c55e">4</MathBox>·x³·2¹ + <MathBox color="#22c55e">6</MathBox>·x²·2² + <MathBox color="#22c55e">4</MathBox>·x·2³ + <MathBox color="#22c55e">1</MathBox>·x⁰·2⁴<Annotate color="#22c55e">exponents always sum to 4</Annotate></MathLine>
        <Arrow text="Compute powers of 2: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16"/>
        <MathLine size={14} color="#4338ca"><b>(x+2)⁴ — row 4: 1, 4, 6, 4, 1</b></MathLine>
        <MathLine size={13}>= 1·x⁴ + 4·x³·<MathBox color="#6366f1">2</MathBox> + 6·x²·<MathBox color="#6366f1">4</MathBox> + 4·x·<MathBox color="#6366f1">8</MathBox> + 1·<MathBox color="#6366f1">16</MathBox></MathLine>
        <Ans>= x⁴ + 8x³ + 24x² + 32x + 16</Ans>
        <MathLine size={14} color="#4338ca"><b>(x−3)³ — row 3: 1, 3, 3, 1 — IMPORTANT: b = (−3), not 3!</b></MathLine>
        <MathLine size={14} color="#6366f1"><b>Key:</b> compute (−3)⁰=1, (−3)¹=−3, (−3)²=+9, (−3)³=−27. Signs alternate because odd powers stay negative, even powers become positive.</MathLine>
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
      <Strategy>For each function, we need to identify what changed compared to the original f(x). The key rule: changes OUTSIDE the function (adding/multiplying the output) are vertical transformations that go in the expected direction. Changes INSIDE the function (adding/multiplying the input) are horizontal transformations that go in the OPPOSITE direction. Look at where the number appears relative to f to classify each transformation.</Strategy>
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
      <Strategy>We need to match g(x) = (1/2)f(x/3) + 4 to the general form g(x) = a times f(b(x - h)) + k. Identify each parameter: a = 1/2, b = 1/3, h = 0 (no shift), k = 4. Then apply transformations in the required order: horizontal dilation first, then horizontal shift, then vertical dilation, then vertical shift. Getting this order wrong changes the final graph.</Strategy>
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
      <Strategy>When evaluating a transformed function from a table, always work from the INSIDE OUT. First, compute the inner expression: x - 1 = 2 - 1 = 1. This tells us we need f(1), not f(2)! Look up f(1) in the table. Then apply the outer transformations: multiply by 4, then subtract 5. The most common mistake is using f(2) directly instead of f(1) — the horizontal shift changes which table value you look up.</Strategy>
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
      <Strategy>We handle domain and range separately. For the domain: the (x - 1) inside shifts the domain right by 1, so we add 1 to both endpoints. For the range: we apply vertical transformations to the range endpoints in order — first multiply by -2 (which flips the interval and stretches it), then add 3. The critical trap: multiplying by a negative number reverses the inequality, so the min and max swap positions.</Strategy>
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
      <Strategy>For each data set, we apply the successive differences test. Compute first differences: if constant, it is linear. If not constant, compute second differences: if constant, it is quadratic. If neither works but we see two different constant rates on different sub-intervals, it is piecewise linear. Always verify that x-values are equally spaced before using this method.</Strategy>
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
      <Wh>On the AP exam, you must JUSTIFY your model choice. Saying "it looks quadratic" is not enough. You need to say something like "the second differences are constant at 2, indicating a quadratic model" or "the rate of change is constant at 3, so a linear model is appropriate."</Wh>
    </div>},
    { title:"Example — Geometric Model: Area (Quadratic)", content:<div>
      <Q>A pool has length = 3w. A cool deck 2ft wide is placed along the length and 3ft wide on each end. Write A(w) for total area.</Q>
      <Strategy>This is a geometric area problem, which means we are multiplying two dimensions together, resulting in a quadratic. The approach: (1) express the TOTAL length and TOTAL width including the deck, all in terms of w, (2) multiply them using FOIL or distribution, (3) simplify. The deck adds extra width on BOTH sides, so we add twice for each direction. Then find domain and range from the physical constraints.</Strategy>
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
      <Strategy>This is a volume problem — multiplying three dimensions together produces a cubic function. All three dimensions are given in terms of w, so we simply multiply them. For domain and range: use the physical constraint (h is at most 24 inches) to find the maximum w, then evaluate V at that maximum w to find the range. Since dimensions must be positive, w must be greater than 0.</Strategy>
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
      <Strategy>Since the data shows two direction changes (up then down then up), a cubic model is appropriate — cubics can have two turning points. Our approach: enter the data into calculator lists, run CubicReg to get the equation, then substitute t = 7 to predict the height. We use the calculator for regression because it finds the best-fit coefficients that minimize error across all data points.</Strategy>
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
      <W>A regression model is an approximation, not an exact equation. The predicted h(7) may not match what the actual height would be — it is an estimate based on the pattern in the data. On the AP exam, acknowledge this by saying "the model predicts" rather than "the height IS."</W>
      <Tp>Store the regression equation in Y1 on your calculator so you can quickly evaluate it at any input without retyping the long decimal coefficients.</Tp>
    </div>},
    { title:"Example — Inverse Variation (Soap Company)", content:<div>
      <Q>A soap company finds that bar sales are inversely proportional to price. At $8/bar, they sell 100 bars. Find k, write the model, predict sales at $6, and find the price if 125 bars are sold.</Q>
      <Strategy>"Inversely proportional" means y = k/x. Our approach: (1) find k by multiplying the known price and quantity (since k = x times y for inverse variation), (2) write the model b(x) = k/x, (3) for predictions, plug in the known variable and solve for the unknown. This model says that as price goes up, sales go down proportionally — a common real-world relationship.</Strategy>
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
      <Wh>Inverse variation means the product x times y is always constant (here, price times sales always equals 800). This is a key property: if you see a data set where multiplying each x by its corresponding y gives the same number, the relationship is inverse variation.</Wh>
    </div>},
    { title:"Example — Rational Function Model (Oysters)", content:<div>
      <Q>Oysters are modeled by P(t) = 200t/(0.002t+1) + 300 where t is months after harvesting stops. Find P(1) and the AROC from t=2 to t=4.</Q>
      <Strategy>This is a two-part problem using a real-world rational function model. For part 1, we simply substitute t = 1 into the formula and compute carefully (the denominator is 0.002 times 1 plus 1). For part 2, we evaluate P at both t = 2 and t = 4, then apply the AROC formula. Since this function has decimals, use your calculator to avoid arithmetic errors. The sign and magnitude of the AROC will tell us whether the oyster population is growing or shrinking.</Strategy>
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
      <Sm>Think about it this way: if you save $50 every month, your total savings after each month is $50, $100, $150, $200... That is an arithmetic sequence! Any time you add the same amount repeatedly, you are working with one of these. They show up everywhere — monthly payments, stacking chairs in rows, or even the number of seats in each row of a stadium.</Sm>
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
      <Wh>Why does the distinction between a₀ and a₁ matter so much? Because plugging in the wrong starting index shifts your entire sequence by one position. If a problem says "a₁ = 5" and you treat that as a₀, every single term you calculate will be off by d. On the AP exam, always ask yourself: "Is this the zeroth term or the first term?" before choosing your formula.</Wh>
      <Tp>To find d: subtract ANY term from the NEXT term. d = aₙ₊₁ − aₙ. If d is positive, the sequence increases. If d is negative, it decreases.</Tp>
    </div>},
    { title:"Concept — Geometric Sequences", content:<div>
      <Sm>Here is a real-world example you already understand: compound interest. If you invest $1,000 at 5% annual interest, each year your balance is multiplied by 1.05. After year 1 you have $1,050, after year 2 you have $1,102.50, and so on. Each term is a fixed multiple of the previous one — that is a geometric sequence. Bacteria growth works the same way: one bacterium doubles every hour, giving you 1, 2, 4, 8, 16... Each term is 2 times the last.</Sm>
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
      <Wh>Why does dividing consecutive terms give the ratio? Because if every term is r times the previous one, then gₙ₊₁ = r * gₙ. Dividing both sides by gₙ gives gₙ₊₁/gₙ = r. The multiplication "undoes" itself through division, leaving you with the constant multiplier. This is the geometric equivalent of how subtracting consecutive arithmetic terms reveals the common difference.</Wh>
      <Tp>How to tell arithmetic vs geometric from a graph: arithmetic points fall on a straight LINE, geometric points fall on a CURVE.</Tp>
    </div>},
    { title:"Example — Arithmetic: Common Difference & nth Term", content:<div>
      <Q>Given the arithmetic sequence 3, 9, 15, 21, 27, ... (a₁ = 3). Find d, write aₙ, find a₁₀.</Q>
      <Strategy>We have a list of numbers and need to find three things: the common difference, a general formula, and a specific term. First, we will find d by subtracting consecutive terms. Then we will plug a1 and d into the formula. Finally, we substitute n = 10 to find the 10th term. We use the from-a1 version because the problem gives us a1 directly.</Strategy>
      <FmUsed>aₙ = a₁ + d(n − 1) where a₁ is the 1st term</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a) Find common difference:</b></MathLine>
        <Arrow text="Subtract consecutive terms: d = next term minus current term"/>
        <MathLine size={14}>d = 9 − 3 = <MathBox color="#6366f1">6</MathBox><Annotate>subtract any two consecutive terms</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b) Write expression for aₙ:</b></MathLine>
        <Arrow text="Substitute a₁ = 3 and d = 6 into the formula"/>
        <MathLine size={14}>aₙ = 3 + 6(n − 1)<Annotate>plug in a₁ = 3, d = 6</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c) Find the 10th term:</b></MathLine>
        <Arrow text="Plug in n = 10 and simplify step by step"/>
        <MathLine size={14}>a₁₀ = 3 + 6(<MathBox color="#6366f1">10</MathBox> − 1) = 3 + 6(9) = 3 + 54<Annotate>10 − 1 = 9, then 6 × 9 = 54</Annotate></MathLine>
        <Ans>a₁₀ = 57</Ans>
      </WB>
      <W>The formula uses (n minus 1), not n. To reach the 10th term from a1, you add d only 9 times. Using n instead of (n minus 1) gives the wrong answer.</W>
      <Tp>Quick check: count up manually for a few terms. a1=3, a2=9, a3=15 each goes up by 6. That confirms d = 6.</Tp>
    </div>},
    { title:"Example — Arithmetic from a₁ and d", content:<div>
      <Q>a₁ = −4, common difference d = 6. Find the 10th term.</Q>
      <Strategy>We are given a1 and d directly, so this is a straightforward substitution. We will plug a1 = -4 and d = 6 into the arithmetic sequence formula, then set n = 10. Watch for the (n minus 1) factor and careful sign handling with the negative starting value.</Strategy>
      <Wh>In an arithmetic sequence, <B>a₁</B> is the starting value (the very first term) and <B>d</B> is the common difference (the constant amount added to get from one term to the next). The formula aₙ = a₁ + d(n − 1) says: "start at a₁, then add d a total of (n − 1) times." Why (n − 1) and not n? Because to reach the 2nd term you add d once, to reach the 3rd you add d twice, etc. — you always add d one fewer time than the term number.</Wh>
      <FmUsed>aₙ = a₁ + d(n − 1)</FmUsed>
      <WB>
        <Arrow text="Step 1: Write the general formula by substituting a₁ and d"/>
        <MathLine>aₙ = −4 + 6(n − 1)<Annotate>replace a₁ with −4 and d with 6</Annotate></MathLine>
        <Arrow text="Step 2: Plug in n = 10 to find the 10th term"/>
        <MathLine>a₁₀ = −4 + 6(<MathBox color="#6366f1">10</MathBox> − 1)<Annotate>substitute n = 10</Annotate></MathLine>
        <Arrow text="Step 3: Simplify inside the parentheses first"/>
        <MathLine>a₁₀ = −4 + 6(9)<Annotate>10 − 1 = 9 (we add d nine times to reach the 10th term)</Annotate></MathLine>
        <Arrow text="Step 4: Multiply, then add"/>
        <MathLine>a₁₀ = −4 + 54<Annotate>6 × 9 = 54</Annotate></MathLine>
        <Ans>a₁₀ = 50</Ans>
      </WB>
      <W>Off-by-one error: the formula uses (n − 1), NOT n! To get to the 10th term, you add d only 9 times, not 10. Students who use n instead of (n − 1) get a₁₀ = −4 + 6(10) = 56, which is WRONG. Always subtract 1 from n.</W>
      <Tp>Quick mental check: a₁ = −4, then a₂ = −4 + 6 = 2, a₃ = 8, ... The terms increase by 6 each time. After 9 additions of 6, you have added 54 total, so a₁₀ = −4 + 54 = 50. ✓</Tp>
    </div>},
    { title:"Example — Geometric: Common Ratio & nth Term", content:<div>
      <Q>Given the geometric sequence 2/3, 2, 6, 18, ... (g₁ = 2/3). Find r, write gₙ, find g₅.</Q>
      <Strategy>This is a three-part geometric sequence problem. First, we will find r by dividing consecutive terms (since geometric means constant multiplication, division reveals the multiplier). Then we will write the general formula using g1 and r. Finally, we will plug in n = 5 to find the 5th term. Be careful with fraction arithmetic when dividing by 2/3.</Strategy>
      <Wh>In a geometric sequence, each term is found by <B>multiplying</B> the previous term by a constant ratio r. To find r, we <B>divide</B> any term by the one before it — this "undoes" the multiplication and reveals the ratio. Unlike arithmetic sequences (which grow by addition), geometric sequences grow by <B>repeated multiplication</B>, which produces exponential growth or decay.</Wh>
      <FmUsed>gₙ = g₁ · r⁽ⁿ⁻¹⁾</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a) Find common ratio:</b></MathLine>
        <Arrow text="Divide the 2nd term by the 1st term to find r"/>
        <MathLine size={14}>r = 2 ÷ (2/3)<Annotate>dividing consecutive terms reveals the multiplier</Annotate></MathLine>
        <Arrow text="Dividing by a fraction = multiplying by its reciprocal"/>
        <MathLine size={14}>r = 2 × (3/2) = <MathBox color="#6366f1">3</MathBox><Annotate>each term is 3× the previous term</Annotate></MathLine>
        <MathLine size={14} color="#888">Verify: 6 ÷ 2 = 3 ✓ and 18 ÷ 6 = 3 ✓<Annotate color="#22c55e">always verify with multiple pairs</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b) Write expression for gₙ:</b></MathLine>
        <Arrow text="Substitute g₁ = 2/3 and r = 3 into the formula"/>
        <MathLine size={14}>gₙ = (2/3) · 3⁽ⁿ⁻¹⁾<Annotate>start at 2/3, multiply by 3 a total of (n−1) times</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c) Find the 5th term:</b></MathLine>
        <Arrow text="Plug in n = 5"/>
        <MathLine size={14}>g₅ = (2/3) · 3⁽⁵⁻¹⁾<Annotate>substitute n = 5</Annotate></MathLine>
        <Arrow text="Simplify the exponent"/>
        <MathLine size={14}>g₅ = (2/3) · 3⁴ = (2/3) · 81<Annotate>3⁴ = 3×3×3×3 = 81</Annotate></MathLine>
        <Arrow text="Multiply the fraction by the whole number"/>
        <MathLine size={14}>g₅ = (2 · 81)/3 = 162/3</MathLine>
        <Ans>g₅ = 54</Ans>
      </WB>
      <Tp>Always verify your ratio with at least two consecutive pairs. If the ratios are not equal, the sequence is NOT geometric.</Tp>
    </div>},
    { title:"Example — Geometric from g₁ and r", content:<div>
      <Q>g₁ = −4, common ratio r = −2. Find the 6th term.</Q>
      <Strategy>We are given g1 and r directly, so we substitute into the geometric formula and plug in n = 6. The tricky part here is that both g1 and r are negative, so we need to be very careful with signs. We will evaluate the power of a negative base first, then multiply by g1. Remember: odd powers of negatives stay negative, even powers become positive.</Strategy>
      <FmUsed>gₙ = g₁ · r⁽ⁿ⁻¹⁾</FmUsed>
      <WB>
        <Arrow text="Step 1: Write the general formula with g₁ and r substituted"/>
        <MathLine>gₙ = −4 · (−2)⁽ⁿ⁻¹⁾<Annotate>replace g₁ with −4 and r with −2</Annotate></MathLine>
        <Arrow text="Step 2: Plug in n = 6"/>
        <MathLine>g₆ = −4 · (−2)⁽⁶⁻¹⁾ = −4 · (−2)⁵<Annotate>6 − 1 = 5</Annotate></MathLine>
        <Arrow text="Step 3: Evaluate (−2)⁵ — negative base to an ODD power stays negative"/>
        <MathLine indent={20}>(−2)⁵ = (−2)(−2)(−2)(−2)(−2)<Annotate>write it out to see the sign pattern</Annotate></MathLine>
        <MathLine indent={20}>= (+4)(−2)(−2)(−2) = (−8)(−2)(−2) = (+16)(−2) = <MathBox color="#ef4444">−32</MathBox><Annotate>odd number of negatives → negative result</Annotate></MathLine>
        <Arrow text="Step 4: Multiply g₁ by the result — negative × negative = positive"/>
        <MathLine indent={20}>= −4 · (−32)<Annotate>negative × negative = POSITIVE</Annotate></MathLine>
        <Ans>g₆ = 128</Ans>
      </WB>
      <Wh>When the base r is negative, the terms <B>alternate in sign</B>. Odd powers of a negative base give a negative result; even powers give a positive result. Then you multiply by g₁, so track the signs carefully: (−4) × (−32) = +128 because negative × negative = positive.</Wh>
      <W>Sign errors are the #1 mistake with negative bases! Students often forget that (−2)⁵ is negative and write 32 instead of −32, which flips the final answer to −128. Always ask: "Is the exponent odd or even?" to determine the sign of the power first, THEN multiply by g₁.</W>
      <Tp>On the AP exam, quickly check sign by counting: odd exponent on a negative base → negative. Even exponent on a negative base → positive. Then handle the multiplication with g₁ separately.</Tp>
    </div>},
    { title:"Example — Identifying from Graphs", content:<div>
      <Q>Two graphs of sequences are shown. Identify which is arithmetic vs geometric and write expressions.</Q>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:14}}>
        <svg width="100%" height="120" viewBox="0 0 200 120"><text x="100" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">Graph 1</text><line x1="25" y1="105" x2="185" y2="105" stroke="#94a3b8" strokeWidth="1"/><line x1="25" y1="15" x2="25" y2="105" stroke="#94a3b8" strokeWidth="1"/>{[[1,-12],[2,-10],[3,-8],[4,-6],[5,-4]].map(([n,v])=><circle key={n} cx={25+n*30} cy={105-(v+14)*4} r="4" fill="#1e293b"/>)}{[1,2,3,4,5].map(n=><text key={n} x={25+n*30} y="115" textAnchor="middle" fontSize="8" fill="#64748b">{n}</text>)}<text x="12" y="60" fontSize="8" fill="#64748b" textAnchor="middle" transform="rotate(-90,12,60)">y</text></svg>
        <svg width="100%" height="120" viewBox="0 0 200 120"><text x="100" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">Graph 2</text><line x1="25" y1="105" x2="185" y2="105" stroke="#94a3b8" strokeWidth="1"/><line x1="25" y1="15" x2="25" y2="105" stroke="#94a3b8" strokeWidth="1"/>{[[1,5],[2,1],[3,0.2],[4,0.04],[5,0.008]].map(([n,v])=><circle key={n} cx={25+n*30} cy={105-v*16} r="4" fill="#1e293b"/>)}{[1,2,3,4,5].map(n=><text key={n} x={25+n*30} y="115" textAnchor="middle" fontSize="8" fill="#64748b">{n}</text>)}<text x="12" y="60" fontSize="8" fill="#64748b" textAnchor="middle" transform="rotate(-90,12,60)">y</text></svg>
      </div>
      <Strategy>For each graph, we will check the shape of the plotted points. If the dots fall on a straight line, that means constant addition (arithmetic). If the dots fall on a curve, that means constant multiplication (geometric). Once classified, we read the first point for a1 or g1, compute d or r from the spacing or ratios, and write the formula.</Strategy>
      <Wh>Arithmetic sequences add a constant, so their graphs are <B>discrete points that fall on a straight line</B> (just like a linear function). Geometric sequences multiply by a constant, so their graphs are <B>discrete points that fall on an exponential curve</B> (either growing or decaying). This visual distinction is the fastest way to classify a sequence on the AP exam.</Wh>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Graph 1 (linear pattern):</b> Arithmetic</MathLine>
        <Arrow text="Step 1: The dots lie on a straight line → constant ADDITION → arithmetic"/>
        <MathLine size={14}>a₁ = −12<Annotate>read the first plotted point: when n = 1, the y-value is −12</Annotate></MathLine>
        <Arrow text="Step 2: Find d by looking at the vertical change between consecutive points"/>
        <MathLine size={14}>d = rise between consecutive points = 2<Annotate>from n=1 to n=2, y goes from −12 to −10, so d = −10 − (−12) = 2</Annotate></MathLine>
        <Arrow text="Step 3: Write the formula"/>
        <MathLine size={14}>aₙ = −12 + 2(n − 1)<Annotate>a₁ = −12, d = 2</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Graph 2 (curved/decaying):</b> Geometric</MathLine>
        <Arrow text="Step 1: The dots curve downward, approaching zero → exponential decay → geometric"/>
        <MathLine size={14}>g₁ = 5<Annotate>read the first plotted point: when n = 1, y = 5</Annotate></MathLine>
        <Arrow text="Step 2: Find r by dividing the y-value at n=2 by the y-value at n=1"/>
        <MathLine size={14}>r = g₂ / g₁ = 1 / 5 = <MathBox color="#6366f1">1/5</MathBox><Annotate>the second point has y = 1, so 1 ÷ 5 = 1/5</Annotate></MathLine>
        <Arrow text="Step 3: Write the formula"/>
        <MathLine size={14}>gₙ = 5 · (1/5)⁽ⁿ⁻¹⁾<Annotate>g₁ = 5, r = 1/5; since 0 {"<"} r {"<"} 1, this is decay</Annotate></MathLine>
      </WB>
      <Tp>Arithmetic → points fall on a LINE (constant vertical spacing). Geometric → points fall on a CURVE (exponential shape — either shooting up or decaying toward zero). On the AP exam, this visual test takes seconds!</Tp>
      <W>Do not confuse "the points curve upward" with "it must be geometric." A quadratic also curves! The key difference: geometric curves approach a horizontal asymptote (usually y = 0) and never cross it, while quadratics are symmetric and can cross the x-axis.</W>
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
      <Strategy>We know two terms of an arithmetic sequence (a1 = 3, a4 = 15) and need to find d. We will set up the equation 15 = 3 + d(4-1) and solve. Then for the linear function, the slope m equals d because arithmetic sequences are the discrete version of linear functions. Both formulas use the same starting point and rate of change.</Strategy>
      <FmUsed>Arith: aₙ = aₖ + d(n−k) · Linear: y = yᵢ + m(x−xᵢ)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Arithmetic Sequence:</b></MathLine>
        <Arrow text="Step 1: Identify the two known terms"/>
        <MathLine size={14}>a₁ = 3, a₄ = 15<Annotate>we know the 1st and 4th terms</Annotate></MathLine>
        <Arrow text="Step 2: Use the formula to set up an equation for d"/>
        <MathLine size={14}>15 = 3 + d(4−1) → 15 = 3 + 3d → d = <MathBox color="#6366f1">4</MathBox><Annotate>subtract 3, divide by 3</Annotate></MathLine>
        <Arrow text="Step 3: Write the general formula"/>
        <MathLine size={14}>aₙ = 3 + 4(n − 1)<Annotate>a₁ = 3, d = 4</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Linear Function:</b></MathLine>
        <Arrow text="The slope m equals the common difference d"/>
        <MathLine size={14}>m = d = <MathBox color="#6366f1">4</MathBox><Annotate>same as common difference!</Annotate></MathLine>
        <Ans>y = 3 + 4(x − 1)</Ans>
      </WB>
      <Wh>The common difference d of an arithmetic sequence IS the slope m of the corresponding linear function. They are the same thing!</Wh>
      <Tp>Notice the formulas look almost identical: an = 3 + 4(n - 1) and y = 3 + 4(x - 1). Arithmetic sequences and linear functions are the same relationship, just discrete vs continuous.</Tp>
    </div>},
    { title:"Example — Geometric Sequence → Exponential Function", content:<div>
      <Q>Given geometric sequence 3, ___, ___, 24, ... AND exponential function with points (1,3) and (4,24). Write expressions for both.</Q>
      <Strategy>We know g1 = 3 and g4 = 24. We will set up 24 = 3 times r cubed and solve for r by dividing and taking a cube root. Then for the exponential function, b = r because the common ratio of a geometric sequence IS the base of the corresponding exponential function.</Strategy>
      <FmUsed>Geom: gₙ = gₖ · r⁽ⁿ⁻ᵏ⁾ · Exp: f(x) = yᵢ · b⁽ˣ⁻ˣⁱ⁾</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Geometric Sequence:</b></MathLine>
        <Arrow text="Step 1: Identify the two known terms"/>
        <MathLine size={14}>g₁ = 3, g₄ = 24<Annotate>we know the 1st and 4th terms</Annotate></MathLine>
        <Arrow text="Step 2: Set up equation and solve for r"/>
        <MathLine size={14}>24 = 3 · r⁽⁴⁻¹⁾ → 8 = r³ → r = <MathBox color="#6366f1">2</MathBox><Annotate>divide by 3 to get 8 = r³, then take cube root</Annotate></MathLine>
        <Arrow text="Step 3: Write the general formula"/>
        <MathLine size={14}>gₙ = 3 · 2⁽ⁿ⁻¹⁾<Annotate>g₁ = 3, r = 2</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Exponential Function:</b></MathLine>
        <Arrow text="The base b equals the common ratio r"/>
        <MathLine size={14}>b = r = <MathBox color="#6366f1">2</MathBox><Annotate>same as common ratio!</Annotate></MathLine>
        <Ans>y = 3 · 2⁽ˣ⁻¹⁾</Ans>
      </WB>
      <Wh>The common ratio r of a geometric sequence IS the base b of the corresponding exponential function.</Wh>
      <Tp>When solving for r from two known terms, always divide the later output by the earlier output, then take the appropriate root. Here: 24/3 = 8, and the cube root of 8 = 2.</Tp>
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
      <Strategy>We will evaluate at each x-value by substituting into f(x) = 3 times 2 to the x. For negative exponents, recall 2 to the -1 equals 1/2. Then we determine behavior by checking a and b: since a = 3 is positive and b = 2 is greater than 1, this is exponential growth (always increasing, always concave up).</Strategy>
      <FmUsed>f(x) = a·bˣ → f(0) = a, f(1) = a·b, f(−1) = a/b</FmUsed>
      <WB>
        <Arrow text="Evaluate at each x-value by substituting into f(x) = 3·2ˣ"/>
        <MathLine size={14}>f(−1) = 3·2⁻¹ = 3·(1/2) = <MathBox color="#22c55e">3/2</MathBox><Annotate>negative exponent = reciprocal: 2⁻¹ = 1/2</Annotate></MathLine>
        <MathLine size={14}>f(0) = 3·2⁰ = 3·1 = <MathBox color="#22c55e">3</MathBox><Annotate>y-intercept is always a</Annotate></MathLine>
        <MathLine size={14}>f(1) = 3·2¹ = <MathBox color="#22c55e">6</MathBox><Annotate>one step right: multiply a by b</Annotate></MathLine>
        <MathLine size={14}>f(2) = 3·2² = <MathBox color="#22c55e">12</MathBox><Annotate>each step right multiplies by b = 2</Annotate></MathLine>
        <Arrow text="Determine behavior from a and b"/>
        <MathLine size={14} color="#4338ca"><b>Properties:</b></MathLine>
        <MathLine size={14}>a = 3 {">"} 0, b = 2 {">"} 1 → exponential GROWTH<Annotate>positive a and b {">"} 1 confirms growth</Annotate></MathLine>
        <MathLine size={14}>Always <MathBox color="#22c55e">increasing</MathBox> · Always <MathBox color="#22c55e">concave up</MathBox></MathLine>
        <Ans>Domain: all reals · Range: (0, ∞) · HA: y = 0</Ans>
      </WB>
      <Tp>For any f(x) = a·bˣ, the three easiest points to compute are: f(0) = a (the y-intercept), f(1) = a·b (one step right), and f(−1) = a/b (one step left). These three points plus the HA are enough to sketch the entire curve.</Tp>
      <W>The range is (0, ∞), NOT [0, ∞). The graph approaches y = 0 but never touches it. On the AP exam, using a bracket instead of a parenthesis at 0 costs points because it implies the HA is reached.</W>
    </div>},
    { title:"Example — Showing Outputs are Proportional", content:<div>
      <Q>Show that the output values of f and g are proportional over equal-length input intervals.</Q>
      <Strategy>To show outputs are proportional, we divide each consecutive output by the previous one. If these ratios are all equal, the outputs are proportional and the function is exponential. We do this for both f and g separately. The constant ratio IS the base of the exponential.</Strategy>
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
      <Strategy>Since h(x) = f(x) + 5, we find f(x) by subtracting 5 from each h(x) value. Then we check if f(x) is exponential by computing ratios of consecutive outputs. If the ratios are constant, f is exponential, meaning h is just a vertical shift of an exponential function.</Strategy>
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
      <Strategy>For each function, we check two things: (1) is a positive or negative, and (2) is b greater than 1 or between 0 and 1. These two facts determine all the end behavior. Growth means the HA is on the left side, decay means the HA is on the right. If a is negative, the graph flips over the x-axis.</Strategy>
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
      <Tp>Quick trick: the HA (y = 0) is always on the side where the base shrinks things toward zero. For growth (b greater than 1), the HA is on the left. For decay (0 less than b less than 1), the HA is on the right.</Tp>
      <W>When a is negative, the graph is reflected over the x-axis. The HA is still y = 0, but limits that were positive infinity become negative infinity and vice versa.</W>
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
      <Strategy>For each expression, we need everything written as a power of 2. If a number is not already a power of 2, we convert it first (e.g., 16 = 2 to the 4th, 4 = 2 squared). Once all bases match, we add the exponents using the product property. This is the fundamental technique for simplifying exponential expressions.</Strategy>
      <Wh>Why can we add exponents when multiplying same-base powers? Because exponents count repeated multiplication. 2³ means 2·2·2 (three 2s) and 2⁵ means 2·2·2·2·2 (five 2s). Multiply them together and you get 2·2·2·2·2·2·2·2 — that is eight 2s, or 2⁸. So 2³ · 2⁵ = 2⁽³⁺⁵⁾ is just counting how many times 2 appears in the product.</Wh>
      <FmUsed>bᵐ · bⁿ = b⁽ᵐ⁺ⁿ⁾ — when bases match, ADD the exponents</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> 2³ · 2⁵</MathLine>
        <Arrow text="Bases already match (both are 2) → add the exponents"/>
        <MathLine size={14}>= 2⁽³⁺⁵⁾ = <MathBox color="#22c55e">2⁸</MathBox><Annotate>3 twos times 5 twos = 8 twos total</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> 2ˣ · 2⁵</MathLine>
        <Arrow text="Same base (2) → add exponents, even with variables"/>
        <MathLine size={14}>= <MathBox color="#22c55e">2⁽ˣ⁺⁵⁾</MathBox><Annotate>the rule works identically with variable exponents</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c)</b> 16 · 2⁶</MathLine>
        <Arrow text="First rewrite 16 as a power of 2 so the bases match"/>
        <MathLine size={14}>= 2⁴ · 2⁶<Annotate>16 = 2·2·2·2 = 2⁴</Annotate></MathLine>
        <Arrow text="Now bases match → add exponents"/>
        <MathLine size={14}>= 2⁽⁴⁺⁶⁾ = <MathBox color="#22c55e">2¹⁰</MathBox><Annotate>4 + 6 = 10</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>d)</b> 4 · 2ˣ</MathLine>
        <Arrow text="Rewrite 4 as a power of 2"/>
        <MathLine size={14}>= 2² · 2ˣ<Annotate>4 = 2²</Annotate></MathLine>
        <Arrow text="Add exponents"/>
        <MathLine size={14}>= <MathBox color="#22c55e">2⁽²⁺ˣ⁾</MathBox><Annotate>2 + x</Annotate></MathLine>
      </WB>
      <W>The product property ONLY works when the bases are the same! You cannot combine 2³ · 3⁵ into a single power. Convert constants to matching bases first: 16=2⁴, 4=2², 8=2³, 32=2⁵, 64=2⁶.</W>
      <Tp>On the AP exam, memorize the powers of 2 (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024) and powers of 3 (3, 9, 27, 81, 243). Recognizing these instantly saves valuable time.</Tp>
    </div>},
    { title:"Example — Power Property & Change of Base", content:<div>
      <Q>Rewrite using power property (bᵐ)ⁿ = b⁽ᵐⁿ⁾ to change the base.</Q>
      <Strategy>For each expression, we apply the power property: multiply the exponents together. For the change-of-base parts, we regroup the result as (new base) to the x, which reveals the new base. This technique is essential because horizontal dilations of exponentials are equivalent to changing the base.</Strategy>
      <Wh>Why does raising a power to a power MULTIPLY the exponents? Think of it as repeated application. (5³)⁶ means "take 5³ and multiply it by itself 6 times." That is 5³ · 5³ · 5³ · 5³ · 5³ · 5³. By the product property, we add the exponents: 3+3+3+3+3+3 = 3 × 6 = 18. So (5³)⁶ = 5¹⁸. Raising to a power is repeated multiplication of the base, and repeated addition of the exponent is just multiplication!</Wh>
      <FmUsed>(bᵐ)ⁿ = b⁽ᵐ·ⁿ⁾ — power of a power: MULTIPLY the exponents</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> (5³)⁶</MathLine>
        <Arrow text="Multiply the exponents: 3 × 6"/>
        <MathLine size={14}>= 5⁽³ˣ⁶⁾ = <MathBox color="#22c55e">5¹⁸</MathBox><Annotate>expanded: 5³·5³·5³·5³·5³·5³ = 5¹⁸</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> (2ˣ)⁵</MathLine>
        <Arrow text="Multiply exponents: x × 5"/>
        <MathLine size={14}>= <MathBox color="#22c55e">2⁵ˣ</MathBox><Annotate>expanded: 2ˣ·2ˣ·2ˣ·2ˣ·2ˣ = 2⁽ˣ⁺ˣ⁺ˣ⁺ˣ⁺ˣ⁾ = 2⁵ˣ</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c) Change base:</b> (3ˣ)⁵</MathLine>
        <Arrow text="Step 1: Multiply exponents"/>
        <MathLine size={14}>= 3⁵ˣ<Annotate>x × 5 = 5x</Annotate></MathLine>
        <Arrow text="Step 2: Rewrite as (3⁵)ˣ to reveal the new base"/>
        <MathLine size={14}>= (3⁵)ˣ = <MathBox color="#22c55e">243ˣ</MathBox><Annotate>3⁵ = 243 is the new base</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>d) Change base:</b> (2ˣ)⁵</MathLine>
        <Arrow text="Multiply exponents, then regroup"/>
        <MathLine size={14}>= 2⁵ˣ = (2⁵)ˣ = <MathBox color="#22c55e">32ˣ</MathBox><Annotate>2⁵ = 32 is the new base</Annotate></MathLine>
      </WB>
      <Tp>Horizontal dilation = change of base! g(x) = 2²ˣ = (2²)ˣ = 4ˣ. Compressing by 1/2 horizontally changed base 2 to base 4. The AP exam loves asking you to show two such expressions are equivalent.</Tp>
      <W>Do not confuse the product property (add exponents) with the power property (multiply exponents). bᵐ · bⁿ uses addition. (bᵐ)ⁿ uses multiplication. Mixing them up is a very common error!</W>
    </div>},
    { title:"Example — Negative Exponents & Unit Fractions", content:<div>
      <Q>Rewrite using negative exponent property and unit fractions.</Q>
      <Strategy>We handle negative exponents and fractional exponents separately. For negatives, flip to a fraction (reciprocal). For unit fractions like 1/3, take the corresponding root. The key insight: a negative exponent does NOT make the answer negative; it makes it a fraction. A fractional exponent does NOT mean regular division; it means taking a root.</Strategy>
      <Wh>A <B>negative exponent</B> means "take the reciprocal." Why? Consider the pattern: 2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1. Each time the exponent decreases by 1, we divide by 2. Continuing: 2⁻¹ = 1/2, 2⁻² = 1/4, 2⁻³ = 1/8. So b⁻ⁿ = 1/bⁿ. The negative sign does NOT make the result negative — it flips the number to a fraction!</Wh>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Negative Exponents:</b></MathLine>
        <Arrow text="A negative exponent means 'one over' (reciprocal)"/>
        <MathLine size={14}>2⁻³ = 1/2³<Annotate>negative exponent → flip to denominator</Annotate></MathLine>
        <Arrow text="Now evaluate the positive power in the denominator"/>
        <MathLine size={14}>= 1/8 = <MathBox color="#22c55e">1/8</MathBox><Annotate>2³ = 2·2·2 = 8</Annotate></MathLine>
        <MathLine size={14}>3⁻⁴ = 1/3⁴<Annotate>negative exponent → reciprocal</Annotate></MathLine>
        <Arrow text="Evaluate 3⁴"/>
        <MathLine size={14}>= 1/81 = <MathBox color="#22c55e">1/81</MathBox><Annotate>3⁴ = 3·3·3·3 = 81</Annotate></MathLine>
      </WB>
      <Wh>A <B>fractional exponent</B> means "take a root." Specifically, b^(1/n) = the nth root of b. Why? Because if you raise b^(1/n) to the nth power, you get b^(n/n) = b¹ = b. So b^(1/n) is the number that, when raised to the nth power, gives you b — and that is exactly what the nth root means!</Wh>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Unit Fractions (fractional exponents = roots):</b></MathLine>
        <Arrow text="A 1/3 exponent means 'cube root' — what number cubed gives 8?"/>
        <MathLine size={14}>8^(1/3) = ³√8<Annotate>fractional exponent 1/3 = cube root</Annotate></MathLine>
        <MathLine size={14}>= <MathBox color="#6366f1">2</MathBox><Annotate>because 2³ = 2·2·2 = 8 ✓</Annotate></MathLine>
        <Arrow text="A 1/4 exponent means '4th root' — what number to the 4th gives 81?"/>
        <MathLine size={14}>81^(1/4) = ⁴√81<Annotate>fractional exponent 1/4 = 4th root</Annotate></MathLine>
        <MathLine size={14}>= <MathBox color="#6366f1">3</MathBox><Annotate>because 3⁴ = 3·3·3·3 = 81 ✓</Annotate></MathLine>
      </WB>
      <W>A negative exponent does NOT make the answer negative! 2⁻³ = 1/8 (positive!), not −8. Also, students often confuse 8^(1/3) with 8/3. Remember: 8^(1/3) means ³√8 = 2, while 8/3 is just a fraction equal to about 2.667.</W>
      <Tp>Combine both rules: b^(−m/n) = 1/(b^(m/n)) = 1/(ⁿ√b)ᵐ. Negative = reciprocal, fraction = root. Handle them separately, in any order.</Tp>
    </div>},
  ]},
  { id:"2.5", name:"Exponential Function Context & Data Modeling", slides:[
    { title:"Concept — Building Exponential Models", content:<div>
      <Fm label="Without Technology">Find the ratio r from table → f(x) = a·rˣ (where a = f(0))</Fm>
      <Fm label="With Technology (Regression)">Enter data → STAT → ExpReg → y = abˣ</Fm>
      <Accordion title="Building a Model Without Technology (Step-by-Step)" defaultOpen={true}>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Sm>
        <B>Step 1:</B> Check that input intervals are equal-length<br/>
        <B>Step 2:</B> Divide consecutive outputs to find the ratio r<br/>
        <B>Step 3:</B> Use f(0) as the initial value a, OR use any known point with the "from kth term" formula<br/>
        <B>Step 4:</B> Write f(x) = a·rˣ
      </Sm></Box>
      <Wh>Why do we check equal-length input intervals first? Because the constant-ratio test only works when the x-values are equally spaced. If the spacing is unequal, you need to adjust by raising the ratio to the appropriate power for each interval width.</Wh>
      </Accordion>
      <Accordion title="Building from Two Points (System of Equations)">
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Sm>
        If given f(x) = c·bˣ + d with two points:<br/>
        <B>Step 1:</B> Plug both points in to create a system of two equations<br/>
        <B>Step 2:</B> Solve for d first (often using the x=0 point)<br/>
        <B>Step 3:</B> Substitute d back to find b
      </Sm></Box>
      <Tp>If one of the two points has x = 0, use it first! Since b⁰ = 1, the equation simplifies dramatically and lets you find d immediately.</Tp>
      </Accordion>
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
      <Strategy>To build an exponential model from a table: (1) verify the data is exponential by checking that consecutive output ratios are constant, (2) identify a = f(0) as the initial value, and (3) use the common ratio as the base b. Since f is decreasing, we expect b to be between 0 and 1.</Strategy>
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
      <Strategy>We have two unknowns (b and d) and two points, so we set up a system of equations. The trick is to use x = 0 first because b to the 0 = 1, which eliminates b from that equation and lets us find d immediately. Then substitute d back into the second equation to solve for b.</Strategy>
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
      <Strategy>For part (a), the initial value is 920 and it doubles (times 2) each day. For (b) and (c) we substitute. For (d), we convert time units by raising the daily base to the 7th power, since 7 days = 1 week. The key formula for time conversion: if the base is b per small unit and there are k small units per big unit, the new base is b to the k.</Strategy>
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
      <Strategy>We substitute t = 1 and t = 4 into the model and evaluate using a calculator. The exponent t/4 means the characteristic growth cycle is 4 weeks. At t = 4, the exponent becomes exactly 1, giving us 6 times e, a nice reference point.</Strategy>
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
      <Wh>On the AP exam, you will frequently be given a table and asked to determine the best model type. This classification skill is the foundation for all data modeling questions. Getting the model type wrong means every subsequent calculation is wrong too.</Wh>
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
      <Strategy>We apply the classification algorithm: first check 1st differences (subtract consecutive outputs). If constant, it is linear. If not, check 2nd differences. If constant, it is quadratic. If neither works, check ratios. If constant, it is exponential. Always verify x-values are equally spaced before starting.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(x): Check differences</b></MathLine>
        <Tb h={["x","−1","0","1","2"]} r={[["f(x)","−2","0","−2","−8"]]}/>
        <Arrow text="Step 1: Compute 1st differences (subtract consecutive outputs)"/>
        <MathLine size={14}>1st diff: 0−(−2)=2, (−2)−0=−2, (−8)−(−2)=−6<Annotate>NOT constant → not linear</Annotate></MathLine>
        <Arrow text="1st differences not constant → try 2nd differences"/>
        <MathLine size={14}>2nd diff: (−2)−2=−4, (−6)−(−2)=−4<Annotate color="#22c55e">CONSTANT at −4 → Quadratic!</Annotate></MathLine>
        <Sm>Why quadratic? Quadratics have a constant rate of change OF the rate of change, which is what constant 2nd differences detect.</Sm>
        <MathLine size={14} color="#4338ca"><b>g(x): Check proportions</b></MathLine>
        <Tb h={["x","−1","0","1","2"]} r={[["g(x)","2","4","8","16"]]}/>
        <Arrow text="Check ratios of consecutive outputs (divide each by the previous)"/>
        <MathLine size={14}>Ratios: 4/2=2, 8/4=2, 16/8=2<Annotate color="#22c55e">CONSTANT ratio of 2 → Exponential!</Annotate></MathLine>
        <Sm>Why exponential? Exponential functions multiply by the same factor for each equal step in x. Here the output doubles each time x increases by 1.</Sm>
        <MathLine size={14} color="#4338ca"><b>h(x): Check differences</b></MathLine>
        <Tb h={["x","−1","0","1","2"]} r={[["h(x)","−2","0","2","4"]]}/>
        <Arrow text="Compute 1st differences"/>
        <MathLine size={14}>1st diff: 0−(−2)=2, 2−0=2, 4−2=2<Annotate color="#22c55e">CONSTANT at 2 → Linear!</Annotate></MathLine>
        <Sm>Why linear? Linear functions add the same amount (slope) for each equal step in x. The output increases by 2 each time.</Sm>
      </WB>
      <Wh>The classification strategy: (1) Check 1st differences — if constant, linear. (2) Check 2nd differences — if constant, quadratic. (3) Check ratios — if constant, exponential. Always start with the simplest test.</Wh>
      <Tp>On the AP exam, always verify that the x-values are equally spaced FIRST. The difference/ratio tests only work with equal input intervals.</Tp>
    </div>},
    { title:"Example — Residual Plot Analysis", content:<div>
      <Q>Determine whether each residual plot shows a pattern. Is the model appropriate?</Q>
      <Strategy>For each residual plot, we look for any recognizable pattern. Random scatter around y = 0 means the model fits well. Any systematic shape (U-shape, wave, trend) means the model is wrong for this data. The shape of the pattern often hints at what model to try instead.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Plot 1:</b> Points scattered randomly around y=0</MathLine>
        <Arrow text="Ask: do the points form any recognizable pattern?"/>
        <MathLine size={14}>The points bounce above and below y=0 with no visible curve, trend, or fan shape<Annotate color="#22c55e">random scatter = good fit</Annotate></MathLine>
        <Ans>No pattern → regression model IS appropriate ✓</Ans>
        <MathLine size={14} color="#4338ca"><b>Plot 2:</b> Points form a curved pattern (U-shape)</MathLine>
        <Arrow text="Ask: is there a recognizable shape in the residuals?"/>
        <MathLine size={14}>Residuals dip negative in the middle and are positive at the ends → U-shape<Annotate color="#ef4444">systematic pattern = bad fit</Annotate></MathLine>
        <MathLine size={14}>A U-shape from a linear regression suggests the data is actually curved<Annotate>try a quadratic model instead</Annotate></MathLine>
        <Ans>Pattern exists → regression model is NOT appropriate ✗</Ans>
      </WB>
      <Wh>A residual = actual − predicted. A good residual plot looks like random noise. If you see any shape (curve, wave, trend), the model does not fit the data well. The shape often hints at what model to try next.</Wh>
      <Tp>On the AP exam, the key word is PATTERN: random = good, pattern = bad. U-shape from linear fit → try quadratic. Fanning out → consider a transformation.</Tp>
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
      <Strategy>For each composition, we work INSIDE OUT. For f(g(x)), compute g(x) first, then feed that into f. For numerical evaluations, compute the inner function at the given number, then plug into the outer. For domains, both the inner function must be defined AND the output of the inner must be in the domain of the outer.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(g(x)):</b> replace x in f with g(x)</MathLine>
        <Arrow text="Step 1: Compute g(x), then feed result into f"/>
        <MathLine size={14}>f(g(x)) = f(1/(x−4)) = <MathBox color="#22c55e">√(1/(x−4))</MathBox><Annotate>replace x in √x with the output of g</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>f(g(6)):</b></MathLine>
        <Arrow text="Inner first: evaluate g(6), then plug into f"/>
        <MathLine size={14}>g(6) = 1/(6−4) = 1/2, then f(1/2) = √(1/2) = <MathBox>1/√2</MathBox><Annotate>inner → outer</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(f(x)):</b> replace x in g with f(x)</MathLine>
        <Arrow text="Now the other direction: f is inner, g is outer"/>
        <MathLine size={14}>g(f(x)) = g(√x) = <MathBox color="#22c55e">1/(√x − 4)</MathBox><Annotate>replace x in 1/(x−4) with √x</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(f(9)):</b></MathLine>
        <Arrow text="Inner first: evaluate f(9), then plug into g"/>
        <MathLine size={14}>f(9) = √9 = 3, then g(3) = 1/(3−4) = <MathBox>−1</MathBox><Annotate>3 − 4 = −1, so 1/(−1) = −1</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Domains:</b></MathLine>
        <Arrow text="For each composition, check BOTH the inner domain AND that the inner output lands in the outer domain"/>
        <MathLine size={14}>h(x) = f(g(x)): x {">"} 4<Annotate>g undefined at x=4, and we need g(x) ≥ 0 for √, so x must be greater than 4</Annotate></MathLine>
        <MathLine size={14}>j(x) = g(f(x)): x ≥ 0 and x ≠ 16<Annotate>need √x defined AND √x ≠ 4 (since g has VA at 4)</Annotate></MathLine>
      </WB>
      <W>f(g(x)) ≠ g(f(x)) in general! Order matters!</W>
    </div>},
    { title:"Example — Decomposition", content:<div>
      <Q>If h(x) = f(g(x)), decompose h(x) = ³√(2x−5) into f and g.</Q>
      <Strategy>To decompose, we identify the two layers of operations. The innermost expression (2x - 5) is what happens first, so that becomes g(x). The outer operation (cube root) is what we do to the result, so that becomes f(x). We always verify by recomposing: f(g(x)) should give back h(x).</Strategy>
      <Wh>Decomposition is the REVERSE of composition. Instead of combining two functions, you BREAK one complex function into two simpler parts. Think of it like reverse-engineering a machine: if the machine takes x, does something to it, then does something else — what are those two steps? The inner function g(x) is what happens FIRST, and the outer function f(x) is what happens SECOND (what you do to the result of g).</Wh>
      <WB>
        <MathLine size={14}>h(x) = ³√(2x − 5)</MathLine>
        <Arrow text="Step 1: Identify the innermost operation — what is nested inside another?"/>
        <MathLine size={14}>We see (2x − 5) nested inside a cube root — two layers of operations<Annotate>inner = 2x−5, outer = cube root</Annotate></MathLine>
        <Arrow text="Step 2: The inner function g(x) is the expression INSIDE the outer operation"/>
        <MathLine size={14}>g(x) = <MathBox color="#6366f1">2x − 5</MathBox><Annotate>this happens first — the expression inside the cube root</Annotate></MathLine>
        <Arrow text="Step 3: The outer function f(x) is what you DO to the inner result"/>
        <MathLine size={14}>f(x) = <MathBox color="#ec4899">³√x</MathBox><Annotate color="#ec4899">this happens second — take the cube root of whatever comes in</Annotate></MathLine>
        <Arrow text="Step 4: ALWAYS verify by recomposing"/>
        <MathLine size={14}>Check: f(g(x)) = f(2x−5) = ³√(2x−5) = h(x) ✓<Annotate color="#22c55e">plug g into f and confirm you get h</Annotate></MathLine>
      </WB>
      <W>Decomposition is NOT unique! For h(x) = ³√(2x−5), you could also say g(x) = 2x and f(x) = ³√(x−5). Both are valid. On the AP exam, pick the most natural split at the most obvious nesting point. Also, never let g(x) = x — that is a trivial decomposition and defeats the purpose.</W>
      <Tp>How to spot the inner function: look for expressions INSIDE parentheses, under radicals, inside absolute values, or as the argument of a function. The "shell" around that expression is your outer function.</Tp>
    </div>},
    { title:"Example — Composition from Tables", content:<div>
      <Q>Using the tables, find f(g(3)) and g(f(1)).</Q>
      <Strategy>For table-based composition, work inside out. For f(g(3)): first look up 3 in the g-table to get g(3), then use that result as input in the f-table. For g(f(1)): first look up 1 in the f-table, then use that result in the g-table.</Strategy>
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
      <svg width="100%" height="120" viewBox="0 0 360 120" style={{marginBottom:14}}><text x="180" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">Graph of f(x)</text><line x1="30" y1="100" x2="340" y2="100" stroke="#94a3b8" strokeWidth="1"/><line x1="185" y1="15" x2="185" y2="100" stroke="#94a3b8" strokeWidth="1"/>{[[-5,2],[-3,4],[3,2],[4,4]].map(([x,y],i)=><><circle key={`p${i}`} cx={185+x*28} cy={100-y*18} r="3.5" fill="#1e293b"/><text key={`t${i}`} x={185+x*28} y={100-y*18-8} textAnchor="middle" fontSize="8" fill="#64748b">({x},{y})</text></>)}<path d="M 45 64 L 101 28 L 269 64 L 297 28" stroke="#1e293b" strokeWidth="2" fill="none"/>{[-5,-4,-3,-2,-1,0,1,2,3,4].map(x=><text key={x} x={185+x*28} y="112" textAnchor="middle" fontSize="8" fill="#94a3b8">{x}</text>)}</svg>
      <Strategy>This combines a graph (for f) with an equation (for g). Still work inside out. For f(g(2)): evaluate g(2) = 3 using the equation, then read f(3) from the graph. For g(f(-3)): read f(-3) from the graph, then plug into g(x) = x+1.</Strategy>
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
      <Tp>When mixing representations (graph + equation, table + equation), always identify which function is inner and which tool you use to evaluate it.</Tp>
    </div>},
  ]},
  { id:"2.8", name:"Inverse Functions", slides:[
    { title:"Concept — Inverse Functions", content:<div>
      <Fm label="Definition">An inverse function REVERSES the mapping: if f(a) = b, then f⁻¹(b) = a</Fm>
      <Accordion title="When Does a Function Have an Inverse?" defaultOpen={true}>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Sm>
        A function is <B>invertible</B> (has an inverse) if and only if it is <B>one-to-one</B>:<br/>
        each output value comes from exactly ONE input value.<br/><br/>
        <B>Why is one-to-one required?</B> Think of it this way: an inverse is supposed to take an output and tell you which input produced it. If f(2) = 9 AND f(-2) = 9, then when the inverse is asked "what input gives 9?" it has two answers — and a function can only give ONE answer. The inverse would not know whether to return 2 or -2, so it simply cannot exist as a function. This is exactly what x² does: both 3 and -3 give 9, which is why x² needs a domain restriction (like x &gt;= 0) before it can have an inverse.<br/><br/>
        <B>Horizontal Line Test:</B> if any horizontal line crosses the graph more than once, the function is NOT one-to-one and does NOT have an inverse (unless you restrict the domain).
      </Sm></Box>
      </Accordion>
      <Accordion title="Notation & Properties">
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Sm>
        • <B c="#be185d">Notation:</B> f⁻¹(x) means "the inverse of f" (NOT 1/f(x)!)<br/>
        • <B c="#be185d">Composition check:</B> f(f⁻¹(x)) = x AND f⁻¹(f(x)) = x<br/>
        • <B c="#be185d">Domain/Range swap:</B> Domain of f = Range of f⁻¹ and vice versa<br/>
        • <B c="#be185d">Graphically:</B> f and f⁻¹ are reflections over the line y = x
      </Sm></Box>
      </Accordion>
      <Accordion title="How to Find f⁻¹(x) Algebraically (4 Steps)">
      <Box bg="#ecfdf5" border="2px solid #86efac"><Sm>
        <B c="#166534">Step 1:</B> Write y = f(x)<br/>
        <B c="#166534">Step 2:</B> Swap x and y (replace every x with y and every y with x)<br/>
        <B c="#166534">Step 3:</B> Solve for y<br/>
        <B c="#166534">Step 4:</B> Write f⁻¹(x) = your answer
      </Sm></Box>
      </Accordion>
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
      <Strategy>To find the inverse algebraically: (1) write y = 2x squared + 1, (2) swap x and y, (3) solve for y. The domain restriction x {"≥"} 0 is crucial because it tells us to take the positive square root only. Without it, the function would not be one-to-one and the inverse would not exist as a function.</Strategy>
      <FmUsed>Swap x and y, then solve for y</FmUsed>
      <WB>
        <MathLine size={14}>y = 2x² + 1</MathLine>
        <Arrow text="Step 1: Swap x and y"/>
        <MathLine size={14}>x = 2y² + 1<Annotate>every x becomes y and every y becomes x</Annotate></MathLine>
        <Arrow text="Step 2: Isolate y² by undoing operations"/>
        <MathLine size={14}>x − 1 = 2y²<Annotate>subtract 1 from both sides</Annotate></MathLine>
        <MathLine size={14}>(x−1)/2 = y²<Annotate>divide both sides by 2</Annotate></MathLine>
        <Arrow text="Step 3: Take square root — choose positive root because of domain restriction"/>
        <MathLine size={14}>y = √((x−1)/2)<Annotate>positive root since original domain x ≥ 0</Annotate></MathLine>
        <Ans>f⁻¹(x) = √((x−1)/2) for x ≥ 1</Ans>
      </WB>
      <W>Without the restriction x {"≥"} 0, this function is NOT one-to-one. The domain restriction makes the inverse possible.</W>
      <Tp>The domain of the inverse (x {"≥"} 1) equals the range of the original. Since f(0) = 1 is the minimum, the inverse starts at x = 1.</Tp>
    </div>},
    { title:"Example — Finding Inverse of Rational Function", content:<div>
      <Q>Find the inverse of g(x) = 2x/(x+1), x ≠ −1.</Q>
      <Strategy>We swap x and y, then solve for y. With rational functions, y appears in multiple places after swapping. We multiply both sides by (y+1) to clear the denominator, collect all y-terms on one side, factor out y, and divide.</Strategy>
      <WB>
        <MathLine size={14}>y = 2x/(x+1)</MathLine>
        <Arrow text="Step 1: Swap x and y"/>
        <MathLine size={14}>x = 2y/(y+1)<Annotate>x and y swapped</Annotate></MathLine>
        <Arrow text="Step 2: Multiply both sides by (y+1) to clear the denominator"/>
        <MathLine size={14}>x(y+1) = 2y → xy + x = 2y<Annotate>distribute x on the left</Annotate></MathLine>
        <Arrow text="Step 3: Collect all y terms on one side, constants on the other"/>
        <MathLine size={14}>xy − 2y = −x → y(x−2) = −x<Annotate>factor out y</Annotate></MathLine>
        <Arrow text="Step 4: Divide to isolate y"/>
        <MathLine size={14}>y = −x/(x−2) = <MathBox color="#22c55e">x/(2−x)</MathBox><Annotate>multiply numerator and denominator by −1 to simplify</Annotate></MathLine>
        <Ans>g⁻¹(x) = x/(2−x), x ≠ 2</Ans>
      </WB>
      <W>When solving for y in a rational inverse, collect ALL y-terms on one side before factoring. If y appears in two separate places, you must rearrange to get them together first.</W>
      <Tp>The excluded value x = 2 in the inverse corresponds to the horizontal asymptote of the original function. The HA of g becomes the VA of the inverse.</Tp>
    </div>},
    { title:"Example — Verifying Inverses by Composition", content:<div>
      <Q>f(x) = (2x+1)/3 and g(x) = (3x−1)/2. Show f and g are inverses.</Q>
      <Strategy>To verify two functions are inverses, compute BOTH compositions: f(g(x)) and g(f(x)). If both simplify to just x, the functions are inverses. We must check both directions for a complete proof.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>f(g(x)):</b></MathLine>
        <Arrow text="Plug g(x) = (3x−1)/2 into f, replacing every x in f with (3x−1)/2"/>
        <MathLine size={14}>f((3x−1)/2) = (2·(3x−1)/2 + 1)/3<Annotate>substitute g into f's formula</Annotate></MathLine>
        <Arrow text="Simplify: the 2 in numerator and 2 in denominator cancel"/>
        <MathLine size={14}>= ((3x−1) + 1)/3 = 3x/3 = <MathBox color="#22c55e">x</MathBox> ✓<Annotate>−1 and +1 cancel, then 3x/3 = x</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>g(f(x)):</b></MathLine>
        <Arrow text="Plug f(x) = (2x+1)/3 into g, replacing every x in g with (2x+1)/3"/>
        <MathLine size={14}>g((2x+1)/3) = (3·(2x+1)/3 − 1)/2<Annotate>substitute f into g's formula</Annotate></MathLine>
        <Arrow text="Simplify: the 3 in numerator and 3 in denominator cancel"/>
        <MathLine size={14}>= ((2x+1) − 1)/2 = 2x/2 = <MathBox color="#22c55e">x</MathBox> ✓<Annotate>+1 and −1 cancel, then 2x/2 = x</Annotate></MathLine>
        <Ans>Both compositions = x → f and g are inverses ✓</Ans>
      </WB>
      <Tp>On the AP exam, you MUST show BOTH directions (f(g(x)) = x AND g(f(x)) = x) for full credit. Showing only one direction is not a complete proof — it is possible for one direction to work but not the other if the domains don't match up.</Tp>
      <W>Do not confuse "verifying inverses" with "finding an inverse." To verify, you compose both ways and check for x. To find, you swap x and y and solve. They are different tasks!</W>
    </div>},
    { title:"Example — Inverse from Table & Graph", content:<div>
      <Q>Given the table for f(x), write a complete table of values for f⁻¹(x). Explain the relationship between f and f⁻¹.</Q>
      <Strategy>Finding an inverse from a table is straightforward: swap every (input, output) pair. Each (a, b) becomes (b, a). The outputs of f become the inputs of the inverse, and vice versa. Then verify the table is still a function (each input maps to exactly one output).</Strategy>
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
        Here is the key insight: <B>a logarithm is asking a question</B>. Every time you see log_b(c), read it as: "b to the WHAT gives me c?" The log is the answer to that question — it is the missing exponent. Think of it like a detective: exponentiation takes a base and an exponent and produces a result. The logarithm knows the base and the result, and its job is to figure out the exponent. That is ALL a log does — it finds the exponent.<br/><br/>
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
      <Strategy>Converting between forms is just repositioning three numbers: base, exponent, and result. In exponential form b to the a = c, the base stays the base in log form, the result goes inside the log, and the exponent becomes the answer. No computation needed.</Strategy>
      <Wh>Exponential and logarithmic forms say the SAME thing using different arrangements. bᵃ = c answers "what do I get when I raise b to power a?" while log_b(c) = a answers "what power of b gives me c?" Converting between them is just rearranging three numbers — no computation needed.</Wh>
      <FmUsed>bᵃ = c ↔ log_b(c) = a — the base stays the base, the exponent becomes the answer</FmUsed>
      <WB>
        <Arrow text="Part 1: Exponential → Logarithmic (3⁴ = 81)"/>
        <MathLine size={14}>Start: <MathBox color="#6366f1">3</MathBox>⁴ = 81<Annotate>base = 3, exponent = 4, result = 81</Annotate></MathLine>
        <MathLine size={14}>The base (3) stays the base of the log<Annotate>log₃(...)</Annotate></MathLine>
        <MathLine size={14}>The result (81) goes inside the log<Annotate>log₃(81)</Annotate></MathLine>
        <MathLine size={14}>The exponent (4) becomes the answer<Annotate>log₃(81) = 4</Annotate></MathLine>
        <Ans>log₃(81) = 4</Ans>
        <MathLine size={14} color="#888">Read: "3 to what power = 81? Answer: 4"<Annotate color="#22c55e">the log IS the missing exponent</Annotate></MathLine>
        <Arrow text="Part 2: Logarithmic → Exponential (log₇(49) = 2)"/>
        <MathLine size={14}>Start: log₇(49) = 2<Annotate>base = 7, inside = 49, answer = 2</Annotate></MathLine>
        <Arrow text="Move each part to its exponential position"/>
        <MathLine size={14}>The base (7) stays the base<Annotate>7^...</Annotate></MathLine>
        <MathLine size={14}>The answer (2) becomes the exponent<Annotate>7²</Annotate></MathLine>
        <MathLine size={14}>The inside (49) becomes the result<Annotate>7² = 49</Annotate></MathLine>
        <Ans>7² = 49</Ans>
        <MathLine size={14} color="#888">Verify: 7 × 7 = 49 ✓<Annotate color="#22c55e">confirms the conversion</Annotate></MathLine>
      </WB>
      <Tp>Think: "log base b of c equals a" is just another way of saying "b to the a equals c." The log IS the exponent. If stuck on the AP exam, convert to exponential form — it often makes the answer obvious.</Tp>
      <W>Students sometimes swap which number goes inside the log vs. becomes the answer. The RESULT of exponentiation (the bigger number, like 81) goes INSIDE the log. The exponent (the smaller number, like 4) comes OUT as the answer.</W>
    </div>},
    { title:"Example — Evaluating Logarithms (No Calculator)", content:<div>
      <Q>Find each logarithm without technology.</Q>
      <Strategy>For each log, ask: "the base to WHAT power gives me this number?" We need to recognize common powers: 5 cubed = 125, 8 to the 1/3 = 2, 10 to the 4th = 10000, etc. If the answer is a fraction (like log base 8 of 2), think about which root of 8 gives 2.</Strategy>
      <WB>
        <Arrow text="For each: rephrase as 'base to WHAT power = this number?'"/>
        <MathLine size={14}>log₅(125) = ?<Annotate>Ask: 5 to what power = 125?</Annotate></MathLine>
        <MathLine size={14}>5³ = 125, so log₅(125) = <MathBox color="#22c55e">3</MathBox><Annotate>5 × 5 × 5 = 125</Annotate></MathLine>
        <MathLine size={14}>log₈(2) = ?<Annotate>Ask: 8 to what power = 2?</Annotate></MathLine>
        <Arrow text="Since 2 is the cube root of 8, the exponent is 1/3"/>
        <MathLine size={14}>8^(1/3) = 2, so log₈(2) = <MathBox color="#22c55e">1/3</MathBox><Annotate>cube root of 8 = 2</Annotate></MathLine>
        <MathLine size={14}>log(10000) = ?<Annotate>base 10: 10 to what power = 10000?</Annotate></MathLine>
        <MathLine size={14}>10⁴ = 10000, so log(10000) = <MathBox color="#22c55e">4</MathBox><Annotate>count the zeros: 4 zeros</Annotate></MathLine>
        <MathLine size={14}>log(1/100) = ?<Annotate>1/100 = 10⁻²</Annotate></MathLine>
        <MathLine size={14}>10⁻² = 1/100, so log(1/100) = <MathBox color="#22c55e">−2</MathBox></MathLine>
      </WB>
      <Tp>For logs without a base written, the base is 10 (common log). For ln, the base is e.</Tp>
    </div>},
    { title:"Example — Evaluating Logarithms (With Calculator)", content:<div>
      <Q>Use technology to evaluate each logarithm.</Q>
      <Strategy>When the answer is not a nice integer, use a calculator. For logs with non-standard bases, apply the change of base formula: log base b of x = log(x)/log(b). Most calculators also have a logBASE function.</Strategy>
      <WB>
        <Arrow text="Use change of base or calculator's logBASE function"/>
        <MathLine size={14}>log₅(27) = log(27)/log(5) = <MathBox color="#22c55e">2.048</MathBox><Annotate>between 2 and 3 since 5² = 25 and 5³ = 125</Annotate></MathLine>
        <MathLine size={14}>log₈(5) = log(5)/log(8) = <MathBox color="#22c55e">0.774</MathBox><Annotate>less than 1 since 5 {"<"} 8¹</Annotate></MathLine>
        <MathLine size={14}>log(110) = <MathBox color="#22c55e">2.041</MathBox><Annotate>just above 2 since 10² = 100</Annotate></MathLine>
        <MathLine size={14}>log(5.4) = <MathBox color="#22c55e">0.732</MathBox><Annotate>between 0 and 1 since 1 {"<"} 5.4 {"<"} 10</Annotate></MathLine>
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
      <Strategy>Since log base 2 is the inverse of 2 to the x, we build its table by swapping x and y values from the exponential table. Every point (a, b) on 2 to the x becomes (b, a) on log base 2 of x. This reinforces the inverse relationship visually.</Strategy>
      <WB>
        <Arrow text="Every point (a, b) on 2ˣ becomes (b, a) on log₂(x)"/>
        <MathLine size={14} color="#4338ca"><b>Swap the x and y values from 2ˣ:</b></MathLine>
      </WB>
      <Tb h={["x","1/4","1/2","1","2","4","8"]} r={[["f(x) = log₂(x)","−2","−1","0","1","2","3"]]}/>
      <WB>
        <Arrow text="Two key reference points to memorize for ANY log base"/>
        <MathLine size={14}>Key point: log_b(1) = <MathBox color="#6366f1">0</MathBox> always<Annotate>b⁰ = 1 for any base — the x-intercept is always at (1, 0)</Annotate></MathLine>
        <MathLine size={14}>Key point: log_b(b) = <MathBox color="#6366f1">1</MathBox> always<Annotate>b¹ = b — the point (b, 1) is always on the graph</Annotate></MathLine>
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
      <Strategy>For each function, check two things: the sign of coefficient a, and whether base b is greater than 1 or between 0 and 1. The VA is always at x = 0 for basic log functions. Positive a with b greater than 1 gives the standard increasing log shape.</Strategy>
      <FmUsed>Check sign of a and base b → use the end behavior table</FmUsed>
      <WB>
        <Arrow text="Standard case: positive a, base greater than 1 → increasing log"/>
        <MathLine size={14} color="#4338ca"><b>f(x) = 4·log₅(x)</b> (a{">"}0, b{">"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#ef4444">−∞</MathBox> · lim(x→∞) = <MathBox color="#22c55e">∞</MathBox><Annotate>standard increasing log shape</Annotate></MathLine>
        <Arrow text="Negative a flips the graph over the x-axis"/>
        <MathLine size={14} color="#4338ca"><b>g(x) = −2·log₃(x)</b> (a{"<"}0, b{">"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#22c55e">∞</MathBox> · lim(x→∞) = <MathBox color="#ef4444">−∞</MathBox><Annotate>reflected over x-axis: limits swap signs</Annotate></MathLine>
        <Arrow text="Base between 0 and 1 reverses the direction of the log"/>
        <MathLine size={14} color="#4338ca"><b>h(x) = 3·log_(1/2)(x)</b> (a{">"}0, 0{"<"}b{"<"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#22c55e">∞</MathBox> · lim(x→∞) = <MathBox color="#ef4444">−∞</MathBox><Annotate>decreasing log: small base flips direction</Annotate></MathLine>
        <Arrow text="Both negative a AND small base: double flip = same as standard"/>
        <MathLine size={14} color="#4338ca"><b>k(x) = −2·log_(1/4)(x)</b> (a{"<"}0, 0{"<"}b{"<"}1)</MathLine>
        <MathLine size={14}>lim(x→0⁺) = <MathBox color="#ef4444">−∞</MathBox> · lim(x→∞) = <MathBox color="#22c55e">∞</MathBox><Annotate>two reflections cancel out</Annotate></MathLine>
      </WB>
      <Tp>Quick pattern: for b {">"} 1 and a {">"} 0 (standard case), the log goes to −∞ near the VA (x → 0⁺) and to +∞ as x → ∞. Flipping a (negative a) or flipping b (0 {"<"} b {"<"} 1) reverses the directions.</Tp>
      <W>Unlike exponentials which have a HORIZONTAL asymptote, log functions have a VERTICAL asymptote at x = 0. Do not mix these up — the asymptote switches orientation because the axes swap when you take an inverse.</W>
    </div>},
    { title:"Example — Graphing Log Functions", content:<div>
      <Q>Sketch f(x) = 2·log₃(x). State properties.</Q>
      <Strategy>To sketch a log function, evaluate at three key x-values: x = 1/b (gives -a), x = 1 (always gives 0), and x = b (gives a). Since a = 2 is positive and b = 3 is greater than 1, the graph increases and is concave down with VA at x = 0.</Strategy>
      <WB>
        <Arrow text="Evaluate at x = 1/b, x = 1, and x = b for the three key points"/>
        <MathLine size={14}>f(1/3) = 2·log₃(1/3) = 2·(−1) = <MathBox color="#6366f1">−2</MathBox><Annotate>log₃(1/3) = −1 because 3⁻¹ = 1/3</Annotate></MathLine>
        <MathLine size={14}>f(1) = 2·log₃(1) = 2·0 = <MathBox color="#6366f1">0</MathBox><Annotate>x-intercept: log of 1 is always 0</Annotate></MathLine>
        <MathLine size={14}>f(3) = 2·log₃(3) = 2·1 = <MathBox color="#6366f1">2</MathBox><Annotate>log₃(3) = 1 because 3¹ = 3</Annotate></MathLine>
        <Arrow text="Determine shape from a and b"/>
        <MathLine size={14}>Always <MathBox color="#22c55e">increasing</MathBox>, concave <MathBox color="#ef4444">down</MathBox><Annotate>a {">"} 0 and b {">"} 1 → increasing, concave down</Annotate></MathLine>
        <MathLine size={14}>Domain: (0,∞), Range: all reals, VA: x = 0<Annotate>log is only defined for positive inputs</Annotate></MathLine>
      </WB>
      <W>Students often forget that log functions are ALWAYS concave down (for b {">"} 1, a {">"} 0). Even though the function is increasing, it bends downward — the rate of increase slows as x gets larger. This is the opposite of exponentials, which are concave up.</W>
      <Tp>To sketch any log function quickly: plot three key points — f(1/b), f(1), f(b). The x-intercept is ALWAYS at x = 1 because log_b(1) = 0 for any base. Then draw the curve approaching the VA at x = 0.</Tp>
    </div>},
  ]},
  { id:"2.12", name:"Logarithmic Function Manipulation", slides:[
    { title:"Concept — Log Properties (Product, Quotient, Power, Change of Base)", content:<div>
      <Sm>Here is the secret that makes all log properties click: since a logarithm IS an exponent, log properties are just exponent rules wearing a different outfit. Every single property below comes directly from a rule you already know about exponents.</Sm>
      <Accordion title="The Four Log Properties" defaultOpen={true}>
      <Fm label="Product Property">log_b(xy) = log_b(x) + log_b(y) — log of a product = SUM of logs</Fm>
      <Fm label="Quotient Property">log_b(x/y) = log_b(x) − log_b(y) — log of a quotient = DIFFERENCE of logs</Fm>
      <Fm label="Power Property">log_b(xⁿ) = n·log_b(x) — exponent comes DOWN as a multiplier</Fm>
      <Fm label="Change of Base">log_b(x) = log_a(x) / log_a(b) — convert to ANY base you want</Fm>
      <Wh>These four properties are the ONLY tools you need for ALL log manipulation on the AP exam. Product and quotient let you combine or split logs. Power lets you move exponents in and out. Change of base lets you convert between any bases. Master these four and you can handle any log problem.</Wh>
      </Accordion>
      <Accordion title="Key Equivalences for Graphs">
      <Box bg="#ecfdf5" border="2px solid #86efac"><Sm>
        • <B c="#166534">Horizontal dilation of log = vertical translation:</B> log₂(8x) = log₂(8) + log₂(x) = 3 + log₂(x)<br/>
        • <B c="#166534">Power input = vertical dilation:</B> log₂(x²) = 2·log₂(x)<br/>
        • <B c="#166534">All log functions are vertical dilations of each other</B> (change of base proves it)
      </Sm></Box>
      </Accordion>
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
      <Strategy>Combining logs means using product/quotient properties in reverse: addition outside becomes multiplication inside, subtraction becomes division. Expanding is the opposite: products inside split into sums outside. Coefficients move up as exponents via the power property.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Combine into single log:</b></MathLine>
        <Arrow text="Product property: add logs → multiply inside"/>
        <MathLine size={14}>log₂(4) + log₂(8) = log₂(4·8) = log₂(32) = <MathBox color="#22c55e">5</MathBox><Annotate>2⁵ = 32</Annotate></MathLine>
        <MathLine size={14}>log₂(3) + log₂(x) = <MathBox color="#22c55e">log₂(3x)</MathBox><Annotate>add outside = multiply inside</Annotate></MathLine>
        <Arrow text="Subtraction uses quotient property: subtract logs → divide inside"/>
        <MathLine size={14}>log₂(x) + log₂(y) − log₂(z) = <MathBox color="#22c55e">log₂(xy/z)</MathBox><Annotate>x·y in numerator, z in denominator</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Expand into sum/difference:</b></MathLine>
        <Arrow text="Product property in reverse: product inside → sum outside"/>
        <MathLine size={14}>log₅(4x) = log₅(4) + log₅(x)<Annotate>split the product into two logs</Annotate></MathLine>
        <MathLine size={14}>log₇(4/x) = log₇(4) − log₇(x)<Annotate>quotient inside → subtraction outside</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Power property:</b></MathLine>
        <Arrow text="Exponent inside the log comes down as a coefficient"/>
        <MathLine size={14}>log₅(x³) = <MathBox color="#22c55e">3·log₅(x)</MathBox><Annotate>exponent 3 moves to the front</Annotate></MathLine>
        <Arrow text="Coefficient outside goes up as an exponent (reverse direction)"/>
        <MathLine size={14}>5·log(y) = <MathBox color="#22c55e">log(y⁵)</MathBox><Annotate>coefficient 5 moves up as exponent</Annotate></MathLine>
      </WB>
      <W>The most common mistake: log(x + y) ≠ log(x) + log(y)! There is NO property for the log of a SUM. The product property says log(x·y) = log(x) + log(y) — the addition is OUTSIDE the log, and the multiplication is INSIDE. Students who try to "distribute" the log over addition will get wrong answers every time.</W>
      <Tp>Direction matters: combining logs (adding outside → multiplying inside) is useful for solving equations. Expanding logs (splitting a product/quotient into separate logs) is useful for simplification and for the power property. Know when to use each direction!</Tp>
    </div>},
    { title:"Example — Change of Base & Relationship Between Logs", content:<div>
      <Q>Change base. Describe relationship between f(x) = log₅(x) and g(x) = log₁₂₅(x).</Q>
      <Strategy>We use the change of base formula to rewrite log base 125 in terms of log base 5. Since 125 = 5 cubed, log base 5 of 125 = 3, so g(x) = f(x)/3 = (1/3) times f(x). This reveals that all log functions with related bases are just vertical dilations of each other.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Change to base 10:</b></MathLine>
        <Arrow text="Apply change of base: log_b(x) = log(x)/log(b)"/>
        <MathLine size={14}>log₃(x) = log(x)/log(3)<Annotate>numerator: log of the argument, denominator: log of the base</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Change to base 2:</b></MathLine>
        <Arrow text="Same formula but using base 2 logs"/>
        <MathLine size={14}>log₃(8) = log₂(8)/log₂(3) = 3/log₂(3)<Annotate>log₂(8) = 3 because 2³ = 8</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Relationship:</b></MathLine>
        <Arrow text="Use change of base to express g in terms of f"/>
        <MathLine size={14}>g(x) = log₁₂₅(x) = log₅(x)/log₅(125) = log₅(x)/3<Annotate>log₅(125) = 3 because 5³ = 125</Annotate></MathLine>
        <Ans>g(x) = (1/3)·f(x) — vertical dilation by 1/3!</Ans>
      </WB>
      <Tp>All log functions are vertical dilations of each other. Change of base proves it!</Tp>
    </div>},
  ]},
  { id:"2.13", name:"Exponential & Logarithmic Equations & Inequalities", slides:[
    { title:"Concept — Solving Strategies", content:<div>
      <Accordion title="Solving Exponential Equations (3 Methods)" defaultOpen={true}>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Sm>
        <B>Method 1 — Same Base:</B> Get both sides to the same base, then set exponents equal.<br/>
        Example: 2⁽ˣ⁺¹⁾ = 8 → 2⁽ˣ⁺¹⁾ = 2³ → x+1 = 3 → x = 2<br/><br/>
        <B>Method 2 — Take a Log:</B> When you can't match bases, take log of both sides.<br/>
        Example: 3ˣ = 20 → x = log₃(20) ≈ 2.727<br/><br/>
        <B>Method 3 — Substitution:</B> For equations like e²ˣ + eˣ − 6 = 0, let u = eˣ to get a quadratic: u² + u − 6 = 0.<br/><br/>
        <B>Key identity:</B> bˣ = c^((log_c b)·x) — lets you rewrite any base in terms of another.
      </Sm></Box>
      <Wh>How do you choose which method? If you can recognize both sides as powers of the same base (like 8 = 2³), use Method 1 — it is the fastest. If the numbers do not share a common base, use Method 2 — take log of both sides. If the equation looks like a polynomial in eˣ or bˣ, use Method 3 — substitution to create a quadratic.</Wh>
      </Accordion>
      <Accordion title="Solving Logarithmic Equations (3 Methods)">
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Sm>
        <B>Method 1 — Convert to Exponential:</B> log_b(x) = a → bᵃ = x<br/>
        Example: log₂(x) = 5 → x = 2⁵ = 32<br/><br/>
        <B>Method 2 — Combine Logs:</B> Use product/quotient properties to combine into one log, then convert.<br/>
        Example: log(x) + log(3) = 2 → log(3x) = 2 → 3x = 100 → x = 100/3<br/><br/>
        <B>Method 3 — If log_b(A) = log_b(B), then A = B</B>
      </Sm></Box>
      <Wh>The key decision: how many log terms are there? If one log = a number, use Method 1 (convert to exponential). If multiple logs on one side, use Method 2 (combine first, then convert). If log = log on both sides with the same base, use Method 3 (set arguments equal).</Wh>
      </Accordion>
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
      <Strategy>Three different methods for three types: (a) isolate the exponential, match bases, set exponents equal. (b) Convert both sides to the same base using change-of-base identity, then equate exponents. (c) Substitution: let u = e to the x to create a quadratic, solve for u, then solve for x. Always check for extraneous solutions.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> 3·2⁽ˣ⁺¹⁾ = 24</MathLine>
        <Arrow text="Isolate the exponential, then match bases"/>
        <MathLine size={14}>2⁽ˣ⁺¹⁾ = 8 = 2³<Annotate>divide by 3, recognize 8 = 2³</Annotate></MathLine>
        <Arrow text="Same base → set exponents equal"/>
        <MathLine size={14}>x + 1 = 3 → <MathBox>x = 2</MathBox><Annotate>subtract 1 from both sides</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> 4⁽⁵ˣ⁻³⁾ = 3^(log₃16·x) = 16ˣ = 4²ˣ</MathLine>
        <Arrow text="Both sides now have base 4 → set exponents equal"/>
        <MathLine size={14}>5x−3 = 2x → 3x = 3 → <MathBox>x = 1</MathBox><Annotate>subtract 2x, then divide by 3</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>c)</b> Let u = eˣ: u² + u − 6 = 0</MathLine>
        <Arrow text="Substitution turns this into a factorable quadratic"/>
        <MathLine size={14}>(eˣ + 3)(eˣ − 2) = 0<Annotate>factor: what two numbers multiply to −6 and add to 1?</Annotate></MathLine>
        <Arrow text="Set each factor to zero and check feasibility"/>
        <MathLine size={14}>eˣ = −3 (impossible!) or eˣ = 2 → <MathBox>x = ln(2)</MathBox><Annotate>eˣ is always positive, so −3 is rejected</Annotate></MathLine>
      </WB>
      <W>eˣ is ALWAYS positive! So eˣ = −3 has no solution. Always check!</W>
    </div>},
    { title:"Example — Solving Logarithmic Equations", content:<div>
      <Q>Solve: a) log(x) + log(2) = 1  b) log₃(2x + 1) − log₃(x − 1) = log₃(5). Check for extraneous solutions.</Q>
      <Strategy>For (a), combine logs using the product property, then convert to exponential form. For (b), combine using the quotient property, then since both sides are log base 3, set the arguments equal. Always check that answers do not make any log argument negative or zero.</Strategy>
      <FmUsed>Product property: log(a) + log(b) = log(ab) · Quotient: log(a) − log(b) = log(a/b)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>a)</b> log(x) + log(2) = 1</MathLine>
        <Arrow text="Product property: add logs = log of product"/>
        <MathLine size={14}>log(2x) = 1<Annotate>log(x) + log(2) = log(x·2) = log(2x)</Annotate></MathLine>
        <Arrow text="Convert to exponential form: log(2x) = 1 means 10¹ = 2x"/>
        <MathLine size={14}>10¹ = 2x → <MathBox>x = 5</MathBox><Annotate>divide both sides by 2</Annotate></MathLine>
        <MathLine size={14}>Check: log(5) + log(2) = log(10) = 1 ✓<Annotate color="#22c55e">both log arguments positive ✓</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>b)</b> log₃(2x+1) − log₃(x−1) = log₃(5)</MathLine>
        <Arrow text="Quotient property: subtract logs = log of quotient"/>
        <MathLine size={14}>log₃((2x+1)/(x−1)) = log₃(5)<Annotate>log(a) − log(b) = log(a/b)</Annotate></MathLine>
        <Arrow text="Same base logs equal → arguments equal"/>
        <MathLine size={14}>(2x+1)/(x−1) = 5 → 2x+1 = 5x−5 → 6 = 3x</MathLine>
        <MathLine size={14}><MathBox>x = 2</MathBox> · Check: x−1 = 1 {">"} 0 ✓ (no extraneous solutions)</MathLine>
      </WB>
      <W>ALWAYS check your answers in the ORIGINAL equation! For log equations, verify that every argument is positive. If x = 2, then (2x+1) = 5 {">"} 0 ✓ and (x−1) = 1 {">"} 0 ✓. If a solution makes any log argument negative or zero, it is extraneous and must be thrown out.</W>
      <Tp>For part (a), once you combine to a single log, convert to exponential form: log(2x) = 1 means 10¹ = 2x. For part (b), if both sides are log-base-same, just set the arguments equal — much faster than converting to exponential.</Tp>
    </div>},
    { title:"Example — Constructing Inverses of Exp & Log Functions", content:<div>
      <Q>Find the inverse of f(x) = 3·5⁽ˣ⁺¹⁾ − 4.</Q>
      <Strategy>To invert an exponential, swap x and y, then undo each operation in reverse order: add 4, divide by 3, take log base 5, subtract 1. The inverse of an exponential is always a logarithm. Think of "unwrapping" the function layer by layer.</Strategy>
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
      <Strategy>Look for the log signature pattern: inputs that multiply by the same factor while outputs increase by equal amounts. The input multiplier gives us the base (2), and the output increment gives us the coefficient a (3). Then verify with the table values.</Strategy>
      <Tb h={["x","1","2","4","8","16"]} r={[["f(x)","0","3","6","9","12"]]}/>
      <WB>
        <Arrow text="Step 1: Check output pattern — are they equally spaced?"/>
        <MathLine size={14}>Outputs increase by 3 each time (equal intervals)<Annotate>0,3,6,9,12 → differences are all 3</Annotate></MathLine>
        <Arrow text="Step 2: Check input pattern — are they proportional?"/>
        <MathLine size={14}>Inputs are proportional: ×2 each time<Annotate>1,2,4,8,16 → ratios are all 2</Annotate></MathLine>
        <Arrow text="Step 3: Equal output spacing + proportional inputs = logarithmic"/>
        <MathLine size={14}>a = 3 (output change per interval), base = 2 (input multiplier)<Annotate>coefficient = output step, base = input ratio</Annotate></MathLine>
        <Ans>f(x) = 3·log₂(x)</Ans>
      </WB>
      <Wh>The "log signature" in a table: outputs go up by equal amounts (here +3) while inputs multiply by the same factor (here ×2). This is the REVERSE of exponential's signature (inputs go up equally, outputs multiply). If you see this reverse pattern, the data is logarithmic.</Wh>
      <Tp>On the AP exam, if a table has proportional inputs and equally spaced outputs, immediately recognize it as logarithmic. The input multiplier is the base, and the output spacing is the coefficient a.</Tp>
    </div>},
    { title:"Example — Applying Log Models (Bacteria Inverse)", content:<div>
      <Q>800 bacteria double daily. Write f(b) for time in days given population b. When does it reach 20,000?</Q>
      <Strategy>Start with the exponential model b = 800 times 2 to the t, then solve for t to get the inverse. Divide by 800 first, then take log base 2. This gives a function where we input a population and get back the time. Then plug in 20,000.</Strategy>
      <FmUsed>Exponential: b = 800·2ᵗ → Inverse: t = log₂(b/800)</FmUsed>
      <WB>
        <MathLine size={14}>Exponential model: b = 800·2ᵗ</MathLine>
        <Arrow text="Reverse operations to solve for t"/>
        <MathLine size={14}>b/800 = 2ᵗ → t = log₂(b/800)</MathLine>
        <Ans>f(b) = log₂(b/800) days</Ans>
        <MathLine size={14} color="#4338ca"><b>When b = 20,000:</b></MathLine>
        <MathLine size={14}>f(20000) = log₂(20000/800) = log₂(25) ≈ <MathBox>4.644 days</MathBox></MathLine>
      </WB>
      <W>When computing log₂(25), you need change of base: log₂(25) = log(25)/log(2) ≈ 1.398/0.301 ≈ 4.644. Do NOT try to estimate logs in your head on the AP exam — use the calculator and change of base formula.</W>
      <Tp>Log models are perfect for answering "when does it reach ___?" questions. Exponential tells you "how much at time t." Its inverse (the log) tells you "what time for amount b." Same relationship, opposite directions.</Tp>
    </div>},
    { title:"Example — Continuous Growth Inverse (Natural Log)", content:<div>
      <Q>An app's downloads follow D(t) = 50·e^(0.3t) where t is months. Write the inverse t(D) that gives time from downloads. How many months to reach 10,000 downloads?</Q>
      <Strategy>To find the inverse of an exponential with base e: isolate the exponential term (divide by 50), take ln of both sides to bring down the exponent, then solve for t by dividing by the coefficient 0.3. The inverse of e to the x is ln(x).</Strategy>
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
      <Strategy>Evaluate f(x) at each x-value to fill the table. Then to find the semi-log linear model, take log of both sides: log(f) = log(2) + x times log(7). This has the form y = mx + c where m = log(7) and c = log(2).</Strategy>
      <Tb h={["x","0","1","2","3","4"]} r={[["f(x)","2","14","98","686","4802"]]}/>
      <WB>
        <MathLine size={14}>f(0)=2·7⁰=2, f(1)=2·7¹=14, f(2)=2·7²=98</MathLine>
        <MathLine size={14}>f(3)=2·7³=686, f(4)=2·7⁴=4802</MathLine>
        <MathLine size={14} color="#4338ca"><b>Points on semi-log plot are LINEAR ✓</b></MathLine>
        <Ans>y = (log 7)x + log 2 ≈ 0.845x + 0.301</Ans>
      </WB>
      <Wh>When we take the log of both sides of f(x) = 2·7ˣ, we transform the curved exponential into a straight line. The slope of that line (log 7 ≈ 0.845) encodes the base, and the y-intercept (log 2 ≈ 0.301) encodes the initial value. This is why semi-log plots are so powerful: they make exponential relationships visible as simple straight lines.</Wh>
      <Tp>To recover the original exponential from a semi-log line y = mx + c: the base is b = 10^m and the initial value is a = 10^c. Here b = 10^0.845 ≈ 7 and a = 10^0.301 ≈ 2.</Tp>
    </div>},
    { title:"Example — Is Exponential Appropriate?", content:<div>
      <Q>Plot the data on a semi-log plot. Is an exponential model appropriate for this data?</Q>
      <Strategy>Take the log of each output and plot against x. If the log-values form a straight line, the data is exponential. Check by computing differences between consecutive log values: if roughly constant, the points are collinear and exponential fits.</Strategy>
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
      <Strategy>From the two points, the population doubles (100 to 200) over 5 days, so the base for a 5-day period is 2. Write B(t) = a times 2 to the (t/5), then use one point to solve for a. Using (10, 100): 100 = a times 2 to the 2, so a = 25.</Strategy>
      <WB>
        <Arrow text="Step 1: Determine the growth factor from the two points"/>
        <MathLine size={14}>Data doubles every 5 days: ratio = 200/100 = 2, period = 15−10 = 5<Annotate>population went from 100 to 200 over 5 days</Annotate></MathLine>
        <Arrow text="Step 2: Write the general form with base 2 and period 5"/>
        <MathLine size={14}>B(t) = a·(2)^(t/5)<Annotate>dividing t by 5 ensures we double every 5 days, not every 1 day</Annotate></MathLine>
        <Arrow text="Step 3: Use point (10, 100) to find a"/>
        <MathLine size={14}>100 = a·2^(10/5) = a·2² = 4a<Annotate>10/5 = 2, so 2² = 4</Annotate></MathLine>
        <MathLine size={14}>a = 100/4 = <MathBox color="#6366f1">25</MathBox><Annotate>divide both sides by 4</Annotate></MathLine>
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
      <Strategy>Apply the linearization formula directly: take log of f(x) = a times b to the x to get log(f) = x times log(b) + log(a). This is y = mx + c where m = log(b) is the slope and c = log(a) is the y-intercept.</Strategy>
      <WB>
        <Arrow text="Apply the semi-log linearization formula"/>
        <MathLine size={14}>y = (log b)·x + log a<Annotate>general semi-log linear model</Annotate></MathLine>
        <Arrow text="Substitute a = 2 and b = 7"/>
        <MathLine size={14}>y = (log 7)·x + log 2<Annotate>slope = log 7, y-intercept = log 2</Annotate></MathLine>
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
    <PQ key="4" n="4" q={<span>A graph of f has zeros at x = −3 and x = 1, a local maximum at x = −1, and a local minimum at x = 3. Determine True or False for each statement.<br/>a) f is increasing on −3 {"<"} x {"<"} −1<br/>b) f is decreasing on −1 {"<"} x {"<"} 3<br/>c) f has zeros at x = −3 and x = 1</span>} a="a) True  b) True  c) True" e={<WB>
      <MathLine size={14}><B c="#22c55e">a) TRUE</B> — from zero (x=−3) uphill to peak (x=−1) → <MathBox color="#22c55e">increasing ✓</MathBox></MathLine>
      <MathLine size={14}><B c="#22c55e">b) TRUE</B> — from local max (x=−1) downhill to local min (x=3) → <MathBox color="#22c55e">decreasing ✓</MathBox></MathLine>
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
    <PQ key="5" n="5" q={<span>A polynomial has x-intercepts at (−2, 0), (0, 0), (1, 0), and (2, 0) and a negative leading coefficient. Write p(x) as a product of linear factors.</span>} a="p(x) = −x(x + 2)(x − 1)(x − 2)" e={<WB>
      <MathLine size={14}>From intercepts: factors are x, (x+2), (x−1), (x−2)</MathLine>
      <MathLine size={14}>Product of leading terms: x·x·x·x = x⁴</MathLine>
      <MathLine size={14}>Leading coefficient is negative → need factor of −1</MathLine>
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
    <PQ key="1" n="1" q={<span>A ball is thrown into the air and its height is recorded at 1-second intervals. Use cubic regression to model the height and predict h(3.5).<br/><Tb h={["t (sec)","0","1","2","3","4","5"]} r={[["h (ft)","0","28","40","36","16","0"]]}/></span>} a="h(t) ≈ 0.926t³ − 13.159t² + 42.614t − 0.635. h(3.5) ≈ 27.0 ft" e={<WB>
      <MathLine size={14} color="#4338ca"><b>Step 1: Enter data into L1, L2</b></MathLine>
      <MathLine size={14}>L1 = {"{"}0,1,2,3,4,5{"}"} · L2 = {"{"}0,28,40,36,16,0{"}"}</MathLine>
      <MathLine size={14} color="#4338ca"><b>Step 2: STAT → CALC → CubicReg</b></MathLine>
      <Ans>h(t) ≈ 0.926t³ − 13.159t² + 42.614t − 0.635</Ans>
      <MathLine size={14} color="#4338ca"><b>Step 3: Predict h(3.5)</b></MathLine>
      <MathLine size={14}>Plug t = 3.5 into regression equation</MathLine>
      <Ans>h(3.5) ≈ 27.0 feet</Ans>
    </WB>}/>,
    <PQ key="2" n="2" q={<span>A company finds that widget sales follow an inverse variation model. When the price is $5, the company sells 250 widgets. Find the constant k, write the model b(x) = k/x, predict how many widgets sell at a price of $10, and find the price needed to sell 400 widgets.</span>} a="k = 1250, b(10) = 125 widgets, price = $3.13" e={<WB>
      <MathLine size={14}>k = 250 × 5 = <MathBox color="#6366f1">1250</MathBox><Annotate>k = x·y</Annotate></MathLine>
      <MathLine size={14}>Model: b(x) = 1250/x</MathLine>
      <MathLine size={14}>At $10: 1250/10 = <MathBox>125 widgets</MathBox></MathLine>
      <MathLine size={14}>400 sold: 1250/400 = <MathBox>$3.125</MathBox></MathLine>
    </WB>}/>,
    <PQ key="3" n="3" q={<span>A fish population is modeled by P(t) = 150t/(0.005t + 1) + 400 where t is months after a conservation effort begins. Find P(2) and the AROC from t = 3 to t = 6.</span>} a="P(2) ≈ 697 fish, AROC ≈ 143.5 fish/month" e={<WB>
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
      <Wh>Think about it this way: the world is full of things that repeat. The sun rises and sets, the seasons cycle, your heartbeat pulses. Mathematics needs a way to model these repeating patterns, and that is exactly what periodic functions give us. Once you understand one cycle, you understand the entire function forever — it just keeps replaying the same story.</Wh>
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
      <Strategy>We are given a frequency (rotations per second) and need to find the period and key points. Our approach: first convert frequency to period using Period = 1/Frequency. Then find the amplitude and midline from the max and min heights. Finally, use the fact that key points on a sinusoidal curve are evenly spaced within each period — the minimum is always half a period after the maximum, and the next maximum is a full period after the first.</Strategy>
      <Wh>A spinning fan blade traces a periodic function because the tip moves in a circle, and the height above the floor repeats with every full rotation. Frequency tells you how many cycles happen per unit time, and the period is how long ONE cycle takes. They are reciprocals: Period = 1 / Frequency.</Wh>
      <WB>
        <Arrow text="Step 1: Find the period from the frequency"/>
        <MathLine size={14}>Frequency = 2 rotations per second</MathLine>
        <MathLine size={14}>Period = 1 / frequency = 1 / 2 = <MathBox color="#6366f1">0.5 sec</MathBox></MathLine>
        <Annotate color="#4338ca">WHY? Each rotation is one full cycle. If the fan does 2 cycles every second, one cycle takes half a second.</Annotate>
        <Arrow text="Step 2: Find the amplitude and midline"/>
        <MathLine size={14}>Max height = 18 in (given at t = 0)</MathLine>
        <MathLine size={14}>Min height = 2 in (lowest point of blade tip)</MathLine>
        <MathLine size={14}>Amplitude = (max - min)/2 = (18 - 2)/2 = <MathBox color="#6366f1">8 inches</MathBox></MathLine>
        <MathLine size={14}>Midline = (max + min)/2 = (18 + 2)/2 = <MathBox color="#6366f1">10 inches</MathBox></MathLine>
        <Annotate color="#4338ca">The amplitude is the radius of the blade tip's circular path. The midline is the height of the fan's center axle above the floor.</Annotate>
        <Arrow text="Step 3: Find the coordinates of P, Q, R"/>
        <MathLine size={14} color="#4338ca"><b>Point P (start):</b></MathLine>
        <MathLine size={14}>P = (<MathBox color="#6366f1">0, 18</MathBox>)<Annotate>t = 0, blade tip at maximum height</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Point Q (minimum):</b></MathLine>
        <MathLine size={14}>The minimum occurs at HALF the period after the maximum</MathLine>
        <MathLine size={14}>t = 0 + 0.5/2 = 0.25 sec</MathLine>
        <MathLine size={14}>Q = (<MathBox color="#6366f1">0.25, 2</MathBox>)<Annotate>half period later, blade tip at minimum height</Annotate></MathLine>
        <Annotate color="#4338ca">WHY half-period? In any sinusoidal cycle, the max and min are always separated by exactly half a period. Think of a Ferris wheel: the top and bottom are exactly half a revolution apart.</Annotate>
        <MathLine size={14} color="#4338ca"><b>Point R (back to max):</b></MathLine>
        <MathLine size={14}>One full period after the start, the blade returns to the same position</MathLine>
        <MathLine size={14}>t = 0 + 0.5 = 0.5 sec</MathLine>
        <MathLine size={14}>R = (<MathBox color="#6366f1">0.5, 18</MathBox>)<Annotate>full period later, back to maximum</Annotate></MathLine>
        <Ans>Period = 0.5 seconds; P = (0, 18); Q = (0.25, 2); R = (0.5, 18)</Ans>
      </WB>
      <W>Do not confuse frequency with period! Frequency = 2 means 2 cycles per second, NOT a period of 2. The period is 1/frequency = 0.5 seconds.</W>
      <Tp>On the AP exam, if given a frequency, always compute period = 1/frequency FIRST. Then use the period to find key points: max at t = 0, min at t = period/2, back to max at t = period.</Tp>
    </div>},
    { title:"Example — Reading Period & Predicting Values", content:<div>
      <Q>A periodic function has period 4. Find f(10) and f(12).</Q>
      <Strategy>Since the function repeats every 4 units, we can subtract the period repeatedly until we land in the first cycle [0, 4). We will use the property f(x) = f(x - k) where k = 4. This is the go-to technique for evaluating periodic functions at large inputs — keep rewinding until you reach a value you can read directly from the given information.</Strategy>
      <Wh>The defining property of a periodic function is that f(x + k) = f(x) for all x, where k is the period. This means you can always shift backward (or forward) by one full period and get the same output. Subtracting the period repeatedly is like rewinding a looping video -- you always land on the same frame.</Wh>
      <FmUsed>f(x + k) = f(x) where k = period. Equivalently: f(x) = f(x - k) = f(x - 2k) = ...</FmUsed>
      <WB>
        <MathLine size={14}>Period = 4, so f(x + 4) = f(x) for all x</MathLine>
        <Arrow text="Part 1: Find f(10)"/>
        <MathLine size={14}>f(10) = f(10 - 4) = f(6)<Annotate>subtract one period: 10 is still outside [0, 4)</Annotate></MathLine>
        <Arrow text="Still not in the first cycle, subtract again"/>
        <MathLine size={14}>f(6) = f(6 - 4) = f(2)<Annotate>now 2 is in [0, 4) -- read from the table/graph</Annotate></MathLine>
        <MathLine size={14}>f(2) = <MathBox color="#22c55e">-2</MathBox></MathLine>
        <Ans>f(10) = -2</Ans>
        <Arrow text="Part 2: Find f(12)"/>
        <MathLine size={14}>f(12) = f(12 - 4) = f(8)<Annotate>subtract one period</Annotate></MathLine>
        <Arrow text="8 is still outside [0, 4), subtract again"/>
        <MathLine size={14}>f(8) = f(8 - 4) = f(4)<Annotate>subtract again</Annotate></MathLine>
        <Arrow text="4 is the boundary -- subtract once more to get into the first cycle"/>
        <MathLine size={14}>f(4) = f(4 - 4) = f(0)<Annotate>now 0 is in [0, 4) -- read from the table/graph</Annotate></MathLine>
        <MathLine size={14}>f(0) = <MathBox color="#22c55e">0</MathBox></MathLine>
        <Ans>f(12) = 0</Ans>
      </WB>
      <W>You can also divide the input by the period and use the remainder. For f(10): 10 / 4 = 2 remainder 2, so f(10) = f(2). But be careful with negative remainders -- subtracting the period is often safer and less error-prone.</W>
      <Tp>To evaluate f at large inputs: keep subtracting the period until you are back in the first cycle! On the AP exam, this technique appears frequently. Always show each subtraction step so you do not skip over the correct value.</Tp>
    </div>},
  ]},
  { id:"3.2", name:"Sine, Cosine, & Tangent", slides:[
    { title:"Concept — Angles, Radians, & the Unit Circle", content:<div>
      <Wh>Here is the big idea that makes all of trigonometry click: picture a circle with radius 1 centered at the origin. Now walk a point around it. At any position, the x-coordinate of that point IS the cosine, and the y-coordinate IS the sine. That is it. Sin and cos are not abstract formulas — they are literally just the coordinates of where you are standing on the unit circle. Every trig fact you will ever learn flows from this one picture.</Wh>
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
      <Tp>A helpful way to remember: sine tells you "how high up" the point is (the y-value), cosine tells you "how far right" (the x-value), and tangent is the slope of the line from the origin to that point. On the unit circle these are just the raw coordinates. On a bigger circle, you divide by the radius to scale back down to the unit circle.</Tp>
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
      <Strategy>We have a point on the terminal ray and the radius. We will use the core definitions sin θ = y/r, cos θ = x/r, and tan θ = y/x. First we verify r with the Pythagorean theorem, then determine the quadrant from the signs of x and y, and finally plug into each formula. The signs of x and y automatically determine the signs of each trig ratio.</Strategy>
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
      <Strategy>Same approach as the Q1 example, but now x is negative. We will identify the quadrant from the signs of x and y, verify r with the Pythagorean theorem, then apply the same three formulas. The key difference is that the negative x-coordinate will make cos θ and tan θ negative — we do not need to memorize sign rules because they follow automatically from plugging in the signed coordinates.</Strategy>
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
      <Strategy>We will use the two-step reference angle method for every trig evaluation: (1) find the reference angle to determine the absolute value from our memorized special angles (π/6, π/4, π/3), and (2) use the ASTC quadrant rule to determine the sign. For negative angles, we first add 2π to find a coterminal positive angle.</Strategy>
      <FmUsed>Two-step method: (1) Find the reference angle to get the VALUE. (2) Use the quadrant to determine the SIGN.</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Multiples of π/4:</b></MathLine>
        <Arrow text="sin(3π/4)"/>
        <MathLine size={14}>3π/4 is in Q2 (between π/2 and π)</MathLine>
        <MathLine size={14}>Reference angle = π - 3π/4 = <MathBox color="#6366f1">π/4</MathBox><Annotate>subtract from π for Q2 angles</Annotate></MathLine>
        <MathLine size={14}>sin(π/4) = √2/2 (from 45-45-90 triangle). In Q2, sine is positive.</MathLine>
        <MathLine size={14}>sin(3π/4) = <MathBox color="#22c55e">+√2/2</MathBox></MathLine>
        <Arrow text="cos(5π/4)"/>
        <MathLine size={14}>5π/4 is in Q3 (between π and 3π/2)</MathLine>
        <MathLine size={14}>Reference angle = 5π/4 - π = <MathBox color="#6366f1">π/4</MathBox><Annotate>subtract π for Q3 angles</Annotate></MathLine>
        <MathLine size={14}>cos(π/4) = √2/2 (from 45-45-90 triangle). In Q3, cosine is negative.</MathLine>
        <MathLine size={14}>cos(5π/4) = <MathBox color="#22c55e">−√2/2</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Multiples of π/3:</b></MathLine>
        <Arrow text="sin(4π/3)"/>
        <MathLine size={14}>4π/3 is in Q3 (between π and 3π/2)</MathLine>
        <MathLine size={14}>Reference angle = 4π/3 - π = <MathBox color="#6366f1">π/3</MathBox><Annotate>subtract π for Q3 angles</Annotate></MathLine>
        <MathLine size={14}>sin(π/3) = √3/2 (from 30-60-90 triangle). In Q3, sine is negative.</MathLine>
        <MathLine size={14}>sin(4π/3) = <MathBox color="#22c55e">−√3/2</MathBox></MathLine>
        <Arrow text="cos(π/3)"/>
        <MathLine size={14}>π/3 is in Q1 -- already a special angle, no reference angle needed!</MathLine>
        <MathLine size={14}>cos(π/3) = <MathBox color="#22c55e">1/2</MathBox><Annotate>Q1: both sin and cos are positive</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Multiples of π/6:</b></MathLine>
        <Arrow text="sin(π/6)"/>
        <MathLine size={14}>π/6 is in Q1 -- it IS the reference angle</MathLine>
        <MathLine size={14}>sin(π/6) = <MathBox color="#22c55e">1/2</MathBox><Annotate>from 30-60-90 triangle: side opposite 30 degrees is 1/2</Annotate></MathLine>
        <Arrow text="cos(5π/6)"/>
        <MathLine size={14}>5π/6 is in Q2. Reference angle = π - 5π/6 = <MathBox color="#6366f1">π/6</MathBox></MathLine>
        <MathLine size={14}>cos(π/6) = √3/2. In Q2, cosine is negative.</MathLine>
        <MathLine size={14}>cos(5π/6) = <MathBox color="#22c55e">−√3/2</MathBox></MathLine>
        <Arrow text="sin(−7π/6) -- negative angle!"/>
        <MathLine size={14}>-7π/6 is negative. Add 2π to find coterminal positive angle:</MathLine>
        <MathLine size={14}>-7π/6 + 2π = -7π/6 + 12π/6 = <MathBox color="#6366f1">5π/6</MathBox><Annotate>coterminal angle in [0, 2π)</Annotate></MathLine>
        <MathLine size={14}>5π/6 is in Q2. Reference angle = π - 5π/6 = π/6</MathLine>
        <MathLine size={14}>sin(π/6) = 1/2. In Q2, sine is positive.</MathLine>
        <MathLine size={14}>sin(−7π/6) = <MathBox color="#22c55e">1/2</MathBox></MathLine>
      </WB>
      <Wh>The reference angle method works because every angle shares its trig values (in absolute value) with the acute angle it makes with the x-axis. The quadrant then tells you the sign. You only need to memorize values for 3 angles (π/6, π/4, π/3) to evaluate trig at dozens of angles.</Wh>
      <W>For negative angles, always add 2π first to find the coterminal positive angle. Then apply the reference angle method. Do NOT try to find reference angles from negative angles directly.</W>
    </div>},
    { title:"Example — Coordinates on a Circle of Radius 8", content:<div>
      <Q>An angle of π/4 radians in standard position intersects a circle of radius 8. Find the exact (x, y) coordinates of the intersection point.</Q>
      <Strategy>The unit circle gives us coordinates for a circle of radius 1. To scale to any circle of radius r, we multiply: x = r·cos θ and y = r·sin θ. We recall the unit circle values at π/4 and multiply each coordinate by 8.</Strategy>
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
      <Strategy>We work backwards from coordinates to find r and θ. First, the Pythagorean theorem gives r = √(x² + y²). Then we determine the quadrant from the signs of x and y, find the reference angle using |x|/r, and adjust for the correct quadrant using Q3: θ = π + ref.</Strategy>
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
      <Strategy>We evaluate sin and cos at the five key angles (0, π/2, π, 3π/2, 2π), then use the wave shape to identify intervals of increase/decrease and concavity. Sine and cosine have identical shapes shifted by π/2, so their properties occur at offset intervals.</Strategy>
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
      <Wh>Sinusoidal functions are everywhere in the real world. Sound waves are sinusoidal — the air pressure oscillates up and down, and the amplitude is the volume while the period determines the pitch. Ocean tides rise and fall sinusoidally over about 12 hours. A Ferris wheel rider's height above the ground traces out a sinusoidal curve as the wheel turns. Even the amount of daylight you get each day follows a sinusoidal pattern over the year. Learning to read and write these functions means you can model any of these phenomena.</Wh>
      <Fm label="Definition">A sinusoidal function is any function with additive and multiplicative transformations of f(θ) = sin θ</Fm>
      <Fm label="Key Identity">cos θ = sin(θ + π/2) — cosine is just a shifted sine!</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Four Key Properties (in plain English)</Tt><Sm>
        <B c="#4338ca">Period:</B> the smallest positive value k such that f(θ + k) = f(θ). How long one full cycle takes. (On a Ferris wheel, this is the time for one complete revolution.)<br/>
        <B c="#4338ca">Frequency:</B> the reciprocal of the period (1/period). How many cycles per unit. (A sound at 440 Hz completes 440 cycles per second — that is the note A.)<br/>
        <B c="#4338ca">Amplitude:</B> half the distance between max and min. Amplitude = (max − min)/2. (On a Ferris wheel, this is the radius of the wheel — how far above and below the center you travel.)<br/>
        <B c="#4338ca">Midline:</B> the horizontal line halfway between max and min. Midline = (max + min)/2. (On a Ferris wheel, this is the height of the center of the wheel above the ground.)
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
      <Strategy>With just a max and a min point, we can extract all four sinusoidal properties. Amplitude = (max − min)/2, midline = (max + min)/2, and the horizontal distance from max to min is exactly HALF the period. From the period, frequency = 1/period.</Strategy>
      <FmUsed>Amplitude = (max - min)/2 · Midline = (max + min)/2 · Period = 2 x (max-to-min distance)</FmUsed>
      <WB>
        <Arrow text="Step 1: Find the Amplitude"/>
        <MathLine size={14} color="#4338ca"><b>Amplitude:</b></MathLine>
        <MathLine size={14}>Amplitude measures how far the function travels above or below the midline.</MathLine>
        <MathLine size={14}>(max y - min y)/2 = (4 − (−2))/2 = 6/2 = <MathBox color="#22c55e">3</MathBox></MathLine>
        <Annotate color="#4338ca">WHY divide by 2? The total vertical span covers BOTH the distance above the midline AND below it. Amplitude is only the distance from midline to one extreme.</Annotate>
        <Arrow text="Step 2: Find the Midline"/>
        <MathLine size={14} color="#4338ca"><b>Midline:</b></MathLine>
        <MathLine size={14}>The midline is the horizontal line exactly halfway between max and min.</MathLine>
        <MathLine size={14}>(max y + min y)/2 = (4 + (−2))/2 = 2/2 = <MathBox color="#22c55e">1</MathBox> → y = 1</MathLine>
        <Annotate color="#4338ca">WHY average? The midline is the center of oscillation -- the resting position the wave oscillates around.</Annotate>
        <Arrow text="Step 3: Find the Period"/>
        <MathLine size={14} color="#4338ca"><b>Period:</b></MathLine>
        <MathLine size={14}>Max is at x = 1, min is at x = 5. Distance = 5 - 1 = 4.</MathLine>
        <MathLine size={14}>Max to min is only HALF a cycle (up-to-down is half the journey).</MathLine>
        <MathLine size={14}>Full period = 2 x 4 = <MathBox color="#22c55e">8</MathBox></MathLine>
        <Annotate color="#4338ca">WHY multiply by 2? A full cycle goes max, midline, min, midline, max. Max-to-min is only half.</Annotate>
        <Arrow text="Step 4: Find the Frequency"/>
        <MathLine size={14} color="#4338ca"><b>Frequency:</b></MathLine>
        <MathLine size={14}>Frequency = 1/period = 1/8 = <MathBox color="#22c55e">1/8</MathBox></MathLine>
        <Annotate color="#4338ca">The function completes 1/8 of a cycle per unit of input.</Annotate>
      </WB>
      <Wh>These four properties completely describe any sinusoidal function. Once you know them, you can write the equation and predict any output.</Wh>
      <W>Most common mistake: using max-to-min distance as the full period. Max to min is only HALF the period!</W>
      <Tp>Max to NEXT max = full period. Max to min = HALF period. This is a common AP trick!</Tp>
    </div>},
    { title:"Example — Even/Odd Symmetry and Properties", content:<div>
      <Q>Determine whether each function is even, odd, or neither. What symmetry does each have?</Q>
      <Strategy>To test even/odd, we replace θ with −θ and simplify. If f(−θ) = f(θ) it is even (y-axis symmetry). If f(−θ) = −f(θ) it is odd (origin symmetry). We use the known identities sin(−θ) = −sin(θ) and cos(−θ) = cos(θ).</Strategy>
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
      <Tp>Think of building a wave from scratch: "a" controls how tall the wave is, "b" controls how fast it oscillates, "c" slides it left or right (like starting a song from the middle), and "d" raises or lowers the whole wave. For a Ferris wheel: a = wheel radius, b = how fast it spins, c = where the rider starts, d = how high the axle is off the ground.</Tp>
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
      <Strategy>We apply each transformation one at a time, building the equation step by step. Horizontal changes first (phase shift), then vertical changes (amplitude, reflection). Each transformation modifies a specific parameter in f(θ) = a·sin(b(θ + c)) + d.</Strategy>
      <FmUsed>g(θ) = a · sin(b(θ + c)) + d — apply each transformation one at a time</FmUsed>
      <WB>
        <Arrow text="Step 1: Start with the parent function"/>
        <MathLine size={14}>f(θ) = sin θ</MathLine>
        <Arrow text="Step 2: Apply phase shift LEFT π"/>
        <MathLine size={14}>A left shift of π means we ADD π inside the function</MathLine>
        <MathLine size={14}>sin(θ) → sin(θ + π)<Annotate>left = add inside</Annotate></MathLine>
        <Annotate color="#4338ca">WHY does adding shift LEFT? To get the old output at θ=0, the new function needs θ=-π: sin((-π)+π)=sin(0). The graph shifts opposite the sign inside.</Annotate>
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
      <Strategy>We map each property to a parameter: amplitude gives |a|, reflection sets the sign of a, period = 2π/|b| lets us solve for b, and midline = d. We assemble f(θ) = a·sin(bθ) + d piece by piece.</Strategy>
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
      <Strategy>We extract each parameter from the data: amplitude from max and min, midline from their average, period from the x-distance of one full cycle (min-to-max-to-min = 4π). Since the function starts at its minimum, we choose −cos to avoid a phase shift.</Strategy>
      <FmUsed>f(x) = a·sin(b(x − c)) + d or f(x) = a·cos(b(x − c)) + d</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Find the amplitude</b></MathLine>
        <MathLine size={14}>Amplitude = (max − min)/2 = (7 − (−1))/2 = 8/2 = <MathBox color="#6366f1">4</MathBox></MathLine>
        <Annotate color="#4338ca">The amplitude measures how far the function rises or falls from its center line. Half the total swing.</Annotate>
        <MathLine size={14} color="#4338ca"><b>Step 2: Find the midline (vertical shift)</b></MathLine>
        <MathLine size={14}>Midline d = (max + min)/2 = (7 + (−1))/2 = 6/2 = <MathBox color="#6366f1">3</MathBox></MathLine>
        <Annotate color="#4338ca">The midline is the horizontal line halfway between the max and min — the "center" of oscillation.</Annotate>
        <MathLine size={14} color="#4338ca"><b>Step 3: Find the period</b></MathLine>
        <MathLine size={14}>Data: min at x = 0 → max at x = 2π → min again at x = 4π</MathLine>
        <MathLine size={14}>One full cycle (min → max → min) = 4π − 0 = <MathBox color="#6366f1">4π</MathBox></MathLine>
        <Arrow text="Convert period to the b-value using b = 2π/period"/>
        <MathLine size={14}>b = 2π/(4π) = <MathBox color="#6366f1">1/2</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 4: Choose sin or cos based on starting point</b></MathLine>
        <MathLine size={14}>At x = 0, f(0) = −1 = minimum value</MathLine>
        <MathLine size={14}>cos(0) = 1 (starts at max), so −cos(0) = −1 (starts at min) ✓</MathLine>
        <MathLine size={14}>Use <MathBox color="#ec4899">negative cosine</MathBox> since the function starts at its minimum</MathLine>
        <Arrow text="Assemble the equation: f(x) = −a·cos(bx) + d"/>
        <Ans>f(x) = −4cos(x/2) + 3</Ans>
      </WB>
      <Wh>The choice between sin and cos depends on WHERE in the cycle you start. Cosine starts at max, negative cosine starts at min, sine starts at midline going up, negative sine starts at midline going down. Pick whichever matches your data to avoid needing a phase shift.</Wh>
      <Tp>AP exam shortcut: If data starts at max → use cos. Starts at min → use −cos. Starts at midline → use sin or −sin.</Tp>
    </div>},
    { title:"Example — Merry-go-round Context Problem", content:<div>
      <Q>Child is 6 ft from parents when closest, 24 ft when farthest. Rotation takes 30 sec. At t=0, child is closest.</Q>
      <Strategy>This real-world problem maps to a sinusoidal model. Closest = min, farthest = max, rotation time = period. We compute amplitude, midline, and b from these quantities, then choose −cos since the child starts at minimum distance, avoiding a phase shift.</Strategy>
      <FmUsed>m(t) = a·sin(b(t − c)) + d or m(t) = −a·cos(bt) + d</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Identify max, min, and period from context</b></MathLine>
        <MathLine size={14}>Min distance = 6 ft (closest to parents)</MathLine>
        <MathLine size={14}>Max distance = 24 ft (farthest from parents)</MathLine>
        <MathLine size={14}>Period = 30 sec (one full rotation)</MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Calculate amplitude</b></MathLine>
        <MathLine size={14}>Amplitude = (max − min)/2 = (24 − 6)/2 = <MathBox color="#6366f1">9 ft</MathBox></MathLine>
        <Annotate color="#4338ca">The child swings 9 ft above and below the center distance</Annotate>
        <MathLine size={14} color="#4338ca"><b>Step 3: Calculate midline</b></MathLine>
        <MathLine size={14}>Midline d = (max + min)/2 = (24 + 6)/2 = <MathBox color="#6366f1">15 ft</MathBox></MathLine>
        <Annotate color="#4338ca">The center of the merry-go-round is 15 ft from the parents</Annotate>
        <MathLine size={14} color="#4338ca"><b>Step 4: Calculate b from the period</b></MathLine>
        <MathLine size={14}>b = 2π/period = 2π/30 = <MathBox color="#6366f1">π/15</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 5: Choose the form based on starting position</b></MathLine>
        <MathLine size={14}>At t = 0, child is closest (min distance) → starts at minimum</MathLine>
        <MathLine size={14}>Option A: −cos form: m(t) = −9cos(πt/15) + 15</MathLine>
        <MathLine size={14}>Option B: sin form with phase shift: need max at t = 15/2 = 7.5</MathLine>
        <MathLine size={14}>sin(b(t − c)) = 1 when b(t − c) = π/2, so at t = 7.5: (π/15)(7.5 − c) = π/2</MathLine>
        <MathLine size={14}>7.5 − c = 7.5 → c = 0... but sin starts at midline, not min. Shift by −7.5:</MathLine>
        <Ans>m(t) = 9sin(π/15·(t − 7.5)) + 15 or equivalently m(t) = −9cos(πt/15) + 15</Ans>
      </WB>
      <Wh>Real-world periodic phenomena (Ferris wheels, tides, merry-go-rounds, pendulums) all follow sinusoidal models. The key is mapping the physical quantities (distance, height, temperature) to amplitude, midline, period, and phase shift.</Wh>
      <W>The −cos form is usually simpler when starting at a minimum — it avoids computing a phase shift entirely!</W>
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
      <Strategy>We compare to the general form f(θ) = a·tan(b(θ + c)) + d, identifying each parameter. The period uses π/|b| (NOT 2π/|b| — tangent has a different period). We describe each parameter’s effect on the parent graph.</Strategy>
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
      <Strategy>We rewrite tan(θ/2) as tan((1/2)·θ) to identify b = 1/2. Since b is less than 1, the graph stretches horizontally (wider, longer period). We compute the new period using π/|b| and describe how VAs move outward by the same stretch factor.</Strategy>
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
      <Wh>Why do we need these restricted ranges? Here is the problem: sin(pi/6) = 1/2, but sin(5pi/6) = 1/2 too, and so does sin(pi/6 + 2pi), and infinitely many other angles. If you ask "what angle has sine equal to 1/2?" there are infinitely many correct answers. A function can only give ONE output for each input, so we must restrict the domain of sin to a piece where it hits every y-value exactly once. That piece is [-pi/2, pi/2] for sine, [0, pi] for cosine, and (-pi/2, pi/2) for tangent. Without these restrictions, the inverse would not be a function at all.</Wh>
      <Tp>The restricted ranges ensure each inverse function gives exactly ONE answer. The AP exam loves asking for values outside the range — be careful!</Tp>
    </div>},
    { title:"Example — Evaluating Inverse Trig", content:<div>
      <Q>Evaluate sin⁻¹(1/2) and cos⁻¹(−√3/2). Give exact answers in radians.</Q>
      <Strategy>For each inverse trig evaluation, we ask: "What angle IN THE RESTRICTED RANGE has this trig value?" For sin⁻¹ the range is [−π/2, π/2]. For cos⁻¹ the range is [0, π]. We find the reference angle from the unit circle, then select the correct angle within the allowed range.</Strategy>
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
      <Strategy>Vertical transformations (multiplying outside) change the RANGE but not the domain. Horizontal transformations (inside the function) change the DOMAIN. Vertical shifts add/subtract from each endpoint of the range. We apply these rules to each transformed function.</Strategy>
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
      <Strategy>Our four-step strategy: (1) isolate the trig function, (2) find the reference angle from the unit circle, (3) identify which quadrants have positive sine (Q1 and Q2 via ASTC), giving exactly 2 solutions per period, and (4) for all solutions, add 2kπ to each.</Strategy>
      <FmUsed>Isolate sin x, find the reference angle, then determine which quadrants give solutions.</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Isolate the trig function</b></MathLine>
        <MathLine size={14}>2sin x − 1 = 0</MathLine>
        <Arrow text="Add 1 to both sides"/>
        <MathLine size={14}>2sin x = 1<Annotate>isolating the trig term</Annotate></MathLine>
        <Arrow text="Divide both sides by 2"/>
        <MathLine size={14}>sin x = <MathBox color="#6366f1">1/2</MathBox><Annotate>now we know the sine VALUE we need</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Find the reference angle</b></MathLine>
        <MathLine size={14}>Ask: "What angle in Q1 has sine = 1/2?"</MathLine>
        <MathLine size={14}>From the unit circle: sin(π/6) = 1/2<Annotate>π/6 = 30° — one of the special angles</Annotate></MathLine>
        <MathLine size={14}>Reference angle = <MathBox color="#6366f1">π/6</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: Determine which quadrants have positive sine</b></MathLine>
        <MathLine size={14}>sin x = 1/2 is POSITIVE. Sine is positive in Q1 and Q2 (the "S" and "A" in ASTC).</MathLine>
        <MathLine size={14}>So there are exactly <MathBox color="#ec4899">2 solutions</MathBox> in [0, 2π].</MathLine>
        <Arrow text="Find the Q1 solution"/>
        <MathLine size={14}>Q1: x = reference angle = <MathBox color="#22c55e">π/6</MathBox><Annotate color="#22c55e">in Q1, the angle IS the reference angle</Annotate></MathLine>
        <Arrow text="Find the Q2 solution using the Q2 formula: π − reference angle"/>
        <MathLine size={14}>Q2: x = π − π/6 = 6π/6 − π/6 = <MathBox color="#22c55e">5π/6</MathBox><Annotate color="#22c55e">Q2 angles are π minus the reference angle</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>a) Solutions on [0, 2π]:</b></MathLine>
        <Ans>x = π/6 and x = 5π/6</Ans>
        <MathLine size={14} color="#4338ca"><b>Step 4: Extend to ALL solutions</b></MathLine>
        <MathLine size={14}>Sine has period 2π, so every full revolution brings you back to the same sine value.</MathLine>
        <MathLine size={14}>Add any integer multiple of 2π to each solution:</MathLine>
        <Ans>x = π/6 + 2kπ or x = 5π/6 + 2kπ, where k is any integer</Ans>
      </WB>
      <Wh>Why are there exactly 2 solutions in one full period? The sine function completes one full cycle in [0, 2π]. For any value between −1 and 1, the horizontal line y = value intersects the sine curve at exactly 2 points in one period (except at ±1 where it touches once). One intersection is in the "rising" part (Q1) and one in the "falling" part (Q2).</Wh>
      <W>Students often forget the Q2 solution! If sin x = positive, there is ALWAYS a second solution at π − (reference angle). Similarly, if sin x = negative, the solutions are in Q3 and Q4.</W>
      <Tp>Quick quadrant formulas: Q1 = ref angle, Q2 = π − ref, Q3 = π + ref, Q4 = 2π − ref. Memorize these!</Tp>
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
      <Strategy>For each reciprocal trig value: (1) write the reciprocal definition (sec = 1/cos, csc = 1/sin, cot = cos/sin), (2) evaluate the base function using reference angle + ASTC, (3) compute the reciprocal and rationalize if needed.</Strategy>
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
      <Strategy>Sec and csc use period = 2π/|b| (like sin/cos). Cot uses period = π/|b| (like tan). To find VA locations, set the INSIDE equal to the parent function’s VA angles, then solve for θ.</Strategy>
      <WB>
        <MathLine size={14} color="#4338ca"><b>1. f(θ) = sec(θ/2)</b></MathLine>
        <MathLine size={14}>Period of sec θ = 2π. With b = 1/2: period = 2π/|1/2| = <MathBox color="#22c55e">4π</MathBox></MathLine>
        <MathLine size={14}>VAs: θ/2 = π/2 + kπ → θ = <MathBox>π + 2kπ</MathBox>, k∈ℤ</MathLine>
        <MathLine size={14} color="#be185d"><b>2. f(θ) = 2csc(3θ) − 1</b></MathLine>
        <MathLine size={14}>Period of csc θ = 2π. With b = 3: period = 2π/3 = <MathBox color="#22c55e">2π/3</MathBox></MathLine>
        <MathLine size={14}>Range: parent (−∞,−1]∪[1,∞) → ×2: (−∞,−2]∪[2,∞) → −1: <MathBox>(−∞, −3] ∪ [1, ∞)</MathBox></MathLine>
        <MathLine size={14} color="#92400e"><b>3. f(θ) = cot(4θ)</b></MathLine>
        <MathLine size={14}>Period of cot θ = π. With b = 4: period = π/4 = <MathBox color="#22c55e">π/4</MathBox></MathLine>
        <MathLine size={14}>VAs: 4θ = kπ → θ = <MathBox>kπ/4</MathBox>, k∈ℤ</MathLine>
      </WB>
      <Tp>Period formula: sec/csc use 2π/|b| (same as sin/cos). Cotangent uses π/|b| (same as tangent). VAs: set the INSIDE equal to the parent function's VA locations, then solve for θ.</Tp>
    </div>},
  ]},
  { id:"3.12", name:"Equivalent Representations of Trigonometric Functions", slides:[
    { title:"Concept — Trig Identities", content:<div>
      <Wh>Here is why sin²θ + cos²θ = 1 is true, and it is beautifully simple: on the unit circle, every point is at distance 1 from the origin. The coordinates of that point are (cos θ, sin θ). By the Pythagorean theorem, x² + y² = r², which gives us cos²θ + sin²θ = 1². That is it — the most important identity in trigonometry is just the Pythagorean theorem applied to the unit circle.</Wh>
      <Fm label="Pythagorean Identity">sin²θ + cos²θ = 1</Fm>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Derived Pythagorean Identities</Tt><Sm>
        sin²θ = 1 − cos²θ · cos²θ = 1 − sin²θ<br/>
        1 + tan²θ = sec²θ · 1 + cot²θ = csc²θ
      </Sm></Box>
      <Fm label="Sum/Difference Identities">sin(α ± β) = sinα·cosβ ± cosα·sinβ</Fm>
      <Fm label="">cos(α ± β) = cosα·cosβ ∓ sinα·sinβ</Fm>
      <Fm label="Double Angle">sin(2θ) = 2sinθ·cosθ · cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ</Fm>
      <Tp>Why are double angle formulas so useful? They let you convert between different "levels" of complexity. For instance, cos(2θ) = 1 − 2sin²θ lets you rewrite a squared trig function as a non-squared one, which is essential for solving equations. On the AP exam, they often give you an equation with sin(2x) and expect you to expand it using 2sin(x)cos(x) so you can factor.</Tp>
      <W>These identities are used to simplify expressions and solve equations. The AP exam expects you to recognize and apply them!</W>
    </div>},
    { title:"Example — Simplifying with the Pythagorean Identity", content:<div>
      <Q>Use a Pythagorean identity to express 3cos³x / (1 − sin²x) in terms of only cos x.</Q>
      <Strategy>The expression "1 − sin²x" is a dead giveaway for the Pythagorean identity: since sin²θ + cos²θ = 1, we know 1 − sin²x = cos²x. After substituting, we simplify using exponent rules for dividing like bases.</Strategy>
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
      <Strategy>When we see sin(2x), we expand using sin(2x) = 2sin(x)cos(x). This rewrites everything in terms of sin x and cos x, letting us factor out a common term. Then the Zero Product Property gives us each factor = 0 to solve separately.</Strategy>
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
      <Wh>Polar coordinates describe locations the way a compass and a ruler do: "face this direction, then walk this far." Instead of saying "go 3 right and 4 up" (rectangular), you say "face 53 degrees and walk 5 units" (polar). This system is incredibly natural for anything involving rotation or circular motion — radar screens, satellite dishes, and navigation all use polar thinking. The conversion formulas are just the unit circle relationships you already know: x = r cos θ and y = r sin θ.</Wh>
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
      <Strategy>Polar-to-rectangular conversion is a direct application of x = r·cos θ and y = r·sin θ. We identify r and θ, recall the sin and cos values at that angle from the unit circle, and multiply.</Strategy>
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
      <Strategy>We find r via the Pythagorean theorem: r = √(x² + y²). Then we carefully find θ: arctan(y/x) only gives Q1/Q4 angles, so for Q2/Q3 points we must add π. Always check the quadrant from the signs of x and y.</Strategy>
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
      <Tp>Think of graphing polar functions like spinning a flashlight beam: the angle θ tells you which direction to point, and r = f(θ) tells you how far the light reaches. As you sweep the beam around, the distance from center changes according to the function, tracing out the curve. Circles have constant r, roses have r that pulses in and out rhythmically, and limacon shapes have r that varies unevenly — sometimes even going negative (which means the point flips to the opposite side).</Tp>
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
      <Strategy>We build a table at key angles, then analyze where r is positive vs negative. Positive r is plotted normally; negative r is reflected through the origin. The form r = a·cos(θ) always produces a circle — we determine its center and radius from the table values.</Strategy>
      <FmUsed>r(θ) = 4cos(θ)</FmUsed>
      <WB>
        <Tb h={["θ","0","π/6","π/3","π/2","2π/3","5π/6","π"]} r={[
          ["r(θ)","4","3.46","2","0","−2","−3.46","−4"],
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
      <Strategy>For limaçons r = a + b·cos(θ), when |a| is less than |b|, there is an inner loop where r is negative. We build a table, find angles where r = 0 (the boundary), and identify the inner loop interval where r is negative.</Strategy>
      <FmUsed>r(θ) = 2 − 4cos(θ) — limaçon since |a| {"<"} |b| (2 {"<"} 4)</FmUsed>
      <WB>
        <Tb h={["θ","0","π/6","π/3","π/2","2π/3","5π/6","π"]} r={[
          ["r(θ)","−2","−1.46","0","2","4","5.46","6"],
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
      <Strategy>For rose curves r = a·sin(bθ): even b gives 2b petals, odd b gives b petals. We determine the petal count, find where each petal tip occurs (where |r| is maximized), and identify the required domain. Maximum |r| = |a| is the petal length.</Strategy>
      <FmUsed>r(θ) = a·sin(bθ) — Rose curve with a = 4, b = 2</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Determine the number of petals</b></MathLine>
        <MathLine size={14}>For r = a·sin(bθ) or r = a·cos(bθ):</MathLine>
        <MathLine size={14}>If b is even → number of petals = 2b</MathLine>
        <MathLine size={14}>If b is odd → number of petals = b</MathLine>
        <MathLine size={14}>Here b = 2 (even), so petals = 2(2) = <MathBox color="#6366f1">4 petals</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 2: Find the maximum distance from origin</b></MathLine>
        <MathLine size={14}>Maximum |r| = |a| = |4| = <MathBox color="#22c55e">4</MathBox><Annotate>tip of each petal is 4 units from center</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 3: Find where petals occur (where r reaches max/min)</b></MathLine>
        <MathLine size={14}>r = 4 when sin(2θ) = 1 → 2θ = π/2 → θ = <MathBox color="#6366f1">π/4</MathBox><Annotate>1st petal tip</Annotate></MathLine>
        <MathLine size={14}>r = −4 when sin(2θ) = −1 → 2θ = 3π/2 → θ = <MathBox color="#6366f1">3π/4</MathBox><Annotate>2nd petal (reflected by negative r)</Annotate></MathLine>
        <MathLine size={14}>r = 4 when 2θ = 5π/2 → θ = <MathBox color="#6366f1">5π/4</MathBox><Annotate>3rd petal tip</Annotate></MathLine>
        <MathLine size={14}>r = −4 when 2θ = 7π/2 → θ = <MathBox color="#6366f1">7π/4</MathBox><Annotate>4th petal (reflected)</Annotate></MathLine>
        <MathLine size={14} color="#4338ca"><b>Step 4: Determine the domain needed</b></MathLine>
        <MathLine size={14}>Since b = 2 (even), the full curve requires 0 ≤ θ ≤ 2π</MathLine>
        <Arrow text="Compare: what if b were odd?"/>
        <MathLine size={14}>r(θ) = 2sin(3θ): b = 3 (odd) → domain 0 ≤ θ ≤ π is sufficient</MathLine>
        <MathLine size={14}>Number of petals = b = <MathBox color="#ec4899">3 petals</MathBox></MathLine>
      </WB>
      <Tb h={["Function","b","Domain","Petals"]} r={[
        ["4sin(2θ)","2 (even)","0 ≤ θ ≤ 2π","4"],
        ["2sin(3θ)","3 (odd)","0 ≤ θ ≤ π","3"],
        ["4cos(4θ)","4 (even)","0 ≤ θ ≤ 2π","8"],
      ]}/>
      <Wh>Why does even b give 2b petals but odd b gives only b petals? When b is odd, the negative r-values trace over the same petals that the positive values already drew. When b is even, negative r-values create NEW petals in different directions, doubling the count.</Wh>
      <W>Don't confuse the domain rule: even b needs [0, 2π], odd b only needs [0, π]. Using the wrong domain will either miss petals or double-count them.</W>
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
      <Strategy>Distance = |r(θ)|. Since sin(θ) ≥ 0 on [0, π], r is non-negative here, so distance = r directly. We build a table, then analyze where r increases (moving away from origin) vs decreases (moving toward origin). The farthest point is at the maximum of r.</Strategy>
      <FmUsed>Distance from origin = |r(θ)|. When r is positive, distance increases when r increases and decreases when r decreases.</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Build a table of values</b></MathLine>
        <Tb h={["θ","0","π/6","π/3","π/2","2π/3","5π/6","π"]} r={[
          ["r(θ)","0","2","3.46","4","3.46","2","0"],
        ]}/>
        <MathLine size={14} color="#4338ca"><b>Step 2: Analyze each sub-interval</b></MathLine>
        <Arrow text="First half: 0 ≤ θ ≤ π/2"/>
        <MathLine size={14}>r goes from 0 → 2 → 3.46 → 4: r is <MathBox color="#22c55e">positive</MathBox> and <MathBox color="#22c55e">increasing</MathBox></MathLine>
        <MathLine size={14}>Since r {">"} 0 and increasing, distance = r is also <MathBox color="#22c55e">increasing</MathBox></MathLine>
        <Annotate color="#22c55e">The point moves farther from the origin as θ increases from 0 to π/2</Annotate>
        <Arrow text="Second half: π/2 ≤ θ ≤ π"/>
        <MathLine size={14}>r goes from 4 → 3.46 → 2 → 0: r is <MathBox color="#6366f1">positive</MathBox> and <MathBox color="#ef4444">decreasing</MathBox></MathLine>
        <MathLine size={14}>Since r {">"} 0 and decreasing, distance = r is also <MathBox color="#ef4444">decreasing</MathBox></MathLine>
        <Annotate color="#ef4444">The point moves closer to the origin as θ increases from π/2 to π</Annotate>
        <MathLine size={14} color="#4338ca"><b>Step 3: Find the farthest point</b></MathLine>
        <MathLine size={14}>r changes from increasing → decreasing at θ = π/2</MathLine>
        <MathLine size={14}>At θ = π/2: r(π/2) = 4sin(π/2) = 4(1) = <MathBox color="#6366f1">4</MathBox></MathLine>
        <Ans>Farthest from origin: r = 4 at θ = π/2 — the relative maximum of r(θ)</Ans>
      </WB>
      <Wh>Since r is always positive on this interval, distance = r directly. The farthest point is where r has a maximum, which is where r switches from increasing to decreasing.</Wh>
    </div>},
    { title:"Example — Negative r and Distance", content:<div>
      <Q>Given r(θ) = 4cos(2θ). On π/4 ≤ θ ≤ 3π/4, describe the distance from the origin and find the farthest distance.</Q>
      <Strategy>This is the tricky negative-r case! On this interval r is negative. Distance = |r|, NOT r. When r is negative and decreasing (more negative), |r| INCREASES — the point moves farther away. We build a table showing both r and |r| to see the true distance behavior.</Strategy>
      <FmUsed>Distance = |r(θ)|. When r is NEGATIVE: r decreasing (more negative) means distance INCREASING. r increasing (less negative) means distance DECREASING.</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Step 1: Build a table of values</b></MathLine>
        <Tb h={["θ","π/4","π/3","π/2","2π/3","3π/4"]} r={[
          ["r(θ)","0","−2","−4","−2","0"],
          ["|r(θ)| (distance)","0","2","4","2","0"],
        ]}/>
        <MathLine size={14} color="#4338ca"><b>Step 2: Analyze — this is the tricky case with negative r!</b></MathLine>
        <Arrow text="First half: π/4 ≤ θ ≤ π/2"/>
        <MathLine size={14}>r goes from 0 → −2 → −4: r is <MathBox color="#ef4444">negative</MathBox> and <MathBox color="#ef4444">decreasing</MathBox> (getting more negative)</MathLine>
        <MathLine size={14}>But |r| goes from 0 → 2 → 4: distance is <MathBox color="#22c55e">INCREASING</MathBox></MathLine>
        <Annotate color="#22c55e">Even though r is "going down," the point is moving AWAY from the origin because |r| grows</Annotate>
        <Arrow text="Second half: π/2 ≤ θ ≤ 3π/4"/>
        <MathLine size={14}>r goes from −4 → −2 → 0: r is <MathBox color="#ef4444">negative</MathBox> and <MathBox color="#6366f1">increasing</MathBox> (getting less negative)</MathLine>
        <MathLine size={14}>And |r| goes from 4 → 2 → 0: distance is <MathBox color="#ef4444">DECREASING</MathBox></MathLine>
        <Annotate color="#ef4444">r is "going up" toward zero, so |r| shrinks — the point moves toward the origin</Annotate>
        <MathLine size={14} color="#4338ca"><b>Step 3: Find the greatest distance</b></MathLine>
        <MathLine size={14}>|r| is maximized when r is most negative: r = −4 at θ = π/2</MathLine>
        <Ans>Greatest distance on this interval = |−4| = 4, occurring at θ = π/2</Ans>
      </WB>
      <Wh>This is the key insight for negative r: when r is negative and getting MORE negative, the point is actually moving FARTHER from the origin. Think of |r| as the true distance. The sign of r only tells you which side of the origin the point is plotted on.</Wh>
      <W>The AP exam loves testing this! "r is decreasing" does NOT always mean "distance is decreasing." You must check the sign of r first.</W>
    </div>},
    { title:"Example — Average Rate of Change and Estimation", content:<div>
      <Q>Given r(θ) = 3 + 3sin(θ) where r is in cm. Find the AROC on [0.4, 0.6], use it to estimate r(0.5), and compare with the actual value.</Q>
      <Strategy>Three-part AROC workflow: (1) evaluate r at both endpoints, (2) apply AROC = [r(θ2) − r(θ1)] / [θ2 − θ1], (3) use linear approximation r(θ) ≈ r(θ1) + AROC·(θ − θ1) to estimate a nearby value. This works well over small intervals because curves look nearly straight when zoomed in.</Strategy>
      <FmUsed>AROC = [r(θ₂) − r(θ₁)] / [θ₂ − θ₁] · Estimation: r(θ) ≈ r(θ₁) + AROC · (θ − θ₁)</FmUsed>
      <WB>
        <MathLine size={14} color="#4338ca"><b>Part (a): Find AROC on [0.4, 0.6]</b></MathLine>
        <Arrow text="Step 1: Evaluate r at both endpoints (use calculator — angles in radians!)"/>
        <MathLine size={14}>r(0.6) = 3 + 3sin(0.6) ≈ 3 + 3(0.5646) ≈ 3 + 1.694 ≈ <MathBox color="#6366f1">4.694</MathBox><Annotate>plug 0.6 rad into sin</Annotate></MathLine>
        <MathLine size={14}>r(0.4) = 3 + 3sin(0.4) ≈ 3 + 3(0.3894) ≈ 3 + 1.168 ≈ <MathBox color="#6366f1">4.168</MathBox><Annotate>plug 0.4 rad into sin</Annotate></MathLine>
        <Arrow text="Step 2: Apply the AROC formula"/>
        <MathLine size={14}>AROC = [r(0.6) − r(0.4)] / [0.6 − 0.4]</MathLine>
        <MathLine size={14}>= (4.694 − 4.168) / 0.2 = 0.526 / 0.2 ≈ <MathBox color="#6366f1">2.628 cm/radian</MathBox></MathLine>
        <Annotate color="#4338ca">This tells us: on average, the radius grows about 2.628 cm for each additional radian of θ</Annotate>
        <MathLine size={14} color="#4338ca"><b>Part (b): Estimate r(0.5) using linear approximation</b></MathLine>
        <Arrow text="Use the estimation formula: start at the left endpoint and project forward"/>
        <MathLine size={14}>r(0.5) ≈ r(0.4) + AROC · (0.5 − 0.4)<Annotate>linear approximation formula</Annotate></MathLine>
        <MathLine size={14}>≈ 4.168 + 2.628 · (0.1)<Annotate>θ − θ₁ = 0.5 − 0.4 = 0.1</Annotate></MathLine>
        <MathLine size={14}>≈ 4.168 + 0.263 = <MathBox color="#22c55e">4.431</MathBox></MathLine>
        <MathLine size={14} color="#4338ca"><b>Part (c): Compare with the actual value</b></MathLine>
        <Arrow text="Compute r(0.5) exactly"/>
        <MathLine size={14}>r(0.5) = 3 + 3sin(0.5) = 3 + 3(0.4794) = 3 + 1.438 = <MathBox color="#22c55e">4.438</MathBox></MathLine>
        <Ans>Estimate: 4.431 vs. Actual: 4.438 — error of only 0.007 cm!</Ans>
      </WB>
      <Wh>Linear approximation works well when the interval is small because curves look nearly straight when you zoom in far enough. The AROC gives the slope of a secant line, and we use that slope to project from a known point to an unknown one.</Wh>
      <Tp>On the AP exam, always include units! AROC of r(θ) has units of (distance units) per radian — here, cm/radian. The estimation also has units of cm.</Tp>
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
    <PQ key="2" n="2" q={<span>Find all values of x on the interval 0 ≤ x ≤ 2π where 2sinx − 1 {"<"} 0.</span>} a="[0, π/6) ∪ (5π/6, 2π]" e={<WB>
      <MathLine size={14}>2sin x − 1 {"<"} 0 → sin x {"<"} 1/2</MathLine>
      <MathLine size={14}>sin x = 1/2 at x = π/6 and x = 5π/6</MathLine>
      <MathLine size={14}>At endpoints: 2sin(0) − 1 = −1 {"<"} 0 ✓ and 2sin(2π) − 1 = −1 {"<"} 0 ✓</MathLine>
      <Ans>[0, π/6) ∪ (5π/6, 2π]</Ans>
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
    <Accordion title="📐 Average Rate of Change (AROC)" defaultOpen={true}>
      <Fm label="Average Rate of Change">AROC = [ f(b) − f(a) ] / ( b − a )</Fm>
      <Sm>The average rate of change measures the <B>slope of the secant line</B> connecting two points on a function's graph. It tells you how fast (on average) the output changes per unit of input over an interval [a, b]. Think of it like calculating your average speed on a road trip: total distance ÷ total time.</Sm><br/>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">What the Sign Tells You</Tt><Sm>
        <B>Positive AROC</B> → the function is <B c="#22c55e">increasing</B> over that interval (output goes up as input goes up — like walking uphill)<br/><br/>
        <B>Negative AROC</B> → the function is <B c="#ef4444">decreasing</B> over that interval (output goes down as input goes up — like walking downhill)<br/><br/>
        <B>Zero AROC</B> → no net change over the interval (the function ends at the same height it started, though it may have gone up and down in between)
      </Sm></Box>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Concavity from AROC</Tt><Sm>
        <B>Concave up (cup shape ☕)</B> → the AROC values are <B c="#166534">increasing</B> over consecutive equal-length intervals. The function bends upward — it's speeding up.<br/><br/>
        <B>Concave down (frown shape ☹️)</B> → the AROC values are <B c="#991b1b">decreasing</B> over consecutive equal-length intervals. The function bends downward — it's slowing down.
      </Sm></Box>
      <Tp>On the AP exam, always include UNITS when computing AROC. The units are (output units) / (input units). For example: feet/second, dollars/year, people/hour.</Tp>
      <Wh>AROC is the foundation of calculus. The derivative (instantaneous rate of change) is just AROC with the interval shrunk to nearly zero. Mastering AROC now sets you up for success in AP Calculus.</Wh>
    </Accordion>
    <Accordion title="📊 Identifying Function Types from Tables">
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Successive Differences Test</Tt><Sm>
        Given data with <B>equally spaced</B> x-values, compute successive differences in the outputs to determine the degree:<br/><br/>
        <B>1st differences constant</B> → <B c="#166534">Linear</B> (degree 1) — the function adds the same amount each step<br/><br/>
        <B>2nd differences constant</B> → <B c="#166534">Quadratic</B> (degree 2) — the rate of change itself changes at a constant rate<br/><br/>
        <B>nᵗʰ differences constant</B> → <B c="#166534">Polynomial of degree n</B><br/><br/>
        <B c="#ef4444">Critical requirement: This test ONLY works when x-values are equally spaced!</B> If x goes 1, 2, 3, 4 — that works. If x goes 1, 3, 7, 10 — the test is invalid.
      </Sm></Box>
      <Sm>For <B>piecewise linear</B> data: look for a "break point" where the constant rate of change switches to a different constant rate. The data is linear on each piece, but with different slopes.</Sm>
      <Tp>On the AP exam free-response, always state your justification: "The first differences are constant at 5, so a linear model is appropriate" or "The second differences are constant at -6, indicating a quadratic model."</Tp>
    </Accordion>
    <Accordion title="📈 Polynomial Functions">
      <Fm label="Polynomial Standard Form">p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀</Fm>
      <Sm>A polynomial is a sum of terms where each term is a coefficient times x raised to a non-negative integer power. The <B>degree</B> (highest power of x) and <B>leading coefficient</B> (the number in front of that highest power) control the polynomial's overall shape and behavior.</Sm><br/>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Zeros, Factors, and Graph Behavior</Tt><Sm>
        <B>The Big Connection:</B> p(a) = 0 ↔ x = a is a zero ↔ (x − a) is a factor ↔ (a, 0) is an x-intercept<br/><br/>
        <B>Multiplicity 1 (odd)</B> → graph <B>crosses straight through</B> the x-axis<br/>
        <B>Multiplicity 2 (even)</B> → graph <B>bounces off</B> the x-axis (touches but doesn't cross)<br/>
        <B>Multiplicity 3+ (odd)</B> → graph <B>wiggles through</B> the x-axis (flattens, then crosses)<br/><br/>
        <B>Complex zeros</B> always come in conjugate pairs: if a + bi is a zero of a polynomial with real coefficients, then a − bi must also be a zero.
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">End Behavior — Which Way Do the Ends Go?</Tt><Sm>
        End behavior is controlled by the <B>leading term</B> (the term with the highest power of x):<br/><br/>
        <B>Even degree + positive LC</B> → both ends go UP ↑↑ (like a smile — think x²)<br/>
        <B>Even degree + negative LC</B> → both ends go DOWN ↓↓ (like a frown — think −x²)<br/>
        <B>Odd degree + positive LC</B> → left DOWN, right UP ↓↑ (think x³)<br/>
        <B>Odd degree + negative LC</B> → left UP, right DOWN ↑↓ (think −x³)<br/><br/>
        <B c="#be185d">Quick trick:</B> Look at the RIGHT end first. Positive LC → right goes UP. Negative LC → right goes DOWN. Then: even degree means left matches, odd degree means left is opposite.
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Even vs Odd Functions</Tt><Sm>
        <B>Even function:</B> f(-x) = f(x). Symmetric over the y-axis. All exponents are even (including constants, since x⁰ is even).<br/><br/>
        <B>Odd function:</B> f(-x) = -f(x). Symmetric about the origin. All exponents are odd.<br/><br/>
        <B>Neither:</B> if exponents are mixed (like x³ + x²), the function is neither even nor odd.
      </Sm></Box>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Extrema, Turning Points, and Inflection</Tt><Sm>
        <B>Local maximum:</B> function switches from increasing to decreasing (peak).<br/>
        <B>Local minimum:</B> function switches from decreasing to increasing (valley).<br/>
        <B>Global max/min:</B> the largest/smallest output among all local extrema and endpoints.<br/>
        <B>A degree-n polynomial has at most n - 1 turning points.</B><br/><br/>
        <B>Point of inflection:</B> where concavity changes (up to down or vice versa). NOT an extremum.
      </Sm></Box>
      <Tp>Use limit notation on the AP exam: write lim(x to infinity) p(x) = infinity, NOT just "goes up." A degree-n polynomial has exactly n zeros (counting complex zeros and multiplicity).</Tp>
    </Accordion>
    <Accordion title="📉 Rational Functions">
      <Fm label="Rational Function">r(x) = p(x) / q(x), where q(x) ≠ 0</Fm>
      <Sm>A rational function is a ratio of two polynomials. The relationship between the numerator degree (n) and denominator degree (d) determines the horizontal asymptote:</Sm><br/>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Horizontal Asymptotes</Tt><Sm>
        <B>n {"<"} d (numerator degree smaller):</B> HA at <B c="#4338ca">y = 0</B> — the numerator "loses" and outputs shrink toward zero<br/><br/>
        <B>n = d (degrees equal):</B> HA at <B c="#4338ca">y = (leading coeff of num) / (leading coeff of den)</B><br/><br/>
        <B>n {">"} d (numerator degree larger):</B> <B c="#ef4444">No horizontal asymptote</B>. If n = d + 1, there's a slant asymptote found by polynomial long division.
      </Sm></Box>
      <Box bg="#fef2f2" border="2px solid #fca5a5"><Tt c="#dc2626">Vertical Asymptotes, Holes, and Zeros</Tt><Sm>
        <B>Vertical Asymptote (VA):</B> denominator = 0 AND numerator ≠ 0 at that x-value. The graph shoots to ±∞.<br/><br/>
        <B>Hole:</B> the same factor appears in BOTH numerator and denominator and cancels. The graph has a missing point.<br/><br/>
        <B>Zeros (x-intercepts):</B> numerator = 0 at values where the denominator ≠ 0<br/><br/>
        <B>y-intercept:</B> plug in x = 0 (as long as x = 0 is in the domain)
      </Sm></Box>
      <Box bg="#faf5ff" border="2px solid #c4b5fd"><Tt c="#7c3aed">VA Multiplicity and One-Sided Limits</Tt><Sm>
        <B>Odd multiplicity VA</B> (factor appears 1, 3, 5... times in den): function goes in <B>opposite directions</B> on each side.<br/><br/>
        <B>Even multiplicity VA</B> (factor appears 2, 4, 6... times in den): function goes in the <B>same direction</B> on both sides.
      </Sm></Box>
      <Sm><B>Polynomial Long Division:</B> f(x) = g(x) · q(x) + r(x). The quotient q(x) gives the slant asymptote when numerator degree exceeds denominator degree by 1. Process: Divide, Multiply, Subtract, Repeat.</Sm>
      <Sm><B>Inverse Variation:</B> y = k/x, where k = x · y is the constant of proportionality. As x increases, y decreases. The graph is a hyperbola with asymptotes at x = 0 and y = 0.</Sm>
      <Tp>The graph CAN cross a horizontal asymptote in the middle of its domain — the HA only controls behavior at the far left and far right extremes.</Tp>
    </Accordion>
    <Accordion title="🔄 Transformations of Functions">
      <Fm label="General Transformation Form">g(x) = a · f( b(x − h) ) + k</Fm>
      <Sm>Every transformation of a parent function f(x) can be described by four parameters. Understanding which transformations are <B>inside</B> (affecting x, horizontal) vs <B>outside</B> (affecting y, vertical) is the key to getting these right on the AP exam.</Sm><br/>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">The Four Parameters</Tt><Sm>
        <B>a — Vertical dilation:</B> |a| {">"} 1 stretches taller, |a| {"<"} 1 compresses shorter. If a {"<"} 0, also reflects over the x-axis.<br/><br/>
        <B>b — Horizontal dilation:</B> The stretch factor is |1/b|. |b| {">"} 1 compresses narrower, |b| {"<"} 1 stretches wider. If b {"<"} 0, also reflects over the y-axis.<br/><br/>
        <B>h — Horizontal shift:</B> Positive h shifts RIGHT, negative h shifts LEFT. <B c="#ef4444">Warning: the sign is opposite of what you see inside the function!</B> f(x − 3) shifts RIGHT 3.<br/><br/>
        <B>k — Vertical shift:</B> Positive k shifts UP, negative k shifts DOWN.
      </Sm></Box>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Order of Transformations (MUST follow this order!)</Tt><Sm>
        <B c="#92400e">①</B> Horizontal dilation (apply b) → <B c="#92400e">②</B> Horizontal shift (apply h) → <B c="#92400e">③</B> Vertical dilation (apply a) → <B c="#92400e">④</B> Vertical shift (apply k)
      </Sm></Box>
    </Accordion>
    <Accordion title="📝 Binomial Theorem"><Sm>Pascal's Triangle row n for coefficients. Powers of a: n→0, b: 0→n. Negative b = alternating signs.</Sm></Accordion>
    <Accordion title="📐 Models"><Sm>Area(2D)=quadratic. Volume(3D)=cubic. Regression: calculator best fit. Residual=Actual-Predicted. Inverse: y=k/x.</Sm></Accordion>
  </div>);

  if(unit===1) return (<div>
    <Accordion title="📊 Arithmetic vs Geometric Sequences" defaultOpen={true}>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Arithmetic Sequences — Addition Pattern</Tt><Sm>
        An arithmetic sequence adds the <B>same value (d)</B> each time. Its graph forms discrete points on a <B>straight line</B>, making it the discrete version of a linear function.<br/><br/>
        <B>Formula from initial term:</B> aₙ = a₀ + d·n<br/>
        <B>Formula from any known term:</B> aₙ = aₖ + d·(n − k)<br/>
        <B>Finding d:</B> subtract any two consecutive terms: d = aₙ₊₁ − aₙ<br/><br/>
        <Sm>Remember: d can be positive (increasing) or negative (decreasing). The from-any-known-term formula is especially useful when the problem gives you a₁ instead of a₀.</Sm>
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Geometric Sequences — Multiplication Pattern</Tt><Sm>
        A geometric sequence multiplies by the <B>same value (r)</B> each time. Its graph forms discrete points on an <B>exponential curve</B>, making it the discrete version of an exponential function.<br/><br/>
        <B>Formula from initial term:</B> gₙ = g₀ · rⁿ<br/>
        <B>Formula from any known term:</B> gₙ = gₖ · r⁽ⁿ⁻ᵏ⁾<br/>
        <B>Finding r:</B> divide any term by the previous: r = gₙ₊₁ / gₙ<br/><br/>
        <B>r {">"} 1</B> → exponential growth · <B>0 {"<"} r {"<"} 1</B> → exponential decay · <B>r {"<"} 0</B> → alternating signs
      </Sm></Box>
      <Tp>Classification shortcut: given a table with equal x-spacing, check 1st differences (linear?), then ratios (exponential?), then 2nd differences (quadratic?). Work from simplest to most complex.</Tp>
    </Accordion>
    <Accordion title="📈 Exponential Functions & Exponent Rules">
      <Fm label="Exponential Function">f(x) = a · bˣ</Fm>
      <Sm>An exponential function multiplies its output by a constant factor (b) for every unit increase in x. This creates the characteristic curved growth (or decay) pattern seen everywhere in nature, finance, and science.</Sm><br/>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Exponential Properties</Tt><Sm>
        <B>a</B> = initial value (y-intercept — the output when x = 0, since b⁰ = 1)<br/><br/>
        <B>b</B> = base (the growth/decay factor — what you multiply by each time x increases by 1)<br/>
        → <B>b {">"} 1</B> means exponential GROWTH (outputs get larger)<br/>
        → <B>0 {"<"} b {"<"} 1</B> means exponential DECAY (outputs get smaller)<br/>
        → <B>Growth rate</B> = b − 1 (as decimal). Example: b = 1.07 means 7% growth per unit<br/><br/>
        <B>Domain:</B> all real numbers · <B>Range:</B> (0, ∞) if a {">"} 0 · <B>HA:</B> y = 0<br/>
        <B>With vertical shift:</B> f(x) = a·bˣ + k shifts the HA to y = k and range becomes (k, ∞)<br/><br/>
        <B>Horizontal shift equivalence:</B> f(x) = a·b^(x+h) = (a·b^h)·bˣ — horizontal translation equals vertical dilation<br/>
        <B>Time unit conversion:</B> To convert from small unit to big unit, raise the base to the conversion factor
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Exponent Rules — Your Toolkit</Tt><Sm>
        <B>Product rule:</B> bᵐ · bⁿ = b⁽ᵐ⁺ⁿ⁾ — same base? Add exponents<br/><br/>
        <B>Quotient rule:</B> bᵐ / bⁿ = b⁽ᵐ⁻ⁿ⁾ — same base? Subtract exponents<br/><br/>
        <B>Power rule:</B> (bᵐ)ⁿ = b⁽ᵐⁿ⁾ — power of a power? Multiply exponents<br/><br/>
        <B>Negative exponent:</B> b⁻ⁿ = 1/bⁿ — flip it to the denominator<br/><br/>
        <B>Zero exponent:</B> b⁰ = 1 (for any b ≠ 0) — everything to the zero is 1<br/><br/>
        <B>Fractional exponent:</B> b^(1/n) = ⁿ√b — fractional powers are roots
      </Sm></Box>
      <Box bg="#ecfdf5" border="2px solid #86efac"><Tt c="#166534">The Number e (Euler's Number)</Tt><Sm>
        <B>e ≈ 2.718</B> — an irrational number used for continuous growth/decay models<br/><br/>
        <B>f(x) = eˣ</B> is the natural exponential function. Key points: (0, 1) and (1, e ≈ 2.718)<br/><br/>
        <B>Continuous growth model:</B> f(t) = a·e^(kt) where k is the continuous growth rate<br/><br/>
        <B>Inverse:</B> The natural log ln(x) = log_e(x) undoes e to the x
      </Sm></Box>
    </Accordion>
    <Accordion title="📝 Logarithms — Definition, Properties & Rules">
      <Fm label="Logarithm Definition">log_b(c) = a ↔ bᵃ = c</Fm>
      <Sm>A logarithm answers the question: <B>"What power do I raise the base b to in order to get c?"</B> The log IS the exponent. Logarithms and exponentials are inverse operations — they undo each other.</Sm><br/>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Essential Log Facts</Tt><Sm>
        <B>log_b(1) = 0</B> always (because b⁰ = 1 for any base)<br/><br/>
        <B>log_b(b) = 1</B> always (because b¹ = b)<br/><br/>
        <B>Common log:</B> log(x) means log₁₀(x) — base 10 when no base is written<br/><br/>
        <B>Natural log:</B> ln(x) means log_e(x) where e ≈ 2.718 (Euler's number)<br/><br/>
        <B>Inverse relationship:</B> log_b(bˣ) = x and b^(log_b(x)) = x — they cancel each other
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Log Properties — How to Manipulate Logs</Tt><Sm>
        <B>Product property:</B> log(M · N) = log M + log N — multiply inside → add outside<br/><br/>
        <B>Quotient property:</B> log(M / N) = log M − log N — divide inside → subtract outside<br/><br/>
        <B>Power property:</B> log(Mⁿ) = n · log M — exponent comes down as a multiplier<br/><br/>
        <B>Change of base:</B> log_b(x) = log(x) / log(b) = ln(x) / ln(b) — convert to any base<br/><br/>
        <B c="#ef4444">CRITICAL WARNING: log(A + B) ≠ log A + log B</B> — there is absolutely NO rule for the log of a sum! This is the #1 log mistake on the AP exam.
      </Sm></Box>
      <Tp>When solving log equations, always check for extraneous solutions. The argument of a log MUST be positive. If your answer makes any log argument negative or zero, discard it.</Tp>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Inverse Relationships Summary</Tt><Sm>
        <B>Exponential to Log inverse:</B> f(x) = a·b^(x+h) + k → f⁻¹(x) = log_b((x-k)/a) - h<br/><br/>
        <B>Log to Exponential inverse:</B> f(x) = a·log_b(x+h) + k → f⁻¹(x) = b^((x-k)/a) - h<br/><br/>
        <B>Key principle:</B> To invert an exponential, use log. To invert a log, use exponential. They undo each other.
      </Sm></Box>
    </Accordion>
    <Accordion title="📉 Semi-Log Plots">
      <Sm>A semi-log plot has a logarithmic y-axis and a regular (linear) x-axis. The key insight is that <B>exponential data appears as a straight line</B> on a semi-log plot. This makes it easy to determine whether data is truly exponential.</Sm><br/>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Semi-Log Linear Model</Tt><Sm>
        <B>Semi-log form:</B> log(y) = (log b) · x + log(a)<br/><br/>
        This has the form y = mx + c where:<br/>
        <B>Slope m</B> = log(b) → find b by computing 10^(slope)<br/>
        <B>y-intercept c</B> = log(a) → find a by computing 10^(y-intercept)<br/><br/>
        <B>Testing model fit:</B> If data points form a straight line on the semi-log plot → exponential model IS appropriate. If they curve or scatter → exponential is NOT appropriate.<br/><br/>
        <B>Residuals:</B> actual − predicted. Random scatter → good fit. Clear pattern (U-shape, wave) → wrong model type.
      </Sm></Box>
      <Tp>To recover the exponential model from a semi-log linear equation: if slope = m, then b = 10^m. If y-intercept = c, then a = 10^c. So f(x) = 10^c times (10^m)^x.</Tp>
      <Wh>Semi-log plots are used in science and medicine to visualize data spanning many orders of magnitude. Earthquake magnitudes (Richter scale), sound intensity (decibels), and pH are all logarithmic scales.</Wh>
    </Accordion>
  </div>);

  if(unit===2) return (<div>
    <Accordion title="⭕ Unit Circle Foundations" defaultOpen={true}>
      <Sm>The unit circle is a circle with radius 1 centered at the origin. Every point on the unit circle can be written as (cos θ, sin θ). <B>This is the single most important concept in trigonometry</B> — everything else builds on it.</Sm><br/>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Core Definitions</Tt><Sm>
        <B>sin θ = y-coordinate</B> (the vertical component — how high or low the point is)<br/><br/>
        <B>cos θ = x-coordinate</B> (the horizontal component — how far left or right)<br/><br/>
        <B>tan θ = y/x = sin θ / cos θ</B> (the slope of the line from the origin to the point)<br/><br/>
        <B>For any circle of radius r:</B> x = r·cos θ and y = r·sin θ (scale the unit circle by r)
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
      <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Signs by Quadrant — ASTC Rule</Tt><Sm>
        <B>Quadrant I:</B> ALL trig functions are positive (both x and y are positive)<br/>
        <B>Quadrant II:</B> only SIN is positive (y is positive, x is negative)<br/>
        <B>Quadrant III:</B> only TAN is positive (both x and y are negative, so y/x is positive)<br/>
        <B>Quadrant IV:</B> only COS is positive (x is positive, y is negative)<br/><br/>
        Mnemonic: <B>"All Students Take Calculus"</B> (A-S-T-C going counterclockwise from Q1)
      </Sm></Box>
    </Accordion>
    <Accordion title="〰️ Sinusoidal Functions (Sine & Cosine)">
      <Fm label="Sinusoidal Function">f(θ) = a · sin( b(θ + c) ) + d</Fm>
      <Sm>Sinusoidal functions model any wave-like periodic behavior: sound waves, tides, temperatures, Ferris wheels, and more. Each parameter controls a specific aspect of the wave.</Sm><br/>
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">The Four Parameters Explained</Tt><Sm>
        <B>|a| = Amplitude</B> — the height from the midline to the peak (or trough). Calculated as (max − min) / 2. A negative value of a reflects the graph over the midline (flips the wave upside down).<br/><br/>
        <B>b = Frequency factor</B> — controls how many cycles fit in a given interval. Period = 2π / |b|. A larger |b| means more frequent oscillations (shorter period).<br/><br/>
        <B>c = Phase shift</B> — shifts the graph horizontally. Positive c shifts LEFT, negative c shifts RIGHT (same opposite-direction rule as other transformations).<br/><br/>
        <B>d = Midline (vertical shift)</B> — the horizontal line the wave oscillates around. Calculated as (max + min) / 2. The range becomes [d − |a|, d + |a|].
      </Sm></Box>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Building Sinusoidal Models from Data</Tt><Sm>
        <B>Step 1:</B> Find amplitude = (max − min) / 2<br/>
        <B>Step 2:</B> Find midline d = (max + min) / 2<br/>
        <B>Step 3:</B> Find period from data, then b = 2π / period<br/>
        <B>Step 4:</B> Choose sin vs cos: starts at max → cos · at min → −cos · at midline going up → sin · at midline going down → −sin
      </Sm></Box>
      <Tp>Max to NEXT max = full period. Max to min = only HALF the period. This is the #1 AP exam trap!</Tp>
    </Accordion>
    <Accordion title="📐 Tangent, Reciprocals & Inverse Trig">
      <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Tangent Function</Tt><Sm>
        <B>Period:</B> π/|b| (NOT 2π — tangent repeats twice as fast as sine/cosine!)<br/><br/>
        <B>Vertical Asymptotes:</B> where cos θ = 0 → at θ = π/2 + kπ for integer k<br/><br/>
        <B>Key behavior:</B> always increasing between consecutive VAs, with an inflection point at each x-intercept
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Reciprocal Functions</Tt><Sm>
        <B>sec θ = 1/cos θ</B> — undefined where cos θ = 0 (at the VAs of tangent)<br/><br/>
        <B>csc θ = 1/sin θ</B> — undefined where sin θ = 0 (at integer multiples of π)<br/><br/>
        <B>cot θ = cos θ / sin θ = 1/tan θ</B> — undefined where sin θ = 0
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Inverse Trig Function Ranges (MUST memorize!)</Tt><Sm>
        <B>sin⁻¹(x):</B> range [−π/2, π/2] — outputs in Q1 and Q4 only<br/><br/>
        <B>cos⁻¹(x):</B> range [0, π] — outputs in Q1 and Q2 only<br/><br/>
        <B>tan⁻¹(x):</B> range (−π/2, π/2) — outputs in Q1 and Q4 only (open interval, never reaches ±π/2)
      </Sm></Box>
    </Accordion>
    <Accordion title="🔺 Trigonometric Identities">
      <Box bg="#fef3c7" border="2px solid #fcd34d"><Tt c="#92400e">Pythagorean Identities</Tt><Sm>
        <B>sin²θ + cos²θ = 1</B> — the fundamental identity (comes directly from the unit circle: x² + y² = 1)<br/><br/>
        <B>1 + tan²θ = sec²θ</B> — divide the fundamental identity by cos²θ<br/><br/>
        <B>1 + cot²θ = csc²θ</B> — divide the fundamental identity by sin²θ
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Double Angle Identities</Tt><Sm>
        <B>sin(2θ) = 2 sin θ cos θ</B><br/><br/>
        <B>cos(2θ)</B> has THREE equivalent forms:<br/>
        = cos²θ − sin²θ<br/>
        = 2cos²θ − 1<br/>
        = 1 − 2sin²θ<br/><br/>
        Choose the form based on what information you have or what simplification you need.
      </Sm></Box>
      <Box bg="#fce7f3" border="2px solid #f9a8d4"><Tt c="#be185d">Sum and Difference Identities</Tt><Sm>
        <B>sin(α ± β) = sin α · cos β ± cos α · sin β</B> — the sign in front of the second term MATCHES<br/><br/>
        <B>cos(α ± β) = cos α · cos β ∓ sin α · sin β</B> — the sign in front of the second term is <B c="#ef4444">OPPOSITE</B> (this is the tricky one!)
      </Sm></Box>
    </Accordion>
    <Accordion title="🌀 Polar Coordinates & Curves">
      <Box bg="#fffbeb" border="2px solid #fcd34d"><Tt c="#92400e">Converting Between Coordinate Systems</Tt><Sm>
        <B>Polar → Rectangular:</B> x = r · cos θ, y = r · sin θ<br/><br/>
        <B>Rectangular → Polar:</B> r = √(x² + y²), θ = arctan(y/x) — but you MUST adjust θ for the correct quadrant (arctan only gives Q1/Q4 answers)
      </Sm></Box>
      <Box bg="#eef2ff" border="2px solid #a5b4fc"><Tt c="#4338ca">Common Polar Curve Types</Tt><Sm>
        <B>Circles:</B> r = a (centered at origin), r = a·sin θ or r = a·cos θ (passing through origin)<br/><br/>
        <B>Limaçons:</B> r = a + b·sin θ or r = a + b·cos θ<br/>
        → |a| = |b| → <B>cardioid</B> (heart shape)<br/>
        → |a| {"<"} |b| → limaçon with <B>inner loop</B><br/>
        → |a| {">"} |b| → <B>dimpled</B> limaçon (no inner loop)<br/><br/>
        <B>Rose curves:</B> r = a·sin(bθ) or r = a·cos(bθ)<br/>
        → b is odd → <B>b petals</B>, domain [0, π]<br/>
        → b is even → <B>2b petals</B>, domain [0, 2π]
      </Sm></Box>
      <Box bg="#f0fdf4" border="2px solid #86efac"><Tt c="#166534">Rates of Change in Polar</Tt><Sm>
        When r is <B>positive and increasing</B> → the point moves <B>away</B> from the origin (distance increases)<br/><br/>
        When r is <B>positive and decreasing</B> → the point moves <B>toward</B> the origin (distance decreases)<br/><br/>
        When r is <B>negative and decreasing (more negative)</B> → distance from origin <B>increases</B><br/><br/>
        When r is <B>negative and increasing (less negative)</B> → distance from origin <B>decreases</B><br/><br/>
        <B>AROC in polar:</B> [r(θ₂) − r(θ₁)] / (θ₂ − θ₁)<br/>
        <B>Linear estimation:</B> r(θ) ≈ r(θ₁) + AROC · (θ − θ₁)
      </Sm></Box>
      <Wh>The key insight: distance from origin = |r|, not r. When r is negative and getting MORE negative, the actual distance is INCREASING. Always think about |r| when asked about distance.</Wh>
      <Tp>On the AP exam, always specify units for polar AROC: (distance units) per radian. The linear estimation formula is just a tangent line approximation — it works best over small intervals.</Tp>
    </Accordion>
  </div>);

  return null;
};

// ─── APP ───
export default function App(){
  const [ui,setUi]=useState(0);
  const [tab,setTab]=useState("learn");
  const [ti,setTi]=useState(0);
  const [si,setSi]=useState(0);
  const [pi,setPi]=useState(0);
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

  // Practice pagination
  const currentPractice=practice.find(p=>p.id===t.id)||practice[0];
  const practiceProblems=currentPractice.problems;
  const totalProblems=Array.isArray(practiceProblems)?practiceProblems.length:0;

  const next=()=>{if(si<activeSlides.length-1)setSi(si+1);};
  const prev=()=>{if(si>0)setSi(si-1);};
  const sel=(i)=>{setTi(i);setSi(0);setPi(0);setMo(false);};
  const switchUnit=(i)=>{setUi(i);setTi(0);setSi(0);setPi(0);setTab("learn");};

  const unitColors = ["#1e40af","#7c3aed","#0d9488"];
  const tabList=[["learn","Learn"],["examples","Examples"],["practice","Practice"],["formulas","Formulas"]];
  const isSlideTab=tab==="learn"||tab==="examples";

  return(
    <div style={{height:"100vh",background:"#e2e8f0",fontFamily:"'Segoe UI','Helvetica Neue',Arial,sans-serif",padding:"10px 24px",boxSizing:"border-box",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      {/* Unit Selector */}
      <div style={{display:"flex",gap:0,marginBottom:6,flexShrink:0}}>
        {allUnits.map((u,i)=>(
          <button key={i} onClick={()=>switchUnit(i)} style={{flex:1,padding:"6px 10px",border:"none",borderRight:i<2?"1px solid #475569":"none",background:ui===i?"#1e293b":"#f1f5f9",color:ui===i?"#fff":"#475569",fontWeight:ui===i?700:500,fontSize:11,cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3}}>
            Unit {u.id}: {u.name}
          </button>
        ))}
      </div>
      {/* Topic Dropdown */}
      {tab!=="formulas"&&<div style={{position:"relative",marginBottom:6,flexShrink:0}}>
        <button onClick={()=>setMo(!mo)} style={{width:"100%",padding:"7px 16px",background:"#1e293b",color:"#e2e8f0",border:"none",fontSize:12,fontWeight:600,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span>{t.id} — {t.name} {isSlideTab?`(${activeSlides.length} slides)`:tab==="practice"?`(${totalProblems} problems)`:""}</span><span style={{fontSize:12,color:"#94a3b8"}}>{mo?"▲":"▼"}</span>
        </button>
        {mo&&<div style={{position:"absolute",top:"100%",left:0,right:0,background:"#fff",boxShadow:"0 12px 40px rgba(0,0,0,0.18)",zIndex:10,maxHeight:400,overflowY:"auto",marginTop:2,border:"1px solid #cbd5e1"}}>
          {topics.map((x,i)=>{const cnt=isSlideTab?getSlides(x,tab).length:x.slides.length;return(
            <div key={i} onClick={()=>sel(i)} style={{padding:"8px 16px",cursor:"pointer",borderBottom:"1px solid #f1f5f9",background:i===ti?"#f1f5f9":"#fff",fontSize:12,display:"flex",justifyContent:"space-between",transition:"background 0.15s"}}>
            <span style={{fontWeight:i===ti?700:400,color:i===ti?"#1e293b":"#475569"}}>{x.id} — {x.name}</span>
            {isSlideTab&&<span style={{fontSize:10,color:"#94a3b8",fontWeight:600}}>{cnt}</span>}
          </div>)})}
        </div>}
      </div>}
      {/* Tab Selector */}
      <div style={{display:"flex",gap:0,marginBottom:6,flexShrink:0}}>
        {tabList.map(([k,l])=>
          <button key={k} onClick={()=>{setTab(k);setSi(0);setPi(0);}} style={{flex:1,padding:"6px",border:"none",background:tab===k?"#1e293b":"#cbd5e1",color:tab===k?"#fff":"#475569",fontWeight:tab===k?700:500,fontSize:11,cursor:"pointer",transition:"all 0.15s",letterSpacing:0.5,textTransform:"uppercase"}}>{l}</button>)}
      </div>
      {/* Progress Bar */}
      {isSlideTab&&activeSlides.length>0&&<div style={{height:2,background:"#cbd5e1",overflow:"hidden",marginBottom:6,flexShrink:0}}>
        <div style={{width:`${(si/Math.max(activeSlides.length-1,1))*100}%`,height:"100%",background:unitColors[ui],transition:"width 0.3s"}}/></div>}
      {tab==="practice"&&totalProblems>0&&<div style={{height:2,background:"#cbd5e1",overflow:"hidden",marginBottom:6,flexShrink:0}}>
        <div style={{width:`${(pi/Math.max(totalProblems-1,1))*100}%`,height:"100%",background:unitColors[ui],transition:"width 0.3s"}}/></div>}
      {/* Formula Sheet */}
      {tab==="formulas"&&<div style={{flex:1,minHeight:0,background:"#fff",boxShadow:"0 1px 8px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{background:"#1e293b",padding:"10px 28px",flexShrink:0}}>
          <div style={{color:"#94a3b8",fontSize:9,fontWeight:600,letterSpacing:2,textTransform:"uppercase",marginBottom:2}}>Reference Sheet</div>
          <div style={{color:"#fff",fontSize:15,fontWeight:600,fontFamily:"'Georgia',serif"}}>Unit {unit.id}: {unit.name} — Formulas & Key Concepts</div>
        </div>
        <div style={{padding:"20px 32px",flex:1,minHeight:0,overflowY:"auto"}}><FormulaSheet unit={ui}/></div>
      </div>}
      {/* Content Card */}
      {tab!=="formulas"&&<div style={{flex:1,minHeight:0,background:"#fff",boxShadow:"0 1px 8px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
        {/* Fixed Header */}
        <div style={{background:"#1e293b",padding:"10px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
          <div><span style={{color:"#94a3b8",fontSize:9,fontWeight:600,letterSpacing:2,textTransform:"uppercase"}}>TOPIC {t.id}</span>
            <div style={{color:"#fff",fontSize:15,fontWeight:600,fontFamily:"'Georgia',serif",marginTop:1}}>{isSlideTab?s.title:tab==="practice"?`Practice — ${t.name}`:s.title}</div></div>
          {isSlideTab&&<div style={{color:"#64748b",fontSize:11,textAlign:"right",fontWeight:600,fontFamily:"sans-serif"}}>{si+1} / {activeSlides.length}</div>}
          {tab==="practice"&&totalProblems>0&&<div style={{color:"#64748b",fontSize:11,textAlign:"right",fontWeight:600}}>Problem {pi+1} / {totalProblems}</div>}
        </div>
        {/* Scrollable Content */}
        <div style={{padding:"28px 40px",flex:1,minHeight:0,overflowY:"auto"}}>
          {tab==="practice"?<div>
            <div style={{borderLeft:"3px solid #94a3b8",paddingLeft:16,marginBottom:20}}>
              <div style={{fontSize:13,color:"#64748b",lineHeight:1.7}}>Work each problem on paper first. When you are ready, reveal the answer to check your work, then view the full worked solution.</div>
            </div>
            {totalProblems>0&&Array.isArray(practiceProblems)?practiceProblems[pi]:practiceProblems}
          </div>:s.content}
        </div>
        {/* Fixed Slide Navigation */}
        {isSlideTab&&<div style={{padding:"6px 28px 8px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #e2e8f0",flexShrink:0,background:"#f8fafc"}}>
          <button onClick={prev} disabled={si===0} style={{padding:"5px 16px",border:si===0?"1px solid #e2e8f0":"1px solid #1e293b",background:si===0?"transparent":"#1e293b",color:si===0?"#94a3b8":"#fff",fontWeight:600,fontSize:11,cursor:si===0?"default":"pointer",transition:"all 0.15s"}}>← Back</button>
          <div style={{display:"flex",gap:3}}>{activeSlides.map((_,i)=><div key={i} onClick={()=>setSi(i)} style={{width:i===si?18:6,height:6,borderRadius:3,background:i===si?"#1e293b":"#cbd5e1",cursor:"pointer",transition:"all 0.2s"}}/>)}</div>
          <button onClick={next} disabled={si===activeSlides.length-1} style={{padding:"5px 16px",border:si===activeSlides.length-1?"1px solid #e2e8f0":"1px solid #1e293b",background:si===activeSlides.length-1?"transparent":"#1e293b",color:si===activeSlides.length-1?"#94a3b8":"#fff",fontWeight:600,fontSize:11,cursor:si===activeSlides.length-1?"default":"pointer",transition:"all 0.15s"}}>Next →</button>
        </div>}
        {/* Fixed Practice Navigation */}
        {tab==="practice"&&totalProblems>1&&<div style={{padding:"6px 28px 8px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #e2e8f0",flexShrink:0,background:"#f8fafc"}}>
          <button onClick={()=>setPi(Math.max(0,pi-1))} disabled={pi===0} style={{padding:"5px 16px",border:pi===0?"1px solid #e2e8f0":"1px solid #1e293b",background:pi===0?"transparent":"#1e293b",color:pi===0?"#94a3b8":"#fff",fontWeight:600,fontSize:11,cursor:pi===0?"default":"pointer",transition:"all 0.15s"}}>← Previous</button>
          <div style={{display:"flex",gap:3}}>{Array.from({length:totalProblems}).map((_,i)=><div key={i} onClick={()=>setPi(i)} style={{width:i===pi?18:6,height:6,borderRadius:3,background:i===pi?"#1e293b":"#cbd5e1",cursor:"pointer",transition:"all 0.2s"}}/>)}</div>
          <button onClick={()=>setPi(Math.min(totalProblems-1,pi+1))} disabled={pi===totalProblems-1} style={{padding:"5px 16px",border:pi===totalProblems-1?"1px solid #e2e8f0":"1px solid #1e293b",background:pi===totalProblems-1?"transparent":"#1e293b",color:pi===totalProblems-1?"#94a3b8":"#fff",fontWeight:600,fontSize:11,cursor:pi===totalProblems-1?"default":"pointer",transition:"all 0.15s"}}>Next →</button>
        </div>}
      </div>}
    </div>
  );
}
