<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::select('id', 'judul_artikel', 'isi_artikel', 'gambar')->get()->map(function ($article) {
            $article->isi_artikel = substr($article->isi_artikel, 0, 100) . (strlen($article->isi_artikel) > 100 ? '...' : '');
            return $article;
        });

        return Inertia::render('ArticlePage', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "judul_artikel" => "required",
            "isi_artikel" => "required",
            "gambar" => "required|image|mimes:png,jpg,jpeg|max:2048",
        ]);

        if ($request->hasFile('gambar')) {
            $gambarPath = $request->file('gambar')->store('public/images');
        }

        $article = new Article();
        $article->judul_artikel = $request->judul_artikel;
        $article->isi_artikel = $request->isi_artikel;
        $article->gambar = Storage::url($gambarPath);
        $article->save();

        //Article::create($data);

        return back()->with("message","Berhasil Upload");
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return Inertia::render('Article', [
            'article' => $article
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        return Inertia::render("editArticle",[
            "article"=> $article
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $data = $request->validate([
            "judul_artikel" => "nullable|string|max:255",
            "isi_artikel" => "nullable|string",
            "gambar" => "nullable|image|mimes:png,jpg,jpeg|max:2048",
        ]);

        if ($request->hasFile('gambar')) {
            $gambarPath = $request->file('gambar')->store('public/images');
            $data['gambar'] = Storage::url($gambarPath);
        } elseif ($request->input('gambar_existing')) {
            $data['gambar'] = $request->input('gambar_existing');
        }

        $article->update($data);

        return redirect()->route('article.index')->with('message', "Data Berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();
        return response()->json("articles.destroy")->with("message","Data Berhasil Dihapus");
    }
}
