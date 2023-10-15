/* global it, cy, describe, beforeEach */

describe("Anasayfa Testleri", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    it("Sayfa başarıyla yüklendi", () => {
        cy.visit("http://localhost:3000");
    })
    it("H1 yüklendi", () => {
        cy.get("[data-cy='h1']").should("have.text", "Teknolojik Yemekler");
    })
    it("Sipariş formuna git", () => {
        cy.get("[data-cy='goToOrderForm']").click();
        cy.url().should("include", "order");
    })
})

describe("Sipariş sayfası Testleri", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy='goToOrderForm']").click();
    })
    it("Pizza boyu seçilebilir", () => {
        cy.get("[data-cy='S']").click();
    })
    it("Hamur kalınlığı seçilebilir.", () => {
        cy.get("[data-cy='dough']").select("İnce");
    })

    it("Ek seçenekler seçilebiliyor.", () => {
        cy.get("[data-cy='checkbox-box0']").click();
    })

    it("Sipariş notu yazılabilir.", () => {
        cy.get("[data-cy='order-note']").type("Deneme sipariş notu");
    })

    it("Ürün sayısı artar.", () => {
        cy.get("[data-cy='increase']").click();
    })

    it("Ürün sayısı 1 ise azaltma butonu pasiftir", () => {
        cy.get("[data-cy='decrease']").should("be.disabled");
    })

    it("Ürün sayısı 1 den fazla ise azaltma butonu aktif olur", () => {
        cy.get("[data-cy='increase']").click();
        cy.get("[data-cy='increase']").click();
        cy.get("[data-cy='decrease']").should("not.be.disabled");
    })

    it("Ekstra seçenekler 10'dan fazla seçildiyse buton pasiftir", () => {
        for (let i = 0; i <= 12; i++) {
            cy.get(`[data-cy='checkbox-box${i}']`).click();
            cy.get("[data-cy='order-button']").should("be.disabled");
        }
    })

    it("Her seçilen ekstra seçenek ile seçimler faturaya yansıtılır", () => {
        for (let i = 0; i <= 5; i++) {
            cy.get(`[data-cy='checkbox-box${i}']`).click();
        }
        cy.get("[data-cy='extraOptions-price']").should("have.text","30₺");
    })
    it("Ürün adeti ve ek seçenekler ile toplam fiyat hesaplanır", () => {
        cy.get("[data-cy='increase']").click();
        for (let i = 0; i <= 3; i++) {
            cy.get(`[data-cy='checkbox-box${i}']`).click();
        }
        cy.get("[data-cy='amount']").should("have.text", "2")
        cy.get("[data-cy='total-price']").should("have.text", "211₺")
    })

    it("Zorunlu alanlar doldurulmadığında buton pasiftir", () => {
        cy.get("[data-cy='order-button']").should("be.disabled");
    })

    it("Zorunlu alanlar doldurulduğunda buton aktiftir", () => {
        cy.get("[data-cy='S']").click();
        cy.get("[data-cy='dough']").select("İnce");
        cy.get("[data-cy='checkbox-box0']").click();
        cy.get("[data-cy='order-button']").should("not.be.disabled");
    })

    it("Sipariş özeti sayfasına gider", () => {
        cy.get("[data-cy='S']").click();
        cy.get("[data-cy='dough']").select("İnce");
        cy.get("[data-cy='order-button']").click();
        cy.url().should("include", "confirmedOrder");
    })

})

describe("Sipariş Özeti Testleri", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy='goToOrderForm']").click();
        cy.get("[data-cy='S']").click();
        cy.get("[data-cy='dough']").select("İnce");
        cy.get("[data-cy='checkbox-box0']").click();
        cy.get("[data-cy='checkbox-box1']").click();
        cy.get("[data-cy='order-button']").click();
        cy.url().should("include", "confirmedOrder");
    })

    it("Sipariş bilgileri gelir", () => {
        cy.get("[data-cy='size-ordered']").should("have.text", "Boyut: S");
        cy.get("[data-cy='dough-ordered']").should("have.text", "Hamur: İnce");
        cy.get("[data-cy='extraOptions-ordered']").should("have.text", "Ek Malzemeler: Peperoni, Domates");
        cy.get("[data-cy='extraOptions-price']").should("have.text", "10₺");
        cy.get("[data-cy='total-price']").should("have.text", "95.5₺")
    })

    it("Anasayfaya döner",()=>{
        cy.get("[data-cy='h1']").click().url("http://localhost:3000");
    })
})
