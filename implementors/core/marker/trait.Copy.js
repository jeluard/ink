(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl&lt;T&gt; Copy for ReturnType&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for Set&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Copy for Unset&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Selector","synthetic":false,"types":[]},{"text":"impl Copy for Sha2x256","synthetic":false,"types":[]},{"text":"impl Copy for Keccak256","synthetic":false,"types":[]},{"text":"impl Copy for Blake2x256","synthetic":false,"types":[]},{"text":"impl Copy for Blake2x128","synthetic":false,"types":[]},{"text":"impl Copy for AccountId","synthetic":false,"types":[]},{"text":"impl Copy for Hash","synthetic":false,"types":[]}];
implementors["ink_lang"] = [{"text":"impl&lt;'a, T:&nbsp;Copy&gt; Copy for EnvAccess&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["ink_lang_ir"] = [{"text":"impl Copy for ExtensionId","synthetic":false,"types":[]},{"text":"impl Copy for CallableKind","synthetic":false,"types":[]},{"text":"impl&lt;C&gt; Copy for CallableWithSelector&lt;'_, C&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Receiver","synthetic":false,"types":[]},{"text":"impl Copy for Selector","synthetic":false,"types":[]}];
implementors["ink_metadata"] = [{"text":"impl Copy for Discriminant","synthetic":false,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl Copy for Key","synthetic":false,"types":[]},{"text":"impl Copy for KeyPtr","synthetic":false,"types":[]}];
implementors["ink_storage"] = [{"text":"impl Copy for DynamicAllocation","synthetic":false,"types":[]},{"text":"impl Copy for ContractPhase","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy&gt; Copy for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout + Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for Reverse&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for ChunkRef&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for BitsIter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, K:&nbsp;Copy, V:&nbsp;Copy, H:&nbsp;Copy&gt; Copy for Iter&lt;'a, K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, K:&nbsp;Copy, V:&nbsp;Copy, H:&nbsp;Copy&gt; Copy for Values&lt;'a, K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, K:&nbsp;Copy&gt; Copy for Keys&lt;'a, K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy, N:&nbsp;Copy&gt; Copy for Iter&lt;'a, T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: LazyArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy&gt; Copy for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Copy for VacantEntry","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy&gt; Copy for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for Memory&lt;T&gt;","synthetic":false,"types":[]}];
implementors["scale_info"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"scale_info/form/enum.MetaForm.html\" title=\"enum scale_info::form::MetaForm\">MetaForm</a>","synthetic":false,"types":["scale_info::form::MetaForm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"scale_info/form/enum.CompactForm.html\" title=\"enum scale_info::form::CompactForm\">CompactForm</a>","synthetic":false,"types":["scale_info::form::CompactForm"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"scale_info/interner/struct.UntrackedSymbol.html\" title=\"struct scale_info::interner::UntrackedSymbol\">UntrackedSymbol</a>&lt;T&gt;","synthetic":false,"types":["scale_info::interner::UntrackedSymbol"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"scale_info/interner/struct.Symbol.html\" title=\"struct scale_info::interner::Symbol\">Symbol</a>&lt;'a, T&gt;","synthetic":false,"types":["scale_info::interner::Symbol"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"scale_info/struct.MetaType.html\" title=\"struct scale_info::MetaType\">MetaType</a>","synthetic":false,"types":["scale_info::meta_type::MetaType"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()