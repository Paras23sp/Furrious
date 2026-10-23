 const D = [
      ["Aero ANC Headphones", "Audio", "headphones", "#2f5bff", [["KartKing", 5999, 20, 0, 10, 12], ["ShopSphere", 5499, 10, 99, 7, 12], ["BazaarBay", 6299, 30, 49, 15, 18]]],
      ["Pulse Smartwatch", "Wearables", "watch", "#7b3fe4", [["KartKing", 3499, 15, 49, 7, 12], ["ShopSphere", 3299, 5, 0, 10, 6], ["BazaarBay", 3799, 25, 79, 10, 12]]],
      ["Stride Runner Sneakers", "Fashion", "shoe", "#0f9d58", [["KartKing", 2999, 30, 0, 30, 3], ["ShopSphere", 3299, 35, 99, 15, 3], ["BazaarBay", 2799, 10, 0, 10, 6]]],
      ["Slate 14 Laptop", "Computers", "laptop", "#3a506b", [["KartKing", 54990, 10, 0, 10, 12], ["ShopSphere", 52990, 5, 0, 7, 12], ["BazaarBay", 56990, 15, 299, 15, 24]]],
      ["Nova X Smartphone", "Mobiles", "phone", "#f2a900", [["KartKing", 24999, 12, 0, 7, 12], ["ShopSphere", 23999, 8, 0, 10, 12], ["BazaarBay", 25999, 18, 99, 10, 12]]],
      ["Trek 30L Backpack", "Travel", "backpack", "#e0457b", [["KartKing", 1799, 40, 79, 10, 6], ["ShopSphere", 1599, 25, 0, 7, 12], ["BazaarBay", 1999, 50, 49, 15, 6]]],
      ["Brew Mini Coffee Maker", "Home", "coffee", "#00a6a6", [["KartKing", 3299, 20, 99, 7, 12], ["ShopSphere", 2999, 10, 0, 10, 24], ["BazaarBay", 3499, 30, 0, 10, 12]]],
      ["Lens Pro Mirrorless Camera", "Cameras", "camera", "#5c6b73", [["KartKing", 45999, 8, 0, 10, 12], ["ShopSphere", 47999, 12, 0, 7, 24], ["BazaarBay", 44999, 5, 199, 15, 12]]]
    ].map(([name, cat, type, col, o]) => ({ name, cat, type, col, offers: o.map(([store, price, disc, del, ret, war]) => ({ store, price, disc, del, ret, war, total: Math.round(price * (1 - disc / 100)) + del })) }));
    const inr = n => "₹" + n.toLocaleString("en-IN");
    const best = p => [...p.offers].sort((a, b) => a.total - b.total)[0];
    const S = (c, body) => `<svg viewBox="0 0 200 160" role="img" aria-hidden="true"><ellipse cx="100" cy="146" rx="62" ry="7" fill="#000" opacity=".12"/>${body.replaceAll("C", c)}</svg>`;
    const ART = {
      headphones: `<path d="M42 96V84a58 58 0 0 1 116 0v12" fill="none" stroke="C" stroke-width="10" stroke-linecap="round"/><rect x="30" y="90" width="28" height="46" rx="13" fill="C"/><rect x="142" y="90" width="28" height="46" rx="13" fill="C"/><rect x="36" y="100" width="10" height="26" rx="5" fill="#fff" opacity=".35"/><rect x="154" y="100" width="10" height="26" rx="5" fill="#fff" opacity=".35"/>`,
      watch: `<rect x="76" y="14" width="48" height="132" rx="14" fill="#14213d" opacity=".85"/><rect x="58" y="42" width="84" height="84" rx="24" fill="C"/><rect x="66" y="50" width="68" height="68" rx="18" fill="#101826"/><circle cx="100" cy="84" r="24" fill="none" stroke="#fff" stroke-width="3" opacity=".5"/><path d="M100 84V68M100 84l12 6" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="142" y="70" width="6" height="16" rx="3" fill="C"/>`,
      shoe: `<path d="M22 108c0-14 6-22 16-24l18-4c8-2 12-8 14-18l24 10c6 3 12 6 22 8l32 8c14 4 24 10 24 22v8H22z" fill="C"/><path d="M20 120h160v12a8 8 0 0 1-8 8H28a8 8 0 0 1-8-8z" fill="#fff"/><path d="M78 80l10 8M92 86l10 8M106 92l10 7" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M30 108h40" stroke="#fff" stroke-width="4" opacity=".4" stroke-linecap="round"/>`,
      laptop: `<rect x="42" y="30" width="116" height="78" rx="9" fill="#1b2538"/><rect x="48" y="36" width="104" height="66" rx="5" fill="C"/><path d="M48 90l30-26 22 18 20-14 32 26v8H48z" fill="#fff" opacity=".28"/><path d="M20 112h160l-10 18a8 8 0 0 1-7 4H37a8 8 0 0 1-7-4z" fill="#aab4c8"/><rect x="82" y="112" width="36" height="5" rx="2.5" fill="#7d889e"/>`,
      phone: `<rect x="62" y="12" width="76" height="136" rx="16" fill="#1b2538"/><rect x="68" y="20" width="64" height="120" rx="11" fill="C"/><circle cx="100" cy="30" r="3" fill="#1b2538"/><circle cx="100" cy="82" r="20" fill="#fff" opacity=".35"/><rect x="76" y="112" width="48" height="8" rx="4" fill="#fff" opacity=".45"/>`,
      backpack: `<path d="M72 36a28 28 0 0 1 56 0" fill="none" stroke="#14213d" stroke-width="8"/><rect x="48" y="40" width="104" height="100" rx="34" fill="C"/><rect x="68" y="92" width="64" height="36" rx="12" fill="#fff" opacity=".3"/><rect x="92" y="52" width="16" height="30" rx="8" fill="#14213d" opacity=".35"/><path d="M68 110h64" stroke="#fff" stroke-width="3" opacity=".6"/>`,
      coffee: `<rect x="46" y="20" width="92" height="120" rx="12" fill="C"/><rect x="58" y="34" width="68" height="30" rx="8" fill="#fff" opacity=".3"/><rect x="62" y="96" width="60" height="44" rx="6" fill="#1b2538"/><path d="M72 96h40v22a20 14 0 0 1-40 0z" fill="#fff" opacity=".85"/><path d="M140 100h8a10 10 0 0 1 0 22h-8" fill="none" stroke="#fff" stroke-width="5" opacity=".0"/><path d="M92 76c-4-6 4-8 0-14M104 76c-4-6 4-8 0-14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,
      camera: `<path d="M70 44l8-14h44l8 14z" fill="#1b2538"/><rect x="24" y="42" width="152" height="94" rx="16" fill="C"/><rect x="24" y="42" width="152" height="26" rx="14" fill="#fff" opacity=".18"/><circle cx="100" cy="92" r="36" fill="#1b2538"/><circle cx="100" cy="92" r="26" fill="#2b3a57"/><circle cx="100" cy="92" r="13" fill="C"/><circle cx="92" cy="84" r="5" fill="#fff" opacity=".6"/><circle cx="154" cy="58" r="5" fill="#fff"/>`
    };
    const img = p => S(p.col, ART[p.type]);
    let cat = "All", term = "";
    const $ = id => document.getElementById(id);
    const chips = $("chips");
    ["All", ...new Set(D.map(p => p.cat))].forEach(c => { const b = document.createElement("button"); b.className = "chip"; b.textContent = c; b.setAttribute("aria-pressed", c === "All"); b.onclick = () => { cat = c;[...chips.children].forEach(x => x.setAttribute("aria-pressed", x === b)); render() }; chips.append(b) });
    function render() {
      const k = $("sort").value;
      const key = { cost: p => best(p).total, war: p => -Math.max(...p.offers.map(o => o.war)), ret: p => -Math.max(...p.offers.map(o => o.ret)) }[k];
      const list = D.filter(p => (cat === "All" || p.cat === cat) && (p.name + p.cat).toLowerCase().includes(term)).sort((a, b) => key(a) - key(b));
      $("grid").innerHTML = list.length ? list.map((p, i) => {
        const b = best(p), hi = Math.max(...p.offers.map(o => o.total));
        return `<button class="card" style="--i:${i}" data-n="${p.name}"><div class="pic" style="--i:${i}">${img(p)}</div><div class="info"><small>${p.cat}</small><b>${p.name}</b><div class="price"><strong>${inr(b.total)}</strong><s>${inr(hi)}</s></div><span class="save">Best at ${b.store} · save ${inr(hi - b.total)}</span></div></button>`
      }).join("") : `<p class="empty">No products match “${term.replace(/</g, "&lt;")}”. Try “watch” or “laptop”.</p>`;
    }
    $("grid").onclick = e => { const c = e.target.closest(".card"); if (c) open(D.find(p => p.name === c.dataset.n)) };
    $("sf").onsubmit = e => { e.preventDefault(); term = $("q").value.trim().toLowerCase(); render(); $("grid").scrollIntoView({ behavior: "smooth" }) };
    $("q").oninput = e => { term = e.target.value.trim().toLowerCase(); render() };
    $("sort").onchange = render;
    function open(p) {
      const o = [...p.offers].sort((a, b) => a.total - b.total), hi = o[o.length - 1].total;
      $("dlg").innerHTML = `<div class="dh"><div class="pic">${img(p)}</div><div><h2>${p.name}</h2><p>${p.cat} · ${o.length} offers compared</p></div><button class="x" aria-label="Close" onclick="dlg.close()">✕</button></div>
  <div class="offers">${o.map((f, i) => `<div class="offer ${i ? "" : "best"}" style="--i:${i}"><div class="oh"><span><b>${f.store}</b>${i ? "" : '<span class="badge">Best deal</span>'}</span><span class="tc">${inr(f.total)}</span></div>
  <div class="bar"><i data-w="${Math.round(f.total / hi * 100)}"></i></div>
  <div class="facts"><span>Price <em>${inr(f.price)}</em></span><span>Discount <em>${f.disc}%</em></span><span>Delivery <em>${f.del ? inr(f.del) : "Free"}</em></span><span>Returns <em>${f.ret} days</em></span><span>Warranty <em>${f.war} months</em></span></div>
  <div class="ob"><span class="sum">${i ? "+" + inr(f.total - o[0].total) + " vs best" : "You save " + inr(hi - f.total) + " vs the priciest"}</span><button class="btn" onclick="toast('Demo data: live store links are coming soon.')">View deal</button></div></div>`).join("")}</div>`;
      $("dlg").showModal();
      requestAnimationFrame(() => setTimeout(() => $("dlg").querySelectorAll(".bar i").forEach(b => b.style.width = b.dataset.w + "%"), 120));
    }
    const dlg = $("dlg"); dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close() });
    let tt; function toast(m) { const t = $("toast"); t.textContent = m; t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 2400) }
    render();