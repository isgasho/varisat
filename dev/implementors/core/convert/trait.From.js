(function() {var implementors = {};
implementors["varisat"] = [{text:"impl&lt;F, I, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;F&gt; for <a class=\"struct\" href=\"varisat/cnf/struct.CnfFormula.html\" title=\"struct varisat::cnf::CnfFormula\">CnfFormula</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = L&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"varisat/lit/struct.Lit.html\" title=\"struct varisat::lit::Lit\">Lit</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;L&gt;,&nbsp;</span>",synthetic:false,types:["varisat::cnf::CnfFormula"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"varisat/prop/graph/enum.Conflict.html\" title=\"enum varisat::prop::graph::Conflict\">Conflict</a>&gt; for <a class=\"enum\" href=\"varisat/cdcl/enum.FoundConflict.html\" title=\"enum varisat::cdcl::FoundConflict\">FoundConflict</a>",synthetic:false,types:["varisat::cdcl::FoundConflict"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()