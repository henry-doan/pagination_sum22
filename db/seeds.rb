["4th Dimension/4D","ABAP","ABC","ActionScript","Ada","Agilent VEE","Algol","Alice","Angelscript","Apex","APL","AppleScript","Arc","Arduino","ASP","AspectJ","Assembly","ATLAS","Augeas","AutoHotkey","AutoIt","AutoLISP","Automator","Avenue","Awk","Bash","(Visual) Basic","bc","BCPL","BETA","BlitzMax","Boo","Bourne Shell","Bro","C","C Shell","C#","C++","C++/CLI","C-Omega","Caml","Ceylon","CFML","cg","Ch","CHILL","CIL","CL (OS/400)","Clarion","Clean","Clipper","Clojure","CLU","COBOL","Cobra","CoffeeScript","ColdFusion","COMAL","Common Lisp","Coq","cT","Curl","D","Dart","DCL","DCPU-16 ASM","Delphi/Object Pascal","DiBOL","Dylan","E","eC","Ecl","ECMAScript","EGL","Eiffel","Elixir","Emacs Lisp","Erlang","Etoys","Euphoria","EXEC","F#","Factor","Falcon","Fancy","Fantom","Felix","Forth","Fortran","Fortress","(Visual) FoxPro","Gambas","GNU Octave","Go","Google AppsScript","Gosu","Groovy","Haskell","haXe","Heron","HPL","HyperTalk","Icon","IDL","Inform","Informix-4GL","INTERCAL","Io","Ioke","J","J#","JADE","Java","Java FX Script","JavaScript","JScript","JScript.NET","Julia","Korn Shell","Kotlin","LabVIEW","Ladder Logic","Lasso","Limbo","Lingo","Lisp","Logo","Logtalk","LotusScript","LPC","Lua","Lustre","M4","MAD","Magic","Magik","Malbolge","MANTIS","Maple","Mathematica","MATLAB","Max/MSP","MAXScript","MEL","Mercury","Mirah","Miva","ML","Monkey","Modula-2","Modula-3","MOO","Moto","MS-DOS Batch","MUMPS","NATURAL","Nemerle","Nimrod","NQC","NSIS","Nu","NXT-G","Oberon","Object Rexx","Objective-C","Objective-J","OCaml","Occam","ooc","Opa","OpenCL","OpenEdge ABL","OPL","Oz","Paradox","Parrot","Pascal","Perl","PHP","Pike","PILOT","PL/I","PL/SQL","Pliant","PostScript","POV-Ray","PowerBasic","PowerScript","PowerShell","Processing","Prolog","Puppet","Pure Data","Python","Q","R","Racket","REALBasic","REBOL","Revolution","REXX","RPG (OS/400)","Ruby","Rust","S","S-PLUS","SAS","Sather","Scala","Scheme","Scilab","Scratch","sed","Seed7","Self","Shell","SIGNAL","Simula","Simulink","Slate","Smalltalk","Smarty","SPARK","SPSS","SQR","Squeak","Squirrel","Standard ML","Suneido","SuperCollider","TACL","Tcl","Tex","thinBasic","TOM","Transact-SQL","Turing","TypeScript","Vala/Genie","VBScript","Verilog","VHDL","VimL","Visual Basic .NET","WebDNA","Whitespace","X10","xBase","XBase++","Xen","XPL","XSLT","XQuery","yacc","Yorick","Z shell"].each do |name|
 User.first.languages.create!(name: name)
end