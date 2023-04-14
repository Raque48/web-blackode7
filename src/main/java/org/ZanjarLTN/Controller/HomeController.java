package org.ZanjarLTN.Controller;

import java.time.LocalDate;

import org.ZanjarLTN.entity.Usuario;
import org.ZanjarLTN.entity.Perfil;
import org.ZanjarLTN.service.IntUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/")
public class HomeController {
	
	@Autowired
	private IntUsuarioService serviceUsuario;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/signup")
	public String guardar(Usuario usuario) {
		usuario.setEstatus(1);
		usuario.setFechaRegistro(LocalDate.now());
		String texto = usuario.getPassword();
		String encriptado = passwordEncoder.encode(texto);
		//usuario.setPassword("{noop}" + usuario.getPassword());
		usuario.setPassword(encriptado);
		Perfil per = new Perfil();
		per.setId(2);
		usuario.agregar(per);
		serviceUsuario.guardar(usuario);
		
		return "index";
	}
	
	@GetMapping("/signup")
	public String mostrarRegistro() {
		return "formularioregis";
	}
	
	@GetMapping("/login")
	public String mostrarInicioS() {
		return "formularioini";
	}
	
	@GetMapping("/logout")
	public String logout(HttpServletRequest request){
	SecurityContextLogoutHandler logoutHandler =
	new SecurityContextLogoutHandler();
	logoutHandler.logout(request, null, null);
	//return "redirect:/usuario";
	//return "redirect:/usuario";
	return "redirect:/login";
	}
	
	@GetMapping("/")
	public String mostrarIndex() {
		return "index";
	}
	
	@GetMapping("/usuario")
	public String mostrarUsuario() {
		return "perfilusuario";
	}
	
	@GetMapping("/sonidos")
	public String mostrar() {
		return "interfaces/adm";
	}
	
	@GetMapping("/terminos")
	public String mostrarTerminos() {
		return "interfaces/terminoslicencias";
	}
	
}
