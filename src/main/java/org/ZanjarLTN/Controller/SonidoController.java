package org.ZanjarLTN.Controller;

import org.ZanjarLTN.entity.Sonido;
import org.ZanjarLTN.service.IntSonidoService;
import org.ZanjarLTN.util.Utileria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/sonidos")
public class SonidoController {

	@Autowired
	private IntSonidoService serviceSonido;
	
	@PostMapping("/guardar")
	public String guardar(Sonido sonido, BindingResult result, @RequestParam("archivoImagen") MultipartFile multiPart, @RequestParam("archivoAudio") MultipartFile multiPar, RedirectAttributes model) {
		if (result.hasErrors()) {
			for (ObjectError error: result.getAllErrors()){
				System.out.println("Ocurrio un error: "+ error.getDefaultMessage());
				}
			return "interfaces/admin";
		}
		if (!multiPart.isEmpty()) {
			String ruta = "c:/sonidos/aud-sonidos/"; // Windows
			String nombreSonido = Utileria.guardarArchivo(multiPart, ruta);
			if (nombreSonido != null){ 
			sonido.setSonido(nombreSonido);
			}
        }
		if (!multiPart.isEmpty()) {
			String ruta = "c:/images/img-sonidos/"; // Windows
			String nombreImagen = Utileria.guardarArchivo(multiPart, ruta);
			if (nombreImagen != null){ 
			sonido.setImagen(nombreImagen);
			}
        }
		
		if(sonido.getId()== null) model.addFlashAttribute("msg", "Sonido agregada");
		else  model.addFlashAttribute("msg", "Sonido modificada");
		
		
		serviceSonido.guardar(sonido);
		return "redirect:/sonidos/index";
	}
	
	@GetMapping("/eliminar")
  	public String eliminar(@RequestParam("id") int idSonido,RedirectAttributes model ) {
  		model.addFlashAttribute("msg", "Sonido eliminado");
  		serviceSonido.eliminar(idSonido);
  		return "redirect:/sonidos/index";
  	}
	
	@GetMapping("/index")
	public String mostrarIndex() {
		return "interfaces/admin";
	}
	
	
}
