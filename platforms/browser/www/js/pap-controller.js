var c = c || {};

c.PapController = function () {
    this.$papPage = null;
    this.$confirmarPage = null;
    this.$divIniciarConfirmacion = null;
    this.$labelUsuarioRegistrado = null;
    this.$linkCerrarSession = null;
    this.papPageId  = null;
};

c.PapController.prototype.init = function () {
    this.$autorizacionPage = $("#menu");
    this.$confirmarPage = $("#confirmar");  
    this.$divIniciarConfirmacion = $("#div-iniciar-confirmacion", this.$autorizacionPage);
    this.$labelUsuarioRegistrado = $("#label-usuario-registrado", this.$autorizacionPage);
    this.$linkCerrarSession = $("#div-cerrar-sesion", this.$autorizacionPage);
    this.papPageId = "#page-signin";
};

c.PapController.prototype.iniciarConfirmacion = function () {
    console.log("se debe mover el metodo de navegación")
    //$.mobile.navigate(this.$confirmarPage);
    return;
};

c.PapController.prototype.cerrarSession = function () {
    var me = this;
    c.Session.deleteInstance();
    $.mobile.navigate(me.papPageId);
};