describe("Teste da API demo", () => {
    afterEach(async() =>{
        driver.reset();
    });
    it("Testes para verificar o fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("OK")').click();
        await $('id=two_buttons').click();
        await $('android=new UiSelector().text("Cancel")').click();
    });
    it("Testes para verificar o fluxo App/Alert Dialogs/LIST DIALOG", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const cmdone = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        const cmdtwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        const cmdthree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        const cmdfour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const mensagem = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(mensagem).toBe("You selected: 3 , Command Four");
    });
    it("Testes para verificar o fluxo App/Fragment/Hide and Show", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const btnclick = await $("id=frag1hide").getText();
        expect(btnclick).toBe("SHOW");
    });
    it('Testes para verificar o fluxo App/Fragment/Hide and Show', async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const btn1 = await $("id=frag1hide").getText();
        const txt1 = await $('android=new UiSelector().text("The fragment saves and restores this text.")').isDisplayed();
        expect(btn1).toBe("HIDE");
        expect(txt1).toBe(true);
    });
    it("Interação no aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_HOME_AS_UP", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const up = await $("id=toggle_home_as_up").isDisplayed();
        expect(up).toBe(true);
        await $("id=toggle_home_as_up").click();
        const title = await $("android.widget.TextView").getText();
        expect(title).toBe("App/Action Bar/Display Options");
    });
    it("Interagindo com o aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_TITLE", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const titleatv= await $("android.widget.TextView").getText();
        expect(titleatv).toBe("App/Action Bar/Display Options");
    });
    it("Interagindo nas opções do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_CUSTOM", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const btcustom = await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').isDisplayed();
        expect(btcustom).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').click();
        const customactive = await $("android.widget.Button").isDisplayed();
        expect(customactive).toBe(true);
    });
    it("Interagindo nas opções do aplicativo em App/Action Bar/Display Options, para opção NAVIGATION", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click()
        await $("id=toggle_navigation").click();
        const text1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        const text2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed();
        const text3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
    });
});

